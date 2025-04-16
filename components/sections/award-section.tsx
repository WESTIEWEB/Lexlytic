import Link from "next/link"
import Image from "next/image"

export function AwardSection() {
  return (
    <section
      className="py-16 text-white bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://rad-witty-paper.media.strapiapp.com/Vincent_AI_Desktop_Wallpaper_1_9c2e4c59c3.gif")',
      }}
    >
      <div className="container mx-auto px-4 md:px-6 bg-opacity-70 p-8 rounded-lg">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              New Product Award 2024
            </h2>
            <h3 className="text-xl font-medium mb-4">
              Lexlytic AI wins award from the American Association of Law
              Libraries
            </h3>
            <p className="text-lg mb-6">
              As the premier organization for law librarians and legal
              information professionals, AALL shapes the legal research
              standards that America's top lawyers rely on every day.
            </p>
            <Link
              href="/announcement"
              className="inline-flex items-center text-white font-medium hover:text-blue-200"
            >
              Read the full announcement
            </Link>
          </div>
          <div className="md:w-1/2 md:pl-12 flex justify-center">
            <div>
              <Image
                src="https://rad-witty-paper.media.strapiapp.com/Blog_Banner_31_8ad3eb1247.png"
                alt="AALL Logo"
                width={400}
                height={200}
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
