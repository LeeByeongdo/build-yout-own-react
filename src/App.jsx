import Beact from './beact.js';

/** @jsx Beact.createElement */
export default function App(props) {
  return (
    <div>
      <input onInput={props.onChange} value={props.value} />
      <h1>HELLO WORLD {props.value}</h1>
      <Counter />
    </div>
  );
}

function Counter() {
  const [state, setState] = Beact.useState(1);

  return (
    <h1 onClick={() => setState(c => c + 1)}>ClickMe! Count: {state}</h1>
  )
}