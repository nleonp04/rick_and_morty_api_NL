// src/app/models/character.model.ts
// Este archivo define la "forma" de los datos que nos llegan de la API
// Es como un molde para los personajes

export interface Character {
  id: number;
  name: string;
  status: string;   // "Alive", "Dead" o "Unknown"
  species: string;  // "Human", "Alien", etc.
  image: string;    // URL de la imagen
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
}

// Esta interface define la respuesta completa que devuelve la API
export interface ApiResponse {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: Character[];
}
