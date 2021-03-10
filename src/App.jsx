import "./App.css";
import React from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends React.Component {
  state = {
    monsters: [
      { name: "A", id: 1 },
      { name: "B", id: 2 },
    ],
    searchField: "",
  };

  // we make a request 1st thing
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((users) => {
        this.setState({ monsters: users });
      });
  }

  //helper method for the event
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const filteredList = this.state.monsters.filter((monster) =>
      monster.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    );
    // console.log(filteredList);
    return (
      <div className="App">
        <h1>Monster Roll</h1>
        <SearchBox
          placeholder="search for a mob"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredList} />
      </div>
    );
  }
}

export default App;
