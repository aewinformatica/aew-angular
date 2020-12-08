import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";

@Injectable()
export class CategoriaService {
  categoriasUrl = "https://aewmoney-api.herokuapp.com/categorias";

  constructor(private http: Http) {}

  listarTodas(): Promise<any> {
    const headers = new Headers();
    headers.append(
      "Authorization",
      "Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg=="
    );

    return this.http
      .get(this.categoriasUrl, { headers })
      .toPromise()
      .then(response => response.json());
  }
}
