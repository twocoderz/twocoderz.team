import { Button } from "../../shared/components/ui/Button";
import Container from "../../shared/components/ui/Container";

export default function Footer() {
  return (
    <footer className="bg-transparent py-p12 md:py-p16">
      <Container>
        <div className="flex flex-col gap-p12">
          <div className="flex items-center justify-between bg-black-5 p-p8 rounded-r1">
            <div className="flex flex-col">
              <h4 className="text-xl font-bold text-black-80">
                Sign up for our newsletter
              </h4>
              <p className="text-md text-black-60 font-normal">
                Insights, case studies, and updates from the expert teams at
                twocoderz.
              </p>
            </div>
            <Button variant="secondary">Subscribe</Button>
          </div>
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-p6">
              <p className="text-md text-black-60 font-semibold">Social</p>
              <ul className="flex flex-col gap-p3">
                <li className="text-sm text-black-60 hover:text-black-80 transition-all duration-500">
                  Linked in
                </li>
                <li className="text-sm text-black-60 hover:text-black-80 transition-all duration-500">
                  Instagram
                </li>
                <li className="text-sm text-black-60 hover:text-black-80 transition-all duration-500">
                  Twitter
                </li>
                <li className="text-sm text-black-60 hover:text-black-80 transition-all duration-500">
                  Facebook
                </li>
                <li className="text-sm text-black-60 hover:text-black-80 transition-all duration-500">
                  Whatsapp
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-p6">
              <p className="text-md text-black-60 font-semibold">Company</p>
              <ul className="flex flex-col gap-p3">
                <li className="text-sm text-black-60 hover:text-black-80 transition-all duration-500">
                  About
                </li>
                <li className="text-sm text-black-60 hover:text-black-80 transition-all duration-500">
                  Services
                </li>
                <li className="text-sm text-black-60 hover:text-black-80 transition-all duration-500">
                  Works
                </li>
                <li className="text-sm text-black-60 hover:text-black-80 transition-all duration-500">
                  Process
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-p6">
              <p className="text-md text-black-60 font-semibold">Learn</p>
              <ul className="flex flex-col gap-p3">
                <li className="text-sm text-black-60 hover:text-black-80 transition-all duration-500">
                  Reviews
                </li>
                <li className="text-sm text-black-60 hover:text-black-80 transition-all duration-500">
                  FAQs
                </li>
                <li className="text-sm text-black-60 hover:text-black-80 transition-all duration-500">
                  Articles
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-p6">
              <p className="text-md text-black-60 font-semibold">
                Get in touch
              </p>
              <ul className="flex flex-col gap-p3">
                <li className="text-sm text-black-60 hover:text-black-80 transition-all duration-500">
                  +228 91 79 61 15
                </li>
                <li className="text-sm text-black-60 hover:text-black-80 transition-all duration-500">
                  Contact up
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
