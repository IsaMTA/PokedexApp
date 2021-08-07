import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonTableComponent } from './components/pokemon-table/pokemon-table.component';

const routes: Routes = [ //Rutas en la app
  {path: 'home', component: PokemonTableComponent},
  {path: 'pkDetail/:id', component: PokemonDetailComponent}, //Pasará el parámetro id
  {path: '', pathMatch: 'full', redirectTo: 'home'}, //Redirección a home
  {path: '**', pathMatch: 'full', redirectTo: 'home'} //Caso de error se dirige a home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
