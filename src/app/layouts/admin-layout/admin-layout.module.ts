import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { MyDocumentComponent } from '../../my-document/my-document.component';
import { EkycDocumentComponent } from '../../ekyc-document/ekyc-document.component';
import { FetchEkycComponent} from '../../fetch-ekyc/fetch-ekyc.component';
import { FetchkycResultComponent } from '../../fetchkyc-result/fetchkyc-result.component';


import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    MyDocumentComponent,
    EkycDocumentComponent,
    FetchEkycComponent,
    FetchkycResultComponent
  ]
})

export class AdminLayoutModule {}
