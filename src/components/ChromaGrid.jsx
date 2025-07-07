import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const ChromaGrid = ({
  data = [],
  className = "",
  radius = 300,
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out",
  onProjectClick,
}) => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, "--x", "px");
    setY.current = gsap.quickSetter(el, "--y", "px");
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

  const handleMove = (e) => {
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true,
    });
  };

  const handleCardMove = (e) => {
    const c = e.currentTarget;
    const rect = c.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    c.style.setProperty("--mouse-x", `${mouseX}px`);
    c.style.setProperty("--mouse-y", `${mouseY}px`);
    // 3D tilt effect
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((mouseY - centerY) / centerY) * 10; // max 10deg
    const rotateY = ((mouseX - centerX) / centerX) * 10;
    c.style.setProperty("--rotate-x", `${-rotateX}deg`);
    c.style.setProperty("--rotate-y", `${rotateY}deg`);
    // Shadow follows tilt
    const shadowX = ((mouseX - centerX) / centerX) * 20;
    const shadowY = ((mouseY - centerY) / centerY) * 20;
    c.style.setProperty("--shadow-x", `${shadowX}px`);
    c.style.setProperty("--shadow-y", `${shadowY}px`);
  };

  const handleCardLeave = (e) => {
    const c = e.currentTarget;
    c.style.setProperty("--rotate-x", `0deg`);
    c.style.setProperty("--rotate-y", `0deg`);
    c.style.setProperty("--shadow-x", `0px`);
    c.style.setProperty("--shadow-y", `0px`);
  };

  const handleCardClick = (project) => {
    if (onProjectClick) {
      onProjectClick(project);
    }
  };

  return (
    <div
      ref={rootRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`relative w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-8 ${className}`}
      style={
        {
          "--r": `${radius}px`,
          "--x": "50%",
          "--y": "50%",
        }
      }
    >
      {data.map((c, i) => (
        <article
          key={i}
          onMouseMove={handleCardMove}
          onMouseLeave={handleCardLeave}
          onClick={() => handleCardClick(c)}
          className="group relative flex flex-col w-full rounded-[28px] overflow-hidden transition-all duration-500 cursor-pointer chroma-card"
          style={{
            '--card-border': c.borderColor || 'rgba(255,255,255,0.18)',
            background: 'rgba(255,255,255,0.10)',
            backdropFilter: 'blur(16px) saturate(180%)',
            WebkitBackdropFilter: 'blur(16px) saturate(180%)',
            border: '1.5px solid var(--card-border)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18), var(--shadow-x,0px) var(--shadow-y,0px) 32px 0 rgba(80,80,120,0.10)',
            transform: 'perspective(900px) rotateX(var(--rotate-x,0deg)) rotateY(var(--rotate-y,0deg))',
            transition: 'transform 0.3s cubic-bezier(.25,.8,.25,1), box-shadow 0.3s cubic-bezier(.25,.8,.25,1)',
          }}
        >
          {/* Highlight following mouse */}
          <span
            className="pointer-events-none absolute inset-0 z-10 rounded-[28px]"
            style={{
              background:
                'radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 40%, transparent 80%)',
              mixBlendMode: 'lighten',
              transition: 'background 0.2s',
            }}
          />
          <div className="relative z-20 flex-1 p-5 box-border">
            <div className="relative overflow-hidden rounded-[20px] group-hover:shadow-xl transition-all duration-700">
              <img
                src={c.image}
                alt={c.title}
                loading="lazy"
                className="w-full h-[240px] object-cover rounded-[20px]"
                style={{ willChange: "transform" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700">
                <div className="flex flex-wrap gap-2">
                  {/* {c.technologies?.map((tech, index) => (
                    <span key={index} className="px-3 py-1 text-sm rounded-full bg-white/20 backdrop-blur-sm text-white">
                      {tech}
                    </span>
                  ))} */}
                </div>
              </div>
            </div>
          </div>
          <footer className="relative z-10 p-6 text-white font-sans">
            <div className="flex items-center justify-between mb-4">
              <h3 className="m-0 text-[1.4rem] font-semibold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent group-hover:from-white group-hover:to-white transition-all duration-700">
                {c.title}
              </h3>
              <span className="px-4 py-1.5 text-sm rounded-full bg-[var(--card-border)]/20 backdrop-blur-sm transform group-hover:scale-105 transition-transform duration-700">
                {c.handle}
              </span>
            </div>
            <p className="m-0 text-[1rem] opacity-90 mb-5 leading-relaxed group-hover:opacity-100 transition-opacity duration-700">
              {c.subtitle}
            </p>
            
          </footer>
        </article>
      ))}
      <div
        className="absolute inset-0 pointer-events-none z-30"
        style={{
          backdropFilter: "grayscale(1) brightness(0.78)",
          WebkitBackdropFilter: "grayscale(1) brightness(0.78)",
          background: "rgba(0,0,0,0.001)",
          maskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)",
          WebkitMaskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)",
        }}
      />
      <div
        ref={fadeRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-[250ms] z-40"
        style={{
          backdropFilter: "grayscale(1) brightness(0.78)",
          WebkitBackdropFilter: "grayscale(1) brightness(0.78)",
          background: "rgba(0,0,0,0.001)",
          maskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)",
          opacity: 1,
        }}
      />
    </div>
  );
};

export default ChromaGrid;