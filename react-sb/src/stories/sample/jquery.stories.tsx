import React, { Component } from 'react';

import { storiesOf } from '@storybook/react';

declare var $: any;

class JQ extends Component {
  render() {
    $(() => {
      alert('jQuery is loaded');
    });
    return "jquery";
  }
}

storiesOf('jQuery', module).add('isReady', () => (
  <JQ />
));
