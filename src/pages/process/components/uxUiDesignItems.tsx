import type { AccordionItemData } from "../../../shared/components/ui/AccordionItem";

export const uxUiDesignItems: AccordionItemData[] = [
  {
    id: "uxui-intro",
    title: "Introduction",
    content: (
      <div className="space-y-p6">
        <p className="text-black-80 text-lg font-normal">
          Une maquette permet de valider l’idée, les pages et l’expérience avant
          d’investir dans le développement.
        </p>
        <p className="text-black-80 text-lg font-normal">
          Nous créons des interfaces simples à comprendre, crédibles et alignées
          avec votre image.
        </p>
        <ul className="list-disc pl-p6 text-lg space-y-p2">
          <li>
            <strong>Souplesse.</strong> La maquette suit votre besoin réel.
          </li>
          <li>
            <strong>Clarté.</strong> Chaque écran a un rôle précis.
          </li>
          <li>
            <strong>Collaboration.</strong> Vous validez rapidement les choix
            importants.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "uxui-stage-1",
    title: "Étape 1 : Compréhension",
    content: (
      <p className="text-black-80 text-lg font-normal">
        Nous échangeons sur votre activité, vos clients et les objectifs du
        projet.
      </p>
    ),
  },
  {
    id: "uxui-stage-2",
    title: "Étape 2 : Maquette",
    content: (
      <p className="text-black-80 text-lg font-normal">
        Nous concevons les écrans principaux avec une hiérarchie claire et des
        messages directs.
      </p>
    ),
  },
  {
    id: "uxui-stage-3",
    title: "Étape 3 : Validation",
    content: (
      <p className="text-black-80 text-lg font-normal">
        Nous ajustons la maquette avec vos retours pour préparer une base solide
        au développement.
      </p>
    ),
  },
];
