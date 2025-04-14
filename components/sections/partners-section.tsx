import Image from "next/image"

export function PartnersSection() {
  return (
    <section className="py-8 bg-[#f8f9fa]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-wrap justify-start items-center gap-20 py-12">
          <Image
            src="https://rad-witty-paper.media.strapiapp.com/grandes_despachos_deloitte_27aeed2e8e.png"
            alt="Deloitte Legal"
            width={400}
            height={140}
            className="h-[140px] w-auto"
          />
          <Image
            src="https://rad-witty-paper.media.strapiapp.com/bird_logo_1_924199eac0.png"
            alt="Bird & Bird"
            width={400}
            height={140}
            className="h-[140px] w-auto"
          />
          <Image
            src="https://rad-witty-paper.media.strapiapp.com/Pm_logo_1_a53c82f88b.png"
            alt="Pinsent Masons"
            width={400}
            height={140}
            className="h-[140px] w-auto"
          />
          <Image
            src="https://rad-witty-paper.media.strapiapp.com/hfw_logo_1_da5576efe2.png"
            alt="HFW"
            width={400}
            height={140}
            className="h-[140px] w-auto"
          />
          <Image
            src="https://rad-witty-paper.media.strapiapp.com/cid0_C51_CC_8_B_0706_4_AC_2_AE_4_B_CBD_4141_EB_8_A0_4f7c1bfda3.jpeg"
            alt="Fisher Phillips"
            width={400}
            height={140}
            className="h-[140px] w-auto"
          />
        </div>
      </div>
    </section>
  )
}
