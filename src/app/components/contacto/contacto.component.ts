import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contacto",
  templateUrl: "./contacto.component.html",
  styleUrls: ["./contacto.component.scss"]
})
export class ContactoComponent implements OnInit {
  public motivo: string;
  public servicio: string;
  public precio: number;

  constructor() {
    this.motivo = "";
  }

  ngOnInit() {}

  atraparOpcion(motivo) {
    this.motivo = motivo;
  }

  atraparServicio(servicio) {
    switch (servicio) {
      case "swb":
        this.precio = 150000;
        break;
      case "swe":
        this.precio = 250000;
        break;
      case "sws":
        this.precio = 320000;
        break;
      case "tob":
        this.precio = 450000;
        break;
      case "toe":
        this.precio = 650000;
        break;
      case "tos":
        this.precio = 800000;
        break;
    }
  }
}
