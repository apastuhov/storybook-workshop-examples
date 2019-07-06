import { document, console } from 'global';
import { storiesOf } from '@storybook/html';

import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';
import centered from '@storybook/addon-centered/react';
import { text, withKnobs } from '@storybook/addon-knobs';

import notes from './color-card.doc.md';

storiesOf('Demo', module)
  .addDecorator(withKnobs)
  // .addDecorator(centered)
  .addDecorator(withNotes)
  .addParameters({
    notes,
  })
  .add('heading', () => {
    const color = text('color', '#6644ff');

    return `
      <div class="color-card" onclick="console.log('clicked')">
        <div style="background: ${color};"></div>
        <h3>${color.toUpperCase()}</h3>
      </div>
    `;
  })
  .add('button', () => {
    const button = document.createElement('button');
    button.type = 'button';
    button.innerText = 'Hello Button';
    button.addEventListener('click', action("clicked"));
    return button;
  });
