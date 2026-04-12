export interface Team {
  id: string;
  name: string;
  src: string;
  profession: string;
}

export const teamData: Team[] = [
  {
    id: "team-1",
    name: "Rahim ALI",
    src: "https://api.dicebear.com/7.x/avataaars/svg?seed=BrianBeaver",
    profession: "Co-founder",
  },
  {
    id: "team-2",
    name: "Crepin AZIAMADJI",
    src: "https://api.dicebear.com/7.x/avataaars/svg?seed=MaliniLeveque",
    profession: "Co-founder",
  },
];
