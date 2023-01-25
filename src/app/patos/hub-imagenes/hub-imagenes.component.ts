import { Component, OnInit } from '@angular/core';
import { FireCrudService } from '../../service/fire-crud.service';
import { FavoriteDuck } from '../../shared/favorite-duck';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-hub-imagenes',
  templateUrl: './hub-imagenes.component.html',
  styleUrls: ['./hub-imagenes.component.css'],
})
export class HubImagenesComponent implements OnInit {
  listaLikes: Array<FavoriteDuck> = [];
  checked: any = -1;
  event?: MatRadioChange;
  duck?: FavoriteDuck[];
  constructor(
    private fireCrud: FireCrudService) {}

  ngOnInit(): void {this.getDataFavoritos();}

  async getDataFavoritos() {
    this.fireCrud
      .GetDucks()
      .valueChanges()
      .subscribe((data: any[]) => {
        this.listaLikes = data;
        this.fireCrud.getDuckList().subscribe((data) => {
          this.duck = data.map((e) => {
            return {
              id: e.payload.doc.id,
            };
          });

          for (let i = 0; i < this.listaLikes.length; i++) {
            this.listaLikes[i].id = this.duck[i].id;
          }
        });
      });
  }

 radioChange(e:any,index:any){
   this.checked=index;
 }
}
