import { Component, AfterViewInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements AfterViewInit {
  title = "hitcash";
  public cargando: boolean;

  constructor() {
    this.cargando = true;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.cargando = false;
    }, 4000);
  }
}
