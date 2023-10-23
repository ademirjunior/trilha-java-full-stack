import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-detail',
  templateUrl: './produto-detail.component.html',
  styleUrls: ['./produto-detail.component.css']
})
export class ProdutoDetailComponent implements OnInit {

  produto?: Produto;
  naoEncontrado: boolean = false;
  pressionouFechar: boolean = false;

  aviso() {
    alert("Você precisa clicar em fechar!")
  }

  constructor(private produtoService: ProdutoService, private rout: ActivatedRoute){}
  
  ngOnInit(): void {
    this.rout.params.subscribe({
      next: (params)=>{
        const cod = Number(params['cod']);
        this.produto = this.produtoService.getProduto(cod);
        this.naoEncontrado = this.produto == undefined;
      }
    })
  }

}
