import {animate, group, query, style, transition, trigger} from '@angular/animations';


export function slideTo(direction) {
  const optional = {optional: true};
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 60,
        [direction]: 0,
        width: '100%'
      })
    ], optional),
    query(':enter', [
      style({[direction]: '-100%'})
    ]),
    group([
      query(':leave', [
        animate('600ms ease', style({[direction]: '100%'}))
      ], optional),
      query(':enter', [
        animate('600ms ease', style({[direction]: '0%'}))
      ])
    ]),
  ];
}

export const slider =
  trigger('routeAnimations', [
    transition('* <=> *', slideTo('left'))
  ]);


