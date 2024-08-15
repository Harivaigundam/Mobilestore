import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  form!:FormGroup;

  ispasswordmatch:boolean=true;

  ngOnInit(){
    this.initRform();
    this.form.get('password')?.valueChanges.subscribe(()=>{
      this.ispasswordmatch=this.checkpass();
    });
    this.form.get('cpassword')?.valueChanges.subscribe(()=>{
      this.ispasswordmatch=this.checkpass();
    });
  }

  initRform(){
    this.form= new FormGroup({
      user:new FormControl(null, Validators.required),
      email:new FormControl(null, [Validators.required,Validators.email]),
      mobile:new FormControl(null, [Validators.required, Validators.minLength(10),Validators.maxLength(10),Validators.pattern('^[0-9]{10}$')]),
      password:new FormControl(null, [Validators.required,Validators.minLength(6)]),
      cpassword:new FormControl(null, [Validators.required,Validators.minLength(6)]),
    },{
      validators:this.passmatch
    })
  }  

  passmatch(control:AbstractControl):{[key:string]:boolean} | null{
    const password = control.get('password');
    const cpassword = control.get('cpassword');

    if(password && cpassword && password.value !== cpassword.value){
      return {passwordmismatch:true}
    }
    return null;
  }

  checkpass():boolean{
    const password = this.form.get('password')?.value;
    const cpassword = this.form.get('cpassword')?.value;

    return password === cpassword;
  }

  onsubmit(){

  }

}
