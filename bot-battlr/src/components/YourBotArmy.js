import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, removeBotFromArmy, deleteBot }) {
  return (
    <div className="your-bot-army">
      {bots.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          handleClick={removeBotFromArmy}
          deleteBot={deleteBot}
        />
      ))}
    </div>
  );
}

export default YourBotArmy;
