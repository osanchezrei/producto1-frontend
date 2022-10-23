import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReproductorComponent } from './reproductor/reproductor.component';

const routes: Routes = [
  {
    path: 'listado',
    component: JugadoresComponent,
    children: [
      {path: 'detalle', component: DetalleComponent},
    ]},
  {path: '', redirectTo: '/listado', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
