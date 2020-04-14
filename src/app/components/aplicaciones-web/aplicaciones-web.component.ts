import { Component, OnInit } from "@angular/core";
import * as AOS from "aos";

@Component({
  selector: "app-aplicaciones-web",
  templateUrl: "./aplicaciones-web.component.html",
  styleUrls: ["./aplicaciones-web.component.scss"],
})
export class AplicacionesWebComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    AOS.init();
  }
}
