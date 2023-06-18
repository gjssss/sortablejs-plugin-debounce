import Sortable from "sortablejs";
import { DebouncePlugin } from "../lib/main.js";

Sortable.mount(new DebouncePlugin());

new Sortable(document.getElementById("list"), {
  animation: 150,
  debounce: true,
  debounceTimeout: 300,
  shakeRange: 3,
});
