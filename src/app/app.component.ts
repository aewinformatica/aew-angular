import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ToastyConfig } from "ng2-toasty";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "AewInformatica";
  constructor(private toastyConfig: ToastyConfig, private router: Router) {
    this.toastyConfig.theme = "bootstrap";
  }

  exibindoNavbar() {
    return this.router.url !== "/login";
  }
}
