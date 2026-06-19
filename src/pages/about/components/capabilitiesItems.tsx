import type { AccordionItemData } from "../../../shared/components/ui/AccordionItem";

export const capabilitiesItems: AccordionItemData[] = [
  {
    id: "refresh",
    title: "Clarifier et repositionner",
    content: (
      <div className="space-y-p4">
        <p className="text-black-80 text-lg font-normal ">
          Nous aidons votre marque à mieux expliquer son offre, à rassurer ses
          visiteurs et à donner envie de passer à l’action.
        </p>
        <ul className="list-disc pl-p6 text-lg font-normal space-y-p2">
          <li>
            <strong>Souplesse.</strong> Le périmètre dépend de vos besoins.
          </li>
          <li>
            <strong>Clarté.</strong> Chaque étape livre un résultat concret.
          </li>
          <li>
            <strong>Collaboration.</strong> Votre équipe peut être impliquée à
            tout moment.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "scale",
    title: "Développer votre présence",
    content: (
      <div className="space-y-p4">
        <p className="text-black-80 text-lg font-normal">
          Nous créons des supports digitaux capables de présenter vos offres,
          vos services et vos points forts avec plus d’impact.
        </p>
        <ul className="list-disc pl-p6 text-lg space-y-p2">
          <li>
            <strong>Souplesse.</strong> Nous avançons selon vos priorités.
          </li>
          <li>
            <strong>Clarté.</strong> Les décisions restent simples à suivre.
          </li>
          <li>
            <strong>Collaboration.</strong> Vos retours guident l’évolution du
            projet.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "team",
    title: "Renfort digital",
    content: (
      <div className="space-y-p4">
        <p className="text-black-80 text-lg font-normal">
          Nous pouvons intervenir comme renfort pour concevoir, développer ou
          améliorer vos outils digitaux.
        </p>
        <ul className="list-disc pl-p6 text-lg space-y-p2">
          <li>
            <strong>Souplesse.</strong> L’accompagnement peut être ponctuel ou
            continu.
          </li>
          <li>
            <strong>Clarté.</strong> Les livrables sont définis dès le départ.
          </li>
          <li>
            <strong>Collaboration.</strong> Nous travaillons avec vos méthodes
            quand c’est nécessaire.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "prepare",
    title: "Préparer un lancement",
    content: (
      <div className="space-y-p4">
        <p className="text-black-80 text-lg font-normal">
          Nous vous aidons à préparer une présence digitale propre avant le
          lancement d’un produit, service ou nouveau projet.
        </p>
        <ul className="list-disc pl-p6 text-lg space-y-p2">
          <li>
            <strong>Souplesse.</strong> Nous allons à l’essentiel pour lancer
            plus vite.
          </li>
          <li>
            <strong>Clarté.</strong> Les priorités sont visibles dès le début.
          </li>
          <li>
            <strong>Collaboration.</strong> Vous validez les messages et les
            pages clés.
          </li>
        </ul>
      </div>
    ),
  },
];
