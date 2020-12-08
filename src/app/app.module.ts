import { LOCALE_ID, NgModule } from "@angular/core";

import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { ToastyModule } from "ng2-toasty";

import { ConfirmDialogModule } from "primeng/components/confirmdialog/confirmdialog";
import { ConfirmationService } from "primeng/components/common/api";

import { CoreModule } from "./core/core.module";
import { LancamentoService } from "./lancamentos/lancamento.service";

import { LancamentosModule } from "./lancamentos/lancamentos.module";
import { PessoasModule } from "./pessoas/pessoas.module";
import { CategoriaService } from "./categorias/categoria.service";
import { AppRoutingModule } from "./app-routing.module";
import { SegurancaModule } from "./seguranca/seguranca.module";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpModule,
    ConfirmDialogModule,
    ToastyModule.forRoot(),
    LancamentosModule,
    PessoasModule,
    SegurancaModule,
    AppRoutingModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    LancamentoService,
    ConfirmationService,
    CategoriaService,
    { provide: LOCALE_ID, useValue: "pt" }
  ]
})
export class AppModule {}
