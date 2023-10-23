import { Injectable } from '@angular/core';
import { RandomService } from './random.service';

@Injectable({
  providedIn: 'root'
})
export class SorteioService {

  constructor(private randomService: RandomService){

  }

  sortear(nomes: string[]): string | null {
    if(nomes.length == 0){
      return  null;
    }
    const posicaoSorteada = this.randomService.generateNumero(nomes.length);
    return nomes[posicaoSorteada];
  }
}