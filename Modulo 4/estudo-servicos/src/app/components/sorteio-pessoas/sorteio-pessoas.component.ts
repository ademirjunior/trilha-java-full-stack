import { Component } from '@angular/core';
import { SorteioService } from 'src/app/services/sorteio.service';

@Component({
  selector: 'app-sorteio-pessoas',
  templateUrl: './sorteio-pessoas.component.html',
  styleUrls: ['./sorteio-pessoas.component.css']
})
export class SorteioPessoasComponent {
  texto: string = '';


  constructor(private sorteioService: SorteioService){

  }

  sortear() {
    const nomes: string[] = this.texto.split("\n");
    const sorteado = this.sorteioService.sortear(nomes)
    if (sorteado){
      alert(`O nome sorteado foi:  ${sorteado}`);
    } else {
      alert('Digite os nomes no campo!')
    }
  }
}
