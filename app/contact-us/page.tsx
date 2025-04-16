import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 font-sans to-blue-500 text-white py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-50">
            <Image
              src="https://rad-witty-paper.media.strapiapp.com/world_map_blue_a6363c646d_433b4572e4.jpg"
              alt="World Map"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

          <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Contact your local Lexlytic Africa office
            </h1>
            <p className="text-xl max-w-2xl">
              Whether you have a question about a new subscription, existing
              account, training, or anything else, Lexlytic regional teams
              across Africa are here to help. Please view our offices by region
              below.
            </p>
          </div>
        </section>

        {/* Contact Regions */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-2 space-y-12">
                <RegionSection
                  title="North Africa"
                  regions={[
                    {
                      name: "Lexlytic Egypt",
                      hours: "Sunday-Thursday, 09:00 – 17:00 EET",
                      support: "helpdesk-eg@lexlytic.com",
                      removal: "content-eg@lexlytic.com",
                      phone: "+20 2 1234 5678",
                    },
                    {
                      name: "Lexlytic Morocco",
                      hours: "Monday-Friday, 09:00 – 17:30 WET",
                      support: "helpdesk-ma@lexlytic.com",
                      removal: "content-ma@lexlytic.com",
                      phone: "+212 5 1234 5678",
                    },
                  ]}
                />

                <RegionSection
                  title="West Africa"
                  regions={[
                    {
                      name: "Lexlytic Nigeria",
                      hours: "Monday-Friday, 08:00 – 17:00 WAT",
                      support: "helpdesk-ng@lexlytic.com",
                      removal: "content-ng@lexlytic.com",
                      phone: "+234 1 123 4567",
                    },
                    {
                      name: "Lexlytic Ghana",
                      hours: "Monday-Friday, 09:00 – 17:00 GMT",
                      support: "helpdesk-gh@lexlytic.com",
                      removal: "content-gh@lexlytic.com",
                      phone: "+233 30 123 4567",
                    },
                  ]}
                />

                <RegionSection
                  title="East Africa"
                  regions={[
                    {
                      name: "Lexlytic Kenya",
                      hours: "Monday-Friday, 08:00 – 17:00 EAT",
                      support: "helpdesk-ke@lexlytic.com",
                      removal: "content-ke@lexlytic.com",
                      phone: "+254 20 1234567",
                    },
                    {
                      name: "Lexlytic Ethiopia",
                      hours: "Monday-Friday, 08:30 – 17:30 EAT",
                      support: "helpdesk-et@lexlytic.com",
                      removal: "content-et@lexlytic.com",
                      phone: "+251 11 123 4567",
                    },
                  ]}
                />

                <RegionSection
                  title="Central Africa"
                  regions={[
                    {
                      name: "Lexlytic Cameroon",
                      hours: "Monday-Friday, 08:00 – 17:00 WAT",
                      support: "helpdesk-cm@lexlytic.com",
                      removal: "content-cm@lexlytic.com",
                      phone: "+237 2 123 4567",
                    },
                    {
                      name: "Lexlytic DRC",
                      hours: "Monday-Friday, 08:00 – 16:30 CAT",
                      support: "helpdesk-cd@lexlytic.com",
                      removal: "content-cd@lexlytic.com",
                      phone: "+243 81 123 4567",
                    },
                  ]}
                />

                <RegionSection
                  title="Southern Africa"
                  regions={[
                    {
                      name: "Lexlytic South Africa",
                      hours: "Monday-Friday, 08:00 – 17:00 SAST",
                      support: "helpdesk-za@lexlytic.com",
                      removal: "content-za@lexlytic.com",
                      phone: "+27 11 123 4567",
                    },
                    {
                      name: "Lexlytic Botswana",
                      hours: "Monday-Friday, 08:00 – 16:30 CAT",
                      support: "helpdesk-bw@lexlytic.com",
                      removal: "content-bw@lexlytic.com",
                      phone: "+267 3 123 4567",
                    },
                  ]}
                />
              </div>

              {/* World Map */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <Image
                    src="https://rad-witty-paper.media.strapiapp.com/world_map_blue_a6363c646d_433b4572e4.jpg"
                    alt="World Map"
                    width={500}
                    height={500}
                    className="w-full rounded-lg shadow-lg"
                  />
                  
                  <div className="mt-8 bg-gray-50 p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">
                      General Inquiries
                    </h3>
                    <p className="text-gray-600 mb-4">
                      For general inquiries or if you're not sure which office
                      to contact, please reach out to our global support team.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-blue-600 mr-3" />
                        <a
                          href="mailto:info@lexlytic.com"
                          className="text-blue-600 hover:text-blue-700"
                        >
                          info@lexlytic.com
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-blue-600 mr-3" />
                        <a
                          href="tel:+18667732782"
                          className="text-blue-600 hover:text-blue-700"
                        >
                          +1 866 773 2782
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

interface RegionOffice {
  name: string;
  hours: string;
  support: string;
  removal?: string;
  phone: string;
}

interface RegionSectionProps {
  title: string;
  regions: RegionOffice[];
}

function RegionSection({ title, regions }: RegionSectionProps) {
  return (
    <div>
      <h2 className="text-3xl font-regular mb-6 text-gray-800">{title}</h2>
      <div className="space-y-8">
        {regions.map((region, index) => (
          <div key={index} className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-xl font-regular mb-4 text-gray-800">
              {region.name}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-600">{region.hours}</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-gray-600">
                    General, support, training and sales enquiries:
                  </span>
                  <a
                    href={`mailto:${region.support}`}
                    className="text-blue-600 hover:text-blue-700"
                  >
                    {region.support}
                  </a>
                  {region.removal && (
                    <div className="flex flex-col mt-2">
                      <span className="text-gray-600">
                        Content removal requests:
                      </span>
                      <a
                        href={`mailto:${region.removal}`}
                        className="text-blue-600 hover:text-blue-700"
                      >
                        {region.removal}
                      </a>
                    </div>
                  )}
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <a
                  href={`tel:${region.phone.replace(/\D/g, "")}`}
                  className="text-blue-600 hover:text-blue-700"
                >
                  {region.phone}
                </a>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
