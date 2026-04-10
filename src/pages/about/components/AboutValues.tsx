const values = [
  {
    title: "Mastery",
    description:
      "Constant repetition of processes leads to mastery. We've been honing our craft and improving our processes for years, every day.",
  },
  {
    title: "Dependability",
    description:
      "You can't create value without a trusted partner. Staying true to our word is an intrinsic need, not just an external obligation.",
  },
  {
    title: "Passion",
    description:
      "A true love for what you do manifests in where you invest your time. The passion for our work is quiet and calm, yet potent.",
  },
  {
    title: "Flexibility",
    description:
      "We rely on our processes but adapt to the specific needs of projects or partners. Flexibility leads to lasting improvements.",
  },
  {
    title: "Discipline",
    description:
      "Discipline starts within and shapes all our processes. Though meticulous, our standards ensure solid long-term delivery.",
  },
  {
    title: "Creativity",
    description:
      "We combine inspiration with workflow to foster systematic creativity and deliver predictable results.",
  },
];

export default function AboutValues() {
  return (
    <div>
      <h2 className="text-4xl tracking-wide font-bold text-black-80 text-center mb-p8">
        Our values
      </h2>
      <div className="pt-p20 grid grid-cols-1 gap-x-p20 gap-y-p8 md:grid-cols-2 lg:grid-cols-3">
        {values.map((value) => (
          <div
            key={value.title}
            className="flex flex-col items-start gap-p4 border-b border-black-10 pb-p6"
          >
            <h3 className="text-2xl font-bold text-black-80">{value.title}</h3>
            <p className="max-w-xs text-sm font-normal text-black-90">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
