import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

const Javascript = () => {
   const [num, setNum] = useState('')
   const [num1, setNum1] = useState('')
   const [result, setResult] = useState('')

   const handleNum1Change = (e) => {
      setNum(e.target.value)
   }

   const handleNum2Change = (e) => {
      setNum1(e.target.value)
   }

   const handleMultiply = () => {
      const multiplicationResult = Number(num) * Number(num1)
      setResult(multiplicationResult)
      handleClear()
   }

   const handleClear = () => {
      setNum('');
      setNum1('');
      setResult('');
   };

   return (
      <>
         <div className='pb-3 mb-3'>
            <Container className='mb-5 pt-1'>
               <div>
                  <input
                     className='input m-2 br_r'
                     type="number"
                     value={num}
                     onChange={handleNum1Change}
                  />
                  {/* <br /> */}
                  <input
                     className='input m-2 br_r'
                     type="number"
                     value={num1}
                     onChange={handleNum2Change}
                  />
                  <button onClick={handleMultiply}>Multiply</button>
                  <p>
                     Result: {result}
                  </p>
               </div>
            </Container>
         </div>
      </>
   )
}

export default Javascript
