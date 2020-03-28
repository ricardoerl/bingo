import React, { useState } from 'react';

function Card({ label }) {
  const [mark, setMark] = useState(false);
  return (
    <div
      className={`card ${mark ? 'card--marked' : 'card--unmarked'}`}
      onClick={() => setMark(true)}
    >
      <span className="card__label">{label}</span>
    </div>
  );
}

export default Card;
