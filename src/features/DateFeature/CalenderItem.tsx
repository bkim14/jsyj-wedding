import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CustomCalendar.css';
import { useEffect, useState } from 'react';

const WRAPPER_DIV_STYLE =
  'display: flex; width: 30px; height: 30px; margin: 0 auto; background: #d56276; border-radius: 20px;align-items:center;justify-content:center;';

const CalenderItem = () => {
  const [hasSet, setHasSet] = useState(false);

  useEffect(() => {
    const selectedTile = document.getElementsByClassName(
      'react-calendar__tile--active',
    )[0];
    if (
      selectedTile.childNodes[0] &&
      selectedTile.childNodes[0].nodeName === 'ABBR' &&
      !hasSet
    ) {
      const clonedChild = selectedTile.childNodes[0].cloneNode(true);
      selectedTile.removeChild(selectedTile.childNodes[0]);
      const wrapper = document.createElement('div');
      wrapper.setAttribute('style', WRAPPER_DIV_STYLE);
      wrapper.appendChild(clonedChild);
      selectedTile.appendChild(wrapper);
      setHasSet(true);
    }
  }, [hasSet]);

  return (
    <Calendar
      defaultValue={new Date(2025, 4, 17)}
      formatDay={(_, date) => {
        return date.getDate().toString();
      }}
      onClickDay={() => {}}
      goToRangeStartOnSelect={false}
      showNavigation={false}
      showNeighboringMonth={false}
      calendarType="gregory"
    />
  );
};

export default CalenderItem;
