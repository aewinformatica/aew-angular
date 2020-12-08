import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";

export class PessoaFiltro {
  nome: string;
  pagina = 0;
  itensPorPagina = 3;
}

@Injectable()
export class PessoaService {
  pessoasUrl = "https://aewmoney-api.herokuapp.com/pessoas";

  constructor(private http: Http) {}

  listarTodas(): Promise<any> {
    const headers = new Headers();
    headers.append(
      "Authorization",
      "Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg=="
    );

    return this.http
      .get(this.pessoasUrl, { headers })
      .toPromise()
      .then(response => response.json().content);
  }

  pesquisar(filtro: PessoaFiltro): Promise<any> {
    const headers = new Headers();
    headers.append(
      "Authorization",
      "Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg=="
    );

    const params = new URLSearchParams();
    params.set("page", filtro.pagina.toString());
    params.set("size", filtro.itensPorPagina.toString());

    if (filtro.nome) {
      params.set("nome", filtro.nome);
    }

    return this.http
      .get(this.pessoasUrl, { headers, search: params })
      .toPromise()
      .then(response => {
        const pessoas = response.json().content;
        const responseJson = response.json();
        const resultado = {
          pessoas,
          total: responseJson.totalElements
        };
        return resultado;
      });
  }
  excluir(codigo: number): Promise<any> {
    const headers = new Headers();
    headers.append(
      "Authorization",
      "Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg=="
    );
    return this.http
      .delete(`${this.pessoasUrl}/${codigo}`, { headers })
      .toPromise()
      .then(() => null);
  }
}
