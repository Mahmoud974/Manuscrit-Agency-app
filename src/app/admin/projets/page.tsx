"use client";
import {  Home } from "lucide-react";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { CirclePlus } from 'lucide-react';
export default function Page() {
    const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("/api/getItems");
        if (!res.ok) throw new Error("Erreur API");
        const data = await res.json();
        setData(data.projets);
      } catch (err) {
        console.error("Erreur lors du fetch :", err);
      }
    };
    getData();
  }, []);

  return (
    <div
      className="relative flex flex-col justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/background-grey.png')",
      }}
    >
         <Link href="/" className="flex justify-start w-5xl pb-5 cursor-pointer  items-center text-orange-500">
    <Home />
    <p className="ml-2">Home</p>
  </Link>
      
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 w-full max-w-5xl px-8 py-10 bg-white/90 backdrop-blur-sm shadow-2xl">
        <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">
          Liste des projets
        </h1>
        <p className="text-2xl pb-5 text-right">{data?.length} projets</p>

        {/* Tableau scrollable */}
        <div className="overflow-y-auto max-h-[400px] border-y border-gray-300 shadow-inner">
          <table className="min-w-full text-left text-gray-700 text-lg">
            <thead className="bg-gray-200 text-gray-800 uppercase text-base sticky top-0 z-10">
              <tr>
                <th className="px-8 py-4">#</th>
                <th className="px-8 py-4">Nom</th>
                <th className="px-8 py-4">Catégorie</th>
                <th className="px-8 py-4">Date</th>
                <th className="px-8 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((projet:any) => (
                <tr
                  key={projet.id}
                  className="hover:bg-gray-100 transition-all text-gray-800 border-b cursor-pointer"
                >
                  <td className="px-8 py-5 text-xl">{projet.id}</td>
                  <td className="px-8 py-5 font-semibold text-xl">{projet.nom}</td>
                  <td className="px-8 py-5 text-lg">{projet.categorie}</td>
                  <td className="px-8 py-5 text-lg">{projet.date}</td>
                  <td className="px-8 py-5 flex justify-center">
                    <button className="bg-purple-800 text-white px-5 py-2 hover:bg-purple-950 mr-3 text-lg font-medium cursor-pointer">
                      Modifier
                    </button>
                    <button className="bg-orange-600 text-white px-5 py-2 hover:bg-orange-700 text-lg font-medium cursor-pointer">
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bouton Ajouter en bas */}
        <Link href="/admin/projets/edit" className="flex justify-end mt-8">
          <button className="bg-gray-800 flex items-center text-white px-6 py-3 text-lg font-semibold hover:bg-green-800 cursor-pointer">
            <CirclePlus/>
           <p className="ml-2">Ajouter un projet</p>
          </button>
        </Link>
      </div>
    </div>
  );
}
