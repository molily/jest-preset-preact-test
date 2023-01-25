import { h, render } from 'preact';

import { Foo } from './Foo.jsx';

it('works', () => {
  render(<Foo />, document.body);
  expect(document.body.textContent).toContain('Foo');
});
