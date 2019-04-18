import { storiesOf } from '@storybook/angular';
import { Component } from '@angular/core';

declare var $;

@Component({
  selector: 'app-jq',
  template: '',
})
class JqComponent {
  constructor() {
    $(() => {
      alert('jQuery is loaded');
    });
  }
}


storiesOf('jQuery', module).add('isReady', () => ({
  component: JqComponent,
}));
