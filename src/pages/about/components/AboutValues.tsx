const values = [
  {
    title: "Maîtrise",
    description:
      "Nous améliorons nos méthodes à chaque projet pour livrer un travail clair, propre et durable.",
  },
  {
    title: "Fiabilité",
    description:
      "Un projet digital demande de la confiance. Nous avançons avec sérieux, transparence et respect des engagements.",
  },
  {
    title: "Passion",
    description:
      "Nous aimons transformer les idées en expériences simples, utiles et agréables à utiliser.",
  },
  {
    title: "Souplesse",
    description:
      "Chaque entreprise a ses réalités. Nous adaptons notre approche au budget, au délai et aux priorités.",
  },
  {
    title: "Discipline",
    description:
      "Nous gardons une exigence constante sur la qualité, la lisibilité et la maintenance du projet.",
  },
  {
    title: "Créativité",
    description:
      "Nous cherchons des solutions modernes, simples et adaptées à l’image de chaque marque.",
  },
];

export default function AboutValues() {
  return (
    <div>
      <h2 className="text-5xl tracking-wide font-bold text-black-80 text-start mb-p6">
        Nos valeurs
      </h2>
      <div className="pt-p20 grid grid-cols-1 gap-x-p20 gap-y-p8 md:grid-cols-2 lg:grid-cols-3">
        {values.map((value) => (
          <div
            key={value.title}
            className="flex flex-col items-start gap-p4 border-b border-black-10 pb-p6"
          >
            <h3 className="text-3xl font-bold text-black-80">{value.title}</h3>
            <p className="max-w-xs text-lg font-normal tracking-wide text-black-90">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
