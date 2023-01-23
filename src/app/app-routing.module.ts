import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PatosComponent } from './patos/patos.component';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { EditarPatoComponent } from './patos/editar-pato/editar-pato.component';
import { AgregarPatoComponent } from './patos/agregar-pato/agregar-pato.component';

const routes: Routes = [
  {path: '', component:PatosComponent},
  {path: 'imagenes', component:ImagenesComponent},
  {path: 'patos', component:PatosComponent},
  {path: 'patos/editarPato', component:EditarPatoComponent},
  {path: 'patos/agregarPato', component:AgregarPatoComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
