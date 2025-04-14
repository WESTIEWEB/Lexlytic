import React from "react";

export function WorkflowSection() {
  const regions = [
    {
      title: "Northern Africa",
      countries: ["Algeria", "Egypt", "Libya", "Morocco", "Tunisia"],
    },
    {
      title: "Western Africa",
      countries: [
        "Côte d'Ivoire",
        "Ghana",
        "Guinea",
        "Mali",
        "Nigeria",
        "Senegal",
        "Togo",
      ],
    },
    {
      title: "Central Africa",
      countries: [
        "Angola",
        "Cameroon",
        "Central African Republic",
        "Republic of the Congo",
        "Equatorial Guinea",
        "Gabon",
      ],
    },
    {
      title: "Eastern Africa",
      countries: [
        "Ethiopia",
        "Kenya",
        "Malawi",
        "Rwanda",
        "South Sudan",
        "Tanzania",
        "Uganda",
        "Zambia",
      ],
    },
    {
      title: "Southern Africa",
      countries: ["Botswana", "Namibia", "South Africa"],
    },
  ];

  return (
    <section
      className="py-28 bg-gradient-to-r bg-[#19306e] from-blue-900 to-blue-800 text-white bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://cdn.prod.website-files.com/66e3fb5d46d50c9bc17cbce1/66e94c663b06600356cd8708_Map-Base.avif')",
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-12">
          {/* Left: Regions & Countries List */}
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {regions.map((region) => (
              <div
                key={region.title}
                className="bg-white/10 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <h4 className="text-yellow-400 text-lg font-bold mb-3">
                  {region.title}
                </h4>
                <ul className="text-sm space-y-1 text-white/90">
                  {region.countries.map((country) => (
                    <li
                      key={country}
                      className="before:content-['•'] before:text-yellow-400 before:mr-2"
                    >
                      {country}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right: Text Content */}
          <div className="md:w-1/2">
            <h3 className="font-semibold text-yellow-500 text-xl mb-6">
              REGION
            </h3>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Enjoy on-the-ground knowledge from the best local firms — on a
              pan-African scale
            </h2>
            <p className="text-xl mb-6">
              Our platform is the result of years of trust building with over
              150 of Africa’s finest law firms. What better proof of our
              collaborative approach?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
