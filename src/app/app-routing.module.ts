import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PatosComponent } from './patos/patos.component';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { EditarPatoComponent } from './patos/editar-pato/editar-pato.component';
import { AgregarPatoComponent } from './patos/agregar-pato/agregar-pato.component';
import { HubImagenesComponent } from './patos/hub-imagenes/hub-imagenes.component';

const routes: Routes = [
  {path: '', component:PatosComponent},
  {path: 'imagenes', component:ImagenesComponent},
  {path: 'patos', component:PatosComponent},
  {path: 'patos/editarPato', component:EditarPatoComponent},
  {path: 'patos/agregarPato', component:AgregarPatoComponent},
  {path: 'patos/agregarPato/imagenes', component:HubImagenesComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
