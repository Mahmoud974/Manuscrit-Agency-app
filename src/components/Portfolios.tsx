import Image from "next/image";

export default function Portfolios() {
  const projects = [
    {
      id: 1,
      title: "Direction artistique du spiritueux L’Rhum",
      category: ["Logo", "Direction artistique", "Spiritueux"],
      image: "/images/portfolios/menu.png",
    },
    {
      id: 2,
      title: "Création de packaging pour Maison Jeacom",
      category: ["Logo", "Packaging", "Alimentaire"],
      image: "/images/portfolios/menu.png",
    },
    {
      id: 3,
      title: "Maëlle Ranquet",
      category: ["Logo", "Identité visuelle"],
      image: "/images/portfolios/menu.png",
    },
  ];

  return (
   <section
  className="relative min-h-screen bg-cover bg-center bg-no-repeat pt-44 pb-24 text-white"
  style={{
    backgroundImage: "url('/images/background-grey.png')",
  }}
>

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 container mx-auto text-center px-4">
        {/* Titre */}
        <h2 className="text-5xl font-bold mb-8 inline-block">
  <span className="bg-orange-500 px-6 py-2 inline-block transform -rotate-2">
    Portfolios
  </span>
</h2>


 
        <p className=" text-lg max-w-4xl mx-auto text-orange-500 mb-16">
          Chaque collaboration démarre par l’émergence d’un problème, se poursuit
          par la mise en place de solutions graphiques pour aboutir à l’atteinte
          de vos objectifs.
        </p>

        
        <div className="grid md:grid-cols-3 gap-8 justify-center">
          {projects.map((project) => (
            <div key={project.id} >
            <div
             
              className="bg-[#1e1e1e]/70   shadow-lg overflow-hidden transition-transform hover:scale-105"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={400}
                className="w-full object-cover"
              />
             
            </div>
             <div className="p-5 text-left">
             <div className="flex flex-wrap gap-2 mb-3">
               {project.category.map((cat, i) => (
                 <span
                   key={i}
                   className="bg-purple-700 text-md   rounded-full px-3 py-1  "
                 >
                   {cat}
                 </span>
               ))}
             </div>
             <p className="text-white font-semibold text-xl leading-snug">
               {project.title}
             </p>
           </div></div>
          ))}
        </div>
 
        <div className="mt-16">
          <button className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-10   text-lg transition">
            + DE PROJETS
          </button>
        </div>
      </div>
    </section>
  );
}
