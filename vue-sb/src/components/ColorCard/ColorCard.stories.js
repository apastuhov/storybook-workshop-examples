import { storiesOf, forceReRender } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered/vue';
import { text, withKnobs } from '@storybook/addon-knobs';

import ColorCard from './ColorCard.vue';
// import notes from './ColorCard.doc.md';

const notes = "";

storiesOf('ColorCard', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({
    notes,
  })
  .add(
    'simple',
    () => ({
      components: { ColorCard },
      template: '<ColorCard @click="action" :color="color"></ColorCard>',
      methods: {
        action: action('clicked')
      },
      props: {
        color: {
          default: text('color', '#6644ff')
        }
      },
    })
  )
  .add(
    'dynamic',
    () => ({
      components: { ColorCard },
      template: '<ColorCard @click="action" :color="color"></ColorCard>',
      methods: {
        action() {
          this.color = getRandomColor();
          // No need to force-rerender
          // forceReRender();
        }
      },
      data: () => ({
        color: "#6644ff"
      })
    })
  );

function getRandomColor() {
  return `#${getRand()}${getRand()}${getRand()}`;
}

function getRand() {
  return parseInt((Math.random() * 10).toString(), 10);
}
