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

export interface ClientLogo {
  name: string;
  src: string;
}

export const clientsData: ClientLogo[] = [
  { name: "netflix", src: Netflix },
  { name: "adobe", src: Adobe },
  { name: "apple", src: Apple },
  { name: "stripe", src: Stripe },
  { name: "meta", src: Meta },
  { name: "opera", src: Opera },
  { name: "spotify", src: Spotify },
  { name: "mozilla", src: Mozilla },
  { name: "oppo", src: Oppo },
  { name: "anthropic", src: Anthropic },
  { name: "snap", src: Snap },
  { name: "mtn", src: Mtn },
  { name: "xerox", src: Xerox },
  { name: "chelsea", src: Chelsea },
  { name: "twocoderz", src: Twocoderz },
];
