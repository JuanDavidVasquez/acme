import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Vehiculo } from 'src/app/models/vehiculo';
import { VehiculoService } from 'src/app/service/vehiculo.service';
import { GLOBAL } from 'src/app/service/global';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css'],
  providers: [VehiculoService]
})
export class VehiculoComponent implements OnInit {

  public title : string;
  public status:any;
  public vehiculo!: Vehiculo;

  constructor(private _vehiculoService: VehiculoService) {
    this.title = 'Registro de Vehiculos';
    this.vehiculo = new Vehiculo('', '', '', '', '', '', '');
  }

  ngOnInit() {

  }

  onSubmit(form: any) {

 this._vehiculoService.register(this.vehiculo).subscribe(
      response => {
        if (response.status == "success") {
          this.status = response.status;
          form.reset();
        } else {
          this.status = 'error';
        }
      },
      error => {
        this.status = 'error';
        console.log(<any>error);
      }
    ); 

  }
}