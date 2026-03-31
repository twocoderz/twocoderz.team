import Container from "../../shared/components/ui/Container";

export default function Hero() {
  const slides = [
    "https://picsum.photos/seed/a/1200/700",
    "https://picsum.photos/seed/b/1200/700",
    "https://picsum.photos/seed/c/1200/700",
  ];

  return (
    <section className="bg-transparent min-h-screen">
      <Container>
        <div className="py-p14 px-p6">
          {/* hero center texts */}
          <div className="text-center max-w-xl mx-auto mb-p4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-black-70 font-bold mb-p6">
              We build websites that bring you customers.
            </h1>
            <p className="text-md md:text-lg lg:text-xl font-normal text-black-60">
              We don't just create websites. We build digital systems that turn
              your visitors into customers — automatically, 24/7.
            </p>
          </div>
          {/* hero center images */}
          <div></div>
        </div>
      </Container>
    </section>
  );
}
