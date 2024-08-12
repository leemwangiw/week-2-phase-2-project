import React from "react";

function BotCard({ bot, handleClick, deleteBot }) {
  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>{bot.catchphrase}</p>
      <div className="bot-details">
        <p>Health: {bot.health}</p>
        <p>Damage: {bot.damage}</p>
        <p>Armor: {bot.armor}</p>
      </div>
      <div className="bot-actions">
        <button onClick={() => handleClick(bot)}>Add to Army</button>
        {deleteBot && (
          <button
            className="delete-button"
            onClick={(e) => {
              e.stopPropagation();
              deleteBot(bot);
            }}
          >
            x
          </button>
        )}
      </div>
    </div>
  );
}

export default BotCard;
