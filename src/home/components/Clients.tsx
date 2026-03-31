import Container from "../../shared/components/ui/Container";
import MyLink from "../../shared/components/ui/MyLink";

export default function Clients() {
  return (
    <section className="bg-transparent min-h-screen">
      <Container>
        <div className="flex flex-col gap-p6 py-p12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black-80 mb-p8">
            Trusted by businesses
          </h2>
          <div className="flex items-center justify-between">
            <MyLink label="All works" href="#" />
            <p className="text-black-80 text-md md:text-lg lg:text-xl text-right">
              We&apos;ve helped companies build strong online presence and drive
              real results.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
