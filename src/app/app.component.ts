import { Component,ViewChild,OnInit } from '@angular/core';
import {TabsetComponent} from 'ngx-bootstrap';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  @ViewChild('staticTabs',({static:false})) public staticTabs:TabsetComponent
  personalInformationForm:FormGroup;
  educationalInformationForm:FormGroup;  
 

  ngOnInit()
  {
    this.personalInformationForm=new FormGroup({
      name:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required]),
      
    }) 

    this.educationalInformationForm=new FormGroup({
      board:new FormControl('',[Validators.required]),
      education:new FormControl('',[Validators.required])
    })     
    this.staticTabs.tabs[1].disabled=true;
  }
  onPersonalInfoSubmit()
  {
    
     this.staticTabs.tabs[1].disabled = false;
    this.staticTabs.tabs[1].active = true;
  }
  onEducationalInfoSubmit()
  {
    
    this.staticTabs.tabs[2].disabled = false;
    this.staticTabs.tabs[2].active = true ;

  }

  onFinalSubmit()
  {

    let finalData={...this.personalInformationForm.value,...this.educationalInformationForm.value}
    this.educationalInformationForm.reset();
    this.personalInformationForm.reset()
    console.log(finalData);    
    alert('Form Submitted successfully');  
  }
  
}
 