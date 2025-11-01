// src/api/getItems/route.ts
import { NextResponse } from "next/server";


const projets = [
  { id: 1, nom: "O'Pizza", categorie: "Identité visuelle", date: "2024-03-12" },
  { id: 2, nom: "Burger King Concept", categorie: "Branding", date: "2024-04-05" },
  { id: 3, nom: "Portfolio V2", categorie: "Web Design", date: "2024-05-10" },
  { id: 4, nom: "Projet Marketing", categorie: "Stratégie", date: "2024-06-01" },

];
export async function GET() {
  return NextResponse.json({ projets });
}
