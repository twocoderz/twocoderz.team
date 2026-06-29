import Input from "../../../shared/components/ui/MyInput";
import Textarea from "../../../shared/components/ui/MyTextarea";

export default function ContactForm() {
  return (
    <form action="" className="flex flex-col gap-p8">
      <Input
        type="text"
        required
        autoComplete="name"
        placeholder="Nom complet"
        className="placeholder:text-black-40 placeholder:text-lg w-full"
      />
      <Input
        type="email"
        required
        autoComplete="email"
        placeholder="email@company.com"
        className="placeholder:text-black-40 placeholder:text-lg w-full"
      />
      <Textarea
        placeholder="Décrivez votre projet"
        required
        className="h-48 placeholder:text-black-40 placeholder:text-lg w-full"
      />
      <Input
        type="text"
        autoComplete="off"
        placeholder="Comment avez-vous connu Twocoderz ?"
        className="placeholder:text-black-40 placeholder:text-lg w-full"
      />
    </form>
  );
}
