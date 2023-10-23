import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produtos-tabela',
  templateUrl: './produtos-tabela.component.html',
  styleUrls: ['./produtos-tabela.component.css']
})
export class ProdutosTabelaComponent implements OnInit {
  produtos: Produto[] = [];
  cod: string = '';

  constructor(private produtoService: ProdutoService, private router: Router){}
  
  irParaDetail(){
    this.router.navigate(['/produtos-tabela', this.cod]);
  }

  ngOnInit(): void {
    this.produtos = this.produtoService.listarProdutos()
  }
}