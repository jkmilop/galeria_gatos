import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-patos',
  templateUrl: './patos.component.html',
  styleUrls: ['./patos.component.css']
})
export class PatosComponent implements OnInit {

  constructor(private http: HttpClient) {this.crearImagen();}

  ngOnInit(): void {
  }

  crearImagen(){

    let urlBase = "/api/random";

    this.http.get(urlBase,{headers:new HttpHeaders({ "Content-Type": "application/JSON" })}).subscribe(
      data => {
        console.log(data);
      }
    )
  }
}
