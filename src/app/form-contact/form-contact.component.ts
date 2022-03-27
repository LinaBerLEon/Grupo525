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

  constructor(
    private formBuilder: FormBuilder
    ) {

    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      sexo: ['', [Validators.required]],

      date: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      email:['', [Validators.email]],
      direccion: ['', [Validators.required]],
      vivienda: ['', [Validators.required]],

      pais: ['', [Validators.required]],
      departamento: ['', [Validators.required]],
      ciudad: ['', [Validators.required]],
      comentarios: ['', [Validators.maxLength(200)]],
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
