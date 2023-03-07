import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Import Rutas */
import { PropietarioComponent } from './components/propietario/propietario.component';
import { ConductorComponent } from './components/conductor/conductor.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';

const routes: Routes = [
  /* Propietario */
  {path: 'propietario', component:PropietarioComponent},
  {path: 'propietarios', component:PropietarioComponent},
  {path: 'propietario/:id', component:PropietarioComponent},

  /* Conductor */
  {path: 'conductor', component:ConductorComponent},
  {path: 'conductors', component:ConductorComponent},
  {path: 'conductor/:id', component:ConductorComponent},

  /* Vehiculo */
  {path: 'vehiculo', component:VehiculoComponent},
  {path: 'vehiculos', component:VehiculoComponent},
  {path: 'vehiculo/:id', component:VehiculoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}