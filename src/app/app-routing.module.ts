import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './pages/main/main.component';
import { CultureComponent } from './pages/culture/culture.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { RoadmapsComponent } from './pages/roadmaps/roadmaps.component';
import { ConspiraciesComponent } from './pages/conspiracies/conspiracies.component';
import { ManifestoComponent } from './pages/manifesto/manifesto.component';

const routes: Routes = [
  {path: '',redirectTo: '/home',pathMatch: 'full'},
  {path: 'home', component: MainComponent},
  {path: 'manifesto', component: ManifestoComponent},
  {path: 'culture', component: CultureComponent},
  {path: 'brands', component: BrandsComponent},
  {path: 'roadmaps', component: RoadmapsComponent},
  {path: 'conspiracies', component: ConspiraciesComponent},
  {path: '**',  component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
