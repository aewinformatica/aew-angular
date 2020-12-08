import { NgModule } from "@angular/core";
import { CommonModule, registerLocaleData } from "@angular/common";
import { NavbarComponent } from "./navbar/navbar.component";
import localePT from "@angular/common/locales/pt";
import { ErrorHandlerService } from "./error-handler.service";
import { CategoriaService } from "../categorias/categoria.service";
import { RouterModule } from "@angular/router";
import { PessoaService } from "../pessoas/pessoa.service";
import { LancamentoService } from "../lancamentos/lancamento.service";
import { PaginaNaoEncontradaComponent } from "./pagina-nao-encontrada.component";
import { AuthService } from "../seguranca/auth.service";
import { JwtHelper } from "angular2-jwt";

registerLocaleData(localePT);

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [NavbarComponent, PaginaNaoEncontradaComponent],
  exports: [NavbarComponent],
  providers: [
    ErrorHandlerService,
    CategoriaService,
    PessoaService,
    LancamentoService,
    AuthService,
    JwtHelper
  ]
})
export class CoreModule {}
