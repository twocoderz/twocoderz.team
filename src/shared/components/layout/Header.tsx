import { useState } from "react";
import { ArrowRightIcon } from "../../icons/ArrowRightIcon";
import { HamburgerMdIcon } from "../../icons/HamburgerMdIcon";
import { Button } from "../ui/Button";
import Container from "../ui/Container";
import Logo from "../ui/Logo";

export interface HeaderProps {}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-transparent backdrop-blur-md px-p6 py-p4">
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Logo />
        {/* nav */}
        <nav className="hidden md:flex gap-p8">
          {/* desktop nav */}
          <a href="#">Works</a>
          <a href="#">Services</a>
          <a href="#">About</a>
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
          {/* hambuger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden cursor-pointer"
          >
            <HamburgerMdIcon />
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-transparent">
          <Container>
            <div className="flex flex-col gap-p4 py-p8">
              <a href="#">Works</a>
              <a href="#">Services</a>
              <a href="#">About</a>
              <a href="#">Subscribe</a>
              <a href="#">Contact</a>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
