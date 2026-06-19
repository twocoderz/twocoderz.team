export interface Team {
  id: string;
  name: string;
  src: string;
  href: string;
  profession: string;
}

export const teamData: Team[] = [
  {
    id: "team-1",
    name: "Rahim ALI",
    src: "https://api.dicebear.com/7.x/avataaars/svg?seed=BrianBeaver",
    href: "http://www.linkedin.com/in/rahim-ali-a6003226b",
    profession: "Co-fondateur",
  },
  {
    id: "team-2",
    name: "Crepin AZIAMADJI",
    src: "https://api.dicebear.com/7.x/avataaars/svg?seed=MaliniLeveque",
    href: "https://www.linkedin.com/in/cr%C3%A9pin-aziamadji-8a1b722b0/",
    profession: "Co-fondateur",
  },
];
