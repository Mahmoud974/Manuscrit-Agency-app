"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";

export default function Page() {
  const images = [
    "/images/portfolios/menu.png",
    "/images/portfolios/menu.png",
    "/images/portfolios/menu.png",
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      <div className="relative">
        <Navbar />

        <section
          className="relative -mt-52 flex flex-col items-center justify-center text-white px-4 sm:px-6 bg-cover bg-center bg-no-repeat min-h-screen"
          style={{
            backgroundImage: "url('/images/background-grey.png')",
          }}
        >
          
          <nav className="text-sm -mb-10 relative z-10 mt-48 sm:mt-60 w-full flex justify-start container">
            <div className="pl-2 sm:pl-0">
              <Link
                href="/"
                className="text-orange-500 hover:underline font-medium"
              >
                Accueil
              </Link>{" "}
              <span className="text-gray-500"> &gt; </span>{" "}
              <span className="text-gray-200">O{`'`}Pizza</span>
            </div>
          </nav>

          {/* Titre principal */}
          <div className="relative z-10 text-center max-w-4xl mx-auto mb-8 sm:mb-16 px-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-white">
              O{`'`}Pizza
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-medium text-gray-100">
              Identité graphique – Stylé · Audacieux · Délicieux
            </p>
          </div>

          {/* Image visible uniquement sur mobile */}
          <div className="flex justify-center mb-12 sm:mb-20 relative z-10 w-full md:hidden">
            <Image
              src="/images/portfolios/menu.png"
              alt="Logo O'Pizza"
              width={500}
              height={500}
              className="object-contain sm:w-80 h-auto"
            />
          </div>

          {/* Grille principale */}
          <div className="grid grid-cols-1 md:grid-cols-3 container mb-16 items-start mx-auto gap-10 sm:gap-12 px-4 sm:px-6">
            {/* Colonne 1 */}
            <div>
              <div className="flex flex-row md:flex-col justify-between gap-6">
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 text-orange-500">
                    Outils utilisés
                  </h2>
                  <ul className="space-y-2 text-base sm:text-lg">
                    <li>• Adobe Photoshop</li>
                    <li>• Adobe Illustrator</li>
                  </ul>
                </div>

                {/* Bloc Projet visible à côté sur mobile */}
                <div className="flex-1 md:hidden">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 text-orange-500">
                    Projet
                  </h2>
                  <ul className="space-y-2 text-base sm:text-lg">
                    <li>• Identité visuelle</li>
                    <li>• Logo mascotte</li>
                  </ul>
                </div>
              </div>

              {/* Couleurs */}
              <h2 className="text-xl sm:text-2xl font-bold mt-10 mb-4 text-orange-500">
                Code(s) couleur(s)
              </h2>
              <div className="w-full flex justify-center mt-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full max-w-6xl">
                  <div className="h-20 sm:h-24 bg-[#1717bc] flex items-center justify-center text-white font-medium text-sm sm:text-lg">
                    #1717bc
                  </div>
                  <div className="h-20 sm:h-24 bg-[#bbc2ff] flex items-center justify-center text-black font-medium text-sm sm:text-lg">
                    #bbc2ff
                  </div>
                  <div className="h-20 sm:h-24 bg-[#ff6942] flex items-center justify-center text-white font-medium text-sm sm:text-lg">
                    #ff6942
                  </div>
                  <div className="h-20 sm:h-24 bg-[#ffcbbf] flex items-center justify-center text-black font-medium text-sm sm:text-lg">
                    #ffcbbf
                  </div>
                </div>
              </div>

              {/* Description */}
              <h2 className="text-xl sm:text-2xl font-bold mt-10 mb-4 text-orange-500">
                Description
              </h2>
              <div className="w-full flex justify-center mt-4">
                <p className="max-w-7xl text-gray-200 text-base sm:text-lg text-start   sm:px-0 leading-relaxed">
                  Une identité visuelle savoureuse qui combine style et audace. 
                  Cette composition met en valeur les couleurs chaleureuses et modernes de la marque, 
                  ainsi qu’un logo dynamique et expressif.
                </p>
              </div>
            </div>

            {/* Colonne 2 : Projet (desktop seulement) */}
            <div className="hidden md:block text-center md:text-left">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-orange-500">
                Projet
              </h2>
              <ul className="space-y-2 text-base sm:text-lg">
                <li>• Identité visuelle</li>
                <li>• Logo mascotte</li>
              </ul>
            </div>

            {/* Colonne 3 : Image */}
            <div className="hidden md:flex flex-col items-center">
              <Image
                src="/images/portfolios/menu.png"
                alt="Logo O'Pizza"
                width={500}
                height={500}
                className="object-contain"
              />
            </div>
          </div>

          {/* ✅ Carrousel mobile élégant */}
          <div className="relative w-full mb-16 md:hidden">
            <div className="overflow-hidden relative">
              {/* Images */}
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {images.map((img, index) => (
                  <div key={index} className="min-w-full flex justify-center">
                    <Image
                      src={img}
                      alt={`Mockup ${index + 1}`}
                      width={600}
                      height={600}
                      className="  shadow-lg object-contain"
                    />
                  </div>
                ))}
              </div>

              {/* Flèches */}
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-orange-500 transition text-white p-2 rounded-full"
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-orange-500 transition text-white p-2 rounded-full"
              >
                →
              </button>

              {/* Indicateurs */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                  <div
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-3 h-3   cursor-pointer transition-all ${
                      current === i
                        ? "bg-orange-500 scale-110"
                        : "bg-gray-400"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop grid */}
          <div className="hidden md:grid grid-cols-3 gap-10 items-center relative z-10 mb-16  ">
            {images.map((img, i) => (
              <div key={i} className="flex justify-center">
                <Image
                  src={img}
                  alt={`Mockup ${i + 1}`}
                  width={600}
                  height={600}
                  className="shadow-md object-contain w-full sm:w-[400px] md:w-[500px] h-auto  "
                />
              </div>
            ))}
          </div>

          {/* Navigation entre projets */}
          <div className="container flex   justify-between items-center mt-12 mb-24    text-sm sm:text-base">
            <Link
              href="/portfolio/precedent"
              className="text-orange-500 hover:text-orange-400 transition font-medium flex items-center gap-2"
            >
              ← Massala Mayotte
            </Link>

            <Link
              href="/portfolio/suivant"
              className="text-orange-500 hover:text-orange-400 transition font-medium flex items-center gap-2"
            >
              Relax Girl →
            </Link>
          </div>
        </section>
      </div>
      <Contact/>

      <Footer />
    </>
  );
}
