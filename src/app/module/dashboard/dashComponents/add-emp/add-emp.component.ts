import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Clinic } from 'src/app/models/clinic';
import { ClinicService } from 'src/app/services/clinic.service';
import { passwordValidation } from 'src/app/custom/password.validation';
import { EmployeeService } from 'src/app/services/employee.service';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/models/employee';
@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent {
  Action:String = "New Employee"
  empAddForm!:FormGroup;
  clinins:Clinic[]=[];
  public idToUpdate!:Number;
  public isUpdateActive: boolean = false;

  constructor(
    public fb:FormBuilder ,
    private clinicServise:ClinicService ,
    public employeeService:EmployeeService,
    private _location: Location,
    private activatedRoute:ActivatedRoute

  ){
    this.empAddForm = this.fb.group({
      fname:['',[Validators.required,Validators.maxLength(50)] ],
      lname:['',[Validators.required,Validators.maxLength(50)]],
      email:['',[Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]+)*$/)]],
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmPassword:['',[Validators.required]],
      age:[''],
      salary:[''],
      gender:['',[Validators.required]],
      phone:['',[Validators.required,Validators.pattern(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g)]],
      address:this.fb.group({
        city:['',[Validators.required,Validators.maxLength(20)]],
        street:['',[Validators.maxLength(50)]],
        building:[''],
      }),
      clinic:['',[Validators.required]],
    },{validator:passwordValidation})

  }


  ngOnInit(){

    this.clinicServise.getAll().subscribe(data=>{
      this.clinins = data
    })
    this.activatedRoute.params.subscribe(val=>{
      this.idToUpdate = val['id'];
      this.employeeService.getById(this.idToUpdate).subscribe(res=>{
        this.isUpdateActive= true;
        this.fillFormToUpdate(res)
        this.Action = "Edit Employee"
      })
    })

  }
fillFormToUpdate(emp:Employee){
    let names= emp.name.split(" ")
    this.empAddForm.setValue({
      fname:names[0],
      lname:names[1]||"",
      email:emp.email,
      gender:emp.gender,
      age:30,
      salary:emp.salary,
      clinic:emp.clinicId?._id??1,
      phone:emp.phone,
      password:'',
      confirmPassword:"",
      address:{
        city:emp.address.city,
        street:emp.address.street,
        building:emp.address.building,
      },
    })
  }
  update(){
    let formData = this.empAddForm.value
     let employee={
      _id:this.idToUpdate,
      name:formData.fname+" "+formData.lname,
      gender:formData.gender,
      age:formData.age,
      email:formData.email,
      phone:formData.phone,
      address:formData.address,
      password:formData.password,
      salary:formData.salary ,
      clinicId:formData.clinic
    
     }
    
     this.employeeService.edit(employee,employee._id).subscribe(()=>{
       console.log("done")
       this._location.back();
   
     })
   }

  get empFName(){
    return this.empAddForm.get('fname');  
  }
  get empLName(){
    return this.empAddForm.get('lname');  
  }
  get empEmail(){
    return this.empAddForm.get('email');  
  }
  get empPassword(){
    return this.empAddForm.get('password');  
  }
  get empConfirmPassword(){
    return this.empAddForm.get('confirmPassword');  
  }
  get empPhone(){
    return this.empAddForm.get('phone');  
  }
  get empAge(){
    return this.empAddForm.get('age');  
  }
  get empCity(){
    return this.empAddForm.get('city');  
  }
  get doctorStreet(){
    return this.empAddForm.get('street');  
  }
  get empBuilding(){
    return this.empAddForm.get('building');  
  }
  get empClinic(){
    return this.empAddForm.get('clinic');  
  }


  add(){

     this.employeeService.addEmp(this.empAddForm.value).subscribe(()=>{
      console.log("done")
      this._location.back();
    })
  }

  back(){
    
    this._location.back();
}
}
