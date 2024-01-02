import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-farray',
  templateUrl: './farray.component.html',
  styleUrls: ['./farray.component.scss']
})
export class FarrayComponent implements OnInit {

  CPOForm!: FormGroup
  constructor(private fb:FormBuilder ){
   
  }

  ngOnInit(): void { 
    this.buildForm()
  }

  buildForm() {
    this.CPOForm = this.fb.group({
       otherItem: this.fb.array([]),
     })
   }

  otherItem(): any {
    return this.CPOForm.get("otherItem") as FormArray
  }

  removeItem(empIndex: number) {
    this.otherItem().removeAt(empIndex);
  }

  addEmployee(){
    this.otherItem().push(this.newEmp());
  }

  newEmp(): FormGroup {
    return this.fb.group({
      mobile: ['']
    })
  }

}

