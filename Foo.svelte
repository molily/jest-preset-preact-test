<script>
  import { afterUpdate, onDestroy, onMount } from 'svelte';

  console.log('Foo init');

  onMount(() => {
    console.log('Foo onMount');
  });
  afterUpdate(() => {
    console.log('Foo afterUpdate');
  });
  onDestroy(() => {
    console.log('Foo onDestroy');
  });
</script>

<p>Foo</p>
