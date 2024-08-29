import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input()name: string= '';
  @Input()description: string= '';
  @Input()uri: string='';

}
