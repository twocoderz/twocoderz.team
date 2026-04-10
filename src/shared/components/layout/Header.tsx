import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRightIcon } from "../../icons/ArrowRightIcon";
import { HamburgerMdIcon } from "../../icons/HamburgerMdIcon";
import Container from "../ui/Container";
import Logo from "../ui/Logo";
import NavItem from "../ui/NavItem";
import CloseIcon from "../../icons/CloseIcon";
import { ROUTES } from "../../../routes";
import { Button } from "../ui/Button";

export interface HeaderProps {}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastScrollYRef = useRef(0);
  const closeMenu = () => setIsMenuOpen(false);

  const location = useLocation();
  const headerRef = useRef<HTMLElement | null>(null);
  const [isProcessHeroFullyVisible, setIsProcessHeroFullyVisible] =
    useState(false);

  const isProcessPage = location.pathname === ROUTES.PROCESS;
  const isFaqsPage = location.pathname === ROUTES.FAQS;

  const isDarkHeader =
    (isProcessPage && isProcessHeroFullyVisible) ||
    (isFaqsPage && isProcessHeroFullyVisible);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 8) {
        setIsHeaderVisible(true);
        lastScrollYRef.current = currentScrollY;
        return;
      }

      const isScrollingDown = currentScrollY > lastScrollYRef.current;

      if (isScrollingDown && currentScrollY > 80 && !isMenuOpen) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }

      lastScrollYRef.current = currentScrollY;
    };

    lastScrollYRef.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      setIsHeaderVisible(true);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isProcessPage && !isFaqsPage) {
      setIsProcessHeroFullyVisible(false);
      return;
    }

    const checkHeroVisibility = () => {
      const hero = document.getElementById("hero");
      if (!hero) {
        setIsProcessHeroFullyVisible(false);
        return;
      }
      const rect = hero.getBoundingClientRect();
      const headerHeight = headerRef.current?.offsetHeight ?? 0;
      const fullyVisible =
        rect.top >= headerHeight - 2 && rect.bottom <= window.innerHeight + 2;

      setIsProcessHeroFullyVisible(fullyVisible);
    };

    checkHeroVisibility();
    window.addEventListener("scroll", checkHeroVisibility, { passive: true });
    window.addEventListener("resize", checkHeroVisibility);

    return () => {
      window.removeEventListener("scroll", checkHeroVisibility);
      window.removeEventListener("resize", checkHeroVisibility);
    };
  }, [location.pathname]);

  const navItems = [
    { href: ROUTES.WORK, label: "Work" },
    { href: ROUTES.SERVICES, label: "Services" },
    { href: ROUTES.ABOUT, label: "About" },
    { href: ROUTES.PROCESS, label: "Process" },
  ];
  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 py-p4 transition-[transform, background-color, color] duration-300 
        ${isDarkHeader ? "bg-black text-white" : "bg-white text-black"} 
        ${isHeaderVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Logo
          className={
            isDarkHeader ? "text-white/90 hover:text-white" : "undefined"
          }
        />
        {/* nav */}
        <nav className="hidden md:flex md:items-center gap-p8">
          {/* desktop nav */}
          {navItems.map((item) => (
            <NavItem
              key={item.label}
              href={item.href}
              className={
                isDarkHeader
                  ? "text-white/90 hover:text-white [&>span]:bg-white/90"
                  : "undefined"
              }
            >
              {item.label}
            </NavItem>
          ))}
        </nav>
        {/* Right:hambuger + CTA buttons */}
        <div className="flex items-center gap-p4">
          {/* CTA buttons */}
          <div className="hidden md:flex md:items-center md:gap-p4">
            <a href={ROUTES.SUBSCRIBE}>
              <Button
                variant="secondary"
                size="sm"
                className={
                  isDarkHeader
                    ? "border-white/70 text-white hover:bg-white hover:text-black transition-colors duration-300"
                    : undefined
                }
              >
                Subscribe
              </Button>
            </a>
            <a href={ROUTES.CONTACT}>
              <Button
                variant="primary"
                size="sm"
                className={
                  isDarkHeader
                    ? "bg-white/10 border-white/70 text-white"
                    : undefined
                }
              >
                <span>Contact</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Button>
            </a>
          </div>
          {/* menu buttons */}
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="md:hidden cursor-pointer relative w-8 h-8"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-controls="mobile-menu"
          >
            <AnimatePresence initial={false} mode="wait">
              {isMenuOpen ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                  transition={{ duration: 0.18 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <CloseIcon className="w-6 h-6 text-black-90" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  transition={{ duration: 0.18 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <HamburgerMdIcon className="w-8 h-8 text-black-90" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            className="md:hidden bg-transparent overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <motion.div
              className="flex flex-col gap-p6 py-p20 px-p6"
              initial={{ y: -8 }}
              animate={{ y: 0 }}
              exit={{ y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <a href={ROUTES.WORK} onClick={closeMenu}>
                Work
              </a>
              <a href={ROUTES.SERVICES} onClick={closeMenu}>
                Services
              </a>
              <a href={ROUTES.ABOUT} onClick={closeMenu}>
                About
              </a>
              <a href={ROUTES.PROCESS} onClick={closeMenu}>
                Process
              </a>
              <a href={ROUTES.SUBSCRIBE} onClick={closeMenu}>
                Subscribe
              </a>
              <a href={ROUTES.CONTACT} onClick={closeMenu}>
                Contact
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
