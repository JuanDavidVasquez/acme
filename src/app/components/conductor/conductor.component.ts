import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Conductor } from 'src/app/models/conductor';
import { ConductorService } from 'src/app/service/conductor.service';
import { GLOBAL } from 'src/app/service/global';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.component.html',
  styleUrls: ['./conductor.component.css'],
  providers: [ConductorService]
})
export class ConductorComponent implements OnInit {

  public title : string;
  public status:any;
  public conductor!: Conductor;

  constructor(private _conductorService: ConductorService) {
    this.title = 'Registro de Conductors';
    this.conductor = new Conductor('', '', '', '', '', '', '', '');
  }

  ngOnInit() {

  }

  onSubmit(form: any) {

 this._conductorService.register(this.conductor).subscribe(
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