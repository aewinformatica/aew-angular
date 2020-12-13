import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Router } from "@angular/router";
import { JwtHelper } from "angular2-jwt";

@Injectable()
export class AuthService {
  oauthTokenUrl = "https://aewmoney-api.herokuapp.com/oauth/token";
  jwtPayload: any;

  constructor(
    private http: Http,
    private jwtHelper: JwtHelper,
    router: Router
  ) {
    this.carregarToken();
  }

  login(usuario: string, senha: string): Promise<void> {
    const headers = new Headers();
    headers.append("Authorization", "Basic YW5ndWxhcjpAbmd1bEByMA==");
    headers.append("Content-Type", "application/x-www-form-urlencoded");

    const body = `username=${usuario}&password=${senha}&grant_type=password`;

    return this.http
      .post(this.oauthTokenUrl, body, { headers, withCredentials: true })
      .toPromise()
      .then(response => {
        this.armazenarToken(response.json().access_token);
      })
      .catch(response => {
        if (response.status === 400) {
          const responseJson = response.json();

          if (responseJson.error === "invalid_grant") {
            return Promise.reject("Usuario ou Senha Invalida!");
          }
        }
        return Promise.reject(response);
      });
  }

  isAccessTokenInvalido() {
    const token = localStorage.getItem("token");

    return !token || this.jwtHelper.isTokenExpired(token);
  }

  temPermissao(permissao: string) {
    return this.jwtPayload && this.jwtPayload.authorities.includes(permissao);
  }

  //verificar se as permissoes batem com a enviada pela API
  temQualquerPermissao(roles) {
    for (const role of roles) {
      if (this.temPermissao(role)) {
        return true;
      }
    }

    return false;
  }

  obterNovoAccessToken(): Promise<void> {
    const headers = new Headers();
    headers.append("Authorization", "Basic YW5ndWxhcjpAbmd1bEByMA==");
    headers.append("Content-Type", "application/x-www-form-urlencoded");

    const body = "grant_type=refresh_token";

    return this.http
      .post(this.oauthTokenUrl, body, { headers, withCredentials: true })
      .toPromise()
      .then(response => {
        this.armazenarToken(response.json().access_token);

        console.log("Novo access token Criado!");

        Promise.resolve(null);
      })
      .catch(response => {
        console.error("Erro ao Criar o novo token", response);
        // this.router.navigate['/login']
        Promise.resolve(null);
      });
  }

  private armazenarToken(token: string) {
    this.jwtPayload = this.jwtHelper.decodeToken(token);
    localStorage.setItem("token", token);
  }

  private carregarToken() {
    const token = localStorage.getItem("token");

    if (token) {
      this.armazenarToken(token);
    }
  }
}
