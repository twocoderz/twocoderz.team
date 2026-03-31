import Container from "../../shared/components/ui/Container";
import MyLink from "../../shared/components/ui/MyLink";

export default function Clients() {
  return (
    <section className="bg-transparent min-h-screen">
      <Container>
        <div className="flex flex-col gap-p6 py-p12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black-80 mb-p8">
            Trusted by businesses
          </h2>
          <div className="flex items-start justify-between">
            <MyLink label="All works" href="#" />
            <p className="text-black-80 text-md lg:text-lg max-w-md">
              We help companies establish a strong digital presence through
              modern, high-performing websites. Every project is designed to
              reflect your brand and connect with your audience.
            </p>
          </div>
          <div></div>
        </div>
      </Container>
    </section>
  );
}
