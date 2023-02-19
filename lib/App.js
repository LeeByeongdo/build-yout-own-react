import Beact from './beact.js';

/** @jsx Beact.createElement */
export default function App(props) {
  return Beact.createElement("div", null, Beact.createElement("input", {
    onInput: props.onChange,
    value: props.value
  }), Beact.createElement("h1", null, "HELLO WORLD ", props.value), Beact.createElement(Counter, null));
}
function Counter() {
  const [state, setState] = Beact.useState(1);
  return Beact.createElement("h1", {
    onClick: () => setState(c => c + 1)
  }, "ClickMe! Count: ", state);
}