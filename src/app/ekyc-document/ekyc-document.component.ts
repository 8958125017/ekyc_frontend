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
  selector: 'app-ekyc-document',
  templateUrl: './ekyc-document.component.html',
  styleUrls: ['./ekyc-document.component.scss']
})

export class EkycDocumentComponent implements OnInit {
@BlockUI() blockUI: NgBlockUI;
kycDetails:any;
pubBlockaddr:any;
clearSetTimeout:any;
pendingRequest:any;
// ekycDetails:any
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
 this.kycDetails =JSON.parse(localStorage.getItem('ekycDetails')); 
 this.pubBlockaddr = this.kycDetails.blockaddr;  
}
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

  docFile1:any;
  docFile2:any;
  docFile3:any;
  docFile4:any;
  docFileName1:any;
  docFileName2:any;
  docFileName3:any;
  docFileName4:any;

 fileUpload(event,item){   
    let reader = new FileReader();
    this.file = event.target.files[0];
      if(this.file){
        if(item=='govt1'){
        this.docFile1=this.file;
        this.docFileName1 = this.file.name;
      } else if(item=='govt2'){
        this.docFile2=this.file;
        this.docFileName2 = this.file.name;
      } else if(item=='govt3'){
        this.docFile3=this.file;
        this.docFileName3 = this.file.name;
      } else if(item=='govt4'){
        this.docFile4=this.file;
        this.docFileName4 = this.file.name;
      }
    }else{
       this.toastr.error('Please Upload Doc File');
      return false;
    }   
}

postData:any;

  submitEkyc(){
    debugger
    if(!this.ekycForm.value.govt_id_1){
      this.toastr.error('Please enter government Id 1');
      return false;
    }else if(this.ekycForm.value.govt_id_1 && !this.docFile1){
      this.toastr.error('Please Upload Document File for Government Id1');
      return false;
    }else if(!this.ekycForm.value.govt_id_1 && this.docFile1){
      this.toastr.error('Please enter government id 1');
      return false;
    }else  if(!this.ekycForm.value.govt_id_2){
      this.toastr.error('Please enter government Id 2');
      return false;
    }
    if(this.ekycForm.value.govt_id_2 && !this.docFile2){
      this.toastr.error('Please UploadDocument File for Government Id2');
      return false;
    }else if(!this.ekycForm.value.govt_id_2 && this.docFile2){
      this.toastr.error('Please enter government id 2');
      return false;
    }else  if(!this.ekycForm.value.govt_id_3){
      this.toastr.error('Please enter government Id 3');
      return false;
    }
    if(this.ekycForm.value.govt_id_3 && !this.docFile3){
      this.toastr.error('Please Document File for Government Id3');
      return false;
    }else if(!this.ekycForm.value.govt_id_3 && this.docFile3){
      this.toastr.error('Please enter government id 3');
      return false;
    }else  if(!this.ekycForm.value.govt_id_4){
      this.toastr.error('Please enter government Id 4');
      return false;
    }
    if(this.ekycForm.value.govt_id_4 && !this.docFile4){
      this.toastr.error('Please Upload Document File for Government Id4');
      return false;
    }else if(!this.ekycForm.value.govt_id_4 && this.docFile4){
      this.toastr.error('Please enter government id 4');
      return false;
    }else if(!this.ekycForm.value.first_name){
       this.toastr.error('Please enter first Name');
      return false;
    }else if(!this.ekycForm.value.l_name){
       this.toastr.error('Please enter LastName');
      return false;
    }else if(!this.ekycForm.value.father_name){
       this.toastr.error('Please enter Father Name');
      return false;
    }else if(!this.ekycForm.value.mother_name){
       this.toastr.error('Please enter Mother Name');
      return false;
    }else if(!this.ekycForm.value.mob_num){
       this.toastr.error('Please enter Mobile Number');
      return false;
    }else if(this.ekycForm.valid){
        this.postData = new FormData();
        this.postData.append('govt_id_1', this.ekycForm.value.govt_id_1);
        this.postData.append('govt_id_2', this.ekycForm.value.govt_id_2);        
        this.postData.append('govt_id_3',this.ekycForm.value.govt_id_3);
        this.postData.append('govt_id_4',this.ekycForm.value.govt_id_4);
        this.postData.append('govt_doc_1',this.docFile1 , this.docFileName1);
        this.postData.append('govt_doc_2',this.docFile2 , this.docFileName2);
        this.postData.append('govt_doc_3',this.docFile3 , this.docFileName3);
        this.postData.append('govt_doc_4',this.docFile4 , this.docFileName4);
        this.postData.append('first_name', this.ekycForm.value.first_name);
        this.postData.append('name', this.ekycForm.value.m_name);
        this.postData.append('m_name', this.ekycForm.value.m_name);
        this.postData.append('l_name', this.ekycForm.value.l_name)
        this.postData.append('father_name', this.ekycForm.value.father_name);        ;
        this.postData.append('mother_name', this.ekycForm.value.mother_name);
        this.postData.append('mob_num', this.ekycForm.value.mob_num);
        this.postData.append('curr_add', this.ekycForm.value.curr_add);
        this.postData.append('state', this.ekycForm.value.state);
        this.postData.append('country', this.ekycForm.value.country);
        this.postData.append('postal_code', this.ekycForm.value.postal_code);
        this.postData.append('pubBlockaddr', this.pubBlockaddr);
        clearTimeout(this.clearSetTimeout);
        debugger
        this.blockUI.start('Loading...');
        this.pendingRequest=this.data.registerKyc(this.postData).subscribe(res=>{
            this.blockUI.stop();
            debugger
            this.response=res; 
            clearTimeout(this.clearSetTimeout);
            if(this.response.statusCode==200){
              this.router.navigate(['/dashboard']);
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
               },1200000);


    }else{
           this.isValidFormSubmitted = false;
           this.toastr.error('some thing went wrong');
         }
  }
   response:any;
}
