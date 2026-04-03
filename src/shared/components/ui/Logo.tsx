export default function Logo() {
  return (
    <a href="#hero" className="group flex cursor-pointer items-center gap-p2">
      <img src="/images/logo.png" alt="logo image" />
      <span className="text-md font-normal text-black-80 group-hover:text-black-90 transition-all duration-500">
        twocoderz
      </span>
    </a>
  );
}
