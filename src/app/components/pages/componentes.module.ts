import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BandejaprincipalComponent } from './bandejaprincipal/bandejaprincipal.component';
import { LoginComponent } from './login/login.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { SharedModule } from '@app/shared/shared.module';
import { MaterialModule } from './material/material.module';
import { BandejadesalidaComponent } from './bandejadesalida/bandejadesalida.component';
import { MensajenuevoComponent } from "./mensajenuevo/mensajenuevo.component";




@NgModule({
  declarations: [
    BandejaprincipalComponent,
    LoginComponent,
    RegistrarseComponent,
    BandejadesalidaComponent,
    MensajenuevoComponent


  ],

  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialModule

  ],

  exports: [
    BandejaprincipalComponent,
    LoginComponent,
    RegistrarseComponent,
    BandejadesalidaComponent,
    MensajenuevoComponent

  ],

})

export class ComponentesModule { }
