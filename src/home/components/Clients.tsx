import Container from "../../shared/components/ui/Container";
import MyLink from "../../shared/components/ui/MyLink";

export default function Clients() {
  return (
    <section>
      <Container>
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-black-80">
          Trusted by businesses
        </h2>
        <div className="flex items-center justify-between">
          <MyLink label="All works" href="#" />
          <p className="text-black-80 text-md md:text-lg lg:text-xl">
            We&apos;ve helped companies build strong online presence and drive
            real results.
          </p>
        </div>
      </Container>
    </section>
  );
}
