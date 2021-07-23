import { useState } from "react";
import "./styles.css";
export default function App() {
  var [meaning, setMeaning] = useState(" ");
  const foodDictionary = {
    "🍇": "Grapes",
    "🍈": "Melon",
    "🍉": "Watermelon",
    "🍊": "Tangerine",
    "🍋": "Lemon",
    "🍌": "Banana",
    "🍍": "Pineapple",
    "🥭": "Mango",
    "🍎": "Red Apple",
    "🍏": "Green Apple",
    "🍐": "Pear",
    "🍑": "Peach",
    "🍒": "Cherries",
    "🍓": "Strawberry"
  };
  function inputChangeHandler(event) {
    var fruit = event.target.value;
    meaning = foodDictionary[fruit];

    if (meaning === undefined) {
      meaning = "Apologies. We do not have this in our database. :(";
    }
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> emojisplaining</h1>
      <input onChange={inputChangeHandler} />
      <div className="result">{meaning}</div>
    </div>
  );
}
