export function RevolutionarySection() {
  return (
    <section className="relative py-16 bg-[#1a2d52] text-white overflow-hidden">
      {/* Beautiful custom pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Glassy glowing orbs */}
        <div className="absolute h-40 w-40 bg-indigo-400/20 rounded-full blur-3xl top-[10%] left-[15%]"></div>
        <div className="absolute h-32 w-32 bg-cyan-300/10 rounded-full blur-2xl bottom-[15%] right-[10%]"></div>
        <div className="absolute h-28 w-28 bg-pink-300/10 rounded-full blur-2xl top-[40%] right-[20%]"></div>

        {/* Rotated diamond shapes */}
        <div className="absolute h-6 w-6 border border-white/20 rotate-45 top-[15%] left-[5%]"></div>
        <div className="absolute h-8 w-8 border border-white/30 rotate-45 bottom-[20%] right-[5%]"></div>

        {/* Rings / Circles */}
        <div className="absolute h-6 w-6 border-2 border-white/10 rounded-full top-[35%] left-[25%]"></div>
        <div className="absolute h-5 w-5 border border-white/15 rounded-full bottom-[25%] right-[25%]"></div>

        {/* Subtle dots/stars */}
        <div className="absolute h-1 w-1 bg-white/20 rounded-full top-[25%] left-[20%]"></div>
        <div className="absolute h-1.5 w-1.5 bg-white/30 rounded-full top-[50%] right-[15%]"></div>
        <div className="absolute h-1 w-1 bg-white/20 rounded-full bottom-[20%] left-[30%]"></div>
        <div className="absolute h-1.5 w-1.5 bg-white/30 rounded-full bottom-[10%] right-[20%]"></div>

        {/* Soft grid or dotted mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:22px_22px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-start">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          A revolutionary approach
        </h2>
        <blockquote className="text-base md:text-base italic max-w-4xl mb-8">
          "Lexlytic AI is not just a new product; it's a revolutionary approach
          that diverges from the path tread by conventional case law
          providers... I'm thoroughly impressed."
        </blockquote>
        <p className="font-medium text-base">
          Chad Ergun, Chief Information Officer, Davis Graham & Stubbs LLP
        </p>
      </div>
    </section>
  );
}
