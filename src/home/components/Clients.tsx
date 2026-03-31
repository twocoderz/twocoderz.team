import Container from "../../shared/components/ui/Container";
import MyLink from "../../shared/components/ui/MyLink";

export default function Clients() {
  const clients = [
    "Netflix",
    "Spotify",
    "Stripe",
    "Adobe",
    "Mozilla",
    "Salesforce",
    "Opera",
    "Octa",
    "Citrix",
    "Redis",
    "Oppo",
    "Universal",
    "Turo",
    "Xero",
    "Xsolla",
  ];

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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-p4 mt-p8">
            {clients.map((client) => (
              <div
                key={client}
                className="flex items-center justify-center py-p6"
              >
                <span className="text-black-90 text-4xl font-bold">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
