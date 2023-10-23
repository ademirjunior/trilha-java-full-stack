import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private produtos: Produto[] = [
    {
      cod: 101,
      nome: 'Marmita Térmica',
      descricao:'Marmita 2L',
      preco: 178.99,
      imagem: 'https://picsum.photos/200'
    },
    {
      cod: 102,
      nome: 'Relógio de Parede',
      descricao:'Revestido de Prata',
      preco: 120.5,
      imagem: 'https://picsum.photos/200'
    },
    {
      cod: 103,
      nome: 'Suporte de Headset',
      descricao:'Suporte Portátil para Headset',
      preco: 95.55,
      imagem: 'https://picsum.photos/200'
    },
    {
      cod: 104,
      nome: 'Óculos de Sol',
      descricao: 'Com proteção ~UV',
      preco: 200.99,
      imagem: 'https://picsum.photos/200'
    },
    {
      cod: 105,
      nome: 'Teclado Mecânico',
      descricao:'Teclado RGB para gamers',
      preco: 200,
      imagem: 'https://picsum.photos/200'
    },
  ];

  listarProdutos(): Produto[]{
    return this.produtos;
  }

  getProduto(cod: number): Produto | undefined {
    return this.produtos.find((prod) => prod.cod == cod);
  }

}
