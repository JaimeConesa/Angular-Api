import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'despliegue';
}
@Injectable({
  providedIn: 'root'
})


export class ApiService {
  private apiUrl = 'http://localhost/api/api.php'; // Cambia la URL según tu configuración

  constructor(private http: HttpClient) {}

  getProductos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl); // Cambia `any[]` según la estructura de tu respuesta
  }
  
}

