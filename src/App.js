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

  var emojisWeKnow = Object.keys(foodDictionary);
  function inputChangeHandler(event) {
    var fruit = event.target.value;
    meaning = foodDictionary[fruit];

    if (meaning === undefined && meaning !== " ") {
      meaning = "Apologies. We do not have this in our database. :(";
    }
    setMeaning(meaning);
  }
  function listClickHandler(item) {
    meaning = foodDictionary[item];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> emojisplaining</h1>
      <input onChange={inputChangeHandler} />
      <div className="result">{meaning}</div>

      <div>
        <ul>
          {emojisWeKnow.map(function (item) {
            return (
              <li key={item} onClick={() => listClickHandler(item)}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
