"use client";

 
import { Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function FormulaireProjet() {
  const [formData, setFormData] = useState({
    images: [null, null, null, null] as (File | null)[],
    outils: [""],
    projets: [""],
    couleurs: ["", "", "", ""],
    description: "",
  });

  const [previews, setPreviews] = useState<string[]>([]);

  // 📸 Gérer l’upload et la prévisualisation d’images
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const file = e.target.files?.[0];
    if (file) {
      const newImages = [...formData.images];
      newImages[index] = file;
      setFormData((prev) => ({ ...prev, images: newImages }));

      const newPreviews = [...previews];
      newPreviews[index] = URL.createObjectURL(file);
      setPreviews(newPreviews);
    }
  };

  // 🧰 Gérer les champs dynamiques (outils, projets, couleurs, description)
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index?: number,
    field?: string
  ) => {
    const { name, value } = e.target;

    if (index !== undefined && field) {
      const updated = [...(formData)[field]];
      updated[index] = value;
      setFormData((prev) => ({ ...prev, [field]: updated }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // ➕ Ajouter un nouvel outil ou projet
  const addField = (field: "outils" | "projets") => {
    setFormData((prev) => ({
      ...prev,
      [field]: [...(prev)[field], ""],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    
    const data = new FormData();
    formData.images.forEach((file, i) => file && data.append(`image${i + 1}`, file));
    formData.outils.forEach((outil, i) => data.append(`outils[${i}]`, outil));
    formData.projets.forEach((projet, i) => data.append(`projets[${i}]`, projet));
    formData.couleurs.forEach((color, i) => data.append(`couleur${i + 1}`, color));
    data.append("description", formData.description);

   
    console.log("Formulaire envoyé :", Object.fromEntries(data.entries()));
    alert("Formulaire envoyé avec succès !");
  };

  return (
    <section  className="relative flex flex-col justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat text-white"
    style={{
      backgroundImage: "url('/images/background-grey.png')",
    }}>
<div className="flex justify-between pb-9  w-3xl">
  <Link href="/admin/projets" className="flex text-start">← Retour au projets</Link>
  <Link href="/" className="flex justify-center items-center text-orange-500">
    <Home />
    <p className="ml-2">Home</p>
  </Link>
</div>

  
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto p-8 bg-neutral-900 text-white   shadow-lg space-y-8"
    >
      <h2 className="text-3xl font-bold text-center mb-8">Ajouter un Projet</h2>
 
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-2 text-orange-400 flex items-center justify-between">Images du projet</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {formData.images.map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <label className="w-full cursor-pointer border-2 border-dashed border-neutral-700 -lg p-4 text-center hover:border-orange-400 transition">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, i)}
                  className="hidden"
                />
                {previews[i] ? (
                  <Image
                    src={previews[i]}
                    alt={`Preview ${i + 1}`}
                    className="w-full h-48 object-cover -lg"
                  />
                ) : (
                  <span className="text-neutral-400">Clique pour importer une image</span>
                )}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* OUTILS */}
      <div>
        <h3 className="text-xl font-semibold mb-2 text-orange-400 flex items-center justify-between">
          Outils utilisés
          <button
            type="button"
            onClick={() => addField("outils")}
            className="text-white bg-orange-500 hover:bg-orange-600 px-2 py-1 -lg text-sm"
          >
            + Ajouter
          </button>
        </h3>
        <div className="space-y-3">
          {formData.outils.map((outil, i) => (
            <input
              key={i}
              type="text"
              placeholder={`Outil ${i + 1}`}
              value={outil}
              onChange={(e) => handleChange(e, i, "outils")}
              className="p-2 bg-neutral-800 border border-neutral-700 -lg w-full"
            />
          ))}
        </div>
      </div>

      {/* PROJETS */}
      <div>
        <h3 className="text-xl font-semibold mb-2 text-orange-400 flex items-center justify-between">
          Projet
          <button
            type="button"
            onClick={() => addField("projets")}
            className="text-white bg-orange-500 hover:bg-orange-600 px-2 py-1 -lg text-sm"
          >
            + Ajouter
          </button>
        </h3>
        <div className="space-y-3">
          {formData.projets.map((projet, i) => (
            <input
              key={i}
              type="text"
              placeholder={`Projet ${i + 1}`}
              value={projet}
              onChange={(e) => handleChange(e, i, "projets")}
              className="p-2 bg-neutral-800 border border-neutral-700 -lg w-full"
            />
          ))}
        </div>
      </div>

 
      <div>
        <h3 className="text-xl font-semibold mb-2 text-orange-400">Codes couleur</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {formData.couleurs.map((color, i) => (
            <div key={i} className="flex flex-col items-center">
              <input
                type="color"
                value={color || "#000000"}
                onChange={(e) => handleChange(e, i, "couleurs")}
                className="w-16 h-10 border border-neutral-600 "
              />
              <input
                type="text"
                placeholder="#ffffff"
                value={color}
                onChange={(e) => handleChange(e, i, "couleurs")}
                className="mt-2 p-1 bg-neutral-800 border border-neutral-700  text-center w-full"
              />
            </div>
          ))}
        </div>
      </div>
 
      <div>
        <h3 className="text-xl font-semibold mb-2 text-orange-400">Description</h3>
        <textarea
          name="description"
          rows={4}
          placeholder="Décris ton projet ici..."
          value={formData.description}
          onChange={handleChange}
          className="p-2 bg-neutral-800 border border-neutral-700  w-full"
        />
      </div>

 
      <div className="text-center">
        <button
          type="submit"
          className="px-6 py-3 bg-orange-500 hover:bg-orange-600   font-semibold text-white transition"
        >
          Enregistrer le projet
        </button>
      </div>
    </form>
    </section>
  );
}
