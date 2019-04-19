import React from 'react';

import { storiesOf, forceReRender } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered/react';
import { text, withKnobs } from '@storybook/addon-knobs';

import ColorCard from './color-card';
import notes from './color-card.doc.md';

storiesOf('ColorCard', module)
  .addDecorator(withKnobs)
  // .addDecorator(centered)
  .addDecorator(withNotes)
  .addDecorator(withInfo)
  .addParameters({
    notes,
  })
  .add(
    'simple',
    () => {
      const color = text('color', '#6644ff');

      return <ColorCard
        color={color}
        click={action('clicked')}
      />
    },
    { info: { inline: true } }
  )
  .add(
    'dynamic',
    () => {
      const color = getRandomColor();

      return <ColorCard
        color={color}
        click={forceRenderOnClick}
      />
    }
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
