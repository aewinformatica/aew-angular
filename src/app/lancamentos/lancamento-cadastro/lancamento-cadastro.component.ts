import { Component, OnInit } from "@angular/core";
import { CategoriaService } from "../../categorias/categoria.service";
import { ErrorHandlerService } from "../../core/error-handler.service";
import { PessoaService } from "../../pessoas/pessoa.service";

@Component({
  selector: "app-lancamento-cadastro",
  templateUrl: "./lancamento-cadastro.component.html",
  styleUrls: ["./lancamento-cadastro.component.css"]
})
export class LancamentoCadastroComponent implements OnInit {
  tipos = [
    {
      label: "Receita",
      value: "RECEITA"
    },
    {
      label: "Despesa",
      value: "DESPESA"
    }
  ];

  categorias = [
    // { label: "Alimentação", value: 1 },
    // { label: "Transporte", value: 2 }
  ];

  pessoas = [
    // { label: "João da Silva", value: 4 },
    // { label: "Sebastião Souza", value: 9 },
    // { label: "Maria Abadia", value: 3 }
  ];

  ngOnInit() {
    this.carregarCategorias();
    this.carregarPessoas();
  }

  constructor(
    private categoriaService: CategoriaService,
    private pessoasService: PessoaService,
    private errorHandlerService: ErrorHandlerService
  ) {}

  carregarCategorias() {
    return this.categoriaService
      .listarTodas()
      .then(
        dados =>
          (this.categorias = dados.map(c => ({
            label: c.nome,
            value: c.codigo
          })))
      )
      .catch(erro => this.errorHandlerService.handle(erro));
  }

  carregarPessoas() {
    return this.pessoasService
      .listarTodas()
      .then(dados => {
        this.pessoas = dados.map(p => ({ label: p.nome, value: p.codigo }));
      })
      .catch(erro => this.errorHandlerService.handle(erro));
  }
}
