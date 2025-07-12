<div align="center">
  
  
  <div>
    <img src="https://img.shields.io/badge/-React-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react" />
    <img src="https://img.shields.io/badge/-Vite-white?style=for-the-badge&color=646CFF" alt="vite" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Three.js-black?style=for-the-badge&logoColor=white&logo=three.js&color=000000" alt="three.js" />
  </div>

  <h3 align="center">Suchit Hubale: Interactive Developer Portfolio with 3D Experiences</h3>

   <div align="center">
     Build this project 
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets (Code to Copy)](#snippets)
6. 🔗 [Assets](#links)
7. 🚀 [More](#more)


## <a name="introduction">🤖 Introduction</a>

Built with React and Vite for lightning-fast development, enhanced with Three.js for immersive 3D experiences, styled with TailwindCSS, and powered by GSAP animations, this is a modern developer portfolio showcasing interactive design and cutting-edge web technologies. The portfolio features a dynamic profile card with tilt effects, 3D room environments, animated counters, and smooth transitions throughout.

## <a name="tech-stack">⚙️ Tech Stack</a>

- **React 19** - Latest React with modern features
- **Vite** - Lightning-fast build tool and dev server
- **TailwindCSS 4** - Utility-first CSS framework
- **Three.js** - 3D graphics library for web
- **React Three Fiber** - React renderer for Three.js
- **GSAP** - Professional animation library
- **Framer Motion** - Production-ready motion library
- **EmailJS** - Email service integration
- **React Router DOM** - Client-side routing
- **Lucide React** - Beautiful icon library

## <a name="features">🔋 Features</a>

👉 **Interactive Profile Card**: Advanced tilt effects with mouse tracking, gradient animations, and smooth transitions.

👉 **3D Room Experience**: Immersive 3D environment with custom materials, lighting, and post-processing effects.

👉 **Animated Hero Section**: Dynamic text animations with word cycling and smooth scroll-triggered animations.

👉 **Project Showcase**: Interactive project cards with hover effects and smooth transitions.

👉 **Contact Form**: Functional contact form with EmailJS integration and toast notifications.

👉 **Responsive Design**: Fully responsive layout that works seamlessly across all devices.

👉 **Performance Optimized**: Optimized 3D models, lazy loading, and efficient animations.

👉 **Modern UI/UX**: Sleek design with gradient effects, glass morphism, and modern typography.

👉 **Smooth Animations**: GSAP-powered animations with scroll triggers and timeline controls.

👉 **Tech Stack Visualization**: Interactive 3D tech logos with hover effects and animations.

and many more, including code architecture and reusability

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en) (v18 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/SuchitHubale/portfolio.git
cd portfolio
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

Replace the placeholder values with your actual **[EmailJS](https://www.emailjs.com/)** credentials for the contact form functionality.

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.

**Building for Production**

```bash
npm run build
```

**Preview Production Build**

```bash
npm run preview
```

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>Profile Card Component (src/components/ProfileCard.jsx)</code></summary>

```jsx
const ProfileCardComponent = ({
  avatarUrl = "<Placeholder for avatar URL>",
  iconUrl = "<Placeholder for icon URL>",
  grainUrl = "<Placeholder for grain URL>",
  behindGradient,
  innerGradient,
  showBehindGradient = true,
  className = "",
  enableTilt = true,
  miniAvatarUrl,
  name = "Javi A. Torres",
  title = "Software Engineer",
  handle = "javicodes",
  status = "Online",
  contactText = "Contact",
  showUserInfo = true,
  onContactClick,
}) => {
  const wrapRef = useRef(null);
  const cardRef = useRef(null);

  const animationHandlers = useMemo(() => {
    if (!enableTilt) return null;

    let rafId = null;

    const updateCardTransform = (
      offsetX,
      offsetY,
      card,
      wrap
    ) => {
      const width = card.clientWidth;
      const height = card.clientHeight;

      const percentX = clamp((100 / width) * offsetX);
      const percentY = clamp((100 / height) * offsetY);

      const centerX = percentX - 50;
      const centerY = percentY - 50;

      const properties = {
        "--pointer-x": `${percentX}%`,
        "--pointer-y": `${percentY}%`,
        "--background-x": `${adjust(percentX, 0, 100, 35, 65)}%`,
        "--background-y": `${adjust(percentY, 0, 100, 35, 65)}%`,
        "--pointer-from-center": `${clamp(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)}`,
        "--pointer-from-top": `${percentY / 100}`,
        "--pointer-from-left": `${percentX / 100}`,
        "--rotate-x": `${round(-(centerX / 5))}deg`,
        "--rotate-y": `${round(centerY / 4)}deg`,
      };

      Object.entries(properties).forEach(([property, value]) => {
        wrap.style.setProperty(property, value);
      });
    };

    return {
      updateCardTransform,
      createSmoothAnimation,
      cancelAnimation: () => {
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      },
    };
  }, [enableTilt]);
```

</details>

<details>
<summary><code>3D Room Component (src/components/HeroModels/Room.jsx)</code></summary>

```jsx
import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";

export function Room(props) {
  const { nodes, materials } = useGLTF("/models/optimized-room.glb");
  const screensRef = useRef();
  const matcapTexture = useTexture("/images/textures/mat1.png");

  const curtainMaterial = new THREE.MeshPhongMaterial({
    color: "#d90429",
  });

  const bodyMaterial = new THREE.MeshPhongMaterial({
    map: matcapTexture,
  });

  return (
    <group {...props} dispose={null}>
      <EffectComposer>
        <SelectiveBloom
          selection={screensRef}
          intensity={1.5}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
          blendFunction={BlendFunction.ADD}
        />
      </EffectComposer>
      <mesh
        geometry={nodes._________6_blinn1_0.geometry}
        material={curtainMaterial}
      />
      <mesh geometry={nodes.body1_blinn1_0.geometry} material={bodyMaterial} />
      <mesh
        ref={screensRef}
        geometry={nodes.emis_lambert1_0.geometry}
        material={materials.lambert1}
      />
    </group>
  );
}
```

</details>

<details>
<summary><code>GSAP Animations (src/section/Hero.jsx)</code></summary>

```jsx
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden pt-5 md:pt-3">
      <div className="hero-layout flex flex-col lg:flex-row gap-8 lg:gap-0 min-h-[calc(100vh-9rem)]">
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
      </div>
    </section>
  );
};
```

</details>

<details>
<summary><code>Contact Form with EmailJS (src/section/Contact.jsx)</code></summary>

```jsx
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Check, AlertCircle } from "lucide-react";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, type: "", message: "" });
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setForm({ name: "", email: "", message: "" });
      showToast("success", "Email sent successfully!");
    } catch (error) {
      console.error("EmailJS Error:", error);
      showToast("error", "Failed to send email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding relative">
      {toast.show && (
        <div className="fixed top-20 inset-x-0 mx-auto max-w-sm z-50">
          <div className="animate-in fade-in duration-300">
            <div className={`flex items-center space-x-3 px-4 py-3 rounded-md shadow-lg border-l-4 ${
              toast.type === "success" ? "bg-white border-green-500" : "bg-white border-red-500"
            }`}>
              <div className={`p-2 rounded-full ${
                toast.type === "success" ? "bg-green-100" : "bg-red-100"
              }`}>
                {toast.type === "success" ? (
                  <Check className="h-5 w-5 text-green-600" />
                ) : (
                  <AlertCircle className="h-5 w-5 text-red-600" />
                )}
              </div>
              <div>
                <p className="font-medium text-gray-800">
                  {toast.type === "success" ? "Success" : "Error"}
                </p>
                <p className="text-gray-600 text-sm">{toast.message}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="w-full flex flex-col gap-7">
        <div>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="What's your good name?"
            required
          />
        </div>

        <button type="submit">
          <div className="cta-button group">
            <div className="bg-circle" />
            <p className="text">
              {loading ? "Sending..." : "Send Message"}
            </p>
            <div className="arrow-wrapper">
              <img src="/images/arrow-down.svg" alt="arrow" />
            </div>
          </div>
        </button>
      </form>
    </section>
  );
};
```

</details>

<details>
<summary><code>TailwindCSS Configuration (tailwind.config.js)</code></summary>

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
        'gradient-y': 'gradient-y 3s ease infinite',
        'gradient-rotate': 'gradient-rotate 3s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'gradient-y': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center bottom'
          },
        },
        'gradient-rotate': {
          '0%': {
            'background-position': '0% 50%',
            'transform': 'rotate(0deg)',
          },
          '50%': {
            'background-position': '100% 50%',
            'transform': 'rotate(180deg)',
          },
          '100%': {
            'background-position': '0% 50%',
            'transform': 'rotate(360deg)',
          },
        },
      },
    },
  },
  plugins: [],
}
```

</details>

<details>
<summary><code>Project Constants (src/constants/index.js)</code></summary>

```javascript
export const counterItems = [
  {
    value: "suchithubale@gmail.com",
    icon: "FaEnvelope",
    label: "Copy Email",
    action: "copy",
    subtext: "Click to copy email address",
  },
  {
    value: "/resume.pdf",
    icon: "FaFileAlt",
    label: "View Resume",
    action: "open",
    subtext: "Opens in new tab",
  },
  { value: 5, suffix: "+", label: "Completed Projects" },
  { value: 175, suffix: "+", label: "Solve LeetCode Problems" },
];

export const projects = [
  {
    image: "/images/project1.png",
    title: "Mock Interview Prep Platform",
    subtitle: "A full-stack web application for simulating technical and behavioral interviews with AI-driven feedback and analytics.",
    handle: "Personal Project",
    borderColor: "#2563EB",
    gradient: "linear-gradient(135deg,#2563EB,#38BDF8)",
    url: "https://github.com/SuchitHubale/ssh-mock-interview-prep",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Firebase",
      "Tailwind CSS",
      "Vercel",
      "VAPI",
      "Day.js",
    ],
    about: "SSH Mock Interview Prep is a modern web platform that allows users to practice technical, behavioral, and mixed interviews in a realistic environment.",
    role: "Full Stack Developer",
    category: "Web Application / EdTech",
    featured: true,
    duration: "Mar 2025 - Apr 2025",
    liveDemo: "https://interviewprepration.vercel.app",
    sourceCode: "https://github.com/SuchitHubale/Interview-Prepration",
  },
];
```

</details>

<details>
<summary><code>Custom CSS Animations (src/index.css)</code></summary>

```css
@import url("https://fonts.googleapis.com/css2?family=Mona+Sans:ital,wght@0,200..900;1,200..900&display=swap");
@import "tailwindcss";

:root {
  --gradient: radial-gradient(circle, #e5e5e5 0%, #fff 100%);
}

html,
body {
  width: 100dvw;
  overflow-x: hidden;
  background-color: black;
  color: white;
  scroll-behavior: smooth;
  font-family: "Mona Sans", sans-serif;
}

@theme {
  --font-sans: "Mona Sans", sans-serif;
  --color-white-50: #d9ecff;
  --color-black-50: #1c1c21;
  --color-black-100: #0e0e10;
  --color-black-200: #282732;
  --color-blue-50: #839cb5;
  --color-blue-100: #2d2d38;
}

@layer components {
  .hero-text {
    @apply flex flex-col justify-center md:text-[60px] text-[30px] font-semibold relative z-10 pointer-events-none;
    img {
      @apply size-8 md:size-10 object-contain;
    }
    .slide {
      @apply absolute pt-0 px-2 md:px-5 py-[30px] h-[48px] md:h-[78px] md:translate-y-1 translate-y-0 overflow-hidden;
    }
  }

  .cta-button {
    @apply relative overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 text-white font-semibold transition-all duration-300 hover:scale-105;

    .bg-circle {
      @apply absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 transition-opacity duration-300;
    }

    .text {
      @apply relative z-10;
    }

    .arrow-wrapper {
      @apply absolute right-4 top-1/2 -translate-y-1/2 transition-transform duration-300;
      
      img {
        @apply w-5 h-5;
      }
    }
  }

  .card-border {
    @apply relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-600/20 p-[1px];
  }
}

.slide {
  animation: wordSlider 8s infinite;
}

.wrapper {
  display: flex;
  flex-direction: column;
  animation: wordSlider 8s infinite;
}

@keyframes wordSlider {
  0%, 20% {
    transform: translateY(0);
  }
  25%, 45% {
    transform: translateY(-48px);
  }
  50%, 70% {
    transform: translateY(-96px);
  }
  75%, 95% {
    transform: translateY(-144px);
  }
  100% {
    transform: translateY(-192px);
  }
}
```

</details>

## <a name="links">🔗 Assets</a>

### **3D Models**
- `/models/optimized-room.glb` - Main 3D room environment
- `/models/computer-optimized.glb` - Computer model
- `/models/react_logo-transformed.glb` - React logo
- `/models/python-transformed.glb` - Python logo
- `/models/node-transformed.glb` - Node.js logo
- `/models/three.js-transformed.glb` - Three.js logo
- `/models/git-svg-transformed.glb` - Git logo

### **Images**
- `/images/profile.png` - Profile picture
- `/images/bg.png` - Background image
- `/images/project1.png` - Mock Interview project
- `/images/project2.png` - AI Fusion project
- `/images/project3.png` - Nike landing page
- `/images/textures/mat1.png` - Material texture
- `/assets/profile.png` - Profile card image
- `/assets/iconpattern.png` - Icon pattern
- `/assets/grain.webp` - Grain texture

### **Icons & SVGs**
- `/images/ideas.svg` - Ideas icon
- `/images/concepts.svg` - Concepts icon
- `/images/designs.svg` - Designs icon
- `/images/code.svg` - Code icon
- `/images/arrow-down.svg` - Arrow down
- `/images/arrow-right.svg` - Arrow right
- `/images/menu.svg` - Menu icon
- `/images/x.svg` - Close icon

### **Company Logos**
- `/images/logos/company-logo-1.png` to `/images/logos/company-logo-11.png`
- `/images/logos/react.png` - React logo
- `/images/logos/python.svg` - Python logo
- `/images/logos/node.png` - Node.js logo
- `/images/logos/three.png` - Three.js logo
- `/images/logos/git.svg` - Git logo

## <a name="more">🚀 More</a>

### **Performance Optimizations**
- Optimized 3D models with reduced polygon count
- Lazy loading for images and components
- Efficient GSAP animations with proper cleanup
- TailwindCSS purge for minimal CSS bundle
- Vite's fast HMR and build optimization

### **Accessibility Features**
- Semantic HTML structure
- Proper ARIA labels
- Keyboard navigation support
- High contrast color scheme
- Screen reader friendly content

### **Browser Support**
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Progressive enhancement
- Graceful degradation for older browsers

### **Deployment**
The project is optimized for deployment on:
- Vercel (recommended)

- GitHub Pages
- Any static hosting service

### **Contributing**
Feel free to contribute to this project by:
1. Forking the repository
2. Creating a feature branch
3. Making your changes
4. Submitting a pull request



---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/SuchitHubale">Suchit Hubale</a></p>
  <p>Connect with me on <a href="https://www.linkedin.com/in/suchit-hubale-40a920256/">LinkedIn</a> | <a href="https://x.com/suchithubale">Twitter</a> | <a href="https://www.instagram.com/suchit_hubale_/">Instagram</a></p>
</div>
