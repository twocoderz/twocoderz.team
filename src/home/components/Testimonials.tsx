import Container from "../../shared/components/ui/Container";
import MyLink from "../../shared/components/ui/MyLink";
import MyUser from "../../shared/components/ui/MyUser";

const users = [
  { name: "Brian Beaver", src: "", profession: "VP of Design at Turo" },
  {
    name: "Malini Leveque",
    src: "",
    profession: "Vice President, Product Design and Research at Citrix",
  },
  {
    name: "Dan Brown",
    src: "",
    profession: "Senior Marketing Manager at Mozilla",
  },
  {
    name: "Chris chen",
    src: "",
    profession: "Head of ColorOS Design Department at Oppo",
  },
  {
    name: "Chris Bank",
    src: "",
    profession:
      "VP of Design at TuroSr. Manager of Customer Online Experience at Okta ",
  },
  { name: "Andrew Mason", src: "", profession: "CEO at Descript" },
  {
    name: "Mark Opland",
    src: "",
    profession: "Product Design Director at Xero",
  },
  {
    name: "Khoi Vinh",
    src: "",
    profession: "Senior Director of Product Design at Adobe",
  },
  {
    name: "Edu Carneiro",
    src: "",
    profession: "Head of Web Marketing, Brand & SEO at Redis",
  },
  {
    name: "Kevin Sproles",
    src: "",
    profession: "CEO at Volusion",
  },
];

export default function Testimonials() {
  return (
    <section>
      <Container>
        <div className="flex flex-col items-start gap-p8 ">
          <h2>What our clients say</h2>
          <MyLink href="#" label="Reviews" />
        </div>
        <div>
          <div></div>
          <p></p>
          <div>
            {users.map((user) => (
              <MyUser
                src={user.src}
                name={user.name}
                profession={user.profession}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
