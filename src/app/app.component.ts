import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ChildComponent} from "../components/child/child.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'untitled6';
  data = [
    {
    name: 'name 1',
    description: 'description',
    uri: 'uri',
  },
  {
    name: 'second name',
    description: 'description',
    uri: 'uri',
  },
  {
    name: 'third name',
    description: 'description',
    uri: 'uri',
  }]
}
