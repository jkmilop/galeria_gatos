import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {

  dataImagen: any;

  constructor(private http: HttpClient) {this.crearImagen();}

  ngOnInit(): void {
  }

  async crearImagen(){

    // Id name en proxy.conf.json
    let urlBase = "/api/v2/random";

    await this.http.get(urlBase,{headers:new HttpHeaders({ "Content-Type": "application/JSON" })}).subscribe(
      data => { 
        this.dataImagen = Object.values(data)[1];

      }
    )
  }

}
