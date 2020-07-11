import { NgModule } from '@angular/core';
// dependecies
import { Routes, RouterModule } from '@angular/router';

// pages
import { MapComponent } from './pages/map/map.component';
import { GraphicsComponent } from './pages/graphics/graphics.component';
import { CommercesComponent } from './pages/commerces/commerces.component';

const routes: Routes = [
  {path: 'map', component: MapComponent},
  {path: 'graphics', component: GraphicsComponent},
  {path: 'commerces', component: CommercesComponent},
  {path: '**', redirectTo: 'map'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
