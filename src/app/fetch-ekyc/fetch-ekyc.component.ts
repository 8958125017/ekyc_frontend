import { Component, OnInit } from '@angular/core';
import { ApiIntegrationService } from '../api-integration.service';
import { ToastrService } from 'ngx-toastr';
import { GlobalConstant } from '../globalconstant';
import { FormControl, FormBuilder, Validators, FormGroup, ReactiveFormsModule, FormArray,FormsModule } from '@angular/forms';
import { Router,ActivatedRoute} from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { CustomValidators } from '../validators';
import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
declare var $;
import { MessageService } from '../messageservice.service';
@Component({
  selector: 'app-fetch-ekyc',
  templateUrl: './fetch-ekyc.component.html',
  styleUrls: ['./fetch-ekyc.component.scss']
})
export class FetchEkycComponent implements OnInit {
@BlockUI() blockUI: NgBlockUI;
ekycDetails:any;
pubBlockaddr:any;
clearSetTimeout:any;
pendingRequest:any;

public isValidFormSubmitted = null;
 constructor(
private data:ApiIntegrationService,
private formBuilder: FormBuilder,
private toastr: ToastrService,
private fb: FormBuilder,
private router:Router,
public constants:GlobalConstant,
public loader: Ng4LoadingSpinnerService,
private activatedRoute:ActivatedRoute,
private messgage : MessageService) {
       this.ekycDetails =JSON.parse(localStorage.getItem('ekycDetails')); 
       this.pubBlockaddr = this.ekycDetails.blockaddr;  
        this.businessName=this.ekycDetails.businessName;    
}
businessName:any;
ekycForm:FormGroup;
  ngOnInit() {
  	this.addEkycInit();
  }

  addEkycInit(){
  	this.ekycForm=this.fb.group({  	    
  		govt_id_1: new FormControl(''),
  		govt_id_2: new FormControl(''),
  		govt_id_3: new FormControl(''),
  		govt_id_4: new FormControl(''),  		
  		first_name: new FormControl(''),
  		m_name: new FormControl(''),
  		l_name: new FormControl(''),
  		father_name: new FormControl(''),  		
  		mother_name: new FormControl(''),
  		mob_num: new FormControl(''),
  		curr_add: new FormControl(''),
  		country: new FormControl(''),
  		state: new FormControl(''),
  		postal_code: new FormControl(''), 		
  	})
  }

  file:any;
  fileName:any;


postData:any;
resKyc:[];
kycResult:any=[];
  searchKYC(){
    this.toastr.clear();
      if(!this.ekycForm.value.govt_id_1 && !this.ekycForm.value.govt_id_2 && !this.ekycForm.value.govt_id_3 && !this.ekycForm.value.govt_id_4 && !this.ekycForm.value.first_name && !this.ekycForm.value.first_name && !this.ekycForm.value.m_name && !this.ekycForm.value.l_name && !this.ekycForm.value.curr_add && !this.ekycForm.value.country && !this.ekycForm.value.state && !this.ekycForm.value.postal_code&& !this.ekycForm.value.father_name&& !this.ekycForm.value.mother_name&& !this.ekycForm.value.mob_num){
          this.toastr.error('please select at least one fields');
          return false
    }
    if(this.ekycForm.valid){
        let postData={
          "govt_id_1": this.ekycForm.value.govt_id_1,
          "govt_id_2": this.ekycForm.value.govt_id_2,        
          "govt_id_3":this.ekycForm.value.govt_id_3,
          "govt_id_4":this.ekycForm.value.govt_id_4,
          "first_name": this.ekycForm.value.first_name,      
          "m_name":this.ekycForm.value.m_name,
          "l_name": this.ekycForm.value.l_name,
          "father_name": this.ekycForm.value.father_name,
          "mother_name": this.ekycForm.value.mother_name,
          "mob_num": this.ekycForm.value.mob_num,
          "curr_add": this.ekycForm.value.curr_add,
          "state": this.ekycForm.value.state,
          "country": this.ekycForm.value.country,
          "postal_code": this.ekycForm.value.postal_code,
        }
        if(!this.ekycForm.value.govt_id_1){
          delete postData["govt_id_1"];
        } if(!this.ekycForm.value.govt_id_2){
          delete postData["govt_id_2"];
        }if(!this.ekycForm.value.govt_id_3){
          delete postData["govt_id_3"];
        } if(!this.ekycForm.value.govt_id_4){
          delete postData["govt_id_4"];
        } if(!this.ekycForm.value.first_name){
          delete postData["first_name"];
        }if(!this.ekycForm.value.m_name){
          delete postData["m_name"];
        } if(!this.ekycForm.value.l_name){
          delete postData["l_name"];
        }if(!this.ekycForm.value.curr_add){
          delete postData["curr_add"];
        } if(!this.ekycForm.value.country){
          delete postData["country"];
        } if(!this.ekycForm.value.state){
          delete postData["state"];
        }if(!this.ekycForm.value.postal_code){
         delete postData["postal_code"];
        }if(!this.ekycForm.value.father_name){
         delete postData["father_name"];
        }if(!this.ekycForm.value.mother_name){
         delete postData["mother_name"];
        }if(!this.ekycForm.value.mob_num){
         delete postData["mob_num"];
        }        
        clearTimeout(this.clearSetTimeout);
        this.blockUI.start('Loading...');
        this.pendingRequest=this.data.searchKYC(postData).subscribe(res=>{
            this.blockUI.stop();            
            this.response=res; 
            debugger
            clearTimeout(this.clearSetTimeout);
            if(this.response.statusCode==200){
              this.kycResult=this.response.data;
              if(this.kycResult){
                 this.kycResultStatus=true;
              }else{
                 this.kycResultStatus=false;
              }
            }else{
               this.toastr.error('some thing went wrong');
            }

        },error => {               
               this.blockUI.stop();          
               this.toastr.error('Not able to connect host, please try again');      
               })        
                  this.clearSetTimeout = setTimeout(() => {
                  this.pendingRequest.unsubscribe();
                  this.blockUI.stop();
               },100000);


    }else{
           this.isValidFormSubmitted = false;
           this.toastr.error('some thing went wrong');
         }
  }
   response:any;
     kycResultStatus:boolean=false;

     back(){
       this.kycResultStatus=false;
       this.ekycForm.reset();
     }
}
