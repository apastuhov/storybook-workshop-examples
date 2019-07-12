import { storiesOf, forceReRender, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';
import { centered } from '@storybook/addon-centered/angular';
import { text, withKnobs } from '@storybook/addon-knobs';

import { ColorCardComponent } from './color-card.component';
import notes from './color-card.doc.md';

storiesOf('ColorCard', module)
  .addDecorator(withKnobs)
  // .addDecorator(centered)
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
        color: text('color', '#6644ff'),
        colorClick: action('clicked'),
      },
    })
  )
  .add(
    'simple via template',
    () => ({
      template: '<app-color-card [color]="mycolor" (colorClick)="onclick($event)"></app-color-card>',
      props: {
        mycolor: text('mycolor', '#6644ff'),
        onclick: action('clicked'),
      },
    })
  )
  .add(
    'dynamic',
    () => ({
      template: '<app-color-card [color]="mycolor" (colorClick)="onclick()"></app-color-card>',
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
