import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '@firebase/util';
import { RandomApiService } from '../service/random-api.service';
@Component({
  selector: 'app-patos',
  templateUrl: './patos.component.html',
  styleUrls: ['./patos.component.css']
})
export class PatosComponent implements OnInit {
  
  listaDePatos: Array<any> = []; 

  constructor(private randomApiService:RandomApiService) {
  }

  ngOnInit(): void {
    this.generarListaDePatos();
  }

  async generarListaDePatos(){

    let tam = 10;

    this.listaDePatos = [];

    for(let i = 0 ; i < tam ; i++){
      this.randomApiService.fetchImage().subscribe(
        data => {
          console.log(data)
          let image  = Object.values(data)[1];
          this.listaDePatos.push(image);
        }
      )
    }

  }
 
}
