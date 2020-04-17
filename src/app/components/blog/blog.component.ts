import { Component, OnInit } from "@angular/core";
import * as AOS from "aos";
declare var particlesJS: any;

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"],
})
export class BlogComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    AOS.init();

    particlesJS.load(
      "particles-js",
      "assets/json/particlesjs-config.json",
      function () {
        console.log("callback - particles.js config loaded");
      }
    );
  }
}
