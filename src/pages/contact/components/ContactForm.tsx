import Input from "../../../shared/components/ui/MyInput";
import Textarea from "../../../shared/components/ui/MyTextarea";

export default function ContactForm() {
  return (
    <form action="" className="flex flex-col gap-p8">
      <Input
        type="text"
        placeholder="Full name"
        className="placeholder:text-black-40 placeholder:text-sm"
      />
      <Input
        type="email"
        placeholder="email@company.com"
        className="placeholder:text-black-40 placeholder:text-sm"
      />
      <Textarea
        placeholder="Project description"
        className="h-48 placeholder:text-black-40 placeholder:text-sm"
      />
      <Input
        type="text"
        placeholder="How did you find Twocoderz?"
        className="placeholder:text-black-40 placeholder:text-sm"
      />
    </form>
  );
}
