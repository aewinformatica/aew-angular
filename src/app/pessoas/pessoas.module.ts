import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";

import {
  ButtonModule,
  CalendarModule,
  DataTableModule,
  DropdownModule,
  InputMaskModule,
  InputTextModule,
  SelectButtonModule,
  TooltipModule
} from "primeng/primeng";
import { PessoaCadastroComponent } from "./pessoa-cadastro/pessoa-cadastro.component";
import { PessoasPesquisaComponent } from "./pessoas-pesquisa/pessoas-pesquisa.component";
import { PessoasGridComponent } from "./pessoas-grid/pessoas-grid.component";
import { PessoaService } from "./pessoa.service";
import { PessoasRoutingModule } from "./pessoas-routing.module";

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
    DropdownModule,
    DataTableModule,
    PessoasRoutingModule
  ],
  declarations: [
    PessoaCadastroComponent,
    PessoasPesquisaComponent,
    PessoasGridComponent
  ],
  exports: [PessoaCadastroComponent, PessoasPesquisaComponent],
  providers: [PessoaService]
})
export class PessoasModule {}
