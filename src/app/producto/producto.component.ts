import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  producto: any; // Aquí almacenaremos el producto aleatorio

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.obtenerProductoAleatorio().subscribe({
      next: (data) => {
        this.producto = data; // Asigna el producto recibido de la API
      },
      error: (err) => {
        console.error('Error al obtener el producto:', err);
      }
    });
  }
}