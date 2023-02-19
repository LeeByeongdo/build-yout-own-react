import App from "./App.js";
import Beact from "./beact.js";

const container = document.getElementById("root");

/** @jsx Beact.createElement */
const updateValue = (e) => {
  Beact.render(<App onChange={updateValue} value={e.target.value} />, container);
};

const element = <App onChange={updateValue} value={'World'} />;
Beact.render(element, container);
