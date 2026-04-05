import Input from "../../../shared/components/ui/MyInput";

export default function ContactForm() {
  return (
    <form action="" className="flex flex-col gap-p8">
      <Input
        type="text"
        placeholder="Full name"
        className="placeholder:text-black-40"
      />
      <Input
        type="email"
        placeholder="email@company.com"
        className="placeholder:text-black-40"
      />
    </form>
  );
}
