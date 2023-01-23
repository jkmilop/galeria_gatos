import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FireCrudService } from 'src/app/service/fire-crud.service';
import { RamdonDuck } from 'src/app/shared/ramdon-duck';

@Component({
  selector: 'app-editar-pato',
  templateUrl: './editar-pato.component.html',
  styleUrls: ['./editar-pato.component.css']
})
export class EditarPatoComponent implements OnInit {

  datosDelPato: any = []; 
  public formularioRegistro: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
    private fireCrud: FireCrudService,
    public fb: FormBuilder,
    public toast: ToastrService) {

    this.formularioRegistro = this.fb.group({
      nombre: [''],
      color: [''],
      edad: [''],
    });
   }

  ngOnInit(): void {
    this.getParams();
  }

  getParams(){
    this.activatedRoute.params.subscribe(
      params => {
        this.datosDelPato = params;
  
        this.setInputValues(params);
      }
    )
  }

  setInputValues(params:any){
    this.formularioRegistro.controls['nombre'].setValue(params['nombre'])
    this.formularioRegistro.controls['edad'].setValue(params['edad'])
    this.formularioRegistro.controls['color'].setValue(params['color'])
  }

  editarPato(){

    let pato : RamdonDuck = {
      id:  this.datosDelPato.id,
      link: this.datosDelPato.link,
      nombre: this.formularioRegistro.controls['nombre'].value,
      edad: this.formularioRegistro.controls['edad'].value,
      color: this.formularioRegistro.controls['color'].value
    }

    this.fireCrud.updateDuck(pato);
    
    this.showToast();
    
  }

  showToast(){
      this.toast.success("Se ha editado correctamente.","Pato editado",
      )
  }

}
