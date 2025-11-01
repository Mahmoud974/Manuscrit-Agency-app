"use client";
import { useEffect, useState, useRef } from "react";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);

  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

 
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

   
  useEffect(() => {
    if (isVisible) {
      const expTarget = 10;
      const projTarget = 100;
      const clientTarget = 94;

      let expCount = 0;
      let projCount = 0;
      let clientCount = 0;

      const interval = setInterval(() => {
        if (expCount < expTarget) expCount += 1;
        if (projCount < projTarget) projCount += 2;
        if (clientCount < clientTarget) clientCount += 1;

        setExperience(expCount);
        setProjects(projCount);
        setClients(clientCount);

        if (expCount >= expTarget && projCount >= projTarget && clientCount >= clientTarget) {
          clearInterval(interval);
        }
      }, 30);
    }
  }, [isVisible]);

  return (
    <section className="relative h-[100vh] overflow-hidden text-white flex flex-col">
      {/* Vidéo de fond */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/images/background-video.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo HTML5.
      </video>

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Contenu principal */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        <Navbar />
{/* Bloc de texte */}
        <div className="container mx-auto text-left px-6  -mt-16" ref={sectionRef}>
          <p className="text-5xl md:text-6xl mt-96 font-bold leading-tight mb-4">
            Créez Votre Identité Visuelle <br />
            avec un{" "}
            <span className="bg-orange-500 px-3 py-1 transform">
              Site Unique
            </span>{" "}
            – <br />
            Design & Professionnalisme
          </p>

          <p className="text-xl md:text-2xl text-gray-200 max-w-5xl ">
            Un site web pensé sur mesure pour refléter votre image, captiver vos
            visiteurs et booster votre activité.
          </p>

          {/* Section chiffres clés avec compteur */}
          <div className="flex flex-col md:flex-row justify-start items-start text-left mt-6">
            {/* Bloc 1 */}
            <div className="md:pr-6 pb-32">
              <h3 className="text-4xl font-bold text-orange-500 leading-none mb-0">
                {experience}+
              </h3>
              <p className="uppercase tracking-wide font-semibold text-orange-500 mb-1">
                Expérience
              </p>
              <p className="text-gray-300 text-sm">
                Des années à transformer visuels<br /> percutants.
              </p>
            </div>

            {/* Séparateur vertical */}
            <div className="hidden md:block h-28 border-l border-slate-100 mx-6"></div>

            {/* Bloc 2 */}
            <div className="md:px-0 pb-32">
              <h3 className="text-4xl font-bold text-orange-500 leading-none mb-0">
                {projects}+
              </h3>
              <p className="uppercase tracking-wide font-semibold text-orange-500 mb-1">
                Projets Réalisés
              </p>
              <p className="text-gray-300 text-sm">
                Sites web modernes, logos, flyers et<br /> designs sur mesure.
              </p>
            </div>

            {/* Séparateur vertical */}
            <div className="hidden md:block h-28 border-l border-slate-100 mx-6"></div>

            {/* Bloc 3 */}
            <div className="md:pl-0 pb-32">
              <h3 className="text-4xl font-bold text-orange-500 leading-none mb-0">
                {clients}%
              </h3>
              <p className="uppercase tracking-wide font-semibold text-orange-500 mb-1">
                Clients Satisfaits
              </p>
              <p className="text-gray-300 text-sm">
                Sites web modernes, logos,<br /> flyers et designs sur mesure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
