import { Injectable } from "@angular/core";

import { Http, Headers } from "@angular/http";
import { Lancamento } from "../core/model";

import * as moment from "moment";
import { AuthHttp } from "angular2-jwt";

@Injectable()
export class LancamentoService {
  lancamentosUrl = "https://aewmoney-api.herokuapp.com/lancamentos";

  constructor(private http: AuthHttp) {}

  pesquisar(): Promise<any> {
    const headers = new Headers();
    headers.append(
      "Authorization",
      "Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg=="
    );

    return this.http
      .get(`${this.lancamentosUrl}?resumo`, { headers })
      .toPromise()
      .then(response => response.json().content);
  }

  atualizar(lancamento: Lancamento): Promise<Lancamento> {
    const headers = new Headers();

    headers.append(
      "Authorization",
      "Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg=="
    );
    headers.append("Content-Type", "application/json");

    return this.http
      .put(
        `${this.lancamentosUrl}/${lancamento.codigo}`,
        JSON.stringify(lancamento),
        { headers }
      )
      .toPromise()
      .then(response => {
        const lancamentoAlterado = response.json() as Lancamento;

        this.converterStringsParaDatas([lancamentoAlterado]);

        return lancamentoAlterado;
      });
  }

  buscarPorCodigo(codigo: number): Promise<Lancamento> {
    const headers = new Headers();

    headers.append(
      "Authorization",
      "Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg=="
    );

    return this.http
      .get(`${this.lancamentosUrl}/${codigo}`, { headers })
      .toPromise()
      .then(response => {
        const lancamento = response.json() as Lancamento;

        this.converterStringsParaDatas([lancamento]);

        return lancamento;
      });
  }

  private converterStringsParaDatas(lancamentos: Lancamento[]) {
    for (const lancamento of lancamentos) {
      lancamento.dataVencimento = moment(
        lancamento.dataVencimento,
        "YYYY-MM-DD"
      ).toDate();

      if (lancamento.dataPagamento) {
        lancamento.dataPagamento = moment(
          lancamento.dataPagamento,
          "YYYY-MM-DD"
        ).toDate();
      }
    }
  }
}
