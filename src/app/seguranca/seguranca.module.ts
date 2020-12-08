import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ButtonModule, InputTextModule } from "primeng/primeng";
import { LoginFormComponent } from "./login-form/login-form.component";
import { SegurancaRoutingModule } from "./seguranca-routing.module";
// import { AuthService } from "./auth.service";
import { Http, RequestOptions } from "@angular/http";
import { AuthConfig, AuthHttp } from "angular2-jwt";

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  const config = new AuthConfig({
    globalHeaders: [{ "Content-Type": "application/json" }]
  });
  return new AuthHttp(config, http, options);
}
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    SegurancaRoutingModule
  ],
  declarations: [LoginFormComponent],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ]
})
export class SegurancaModule {}
