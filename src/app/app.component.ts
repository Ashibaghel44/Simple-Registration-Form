import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule,FormGroup,FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  table:boolean =false;
  persons:any=[]
  simpleForm!: FormGroup;

  constructor(){
  }
  
  ngOnInit(){
    this.simpleForm = new FormGroup({
      name : new FormControl('',[
        Validators.required,
        Validators.pattern('^[a-z A-Z]+$'),
        Validators.minLength(3)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10),
      ]),
    })
  }
  
 get name (){
    return this.simpleForm.get('name')
  }
  get email (){
    return this.simpleForm.get('email')
  }
  get password (){
    return this.simpleForm.get('password')
  }
  onSubmit() {
    this.persons.push(this.simpleForm.value)
    this.table =true;
    console.log(this.simpleForm.value)
    this.simpleForm.reset()
}
}
