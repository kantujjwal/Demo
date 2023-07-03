import React from 'react'

const Manipulating = () => {


   function manipulateString(str) {
      if (str.length <= 3) {
         return str.toUpperCase();
      } else {
         return str.substring(0, 3).toLowerCase() + str.substring(3);
      }
   }

   const inputString = "Ujjwal";
   const manipulatedString = manipulateString(inputString);
   console.log(manipulatedString);


   return (
      <div>Manipulating</div>
   )
}

export default Manipulating