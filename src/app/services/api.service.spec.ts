import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Importar el módulo de pruebas HTTP
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController); // Inyectar HttpTestingController
  });

  afterEach(() => {
    httpMock.verify(); // Verificar que no hay solicitudes pendientes
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch a random product from the API', () => {
    const mockProduct = { id: 1, nombre: 'Producto A', precio: 100 }; // Producto de prueba

    service.obtenerProductoAleatorio().subscribe(product => {
      expect(product).toEqual(mockProduct); // Verificar que el producto recibido coincide con el simulado
    });

    // Simular la solicitud HTTP y proporcionar una respuesta
    const req = httpMock.expectOne('http://localhost/api/api.php'); // Cambia la URL según tu servicio
    expect(req.request.method).toBe('GET'); // Verificar que es una solicitud GET
    req.flush(mockProduct); // Simular la respuesta con el producto de prueba
  });
});
