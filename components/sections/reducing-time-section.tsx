export function ReducingTimeSection() {
  return (
    <section
      className="py-16 text-white bg-cover bg-center"
      style={{
        backgroundImage: "url(https://rad-witty-paper.media.strapiapp.com/Blog_Banner_4_ae09f602c2_d7aa5f1000.png)",
      }}
    >
      <div className="bg-opacity-80 w-full h-full">
        <div className="container mx-auto px-4 md:px-6 text-start">
          <h2 className="text-3xl md:text-4xl font-thin mb-8">Reducing research time</h2>
          <blockquote className="text-base md:text-base italic max-w-4xl mb-4">
            "Vincent has saved the library staff at our law library hours of research...{" "}
            <span className="font-medium">Research that would normally take hours now takes minutes.</span>"
          </blockquote>
          <p className="font-medium text-base">Library Manager & Executive Director, Waterloo Region Law Association</p>
        </div>
      </div>
    </section>
  )
}
