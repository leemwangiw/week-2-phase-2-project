import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import "/home/lee/week-2-phase-2-project/bot-battlr/src/App.css";

function App() {
  const [bots, setBots] = useState([]);
  const [yourArmy, setYourArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  const addBotToArmy = (bot) => {
    if (!yourArmy.some((b) => b.id === bot.id)) {
      setYourArmy([...yourArmy, bot]);
    }
  };

  const removeBotFromArmy = (bot) => {
    setYourArmy(yourArmy.filter((b) => b.id !== bot.id));
  };

  const deleteBot = (bot) => {
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: "DELETE",
    }).then(() => {
      setBots(bots.filter((b) => b.id !== bot.id));
      setYourArmy(yourArmy.filter((b) => b.id !== bot.id));
    });
  };

  return (
    <div className="App">
      <h2>Bot Collection</h2>
      <BotCollection bots={bots} addBotToArmy={addBotToArmy} />
      <h2>Your Bot Army</h2>
      <YourBotArmy
        bots={yourArmy}
        removeBotFromArmy={removeBotFromArmy}
        deleteBot={deleteBot}
      />
    </div>
  );
}

export default App;
