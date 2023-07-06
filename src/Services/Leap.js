import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

const LeapYearValidator = () => {
   const [date, setDate] = useState('');
   const [month, setMonth] = useState('');
   const [year, setYear] = useState('');
   const [isValid, setIsValid] = useState(false);

   const handleDateChange = (e) => {
      setDate(e.target.value);
   };

   const handleMonthChange = (e) => {
      setMonth(e.target.value);
   };

   const handleYearChange = (e) => {
      setYear(e.target.value);
   };

   const validateLeapYear = () => {
      const inputYear = parseInt(year);
      const inputMonth = parseInt(month);
      const inputDate = parseInt(date);

      if (isNaN(inputYear) || isNaN(inputMonth) || isNaN(inputDate)) {
         setIsValid(false);
      } else {
         const isLeapYear = (inputYear % 4 === 0 && inputYear % 100 !== 0) || inputYear % 400 === 0;
         const isValidDate = inputDate >= 1 && inputDate <= 31;
         const isValidMonth = inputMonth >= 1 && inputMonth <= 12;

         setIsValid(isLeapYear && isValidMonth && isValidDate);
      }
   };


   return (
      <div className='pt-3 pb-3 mb-3'>
         <Container className='mt-5 pt-5 pb-5'>
            <div>
               <input type="text" value={date} onChange={handleDateChange} placeholder="Enter date" />
               <input type="text" value={month} onChange={handleMonthChange} placeholder="Enter month" />
               <input type="text" value={year} onChange={handleYearChange} placeholder="Enter year" />
               <button onClick={validateLeapYear}>Validate Leap Year</button>
            </div>
            {isValid && <p>{`${date}/${month}/${year}`} is a valid date in a leap year!</p>}
            {!isValid && <p>{`${date}/${month}/${year}`} is a valid date or not a leap year.</p>}
         </Container>
      </div>
   );
};

export default LeapYearValidator;
