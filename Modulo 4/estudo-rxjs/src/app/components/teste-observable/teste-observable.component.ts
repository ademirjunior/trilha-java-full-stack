import { Component } from '@angular/core';
import { Observable, filter, first, from, last, map, of, tap } from 'rxjs';

@Component({
  selector: 'app-teste-observable',
  templateUrl: './teste-observable.component.html',
  styleUrls: ['./teste-observable.component.css']
})
export class TesteObservableComponent {

  constructor() {
    //this.testeObservable();
    //this.testeOperadoresCriacao();
    //this.testeOperadoresFiltragem();
    //this.testeOperadoresTransformacao();
    this.testeComposicao();
  }

  testeComposicao() {
    const obs = this.randomNubers(5);
    obs
      .pipe(
        tap((num)=>{
          console.log(`^Numero interno do observable: ${num}`)
        }),
        map((num) => num / 2),
        filter((num) => num % 1 == 0)
      )
      .subscribe({
        next: (value) => {
          console.log(value)
        }
      });
  }

  randomNubers(total: number): Observable<number> {
    return new Observable<number>((subscriber) => {
      for (let i = 0; i < total; i++) {
        const num = Math.floor(Math.random() * 100);
        subscriber.next(num)
      }
      subscriber.complete();
    });
  }

  testeOperadoresTransformacao() {
    const obs = from([10, 20, 30, 40]);
    obs.pipe(map((num) => num + 5)).subscribe({
      next: (num) => {
        console.warn(`Valores somados a 5: ${num}`)
      }
    });

    obs.pipe(map((num) => `Nº ${num}`)).subscribe({
      next: (texto) => {
        console.warn(`Mensagem: ${texto}`)
      }
    });
  }

  testeOperadoresFiltragem() {
    const obs = from([10, 20, 30]);
    obs.pipe(first()).subscribe({
      next: (num) => {
        console.warn(`Primeiro valor: ${num}`)
      }
    });

    obs.pipe(last()).subscribe({
      next: (num) => {
        console.warn(`Ultimo valor: ${num}`)
      }
    });

    obs.pipe(filter((num) => num < 30)).subscribe({
      next: (num) => {
        console.warn(`Valores menores que 30: ${num}`)
      }
    });
  }

  testeOperadoresCriacao() {
    const obs = from([10, 20, 30]);
    obs.subscribe({
      next: (num) => {
        console.warn(`Numero emitido pelo from: ${num}`)
      }
    });

    const obs2 = of([10, 20, 30]);
    obs2.subscribe({
      next: (num) => {
        console.warn(`Valor emitido pelo of: ${num}`)
      }
    });
  }

  testeObservable() {
    //console.log("Testando Observables!")
    const obs: Observable<number> = new Observable<number>((subscriber) => {

      setTimeout(() => {
        subscriber.next(1);
        subscriber.next(3);
        subscriber.next(5);
        const num = Math.floor(Math.random() * 100);
        if (num % 2 == 0) {
          subscriber.error(`O número ${num} é par`);
        }
        subscriber.next(num);
        subscriber.complete();
      }, 1500);
    });

    obs.subscribe({
      next: (numero) => {
        console.warn(`Emitiu ${numero}`)
      },
      complete: () => {
        console.warn("O observable finalizou")
      },
      error: (err) => {
        console.warn(`A mensagem foi: ${err}`)
      },
    });

    console.log("Olá!")
  }
}
