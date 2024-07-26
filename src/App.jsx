// App.jsx
import React, { useState, useEffect } from 'react';
import {
  AppWrapper,
  Container,
  Title,
  Header,
  Select,
  WeekendGrid,
  WeekendRow,
  WeekendDay,
  DayDateWrapper,
  DayOfWeek,
  DateNumber,
  Status
} from './App.styles';

const App = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [weekends, setWeekends] = useState([]);
  const [selectedDays, setSelectedDays] = useState({});

  useEffect(() => {
    const getWeekends = () => {
      const date = new Date(selectedYear, selectedMonth, 1);
      const weekends = [];
      let currentWeekend = [];

      while (date.getMonth() === selectedMonth) {
        if (date.getDay() === 6 || date.getDay() === 0) {
          currentWeekend.push(new Date(date));
          if (date.getDay() === 0 || date.getDate() === new Date(selectedYear, selectedMonth + 1, 0).getDate()) {
            weekends.push(currentWeekend);
            currentWeekend = [];
          }
        }
        date.setDate(date.getDate() + 1);
      }

      if (currentWeekend.length > 0) {
        weekends.push(currentWeekend);
      }

      setWeekends(weekends);
    };

    getWeekends();
  }, [selectedMonth, selectedYear]);

  const handleDayClick = (date) => {
    setSelectedDays(prev => ({
      ...prev,
      [date.toDateString()]: !prev[date.toDateString()]
    }));
  };

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - 5 + i);

  const renderWeekendDay = (date) => (
    <WeekendDay
      key={date.toDateString()}
      onClick={() => handleDayClick(date)}
      selected={selectedDays[date.toDateString()]}
    >
      <DayDateWrapper>
        <DayOfWeek>{date.toLocaleDateString('en-US', { weekday: 'short' })}</DayOfWeek>
        <DateNumber>{date.getDate()}</DateNumber>
      </DayDateWrapper>
      <Status booked={selectedDays[date.toDateString()]}>
        {selectedDays[date.toDateString()] ? 'Booked' : 'Available'}
      </Status>
    </WeekendDay>
  );

  return (
    <AppWrapper>
      <Container>
        <Title>Wedding Calendar</Title>
        <Header>
          <Select value={selectedMonth} onChange={(e) => setSelectedMonth(parseInt(e.target.value))}>
            {months.map((month, index) => (
              <option key={month} value={index}>{month}</option>
            ))}
          </Select>
          <Select value={selectedYear} onChange={(e) => setSelectedYear(parseInt(e.target.value))}>
            {years.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </Select>
        </Header>
        <WeekendGrid>
          {weekends.map((weekend, index) => (
            <WeekendRow key={index}>
              {Array.isArray(weekend) ? weekend.map(renderWeekendDay) : renderWeekendDay(weekend)}
            </WeekendRow>
          ))}
        </WeekendGrid>
      </Container>
    </AppWrapper>
  );
};

export default App;