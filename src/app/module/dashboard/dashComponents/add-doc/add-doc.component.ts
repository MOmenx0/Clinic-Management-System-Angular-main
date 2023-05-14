import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Clinic } from 'src/app/models/clinic';
import { ClinicService } from 'src/app/services/clinic.service';
import { passwordValidation } from 'src/app/custom/password.validation';
import { DoctorService } from 'src/app/services/doctor.service';
import {Location} from '@angular/common';
import { Doctor } from 'src/app/models/doctor';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-doc',
  templateUrl: './add-doc.component.html',
  styleUrls: ['./add-doc.component.css']
})
export class AddDocComponent implements OnInit {
  Action:String = "New Doctor"
  doctorAddForm!:FormGroup;
  clinins:Clinic[]=[];
  newDoc!:Doctor;
  public idToUpdate!:Number;
  public isUpdateActive: boolean = false;

  constructor(
    public fb:FormBuilder ,
    private clinicServise:ClinicService ,
    public doctorService:DoctorService,
    private _location: Location,
    private activatedRoute:ActivatedRoute


  ){
    this.doctorAddForm = this.fb.group({
      fname:['',[Validators.required,Validators.maxLength(50)] ],
      lname:['',[Validators.required,Validators.maxLength(50)]],
      email:['',[Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]+)*$/)]],
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmPassword:['',[Validators.required]],
      speciality:['',[Validators.required]],
      yearsOfExperience:['',[Validators.required]],
      age:[''],
      gender:['',[Validators.required]],
      phone:['',[Validators.required,Validators.pattern(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g)]],
      address:this.fb.group({
        city:['',[Validators.required,Validators.maxLength(20)]],
        street:['',[Validators.maxLength(50)]],
        building:[''],
      }),
      clinic:['',[Validators.required]],
      price:['',[Validators.required]]
    },{validator:passwordValidation})

  }


  ngOnInit(){

    this.clinicServise.getAll().subscribe(data=>{
      this.clinins = data
    })

    this.activatedRoute.params.subscribe(val=>{
      this.idToUpdate = val['id'];
      this.doctorService.getById(this.idToUpdate).subscribe(res=>{
        this.isUpdateActive= true;
        this.fillFormToUpdate(res)
        this.Action = "Edit Doctor"
      })
    })
    

  }

  fillFormToUpdate(doctor:Doctor){
    let names= doctor.name.split(" ")
    this.doctorAddForm.setValue({
      fname:names[0],
      lname:names[1]||"",
      email:doctor.email,
      gender:doctor.gender,
      age:30,
      speciality:doctor.speciality,
      yearsOfExperience:doctor.yearsOfExperience,
      price:doctor.price,
      phone:doctor.phone,
      
      password:'',
      confirmPassword:"",
      address:{
        city:doctor.address.city,
        street:doctor.address.street,
        building:doctor.address.building,
      },
      clinic:doctor.clinicId?._id,
    })
  }

  update(){
    let formData = this.doctorAddForm.value
     let doctor={
      _id:this.idToUpdate,
      name:formData.fname+" "+formData.lname,
      gender:formData.gender,
      age:formData.age,
      email:formData.email,
      phone:formData.phone,
      speciality:formData.speciality,
      yearsOfExperience:formData.yearsOfExperience,
      address:formData.address,
      password:formData.password,
      price:formData.price ,
      clinicId:formData.clinic
    
     }
    
     this.doctorService.edit(doctor , doctor._id).subscribe(()=>{
       console.log("done")
       this._location.back();
   
     })
   }
  get doctorPrice(){
    return this.doctorAddForm.get('price');  
  }

  get doctorExpreince(){
    return this.doctorAddForm.get('yearsOfExperience');  
  }
  get doctorFName(){
    return this.doctorAddForm.get('fname');  
  }
  get doctorLName(){
    return this.doctorAddForm.get('lname');  
  }
  get doctorEmail(){
    return this.doctorAddForm.get('email');  
  }
  get doctorPassword(){
    return this.doctorAddForm.get('password');  
  }
  get doctorConfirmPassword(){
    return this.doctorAddForm.get('confirmPassword');  
  }
  get doctorPhone(){
    return this.doctorAddForm.get('phone');  
  }
  get doctorAge(){
    return this.doctorAddForm.get('age');  
  }
  get doctorCity(){
    return this.doctorAddForm.get('city');  
  }
  get doctorStreet(){
    return this.doctorAddForm.get('street');  
  }
  get doctorBuilding(){
    return this.doctorAddForm.get('building');  
  }
  get doctorClinic(){
    return this.doctorAddForm.get('clinic');  
  }

 

  add(){
    console.log(this.doctorAddForm.errors)

    this.doctorService.addDoc(this.doctorAddForm.value).subscribe(()=>{
      console.log("done")
      this._location.back();
    })
  }
  back(){
    
    this._location.back();
}


}
