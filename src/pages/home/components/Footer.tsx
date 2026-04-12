import { ROUTES } from "../../../routes";
import { Button } from "../../../shared/components/ui/Button";
import Container from "../../../shared/components/ui/Container";
import Section from "../../../shared/components/ui/Section";

export default function Footer() {
  return (
    <Section id="site-footer" noScrollMargin>
      <Container>
        <div className="flex flex-col gap-p12">
          <div
            id="newsletter"
            className="flex scroll-mt-24 items-center justify-between rounded-r2 bg-black-5 p-p6 md:scroll-mt-28"
          >
            <div className="flex flex-col">
              <h4 className="text-lg font-semibold text-black-80">
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
              </ul>
            </div>
            <div
              id="about"
              className="flex scroll-mt-24 flex-col gap-p6 md:scroll-mt-28"
            >
              <p className="text-xs text-black-40 font-semibold">Company</p>
              <ul className="flex flex-col gap-p3">
                <li>
                  <a
                    href={ROUTES.ABOUT}
                    className="text-xs text-black-80 hover:text-black transition-all duration-500"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href={ROUTES.SERVICES}
                    className="text-xs text-black-80 hover:text-black transition-all duration-500"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href={ROUTES.WORK}
                    className="text-xs text-black-80 hover:text-black transition-all duration-500"
                  >
                    Works
                  </a>
                </li>
                <li>
                  <a
                    href={ROUTES.PROCESS}
                    className="text-xs text-black-80 hover:text-black transition-all duration-500"
                  >
                    Process
                  </a>
                </li>
              </ul>
            </div>
            <div
              id="blog"
              className="flex scroll-mt-24 flex-col gap-p6 md:scroll-mt-28"
            >
              <p className="text-xs text-black-40 font-semibold">Learn</p>
              <ul className="flex flex-col gap-p3">
                <li>
                  <a
                    href={ROUTES.FAQS}
                    className="text-xs text-black-80 hover:text-black transition-all duration-500"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="https://pixelpulse-blog.vercel.app/"
                    target="_blank"
                    className="text-xs text-black-80 hover:text-black transition-all duration-500"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div
              id="contact"
              className="flex scroll-mt-24 flex-col gap-p6 md:scroll-mt-28"
            >
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
                    href={ROUTES.CONTACT}
                    className="text-xs text-black-80 hover:text-black transition-all duration-500"
                  >
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-black-10 flex items-center justify-center">
            <div className="flex items-center justify-center py-p8">
              <ul className="flex items-center justify-between gap-p8">
                <li>
                  <a
                    href="#"
                    className="text-xs text-black-60 hover:text-black transition-all duration-500"
                  >
                    &copy;2026 Twocoderz. All rights reserved
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:rahim100codeur@gmail.com"
                    className="text-xs text-black-60 hover:text-black transition-all duration-500 border-l pl-p6 border-black-10"
                  >
                    rahim100codeur@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xs text-black-60 hover:text-black transition-all duration-500 border-l pl-p6 border-black-10"
                  >
                    Sitemap
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xs text-black-60 hover:text-black transition-all duration-500 border-l pl-p6 border-black-10"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xs text-black-60 hover:text-black transition-all duration-500 border-l pl-p6 border-black-10"
                  >
                    Terms of use
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xs text-black-60 hover:text-black transition-all duration-500 border-l pl-p6 border-black-10"
                  >
                    Cookie policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
