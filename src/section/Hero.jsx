import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import ProfileCard from "../components/ProfileCard";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden pt-5 md:pt-3">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout flex flex-col lg:flex-row gap-8 lg:gap-0 min-h-[calc(100vh-9rem)]">
        {/* Profile Card - First on mobile and tablet */}
        <figure className="flex items-center justify-center w-full lg:w-1/2 order-first lg:order-last px-4 lg:px-0">
          <div className="w-full h-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] max-h-[600px]">
            <ProfileCard
              name="Suchit Hubale"
              title="Software Developer"
              handle="suchit"
              status="Available for work"
              contactText="Contact"
              avatarUrl="/assets/profile.png"
              iconUrl="/assets/iconpattern.png"
              grainUrl="/assets/grain.webp"
              behindGradient="radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y), hsla(266, 100%, 90%, var(--card-opacity)) 4%, hsla(266, 50%, 80%, calc(var(--card-opacity) * 0.75)) 10%, hsla(266, 25%, 70%, calc(var(--card-opacity) * 0.5)) 50%, hsla(266, 0%, 60%, 0) 100%), radial-gradient(35% 52% at 55% 20%, #00ffaac4 0%, #073aff00 100%), radial-gradient(100% 100% at 50% 50%, #00c1ffff 1%, #073aff00 76%), conic-gradient(from 124deg at 50% 50%, #c137ffff 0%, #07c6ffff 40%, #07c6ffff 60%, #c137ffff 100%)"
              innerGradient="linear-gradient(145deg, #60496e8c 0%, #71C4FF44 100%)"
              showBehindGradient={true}
              enableTilt={true}
              showUserInfo={true}
              miniAvatarUrl="/images/profile.png"
              onContactClick={handleContactClick}
            />
          </div>
        </figure>

        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center lg:w-1/2 w-full lg:px-20 px-5 order-last lg:order-first">
          <div className="flex flex-col gap-7">
            <div className="hero-text text-left">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none text-left">
              Hello, I'm Suchit - Student at Rajarambapu Institute of Technology, with a strong interest in software, innovation, and problem-solving.
            </p>

            <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />
          </div>
        </header>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;