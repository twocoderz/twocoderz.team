import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRightIcon } from "../../icons/ArrowRightIcon";
import { HamburgerMdIcon } from "../../icons/HamburgerMdIcon";
import Container from "../ui/Container";
import Logo from "../ui/Logo";
import NavItem from "../ui/NavItem";
import CloseIcon from "../../icons/CloseIcon";
import { ROUTES } from "../../../routes";
import { Button } from "../ui/Button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastScrollYRef = useRef(0);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsHeaderVisible(true);
  };

  const location = useLocation();
  const headerRef = useRef<HTMLElement | null>(null);
  const [isProcessHeroFullyVisible, setIsProcessHeroFullyVisible] =
    useState(false);

  const isProcessPage = location.pathname === ROUTES.PROCESS;
  const isFaqsPage = location.pathname === ROUTES.FAQS;
  const isServicesPage = location.pathname === ROUTES.SERVICES;

  const isDarkHeader =
    (isProcessPage && isProcessHeroFullyVisible) ||
    (isFaqsPage && isProcessHeroFullyVisible) ||
    (isServicesPage && isProcessHeroFullyVisible);

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
    if (!(isProcessPage || isFaqsPage || isServicesPage)) {
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
  }, [isFaqsPage, isProcessPage, isServicesPage]);

  const navItems = [
    { href: ROUTES.WORK, label: "Projets" },
    { href: ROUTES.SERVICES, label: "Services" },
    { href: ROUTES.ABOUT, label: "À propos" },
    { href: ROUTES.PROCESS, label: "Processus" },
  ];

  const mobileNavItems = [
    { href: ROUTES.WORK, label: "Projets" },
    { href: ROUTES.SERVICES, label: "Services" },
    { href: ROUTES.ABOUT, label: "À propos" },
    { href: ROUTES.PROCESS, label: "Processus" },
    { href: ROUTES.SUBSCRIBE, label: "Newsletter" },
    { href: ROUTES.CONTACT, label: "Contact" },
  ];

  const isActiveLink = (href: string) => location.pathname === href;
  return (
    <>
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
              isDarkHeader ? "text-white/90 hover:text-white" : undefined
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
                    : undefined
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
              <a href={ROUTES.CONTACT}>
                <Button
                  variant="primary"
                  size="sm"
                  className={
                    isDarkHeader
                      ? "bg-black border-white/70 text-white"
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
              onClick={() => {
                setIsMenuOpen((v) => !v);
                setIsHeaderVisible(true);
              }}
              className="md:hidden cursor-pointer relative w-8 h-8"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
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
                    <CloseIcon
                      className={
                        isDarkHeader
                          ? "text-white/90 hover:text-white"
                          : "w-6 h-6 text-black-90"
                      }
                    />
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
                    <HamburgerMdIcon
                      className={
                        isDarkHeader
                          ? "text-white/90 hover:text-white"
                          : "w-8 h-8 text-black-90"
                      }
                    />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </Container>
      </header>
      {/* Mobile menu */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                id="mobile-menu"
                key="mobile-menu"
                className={`fixed inset-x-0 top-16 bottom-0 z-40 md:hidden overflow-y-auto ${
                  isDarkHeader ? "bg-black text-white" : "bg-white text-black"
                }`}
                initial={{ y: "-100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <motion.div
                  className="flex min-h-full flex-col items-center justify-center gap-12 px-p6"
                  initial={{ y: -15 }}
                  animate={{ y: 0 }}
                  exit={{ y: -15 }}
                  transition={{ duration: 0.2 }}
                >
                  {mobileNavItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className={`text-4xl font-normal transition-colors ${
                        isActiveLink(item.href)
                          ? "underline decoration-2 underline-offset-4"
                          : ""
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
