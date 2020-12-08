import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from "@angular/core";

@Component({
  selector: "app-lancamentos-grid",
  templateUrl: "./lancamentos-grid.component.html",
  styleUrls: ["./lancamentos-grid.component.css"]
})
export class LancamentosGridComponent {
  @Input() lancamentos = [];
  constructor() {}

  @Output() removerLancamento = new EventEmitter();

  @ViewChild("tabela", { static: true }) grid;

  remover(event) {
    this.removerLancamento.emit(event);
    console.log(event);

    this.grid.first = 0;
  }
}
