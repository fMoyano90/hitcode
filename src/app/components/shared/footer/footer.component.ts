import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  public anio: number;

  constructor() {}

  ngOnInit() {
    this.obtenerAnio();
  }

  obtenerAnio() {
    let fecha = new Date();
    this.anio = fecha.getFullYear();
  }
}
