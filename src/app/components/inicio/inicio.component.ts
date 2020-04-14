import { Component, OnInit } from "@angular/core";
import {
  state,
  style,
  trigger,
  transition,
  animate
} from "@angular/animations";

import * as AOS from "aos";

@Component({
  selector: "app-inicio",
  templateUrl: "./inicio.component.html",
  styleUrls: ["./inicio.component.scss"]
})
export class InicioComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    AOS.init();
  }
}
