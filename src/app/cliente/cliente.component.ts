import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { interval } from 'rxjs';
import { SenhaServiceService } from '../service/senha-service.service';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent implements OnInit {

  public myForm: FormGroup;
  public flagAlert = false;
  public flagAviso = false;
  public pedido: any;
  flagform = false;
  sharedValue: any;
  audio = new Audio();

  constructor(private formBuilder: FormBuilder, private senha: SenhaServiceService) {
    this.myForm = this.formBuilder.group({
      pedido: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.verificarPedido()    
    setInterval(() => {
      this.verificarPedido()


    }, 5000)
  }


  verificarPedido() {
    if (this.myForm.get("pedido")?.value) {
      this.flagAlert = true;
      this.flagform = true;

    }
    this.pedido = this.myForm.get("pedido")?.value;
    this.senha.getSenha().subscribe(value => {
      this.sharedValue = value.data;
      console.log("\nteste\n" + this.sharedValue); 
    });

    if (this.pedido == this.sharedValue) {
      this.flagAlert = false;
      this.flagAviso = true;
      this.playSound();
      setTimeout(() => {
        this.playSound();
      }, 3000);
    }


  }

  voltar() {
    this.flagAlert = false;
    this.flagform = false;
    this.flagAviso = false
    this.audio.pause();
    this.myForm.reset();
  }

  playSound() {
    this.audio.src = './assets/Original ICQ sound - Stuff.mp3';
    this.audio.load();
    this.audio.play();
  }
}

