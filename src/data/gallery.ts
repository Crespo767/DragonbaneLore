export type GalleryItem = {
  id: string;
  title: string;
  category: "Capas e Aberturas" | "Povos" | "Ruínas" | "Criaturas" | "Mapas e Paisagens" | "Ornamentos e Molduras";
  description: string;
  src: string;
  credit: string;
  spoilerSafe: true;
};
