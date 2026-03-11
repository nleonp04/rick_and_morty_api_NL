// src/app/services/character.service.ts
// El servicio es el encargado de pedir los datos a la API
// Es como el "mensajero" entre nuestra app y el servidor

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/character.model';

@Injectable({
  providedIn: 'root'  // Esto hace que el servicio esté disponible en toda la app
})
export class CharacterService {

  // La URL base de la API
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  // Inyectamos HttpClient para poder hacer peticiones HTTP
  constructor(private http: HttpClient) { }

  // Método para obtener todos los personajes
  getCharacters(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiUrl);
  }

  // Método para buscar personajes por nombre (nivel extra)
  buscarPorNombre(nombre: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}?name=${nombre}`);
  }

}
