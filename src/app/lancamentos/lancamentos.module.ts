import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import {
  InputTextModule,
  InputMaskModule,
  TooltipModule,
  ButtonModule,
  CalendarModule,
  DataTableModule,
  DropdownModule,
  SelectButtonModule,
  InputTextareaModule
} from "primeng/primeng";

import { CurrencyMaskModule } from "ng2-currency-mask";

import { SharedModule } from "../shared/shared.module";
import { LancamentosGridComponent } from "./lancamentos-grid/lancamentos-grid.component";
import { LancamentoCadastroComponent } from "./lancamento-cadastro/lancamento-cadastro.component";
import { LancamentosPesquisaComponent } from "./lancamentos-pesquisa/lancamentos-pesquisa.component";
import { LancamentosRoutingModule } from "./lancamentos-routing.module";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    InputTextModule,
    InputMaskModule,
    TooltipModule,
    ButtonModule,
    SelectButtonModule,
    CalendarModule,
    InputTextareaModule,
    CurrencyMaskModule,
    DropdownModule,
    DataTableModule,
    LancamentosRoutingModule
  ],

  declarations: [
    LancamentoCadastroComponent,
    LancamentosPesquisaComponent,
    LancamentosGridComponent
  ],
  exports: [LancamentoCadastroComponent, LancamentosPesquisaComponent]
})
export class LancamentosModule {}
