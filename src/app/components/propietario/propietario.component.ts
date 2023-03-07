import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Propietario } from 'src/app/models/propietario';
import { PropietarioService } from 'src/app/service/propietario.service';
import { GLOBAL } from 'src/app/service/global';

@Component({
  selector: 'app-propietario',
  templateUrl: './propietario.component.html',
  styleUrls: ['./propietario.component.css'],
  providers: [PropietarioService]
})
export class PropietarioComponent implements OnInit {
  public title : string;
  public status:any;
  public propietario!: Propietario;

  constructor(private _propietarioService: PropietarioService) {
    this.title = 'Registro de Propietarios';
    this.propietario = new Propietario('', '', '', '', '', '', '', '');
  }

  ngOnInit() {

  }

  onSubmit(form: any) {

 this._propietarioService.register(this.propietario).subscribe(
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