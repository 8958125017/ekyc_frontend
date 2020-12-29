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
  selector: 'app-my-document',
  templateUrl: './my-document.component.html',
  styleUrls: ['./my-document.component.scss']
})
export class MyDocumentComponent implements OnInit {
  ekycDetails:any;
  pubBlockaddr:any;
  res:any;
  kycList:any=[];
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

     ngOnInit() {
      this.getallKYC();
    }

}
