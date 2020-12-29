import { Component, OnInit} from '@angular/core';
import { ApiIntegrationService } from '../api-integration.service';
import { ToastrService } from 'ngx-toastr';
import { GlobalConstant } from '../globalconstant';
import { FormControl, FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router,ActivatedRoute} from  '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { CustomValidators } from '../validators';
declare var $;
import { MessageService } from '../messageservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  ekycDetails:any;
  pubBlockaddr:any;
  

  res:any;
  res1:any;
  res2:any;
  res3:any;
  kycList:any=[];
  allKycCount:any;
  allBusinessCount:any;
  allBusinessKycCount:any;

  constructor(
              private data:ApiIntegrationService,
              private toastr: ToastrService,
              private fb: FormBuilder,
              private router:Router,
              public  constants:GlobalConstant, 
              private activatedRoute:ActivatedRoute,
              private messgage : MessageService
  ) {
     this.ekycDetails =JSON.parse(localStorage.getItem('ekycDetails')); 
     this.pubBlockaddr = this.ekycDetails.blockaddr;    
   }

    getallKYC(){
        let postData={
          "pubBlockaddr":this.pubBlockaddr
        }
       this.data.getallKYC(postData).subscribe(data=>{
         this.res=data;
         debugger
         if(this.res.statusCode=200){
           this.kycList=this.res.data;
         }
       })
    }

        getAllKycCount(){
        let postData={
          "pubBlockaddr":this.pubBlockaddr
        }
       this.data.getAllKycCount(postData).subscribe(data=>{
         this.res1=data;
         debugger
         if(this.res1.statusCode=200){
           this.allKycCount=this.res1.data;
         }
       })
    }

        getAllBusinessCount(){
        let postData={
          "pubBlockaddr":this.pubBlockaddr
        }
       this.data.getAllBusinessCount(postData).subscribe(data=>{
         this.res2=data;
         debugger
         if(this.res2.statusCode=200){
           this.allBusinessCount=this.res2.data;
         }
       })
    }

        getAllBusinessKycCount(){
        let postData={
          "pubBlockaddr":this.pubBlockaddr
        }
       this.data.getAllBusinessKycCount(postData).subscribe(data=>{
         this.res3=data;
         debugger
         if(this.res3.statusCode=200){
           this.allBusinessKycCount=this.res2.data;
         }
       })
    }
 
  ngOnInit() {
   this.getallKYC();
   this.getAllKycCount();
   this.getAllBusinessCount();
   this.getAllBusinessKycCount();
}
}
