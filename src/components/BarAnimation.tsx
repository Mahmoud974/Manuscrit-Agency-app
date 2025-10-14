"use client"
import React from "react"

export default function BarAnimation() {
  const items = [
    "LOGO",
    "IDENTITÉ VISUELLE",
    "CHARTE GRAPHIQUE",
    "FLYER",
    "CARTE DE VISITE",
    "AFFICHE",
    "BROCHURE",
    "SITE VITRINE",
    "SITE E-COMMERCE",
    "UI / UX DESIGN",
    "RÉSEAUX SOCIAUX",
    "PACKAGING",
    "BRANDING",
    "CRÉATION SUR MESURE",
    "WEB DESIGN",
    "REFONTE DE SITE",
    "ANIMATION VISUELLE",
    "MAQUETTE FIGMA",
    "SEO",
    "MAINTENANCE WEB",
  ]

  const repeatedItems = Array(6).fill(items).flat()

  return (
    <div className="relative z-20 -mt-16  ">
      {/* Bande inclinée */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-700 transform -rotate-1 origin-top scale-110 shadow-lg">
        <div className="py-10 text-3xl font-extrabold text-purple-950 uppercase tracking-wide whitespace-nowrap overflow-hidden">
          <div className="marquee">
            <div className="marquee__inner">
              {repeatedItems.map((item, index) => (
                <React.Fragment key={`${item}-${index}`}>
                  <span className="mx-8">{item}</span>
                  <span className="text-purple-950 text-2xl">✦</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
