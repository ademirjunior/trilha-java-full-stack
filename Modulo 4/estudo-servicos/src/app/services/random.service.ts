import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  generateNumero(max: number): number {
    return  Math.floor(Math.random() * max);
  }
}
