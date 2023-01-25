import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FireCrudService } from '../service/fire-crud.service';
import { RandomApiService } from '../service/random-api.service';
import { RamdonDuck } from '../shared/ramdon-duck';
import { FavoriteDuck } from '../shared/favorite-duck';


@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css'],
})
export class ImagenesComponent implements OnInit {
  listaDePatos: Array<any> = [];
  listaLikes: Array<any> = [];

  isEnable?: Boolean = false;

  constructor(
    private fireCrud: FireCrudService,
    private randomApiService: RandomApiService,
    private toastr: ToastrService
  ) {
    this.generarListaDePatos();
  }

  ngOnInit(): void {
    this.getData();
  }

  async generarListaDePatos() {
    let tam = 10;

    this.listaDePatos = [];

    for (let i = 0; i < tam; i++) {
      this.randomApiService
        .fetchImage()
        .subscribe((data: { [s: string]: unknown } | ArrayLike<unknown>) => {
          //console.log(data)
          let image = Object.values(data)[1] as string;

          let duck: RamdonDuck = {
            link: image,
          };

          this.listaDePatos.push(duck);
        });
    }
  }

  likeDuck(patoUrl: any): void {
    let duck: FavoriteDuck = {
      link: patoUrl.link,
    };

    this.fireCrud.AddFavorite(duck);
    this.notaRecordatoria();
  }

  getData() {
    this.fireCrud
      .GetDucks()
      .valueChanges()
      .subscribe((data: any[]) => {
        this.listaLikes = data;
      });
  }

  notaRecordatoria() {
    this.toastr.success(
      'Cada vez que recarga la pagina muestra 10 imagenes aleatorias.',
      'Success'
    );
  }
}
