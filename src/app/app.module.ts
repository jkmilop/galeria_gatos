import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatosComponent } from './patos/patos.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { ImagenesComponent } from './imagenes/imagenes.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { EditarPatoComponent } from './patos/editar-pato/editar-pato.component';

import { MatButtonModule } from '@angular/material/button';
import { ToastrModule } from 'ngx-toastr';
import { timeout } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgregarPatoComponent } from './patos/agregar-pato/agregar-pato.component';
import { MatExpansionModule } from '@angular/material/expansion';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { HubImagenesComponent } from './patos/hub-imagenes/hub-imagenes.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagenesComponent,
    PatosComponent,
    EditarPatoComponent,
    AgregarPatoComponent,
    HubImagenesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatRadioModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      preventDuplicates: true,
      closeButton: true,
      positionClass: 'toast-bottom-left',
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
