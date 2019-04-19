import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

// import { Button, Welcome } from '@storybook/react/demo';

// storiesOf('React|Into/Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('React|Into/Button', module)
  .add('with text', () => <button onClick={action('clicked')}>Hello button</button>)
  .add('with some emoji', () => (
    <button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </button>
  ));
