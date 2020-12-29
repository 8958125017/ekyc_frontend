import { Component, OnInit } from '@angular/core';
import { ApiIntegrationService } from '../api-integration.service';
import { GlobalConstant } from '../globalconstant';
import { FormControl, FormsModule,FormBuilder, Validators, FormGroup, ReactiveFormsModule, RequiredValidator } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { CustomValidators } from '../validators';
declare var $;
import { MessageService } from '../messageservice.service';
import * as Chartist from 'chartist';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-fetchkyc-result',
  templateUrl: './fetchkyc-result.component.html',
  styleUrls: ['./fetchkyc-result.component.scss']
})
export class FetchkycResultComponent implements OnInit {
kycId:any;
ekycDetails:any
pubBlockaddr:any;
 constructor( 
              private data:ApiIntegrationService,
              private toastr: ToastrService,
              private fb: FormBuilder,
              private router:Router,
              public  constants:GlobalConstant, 
              private activatedRoute:ActivatedRoute,
              private messgage : MessageService) { 
      this.ekycDetails =JSON.parse(localStorage.getItem('ekycDetails')); 
      this.pubBlockaddr = this.ekycDetails.blockaddr;   
       this.businessName=this.ekycDetails.businessName;  
 }
businessName:any;
ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
         this.kycId = params['kycId'];      
         this.getKycFullDetails(this.kycId);
        });

  }
kycDetails:any
res:any;
  getKycFullDetails(id){
  	let postData={
	"kycid":id,
	"pubBlockaddr":this.pubBlockaddr
     }
     debugger
     this.data.getIssuedKyc(postData).subscribe(res=>{
       this.res=res;
       debugger
        if(this.res.statusCode==200){
        	this.kycDetails=this.res.data[0];
        }
     })
  }
}
