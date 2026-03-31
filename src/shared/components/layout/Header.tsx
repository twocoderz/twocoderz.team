import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRightIcon } from "../../icons/ArrowRightIcon";
import { HamburgerMdIcon } from "../../icons/HamburgerMdIcon";
import { Button } from "../ui/Button";
import Container from "../ui/Container";
import Logo from "../ui/Logo";
import NavItem from "../ui/NavItem";
import CloseIcon from "../../icons/CloseIcon";

export interface HeaderProps {}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const navItems = [
    { href: "#", label: "Works" },
    { href: "#", label: "Services" },
    { href: "#", label: "About" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-transparent backdrop-blur-md px-p6 py-p4">
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Logo />
        {/* nav */}
        <nav className="hidden md:flex md:items-center gap-p8">
          {/* desktop nav */}
          {navItems.map((item) => (
            <NavItem href={item.href}>{item.label}</NavItem>
          ))}
        </nav>
        {/* Right:hambuger + CTA buttons */}
        <div className="flex items-center gap-p4">
          {/* CTA buttons */}
          <div className="hidden md:flex md:items-center md:gap-p4">
            <Button variant="secondary" size="sm">
              Subscribe
            </Button>
            <Button variant="primary" size="sm">
              <span>Contact</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Button>
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
              <a href="#" onClick={closeMenu}>
                Works
              </a>
              <a href="#" onClick={closeMenu}>
                Services
              </a>
              <a href="#" onClick={closeMenu}>
                About
              </a>
              <a href="#" onClick={closeMenu}>
                Subscribe
              </a>
              <a href="#" onClick={closeMenu}>
                Contact
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
