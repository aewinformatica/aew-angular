import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ButtonModule, InputTextModule } from "primeng/primeng";
import { LoginFormComponent } from "./login-form/login-form.component";
import { SegurancaRoutingModule } from "./seguranca-routing.module";
import { Http, RequestOptions } from "@angular/http";
import { AuthConfig, AuthHttp } from "angular2-jwt";
import { InterceptHttp } from "./InterceptHttp";
import { AuthService } from "./auth.service";

// export function authHttpServiceFactory(http: Http, options: RequestOptions) {
//   const config = new AuthConfig({
//     globalHeaders: [{ "Content-Type": "application/json" }]
//   });
//   return new AuthHttp(config, http, options);
// }

export function authHttpServiceFactory(
  auth: AuthService,
  http: Http,
  options: RequestOptions
) {
  const config = new AuthConfig({
    globalHeaders: [{ "Content-Type": "application/json" }]
  });
  return new InterceptHttp(auth, config, http, options);
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
      deps: [AuthService, Http, RequestOptions]
    }
  ]
})
export class SegurancaModule {}
