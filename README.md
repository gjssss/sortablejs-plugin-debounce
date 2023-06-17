# sortablejs-plugin-debounce
A Sortablejs Plugin, to debounce placing when dragging element.

example:
```js
  // use the plugin
  Sortable.mount(new DebouncePlugin()); 
  
  new Sortable(document.getElementById("list"), {
    animation: 150,
    debounce: true, // enable the plugin
    debounceTimeout: 300, // Place the element after dragging stops for 0.3 seconds.
    shakeRange: 3 // 'stops' means the element stays in a circle area of 3px, which allows the user to shake element within a threshold. 
  });
```
