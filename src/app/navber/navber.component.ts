import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-navber',
  templateUrl: './navber.component.html',
  styleUrls: ['./navber.component.scss']
})
export class NavberComponent implements OnInit{

  stud:FormGroup;
 
  students:any = [
    {
      number: 1,
      username:'harsh',
      password:'harsh@123'
    },
    {
      number: 2,
      username:'jeel',
      password:'jeel@123'
    },
    {
      number: 3,
      username:'meet',
      password:'meet@123'
    },
    {
      number: 4,
      username:'raj',
      password:'raj@123'
    },
    {
      number: 5,
      username:'ravi',
      password:'ravi@123'
    
  }
]

  constructor( fb: FormBuilder){
    
    this.stud = fb.group({
      number:['',Validators.required],
      username:['',Validators.required],
      password:['',Validators.required],
    })
  }

  
  ngOnInit(): void {
   
    
  }

  studentdata() : void{
    
    const datafind = this.students.find((id:any) => id.number === this.stud.value.number && id.username === this.stud.value.username  &&  id.password === this.stud.value.password )
   
    
    if(datafind == undefined){
      alert('Not Login ');   
    } else{
      alert('Login');
    } 

  }
}