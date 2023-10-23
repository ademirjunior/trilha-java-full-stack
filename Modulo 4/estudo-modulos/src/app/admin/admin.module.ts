import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ControleUsuariosComponent } from './components/controle-usuarios/controle-usuarios.component';
import { AuthModule } from '../auth/auth.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    DashboardComponent,
    ControleUsuariosComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AuthModule,
    FormsModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class AdminModule { }
