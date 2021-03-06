import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandejaprincipalComponent } from './components/pages/bandejaprincipal/bandejaprincipal.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegistrarseComponent } from './components/pages/registrarse/registrarse.component';
import { BandejadesalidaComponent } from './components/pages/bandejadesalida/bandejadesalida.component';
import { MensajenuevoComponent } from './components/pages/mensajenuevo/mensajenuevo.component';
import { AuthGuard } from '../../src/app/shared/guards/auth.guard';


const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent  },
  { path: 'bandejaprincipal', component: BandejaprincipalComponent, canActivate: [AuthGuard]   },
  { path: 'registrarse', component: RegistrarseComponent  },
  { path: 'mensajenuevo', component: MensajenuevoComponent  },
  { path: 'bandejadesalida', component: BandejadesalidaComponent },
  { path: 'mensajenuevo', component: MensajenuevoComponent  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

