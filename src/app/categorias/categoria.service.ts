import { Injectable } from "@angular/core";
import { AuthHttp } from "angular2-jwt";

@Injectable()
export class CategoriaService {
  categoriasUrl = "https://aewmoney-api.herokuapp.com/categorias";

  constructor(private http: AuthHttp) {}

  listarTodas(): Promise<any> {
    return this.http
      .get(this.categoriasUrl)
      .toPromise()
      .then(response => response.json());
  }
}
