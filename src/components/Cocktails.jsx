import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Cocktails() {

  useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#cocktails',
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
    });
    parallaxTimeline
      .from("#c-left-leaf", {
        x: -100,
        y: 100,
      })
      .from("#c-right-leaf", {
        x: 100,
        y: 100,
      },"<");
  },{scope: "#cocktails"},);

  return (
    <section id="cocktails">
      <img
        src="/images/cocktail-left-leaf.png"
        alt="left-leaf"
        id="c-left-leaf"
      />
      <img
        src="/images/cocktail-right-leaf.png"
        alt="right-leaf"
        id="c-right-leaf"
      />
      <div className="list">
        <div className="popular">
          <h2>Most Popular Cocktails:</h2>
          <ul>
            {[
              {
                name: "Chapel Hill Shiraz",
                country: "AU",
                detail: "Bottle",
                price: "$10",
              },
              {
                name: "Caten Malbee",
                country: "AU",
                detail: "Bottle",
                price: "$49",
              },
              {
                name: "Rhino Pale Ale",
                country: "CA",
                detail: "750 ml",
                price: "$20",
              },
              {
                name: "Irish Guinness",
                country: "IE",
                detail: "600 ml",
                price: "$29",
              },
            ].map((cocktail) => {
              return (
                <li key={cocktail.name}>
                  <div className="md:me-28">
                    <h3>{cocktail.name}</h3>
                    <p>
                      {cocktail.country} | {cocktail.detail}
                    </p>
                  </div>
                  <span>- {cocktail.price}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="loved">
          <h2>Most Loved Mocktails:</h2>
          <ul>
            {[
              {
                name: "Tropical Bloom",
                country: "US",
                detail: "Bottle",
                price: "$10",
              },
              {
                name: "Passionfruit Mint",
                country: "US",
                detail: "Bottle",
                price: "$49",
              },
              {
                name: "Citrus Glow",
                country: "CA",
                detail: "750 ml",
                price: "$20",
              },
              {
                name: "Lavender Fizz",
                country: "IE",
                detail: "600 ml",
                price: "$29",
              },
            ].map((mocktail) => {
              return (
                <li key={mocktail.name}>
                  <div className="me-28">
                    <h3>{mocktail.name}</h3>
                    <p>
                      {mocktail.country} | {mocktail.detail}
                    </p>
                  </div>
                  <span>- {mocktail.price}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
