import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss']
})
export class FormContactComponent implements OnInit {

  form: FormGroup;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private formBuilder: FormBuilder) {

  }

  get nombre() {return this.form.get("nombre");}
  // get apellido() {return this.form.get("apellido");}
  // get email() {return this.form.get("email");}

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      sexo: ['', [Validators.required]],

      date: ['', [Validators.required]],
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      email:['', [Validators.email, Validators.minLength(12),
      Validators.pattern(this.emailPattern) ]],
      direccion: ['', [Validators.required]],
      vivienda: ['', [Validators.minLength(4)]],

      pais: ['', [Validators.required, ]],
      departamento: ['', [Validators.required]],
      ciudad: ['', [Validators.required]],
      comentarios: ['', [Validators.required, Validators.minLength(50), Validators.maxLength(200)]],
    });


    // this.form.valueChanges
    // .pipe(
    //   debounceTime(500)
    // )
    // .subscribe(value => {
    //   console.log(value);
    // });
  }
  save(event: Event) {
    event.preventDefault();
    if (this.form.valid){
      const value = this.form.value;
      console.log(value);
    }else {
      this.form.markAllAsTouched();
    }
  }
  doSomething() {
    console.log('click');
  }

}
