import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SenhaServiceService } from '../service/senha-service.service';

@Component({
  selector: 'app-sehna',
  templateUrl: './sehna.component.html',
  styleUrl: './sehna.component.css'
})
export class SehnaComponent {
  public myForm: FormGroup;
  public flagAlert = false;
  valor: any;


  constructor(private formBuilder: FormBuilder, private senhaService: SenhaServiceService) {
    this.myForm = this.formBuilder.group({
      senha: ['', Validators.required],
    });

  }

  onSubmit() {
    if (this.myForm.valid) {
      this.flagAlert = true;
      this.valor = { "senha": this.myForm.get('senha')?.value };
      this.myForm.reset()
      this.senhaService.setsenha(this.valor).subscribe(response => {
        console.log(response);
      });

      setTimeout(() => {
        this.flagAlert = false;
      }, 5000);


    }

  }
}