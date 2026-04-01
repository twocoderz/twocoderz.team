import Container from "../../shared/components/ui/Container";
import MyLink from "../../shared/components/ui/MyLink";
import Netflix from "/images/netflix.svg?url";
import Adobe from "/images/adobe.svg?url";
import Apple from "/images/apple.svg?url";
import Oppo from "/images/oppo.svg?url";
import Anthropic from "/images/anthropic.svg?url";
import Meta from "/images/meta.svg?url";
import Mozilla from "/images/mozilla.svg?url";
import Opera from "/images/opera.svg?url";
import Mtn from "/images/mtn.svg?url";
import Spotify from "/images/spotify.svg?url";
import Stripe from "/images/stripe.svg?url";
import Snap from "/images/snapchat.svg?url";
import Chelsea from "/images/chelsea.svg?url";
import Xerox from "/images/xerox.svg?url";
import Twocoderz from "/images/logo.png?url";

export default function Clients() {
  const logos = [
    {
      name: "netflix",
      src: Netflix,
    },
    {
      name: "adobe",
      src: Adobe,
    },
    {
      name: "apple",
      src: Apple,
    },
    {
      name: "stripe",
      src: Stripe,
    },
    {
      name: "meta",
      src: Meta,
    },
    {
      name: "opera",
      src: Opera,
    },
    {
      name: "spotify",
      src: Spotify,
    },
    {
      name: "mozilla",
      src: Mozilla,
    },
    {
      name: "oppo",
      src: Oppo,
    },
    {
      name: "anthropic",
      src: Anthropic,
    },
    {
      name: "snap",
      src: Snap,
    },
    {
      name: "mtn",
      src: Mtn,
    },
    {
      name: "xerox",
      src: Xerox,
    },
    {
      name: "chelse",
      src: Chelsea,
    },
    {
      name: "two",
      src: Twocoderz,
    },
  ];

  return (
    <section className="bg-transparent min-h-screen">
      <Container>
        <div className="flex flex-col gap-p6 py-p12">
          <h2 className="text-2xl max-w-lg md:text-3xl lg:text-4xl font-bold text-black-80">
            Trusted by businesses
          </h2>
          <div className="flex items-start justify-between gap-p8">
            <MyLink label="All works" href="#" />
            <p className="text-black-80 text-md lg:text-lg max-w-md">
              We help companies establish a strong digital presence through
              modern, high-performing websites.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-p8 mt-p16">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="group flex items-center justify-center py-p8"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-8 group-hover:scale-105 transition-all duration-500 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
