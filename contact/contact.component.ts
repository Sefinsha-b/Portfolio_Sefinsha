import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  form: FormGroup=this.fb.group({
    from_name:' ',
    to_name:'Admin',
    from_email:' ',
    subject:' ',
    message:' ',
  
  });
  constructor(private fb : FormBuilder) {}
  
  async Send(){
    emailjs.init('el2iAu0jZrQtCwe97')
   let response = await emailjs.send("service_344z4ur","template_g94qcie",{
    from_name: this.form.value.from_name,
    to_name: this.form.value.to_name,
    from_email: this.form.value.from_email,
    subject: this.form.value.subject,
    message:  this.form.value.message,
    });
    alert("Message has been sent");
    this.form.reset();
    
  }
  
  
  }



