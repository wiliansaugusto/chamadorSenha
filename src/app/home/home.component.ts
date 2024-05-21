import { Component, OnInit } from '@angular/core';
import { SenhaServiceService } from '../service/senha-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  senha: any[] = ["0", "0", "0", "0"];
  value:any;
  constructor(private senhaService: SenhaServiceService) {
  
  }
  ngOnInit() {
    this.playSound()
    setInterval(() => {
       this.senhaService.getSenha().subscribe(resposta =>{      
        this.value = resposta.data
       });
      if (this.senha[0] != this.value) {
        this.senha[3] = this.senha[2];
        this.senha[2] = this.senha[1];
        this.senha[1] = this.senha[0];
        this.senha[0] = this.value;

        this.playSound()  

      }
            
    }, 4000)
  }
  playSound() {
    const audio = new Audio();
    audio.src = './assets/whatsapp-message-for-iphone.mp3';
    audio.load();
    audio.play();
  }
}

