import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Navbar() {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backdropFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
  });
  return (
    <nav>
      <div className="px-6">
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.svg" className="w-12 h-12" />
          <p>Valour Grove</p>
        </a>

        <ul>
          {[
            { title: "Cocktails", id: "cocktails" },
            { title: "About Us", id: "about" },
            { title: "The Art", id: "art" },
            { title: "Menu", id: "menu" },
          ].map((link) => {
            return (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
