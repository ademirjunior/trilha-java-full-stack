import { Component } from '@angular/core';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent {
  query: string = 'batata';

  pesquisar(){
    this.query = '';
  }

  carrinho: Produto[] = [];

  produtos: Produto[] = [
    {
      nome: 'Relogio Mi band 5',
      preco: 200,
      emPromocao: false,
      categoria: 'eletro',
      imagem:'https://via.placeholder.com/150',
    },
    {
      nome: 'Relogio Mi band 6',
      preco: 300,
      emPromocao: true,
      categoria: 'eletro',
      imagem:'https://via.placeholder.com/150',
    }
  ];

  adicionarProduto(produto: Produto): void{
    //console.log(produto);
    this.carrinho.push(produto);
  }

  existeNoCarrinho(produto: Produto): boolean{
    return this.carrinho.indexOf(produto) > -1;
  }

}
