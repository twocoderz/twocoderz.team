import type { AccordionItemData } from "../../../shared/components/ui/AccordionItem";

export const webDevelopmentItems: AccordionItemData[] = [
  {
    id: "web-intro",
    title: "Introduction",
    content: (
      <div className="space-y-p6">
        <p className="max-w-3xl text-black-80 text-xl tracking-wide font-normal">
          Un bon site doit expliquer clairement ce que vous faites, rassurer vos
          visiteurs et leur donner envie de vous contacter.
        </p>
        <p className="max-w-3xl text-black-80 text-xl tracking-wide font-normal">
          Nous construisons chaque page autour de votre activité, de vos clients
          et des actions que vous voulez obtenir.
        </p>
        <ul className="list-disc pl-p6 text-xl tracking-wide space-y-p2">
          <li>
            <strong>Souplesse.</strong> Le périmètre s&apos;adapte à votre
            budget et à vos priorités.
          </li>
          <li>
            <strong>Clarté.</strong> Chaque étape produit un résultat visible.
          </li>
          <li>
            <strong>Collaboration.</strong> Vous validez les décisions
            importantes au bon moment.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "web-stage-1",
    title: "Étape 1 : Besoin et objectifs",
    content: (
      <p className="max-w-3xl text-black-80 text-xl tracking-wide font-normal">
        Nous clarifions votre activité, vos clients, vos offres et les actions
        attendues sur le site.
      </p>
    ),
  },
  {
    id: "web-stage-2",
    title: "Étape 2 : Structure et contenu",
    content: (
      <p className="max-w-3xl text-black-80 text-xl tracking-wide font-normal">
        Nous organisons les pages, les messages et les priorités pour rendre le
        parcours simple.
      </p>
    ),
  },
  {
    id: "web-stage-3",
    title: "Étape 3 : Développement et livraison",
    content: (
      <p className="max-w-3xl text-black-80 text-xl tracking-wide font-normal">
        Nous développons le site, testons les points essentiels et préparons la
        mise en ligne.
      </p>
    ),
  },
];
