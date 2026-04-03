export type MyUserProps = {
  src: string;
  name: string;
  profession: string;
};

export default function MyUser(props: MyUserProps) {
  const { src, name, profession } = props;
  return (
    <div className="flex items-center gap-p6">
      <img src={src} alt={`${name} image`} className="w-12 h-12 rounded-full" />
      <div className="flex flex-col items-start gap-p4">
        <h4 className="text-black-80 font-bold text-lg">{name}</h4>
        <p className="text-black-50 font-normal text-base">{profession}</p>
      </div>
    </div>
  );
}
