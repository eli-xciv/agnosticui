import { render, screen, getByText } from '@testing-library/vue';
import Card from './Card.vue';

test('Card renders', async () => {
  const { getByText } = render(Card, {
    slots: {
      default: '<div>Hello</div>',
    },
  });
  getByText('Hello');
});

test('Custom css class', async () => {
  const { container } = render(Card, {
    props: {
      css: 'my-klass'
    },
  });
  expect(container.firstChild.classList.contains('my-klass')).toBeTruthy()
});

test('stacked', async () => {
  const { container } = render(Card, {
    props: {
      isStacked: true
    },
  });
  expect(container.firstChild.classList.contains('card-stacked')).toBeTruthy()
});

test('no skin', async () => {
  const { container } = render(Card, {
    props: {
      isSkinned: false
    },
  });
  expect(container.firstChild.classList.contains('card-stacked')).toBeFalsy();
});