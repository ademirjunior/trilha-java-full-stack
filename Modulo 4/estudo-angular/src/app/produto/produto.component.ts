import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {

  @Input() produto!: Produto;
  @Output() onCarrinho = new EventEmitter<Produto>();

  altura: number = 150.0;
  largura: number = 150.0;

  adicionarProduto() {
    alert("Porduto adicionado ao carrinho!")
    this.onCarrinho.emit(this.produto);
  }

  promocao() {
  //  confirm("Interessado nessse produto?")
  }
}
