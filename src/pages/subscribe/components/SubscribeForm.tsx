import Input from "../../../shared/components/ui/MyInput";

export default function SubscribeForm() {
  return (
    <form action="" className="w-full mb-p8">
      <div className="flex flex-col gap-p8">
        <Input
          type="email"
          required
          autoComplete="email"
          placeholder="email@company.com"
          className="placeholder:text-black-40 placeholder:text-lg w-full"
        />
        <Input
          type="text"
          required
          autoComplete="given-name"
          placeholder="Prénom"
          className="placeholder:text-black-40 placeholder:text-lg w-full"
        />
        <Input
          type="text"
          required
          autoComplete="family-name"
          placeholder="Nom"
          className="placeholder:text-black-40 placeholder:text-lg w-full"
        />
        <Input
          type="text"
          required
          autoComplete="organization"
          placeholder="Nom de l'entreprise"
          className="placeholder:text-black-40 placeholder:text-lg w-full"
        />
      </div>
    </form>
  );
}
