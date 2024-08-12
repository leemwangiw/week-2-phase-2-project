// src/components/BotSpecs.js
import React from "react";

function BotSpecs({ bot, onBack, onEnlist }) {
  return (
    <div className="bot-specs">
      <h2>
        {bot.name} - {bot.bot_class}
      </h2>
      <img src={bot.avatar_url} alt={bot.name} />
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Catchphrase: {bot.catchphrase}</p>
      <button onClick={onBack}>Back</button>
      <button onClick={() => onEnlist(bot)}>Enlist</button>
    </div>
  );
}

export default BotSpecs;
