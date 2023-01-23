import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '@firebase/util';
import { RandomApiService } from '../service/random-api.service';
import { FireCrudService } from '../service/fire-crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RamdonDuck } from '../shared/ramdon-duck';
@Component({
  selector: 'app-patos',
  templateUrl: './patos.component.html',
  styleUrls: ['./patos.component.css']
})
export class PatosComponent implements OnInit {

  listaLikes: Array<RamdonDuck> = []; 

  duck?: RamdonDuck[];

  constructor(
    private fireCrud : FireCrudService,
    private randomApiService:RandomApiService,
    private router:Router) {

  }

  ngOnInit(): void {
    this.getDataLikePatos();
 
  }

  async getDataLikePatos() {
    
    
    this.fireCrud.GetDucks().valueChanges().subscribe(
      ( data: any[]) => {
        
        // get likes (lista de likes de imagenes) 
        this.listaLikes = data;
        
        // get id document Firebase collection
        (this.fireCrud.getDuckList()).subscribe(
          ( data ) => {
              this.duck = data.map(
                e=> {
                  return{
                    id: e.payload.doc.id
                  }
                }
              );
    
              for(let i = 0 ; i < this.listaLikes.length  ; i++){
                this.listaLikes[i].id = this.duck[i].id
              }     
          }
        );
       
      }
    );
 

   }

  agregar(){
    this.router.navigate(['patos/agregarPato'])
  }

  editar(pato: any){
    this.router.navigate(['patos/editarPato', pato])
  }

  eliminar(pato:any){
    this.fireCrud.deleteDuck(pato);
    this.getDataLikePatos();
  }

}
