// App.styles.js
import styled from 'styled-components';

const cream = '#f8f4e3';
const lightSage = '#d4ddb7';
const sage = '#98a886';
const tan = '#c2956e';
const darkBrown = '#3d3027';
const offWhite = '#faf9f6';

export const AppWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, ${cream} 0%, ${lightSage} 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-family: 'Montserrat', sans-serif;
`;

export const Container = styled.div`
  max-width: 800px;
  width: 100%;
  padding: 40px;
  background-color: ${offWhite};
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  text-align: center;
  font-size: 2.8rem;
  margin-bottom: 30px;
  color: ${darkBrown};
  font-weight: 700;
  letter-spacing: 2px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  gap: 20px;
`;

export const Select = styled.select`
  font-family: 'Montserrat', sans-serif;
  padding: 12px 20px;
  font-size: 1rem;
  color: ${darkBrown};
  background-color: ${cream};
  border: 2px solid ${tan};
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url('data:image/svg+xml;charset=US-ASCII,<svg xmlns="http://www.w3.org/2000/svg" width="292.4" height="292.4"><path fill="%233d3027" d="M287 69.4a17.6 17.6 0 0 0-13-5.4H18.4c-5 0-9.3 1.8-12.9 5.4A17.6 17.6 0 0 0 0 82.2c0 5 1.8 9.3 5.4 12.9l128 127.9c3.6 3.6 7.8 5.4 12.8 5.4s9.2-1.8 12.8-5.4L287 95c3.5-3.5 5.4-7.8 5.4-12.8 0-5-1.9-9.2-5.5-12.8z"/></svg>');
  background-repeat: no-repeat;
  background-position: right 12px top 50%;
  background-size: 12px auto;
  padding-right: 30px;

  &:hover, &:focus {
    background-color: ${lightSage};
    outline: none;
  }
`;

export const WeekendGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const WeekendRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px; // Add some space between rows
`;

export const WeekendDay = styled.div`
  flex: 1;
  max-width: 250px; // Increase max-width for a more rectangular shape
  border: 2px solid ${props => props.selected ? tan : sage};
  border-radius: 25px; // Increase border-radius for more rounded corners
  padding: 15px 10px;
  text-align: center;
  cursor: pointer;
  background-color: ${props => props.selected ? tan : cream};
  color: ${darkBrown};
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100px; // Reduce height to make it more rectangular
  min-width: 180px; // Add min-width to ensure a minimum size

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    background-color: ${lightSage};
  }
`;

export const DayOfWeek = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 2px;
  text-transform: uppercase;
  color: ${darkBrown};
`;

export const DateNumber = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.8rem;
  font-weight: 500;
  color: ${darkBrown};
`;

export const Status = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-top: 2px;
  color: ${props => props.booked ? darkBrown : sage};
`;