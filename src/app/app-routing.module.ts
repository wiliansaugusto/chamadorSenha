import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SehnaComponent } from './sehna/sehna.component';
import { ClienteComponent } from './cliente/cliente.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'senha', component:SehnaComponent},
  {path:'cliente', component:ClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
