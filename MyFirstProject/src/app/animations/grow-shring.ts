import {animate, state, style, transition, trigger} from '@angular/animations';

export const growShrinkAnimation = trigger('growShrink', [
  state('small', style({
    opacity: 1.0,
    backgroundColor: '#ff0000',
    transform: 'scale(1)'
  })),
  state('big', style({
    opacity: 1,
    backgroundColor: '#00ff00',
    transform: 'scale(3)'
  })),
  state('really-big', style({
    opacity: 0.5,
    transform: 'scale(6)'
  })),
  transition('* <=> *', animate('500ms ease-in'))
]);
