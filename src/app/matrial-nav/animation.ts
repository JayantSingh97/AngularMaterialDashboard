import {
  animate,
  query,
  style,
  transition,
  trigger,
  group,
} from '@angular/animations';

export function routerAnimation() {
  return trigger('routerAnimation', [
    // One time initial load. Move page from bottom 100% to 0%
    transition('* => *', [
      query(':enter', [
        style({
          position: 'fixed',
          width: '100%',
          transform: 'translateY(100%)',
        }),
        animate(
          '400ms ease',
          style({
            opacity: 1,
            transform: 'translateY(0%)',
          }),
        ),
      ]),
    ]),

    //Below are more animation which can be configure as per project requirement.
    transition(':decrement', [
      
      query(
        ':enter',
        style({
          position: 'fixed',
          width: '100%',
          transform: 'translateY(-100%)',
        }),
      ),

      group([
        
        query(
          ':leave',
          animate(
            '10ms ease',
            style({
              position: 'fixed',
              width: '100%',
              transform: 'translateY(100%)',
            }),
          ),
        ),
   
        query(
          ':enter',
          animate(
            '600ms ease',
            style({
              opacity: 1,
              transform: 'translateY(0%)',
            }),
          ),
        ),
      ]),
    ]),

    
    transition(':increment', [
     
      query(
        ':enter',
        style({
          position: 'fixed',
          width: '100%',
          transform: 'translateY(100%)',
        }),
      ),

      group([
       
        query(
          ':leave',
          animate(
            '10ms ease',
            style({
              position: 'fixed',
              width: '100%',
              transform: 'translateY(-100%)',
            }),
          ),
        ),
         
        query(
          ':enter',
          animate(
            '600ms ease',
            style({
              opacity: 1,
              transform: 'translateY(0%)',
            }),
          ),
        ),
      ]),
    ]),
  ]);
}
