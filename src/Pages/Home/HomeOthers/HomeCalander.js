import React, { useState } from 'react';
import Calendar from 'react-calendar';

import './HomeCalander.css';

const HomeCalendar = () => {
  const [tgl, setTgl] = useState(new Date());
  const events = [
    { date: new Date(2023, 4, 19) },
    { date: new Date(2023, 3, 20) },
    { date: new Date(2023, 5, 7) },
    { date: new Date(2023, 7, 10) },
    { date: new Date(2023, 1, 1) },
    { date: new Date(2023, 4, 4) },
  ];

  const highlightTile = ({ date }) => {
    const event = events.find((event) => {
      const dayBeforeEvent = new Date(event.date.getFullYear(), event.date.getMonth() - 1, event.date.getDate());
      return (
        dayBeforeEvent.getDate() === date.getDate() &&
        dayBeforeEvent.getMonth() === date.getMonth() &&
        dayBeforeEvent.getFullYear() === date.getFullYear()
      );
    });

    return event ? <span className="event-marker"></span> : null;
  };

  return (
    <div className="w-full h-full">
      <Calendar 
       
        className="calenderMain rounded-xl"
        onChange={setTgl}
        value={tgl}
        tileContent={highlightTile}
      />
    </div>
  );
};

export default HomeCalendar;
