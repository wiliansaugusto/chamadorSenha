import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SenhaServiceService {

constructor(private http :HttpClient){}

  setsenha(data: any) {
    return this.http.post<any>('https://phdnz.achei.digital/api/gerentesenhas.php',data)

  }
  getSenha() {    
    return  this.http.get<any>('https://phdnz.achei.digital/api/gerentesenhas.php')
  }

}