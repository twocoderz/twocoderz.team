import Input from "../../../shared/components/ui/MyInput";

export default function SubscribeForm() {
  return (
    <form action="" className="flex flex-col gap-p8">
      <Input
        type="email"
        required
        autoComplete="email"
        placeholder="email@company.com"
        className="placeholder:text-black-40 placeholder:text-sm w-full"
      />
      <Input
        type="text"
        required
        autoComplete="given-name"
        placeholder="First name"
        className="placeholder:text-black-40 placeholder:text-sm w-full"
      />
      <Input
        type="text"
        required
        autoComplete="family-name"
        placeholder="Last name"
        className="placeholder:text-black-40 placeholder:text-sm w-full"
      />
      <Input
        type="text"
        required
        autoComplete="organization"
        placeholder="Company name"
        className="placeholder:text-black-40 placeholder:text-sm w-full"
      />
    </form>
  );
}
