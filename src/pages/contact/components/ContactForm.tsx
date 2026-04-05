import Input from "../../../shared/components/ui/MyInput";
import Textarea from "../../../shared/components/ui/MyTextarea";

export default function ContactForm() {
  return (
    <form action="" className="flex flex-col gap-p8">
      <Input
        type="text"
        required
        autoComplete="name"
        placeholder="Full name"
        className="placeholder:text-black-40 placeholder:text-sm w-full"
      />
      <Input
        type="email"
        required
        autoComplete="email"
        placeholder="email@company.com"
        className="placeholder:text-black-40 placeholder:text-sm w-full"
      />
      <Textarea
        placeholder="Project description"
        required
        className="h-48 placeholder:text-black-40 placeholder:text-sm w-full"
      />
      <Input
        type="text"
        autoComplete="off"
        placeholder="How did you find Twocoderz?"
        className="placeholder:text-black-40 placeholder:text-sm w-full"
      />
    </form>
  );
}
