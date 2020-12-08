import { Component } from "@angular/core";
import { LancamentoService } from "../lancamento.service";
import { ToastyService } from "ng2-toasty";
import { ConfirmationService } from "primeng/api";

@Component({
  selector: "app-lancamentos-pesquisa",
  templateUrl: "./lancamentos-pesquisa.component.html",
  styleUrls: ["./lancamentos-pesquisa.component.css"]
})
export class LancamentosPesquisaComponent {
  lancamentos = [];

  constructor(
    private lancamentoService: LancamentoService,
    private toastyService: ToastyService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar() {
    this.lancamentoService.pesquisar().then(lancamentos => {
      this.lancamentos = lancamentos;
      this.toastyService.success(`Toasty Instalado com sucesso!`);
    });
  }
  confirmarExclusao(lancamento: any) {
    this.confirmationService.confirm({
      message: "Tem certeza que deseja Excluir",
      accept: () => {}
    });
  }
}
