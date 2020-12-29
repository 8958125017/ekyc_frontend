import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { MyDocumentComponent } from '../../my-document/my-document.component';
import { EkycDocumentComponent } from '../../ekyc-document/ekyc-document.component';
import { FetchEkycComponent} from '../../fetch-ekyc/fetch-ekyc.component';
import { FetchkycResultComponent } from '../../fetchkyc-result/fetchkyc-result.component';

import { AuthGuardService}from'../../auth-guard.service';
export const AdminLayoutRoutes: Routes = [
 
    { path: 'dashboard',      component: DashboardComponent},
    { path: 'mydocument',    component: MyDocumentComponent},
    { path: 'addekyc',    component: EkycDocumentComponent},
    { path: 'fetch-ekyc',        component: FetchEkycComponent},
    { path: 'kycdetails/:kycId',    component: FetchkycResultComponent}  ,
];
