// src/app/app.component.ts
// Este es el componente principal de la aplicación

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CharacterService } from './services/character.service';
import { Character } from './models/character.model';

@Component({
  selector: 'app-root',
  standalone: true,
  // Importamos los módulos que vamos a necesitar en el template
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // Lista de personajes que vamos a mostrar
  personajes: Character[] = [];

  // Variable para mostrar mensaje de "Cargando..."
  cargando: boolean = false;

  // Variable para el buscador
  nombreBusqueda: string = '';

  // Variable para mostrar errores
  hayError: boolean = false;

  // Inyectamos el servicio que creamos
  constructor(private characterService: CharacterService) {}

  // ngOnInit se ejecuta cuando el componente se crea
  ngOnInit(): void {
    this.cargarPersonajes();
  }

  // Método para cargar todos los personajes
  cargarPersonajes(): void {
    this.cargando = true;   // Mostramos "Cargando..."
    this.hayError = false;

    this.characterService.getCharacters().subscribe({
      next: (respuesta) => {
        // Guardamos los personajes que nos devuelve la API
        this.personajes = respuesta.results;
        this.cargando = false;  // Ocultamos "Cargando..."
      },
      error: (error) => {
        console.error('Error al cargar personajes:', error);
        this.cargando = false;
        this.hayError = true;
      }
    });
  }

  // Método para buscar por nombre (nivel extra)
  buscarPersonaje(): void {
    // Si el campo está vacío, cargamos todos
    if (this.nombreBusqueda.trim() === '') {
      this.cargarPersonajes();
      return;
    }

    this.cargando = true;
    this.hayError = false;

    this.characterService.buscarPorNombre(this.nombreBusqueda).subscribe({
      next: (respuesta) => {
        this.personajes = respuesta.results;
        this.cargando = false;
      },
      error: (error) => {
        console.error('No se encontraron personajes:', error);
        this.personajes = [];
        this.cargando = false;
        this.hayError = true;
      }
    });
  }

  // Método para limpiar la búsqueda
  limpiarBusqueda(): void {
    this.nombreBusqueda = '';
    this.cargarPersonajes();
  }

  // Método para obtener el color según el estado del personaje
  getColorEstado(estado: string): string {
    if (estado === 'Alive') return 'verde';
    if (estado === 'Dead') return 'rojo';
    return 'gris';
  }

}
