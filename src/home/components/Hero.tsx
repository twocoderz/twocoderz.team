import { useEffect, useState } from "react";
import Container from "../../shared/components/ui/Container";

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const slides = [
    "https://picsum.photos/seed/a/1200/700",
    "https://picsum.photos/seed/b/1200/700",
    "https://picsum.photos/seed/c/1200/700",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-transparent min-h-screen">
      <Container>
        <div className="py-p14">
          {/* hero center texts */}
          <div className="text-center max-w-3xl mx-auto mb-p4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-black-70 font-bold leading-none mb-p8 mt-p6">
              We build websites that bring you customers
              <span className="inline-block w-4 h-2 bg-primary ml-2"></span>
            </h1>
            <p className="text-md md:text-lg lg:text-xl font-normal pb-p6 text-black-60">
              We don't just create websites. We build digital systems that turn
              your visitors into customers — automatically, 24/7.
            </p>
          </div>
          {/* hero images */}
          <div className="relative w-full aspect-video rounded-md overflow-hidden">
            {slides.map((src, index) => (
              <img
                key={src}
                src={src}
                alt={`Slide ${index + 1}`}
                className={`absolute mt-p8 inset-0 w-full h-full object-cover transition-opacity duration-700 ${index === current ? "opacity-100" : "opacity-0"}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
