import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRightIcon } from "../../icons/ArrowRightIcon";
import { HamburgerMdIcon } from "../../icons/HamburgerMdIcon";
import Container from "../ui/Container";
import Logo from "../ui/Logo";
import NavItem from "../ui/NavItem";
import CloseIcon from "../../icons/CloseIcon";

export interface HeaderProps {}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastScrollYRef = useRef(0);
  const closeMenu = () => setIsMenuOpen(false);

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

  const navItems = [
    { href: "#works", label: "Works" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#blog", label: "Blog" },
  ];
  return (
    <header
      className={`sticky top-0 z-50 bg-white backdrop-blur-md py-p4 transition-transform duration-300 ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Logo />
        {/* nav */}
        <nav className="hidden md:flex md:items-center gap-p8">
          {/* desktop nav */}
          {navItems.map((item) => (
            <NavItem key={item.label} href={item.href}>
              {item.label}
            </NavItem>
          ))}
        </nav>
        {/* Right:hambuger + CTA buttons */}
        <div className="flex items-center gap-p4">
          {/* CTA buttons */}
          <div className="hidden md:flex md:items-center md:gap-p4">
            <a
              href="#newsletter"
              className="inline-flex select-none items-center gap-p2 overflow-hidden rounded-full border-2 border-black-70 bg-transparent px-4 py-2.5 text-xs font-normal tracking-wider text-black-80 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black-80"
            >
              Subscribe
            </a>
            <a
              href="#contact"
              className="relative inline-flex select-none items-center justify-center gap-0.5 overflow-hidden rounded-full border-2 border-white/25 bg-black-80 px-4 py-2.5 text-xs font-normal tracking-wider text-white transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              <span>Contact</span>
              <ArrowRightIcon className="w-4 h-4" />
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
              <a href="#works" onClick={closeMenu}>
                Works
              </a>
              <a href="#services" onClick={closeMenu}>
                Services
              </a>
              <a href="#about" onClick={closeMenu}>
                About
              </a>
              <a href="#blog" onClick={closeMenu}>
                Blog
              </a>
              <a href="#newsletter" onClick={closeMenu}>
                Subscribe
              </a>
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
