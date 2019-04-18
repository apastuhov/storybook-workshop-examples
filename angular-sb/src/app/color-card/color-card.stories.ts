import { storiesOf, forceReRender, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';

import { ColorCardComponent } from './color-card.component';
import notes from './color-card.doc.md';

storiesOf('ColorCard', module)
  .addDecorator(withNotes)
  .addDecorator(moduleMetadata({
    declarations: [
      ColorCardComponent,
    ],
  }))
  .addParameters({
    notes,
  })
  .add(
    'simple',
    () => ({
      component: ColorCardComponent,
      props: {
        color: '#6644ff',
        click: action('clicked'),
      },
    })
  )
  .add(
    'dynamic',
    () => ({
      template: '<app-color-card [color]="mycolor" (click)="onclick()"></app-color-card>',
      props: {
        mycolor: getRandomColor(),
        onclick: forceRenderOnClick,
      },
    })
  );


function getRandomColor() {
  return `#${getRand()}${getRand()}${getRand()}`;
}

function getRand() {
  return parseInt((Math.random() * 10).toString(), 10);
}

function forceRenderOnClick() {
  // Do not use force rerender!
  forceReRender();
}
