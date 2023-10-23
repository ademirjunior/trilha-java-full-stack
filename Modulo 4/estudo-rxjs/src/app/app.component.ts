import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GeolocationService } from './services/geolocation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'estudo-rxjs';
  mostrarRelogio: boolean = true;

  coordenadas?: GeolocationCoordinates;
  inscricao?: Subscription;

  constructor(private geolocation: GeolocationService) { }

  alternar() {
    this.mostrarRelogio = !this.mostrarRelogio;
  }

  ngOnInit(): void {
    this.inscricao = this.geolocation.positionObservable().subscribe({
      next: (coords) => {
        this.coordenadas = coords;
      },
      error: (err) => {
          alert(err.message)
      },
    });
  }

  ngOnDestroy(): void {
    this.inscricao?.unsubscribe();
  }

}
