import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CounterComponent extends Component {
  @tracked
  count = 1;

  get isRed() {
    return this.count > 3;
  }

  get isIncDisabled() {
    return this.count >= this.currentMaxCount;
  }

  get currentMaxCount() {
    return this.args.maxCount || 10;
  }

  @action
  increment() {
    ++this.count;
  }

  decrement = () => {
    --this.count;
  };
}
