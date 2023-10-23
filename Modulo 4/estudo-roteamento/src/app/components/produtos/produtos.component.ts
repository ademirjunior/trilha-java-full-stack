import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos: Produto[] = [];
  cod: string = '';

  constructor(private produtoService: ProdutoService, private router: Router){}
  
  irParaDetail(){
    this.router.navigate(['/produtos', this.cod]);
  }

  ngOnInit(): void {
    this.produtos = this.produtoService.listarProdutos()
  }
}
