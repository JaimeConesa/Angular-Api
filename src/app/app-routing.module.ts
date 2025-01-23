import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './producto/producto.component'; // Ajusta la ruta según la ubicación del archivo

const routes: Routes = [
  { path: 'producto', component: ProductoComponent },
  { path: '', redirectTo: '/producto', pathMatch: 'full' }, // Redirige al componente producto por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
