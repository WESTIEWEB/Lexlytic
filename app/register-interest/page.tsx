import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { RegisterInterestForm } from "@/components/register-interest-form";

export default function RegisterInterestPage() {
  return (
    <div className="flex flex-col min-h-screen relative bg-[#0f172a] text-white">
      {/* Background Image + Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/earth.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e293b]/90 via-[#0f172a]/80 to-[#1e293b]/90" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow flex items-center justify-center mt-20 px-4 py-20">
          <div className="w-full max-w-2xl">
            {/* Header */}
            <div className="text-center mb-10">
              <h1 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                Register Your Interest
              </h1>
              <p className="text-base text-blue-100">
                Speak one-on-one with a Lexlytic expert and get a personalized
                walk-through of the platform.
              </p>
            </div>

            {/* Glassmorphism Form Card */}
            <div className="rounded-xl p-8">
              <RegisterInterestForm />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
