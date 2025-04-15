import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { RegisterInterestForm } from "@/components/register-interest-form";

export default function RegisterInterestPage() {
  return (
    <div className="flex flex-col min-h-screen bg-blue-100">
      <Header />

      <main className="flex-grow ">
        <div className="container mx-auto px-4 md:px-6 py-16 max-w-3xl">
          <div className="text-center my-12">
            <h1 className="text-4xl font-regular mb-4 text-blue-800">
              Register Interest
            </h1>
            <p className="text-lg text-gray-600">
              Speak one-on-one with a Lexlytic expert and get a personalised
              interest of the platform.
            </p>
          </div>

          <RegisterInterestForm />
        </div>
      </main>

      <Footer />
    </div>
  );
}
