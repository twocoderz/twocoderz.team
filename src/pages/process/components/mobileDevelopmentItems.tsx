import type { AccordionItemData } from "../../../shared/components/ui/AccordionItem";

export const mobileDevelopmentItems: AccordionItemData[] = [
  {
    id: "mobile-intro",
    title: "Introduction",
    content: (
      <div className="space-y-p6">
        <p className="max-w-3xl text-black-80 tracking-wide text-xl font-normal">
          Une application mobile doit rendre votre service plus accessible, plus
          simple et plus proche de vos clients.
        </p>
        <p className="max-w-3xl text-black-80 tracking-wide text-xl font-normal">
          Nous partons du besoin réel avant d&apos;ajouter des fonctionnalités,
          pour garder une app utile et facile à utiliser.
        </p>
        <ul className="list-disc pl-p6 text-xl tracking-wide space-y-p2">
          <li>
            <strong>Souplesse.</strong> Les fonctionnalités sont priorisées par
            impact.
          </li>
          <li>
            <strong>Clarté.</strong> Vous savez ce qui est construit à chaque
            étape.
          </li>
          <li>
            <strong>Collaboration.</strong> Vos retours guident les décisions
            clés.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "mobile-stage-1",
    title: "Étape 1 : Fonctionnalités utiles",
    content: (
      <p className="max-w-3xl text-black-80 tracking-wide text-xl font-normal">
        Nous identifions les actions essentielles que vos utilisateurs doivent
        pouvoir faire.
      </p>
    ),
  },
  {
    id: "mobile-stage-2",
    title: "Étape 2 : Parcours et écrans",
    content: (
      <p className="max-w-3xl text-black-80 tracking-wide text-xl font-normal">
        Nous préparons les écrans, les enchaînements et les priorités de
        développement.
      </p>
    ),
  },
  {
    id: "mobile-stage-3",
    title: "Étape 3 : Build et tests",
    content: (
      <p className="max-w-3xl text-black-80 tracking-wide text-xl font-normal">
        Nous développons l&apos;application, testons les parcours importants et
        préparons la livraison.
      </p>
    ),
  },
];
