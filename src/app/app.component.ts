import { Component } from '@angular/core';
import { FormsModule,FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oct07';
  userForm:FormGroup;

  names=[
   
  ];
  a=499;
  b=399;
  c=this.a+this.b;
  cd=0;

 
// for (let i = 0; i < names.length; i++) {
//  this.cd += names.[amount]; }

constructor(){
  this.userForm= new FormGroup({
    name:new FormControl("",Validators.required),
    amount:new FormControl("",Validators.required),
  })
}
get()
{
  if(this.userForm.valid)
  {
    alert("form valid")
  }
  else{
    alert("invalid Form")
  }
}

 submitdata(){
 
if(this.userForm.valid){
  console.log(this.userForm.value)
}
else{
  alert('form is not valid=> all fields are required')
}
}
createUser(data:any)
  {
    this.names.push(this.userForm.value)
  }



}
