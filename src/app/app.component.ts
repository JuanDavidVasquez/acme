import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Conductor } from 'src/app/models/conductor';
import { ConductorService } from 'src/app/service/conductor.service';
import { GLOBAL } from 'src/app/service/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'acme';

  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
  ) {


   }

   ngOnInit(): void {}
  conductor(){
    this._router.navigate(['/conductor']);
  }
  vehiculo(){
  this._router.navigate(['/vehiculo']);
  }
  propietario(){
  this._router.navigate(['/propietario']);
  }
}
