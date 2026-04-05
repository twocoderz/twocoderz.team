import Input from "../../../shared/components/ui/MyInput";

export default function ContactForm() {
  return (
    <form action="" className="flex flex-col gap-p4">
      <Input type="text" placeholder="Full name" className="w-full" />
      <Input type="email" placeholder="email@company.com" />
    </form>
  );
}
