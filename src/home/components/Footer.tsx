import { Button } from "../../shared/components/ui/Button";
import Container from "../../shared/components/ui/Container";

export default function Footer() {
  return (
    <footer className="bg-transparent py-p12 md:py-p16">
      <Container>
        <div className="flex flex-col gap-p12">
          <div className="flex items-center justify-between bg-black-5 p-p8 rounded-r2">
            <div className="flex flex-col">
              <h4 className="text-lg font-bold text-black-80">
                Sign up for our newsletter
              </h4>
              <p className="text-sm text-black-60 font-normal">
                Insights, case studies, and updates from the expert teams at
                twocoderz.
              </p>
            </div>
            <Button variant="secondary" size="sm">
              Subscribe
            </Button>
          </div>
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-p6">
              <p className="text-xs text-black-40 font-semibold">Social</p>
              <ul className="flex flex-col gap-p3">
                <li>
                  <a
                    href="#"
                    className="text-xs text-black-80 hover:text-black transition-all duration-500"
                  >
                    Linked in
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xs text-black-80 hover:text-black transition-all duration-500"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xs text-black-80 hover:text-black transition-all duration-500"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xs text-black-80 hover:text-black transition-all duration-500"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xs text-black-80 hover:text-black transition-all duration-500"
                  >
                    Whatsapp
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-p6">
              <p className="text-xs text-black-40 font-semibold">Company</p>
              <ul className="flex flex-col gap-p3">
                <li>
                  <a
                    href="#"
                    className="text-xs text-black-80 hover:text-black transition-all duration-500"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xs text-black-80 hover:text-black transition-all duration-500"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xs text-black-80 hover:text-black transition-all duration-500"
                  >
                    Works
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xs text-black-80 hover:text-black transition-all duration-500"
                  >
                    Process
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-p6">
              <p className="text-xs text-black-40 font-semibold">Learn</p>
              <ul className="flex flex-col gap-p3">
                <li>
                  <a
                    href="#"
                    className="text-xs text-black-80 hover:text-black transition-all duration-500"
                  >
                    Reviews
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xs text-black-80 hover:text-black transition-all duration-500"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xs text-black-80 hover:text-black transition-all duration-500"
                  >
                    Articles
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-p6">
              <p className="text-xs text-black-40 font-semibold">
                Get in touch
              </p>
              <ul className="flex flex-col gap-p3">
                <li>
                  <a
                    href="tel:+22891796115"
                    className="text-xs text-black-80 hover:text-black transition-all duration-500"
                  >
                    +228 91 79 61 15
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xs text-black-80 hover:text-black transition-all duration-500"
                  >
                    Contact up
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
