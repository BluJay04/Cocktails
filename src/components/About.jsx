import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

export default function About() {
  useGSAP(() => {
    const titleSplit = SplitText.create("#about h2", {
      type: "words",
    });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#about',
        start: "top center"
      }
    })

    scrollTimeline
      .from(titleSplit.words, {
        opacity: 0, duration: 1.5, yPercent: 100, ease: "expo.inOut", stagger: 0.02
      })
      .from('.top-grid, .bottom-grid', {
        opacity: 0, duration: 1.5, ease: "power1.inOut", stagger: 0.04,
      },'-=0.5')
  });

  return (
    <section id="about">
      <div className="mb-16 md:px px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Cocktails</p>
            <h2>
              Where every detail matters <span>-</span>
              from muddle to garnish
            </h2>
          </div>
          <div className="sub-content">
            <p>
              Every cocktail we serve is a reflection of our obsession with
              detail - from the first muddle to the final garnish. The care is
              what turns a simple drink into something truly memorable.
            </p>
            <div>
              <p className="md:text-3xl text-xl text-bold">
                <span>4.5</span>/5
              </p>
              <p className="text-sm text-white-100">
                More than +12000 customers
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="top-grid">
        <div className="md:col-span-3">
          <img src="/images/about-1.jpeg" alt="grid-img-1" />
        </div>
        <div className="md:col-span-6">
          <img src="/images/about-2.jpeg" alt="grid-img-2" />
        </div>
        <div className="md:col-span-3">
          <img src="/images/about-3.jpeg" alt="grid-img-3" />
        </div>
      </div>
      <div className="bottom-grid">
        <div className="md:col-span-8">
          <img src="/images/about-4.jpg" alt="grid-img-4" />
        </div>
        <div className="md:col-span-4">
          <img src="/images/about-5.jpeg" alt="grid-img-5" />
        </div>
      </div>
    </section>
  );
}
