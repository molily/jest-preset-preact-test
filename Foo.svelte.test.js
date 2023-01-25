import Foo from './Foo.svelte';

it('works', () => {
  const foo = new Foo.default({ target: document.body });
  expect(document.body.textContent).toContain('Foo');
  foo.$destroy();
});
