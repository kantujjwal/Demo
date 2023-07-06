import React, { useState } from 'react';

const LeapYearValidator = () => {
   const [year, setYear] = useState('');
   const [isValid, setIsValid] = useState(false);

   const handleInputChange = (e) => {
      setYear(e.target.value);
   };

   const validateLeapYear = () => {
      const inputYear = parseInt(year);
      if (isNaN(inputYear)) {
         setIsValid(false);
      } else {
         setIsValid((inputYear % 4 === 0 && inputYear % 100 !== 0) || inputYear % 400 === 0);
      }
   };

   return (
      <div>
         <input type="text" value={year} onChange={handleInputChange} />
         <button onClick={validateLeapYear}>Validate Leap Year</button>
         {isValid && <p>{year} is a leap year!</p>}
         {!isValid && <p>{year} is not a leap year.</p>}
      </div>
   );
};

export default LeapYearValidator;
