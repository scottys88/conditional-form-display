import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({
          position: 'relative',
          transform: 'translateY(-10px)',
          opacity: 0
        }),
        animate(
          '0.25s',
          style({
            opacity: 1,
            transform: 'translateY(0)'
          })
        )
      ])
    ]),
  ]
})
export class ContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
