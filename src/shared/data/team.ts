export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  image?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    dribbble?: string;
  };
}

export const teamData: TeamMember[] = [
  {
    id: "team-1",
    name: "Team Member 1",
    role: "Co-founder & Creative Director",
    bio: "Lead designer with 10+ years of experience.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=member1",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: "team-2",
    name: "Team Member 2",
    role: "Co-founder & CTO",
    bio: "Full-stack developer passionate about performance.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=member2",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: "team-3",
    name: "Team Member 3",
    role: "Product Lead",
    bio: "Product strategist focused on user-centric solutions.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=member3",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
];
