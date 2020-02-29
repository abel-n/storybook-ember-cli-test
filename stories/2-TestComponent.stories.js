import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'TestComponent',
};

export const TestComponent = () => ({
  template: hbs`{{test-component}}`
});

TestComponent.story = {
  name: 'it renders',
};
