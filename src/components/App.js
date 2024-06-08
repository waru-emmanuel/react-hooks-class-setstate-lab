/*import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
*/

import React, { Component } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: itemData,
      isDarkMode: false,
    };
    this.handleDarkModeClick = this.handleDarkModeClick.bind(this);
  }

  handleDarkModeClick() {
    this.setState((prevState) => ({
      isDarkMode: !prevState.isDarkMode,
    }));
  }

  render() {
    const { items, isDarkMode } = this.state;

    return (
      <div className={"App " + (isDarkMode ? "dark" : "light")}>
        <header>
          <h2>Shopster</h2>
          <button onClick={this.handleDarkModeClick}>
            {isDarkMode ? "Dark" : "Light"} Mode
          </button>
        </header>
        <ShoppingList items={items} />
      </div>
    );
  }
}

export default App;


//Constructor: Initializes the state with items and isDarkMode, and binds the handleDarkModeClick method.
//handleDarkModeClick: Toggles the isDarkMode state.
//render: Destructures items and isDarkMode from the state, and applies the corresponding class to the div based on the isDarkMode state. It also renders the ShoppingList component with the items prop.