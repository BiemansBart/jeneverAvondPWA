import {animate, group, query, style, transition, trigger} from '@angular/animations';


export function slideTo() {
  const optional = {optional: true};
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 60,
        left: 0,
        width: '100%'
      })
    ], optional),
    query(':enter', [
      style({left: '-100%'})
    ]),
    group([
      query(':leave', [
        animate('600ms ease', style({left: '100%'}))
      ], optional),
      query(':enter', [
        animate('600ms ease', style({left: '0%'}))
      ])
    ]),
  ];
}

export const slider =
  trigger('routeAnimations', [
    transition('* <=> *', slideTo())
  ]);



