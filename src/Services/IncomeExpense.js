import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const IncomeExpense = () => {
   const [isOpen, setIsOpen] = useState(false);

   const openModal = () => {
      setIsOpen(true);
   };

   const closeModal = () => {
      setIsOpen(false);
   };

   const Button = styled.button`
  padding: 10px 20px;
  background-color: #2874F0;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

   return (
      <div className='pt-3 pb-3'>
         <Container className='mt-5 pt-5 pb-5'>
            <Button onClick={openModal}>Add Income Details</Button>

            {isOpen && (
               <div className="modal">
                  <div className="modal-content">
                     <span className="close" onClick={closeModal}>
                        {/* &times; */}
                     </span>
                     <h2>Income Details</h2>
                     <p>HI</p>
                  </div>
               </div>
            )}
         </Container>
      </div>
   );
};

export default IncomeExpense;




// import React from 'react'
// import { Container } from 'react-bootstrap'
// import styled from 'styled-components';

// const IncomeExpense = () => {

//    const Button = styled.button`
//   padding: 10px 20px;
//   background-color: #2874F0;
//   color: #fff;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
// `;
//    return (
//       <div className='  pt-3 pb-3'>
//          <Container className='mt-5 pt-5 pb-5'>
//             <h1 className="text-center mb-4">IncomeExpense</h1>
//             <Button>Add Income Details</Button>
//             <div class="container">
//                <div class="row">
//                   <div class="col-sm">
//                      SI. No.
//                   </div>
//                   <div class="col-sm">
//                      Amount
//                   </div>
//                   <div class="col-sm">
//                      Amount Name
//                   </div>
//                   <div class="col-sm">
//                      Amount Type
//                   </div>
//                   <div class="col-sm">
//                      Date
//                   </div>
//                </div>
//             </div>
//             {/* <!-- Button trigger modal --> */}
//             <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#exampleModal">
//                Add Income Details
//             </button>

//             {/* <!-- Modal --> */}
//             <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                <div class="modal-dialog" role="document">
//                   <div class="modal-content">
//                      <div class="modal-header">
//                         <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
//                         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                            <span aria-hidden="true">&times;</span>
//                         </button>
//                      </div>
//                      <div class="modal-body">
//                         ...
//                      </div>
//                      <div class="modal-footer">
//                         <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//                         <button type="button" class="btn btn-primary">Save changes</button>
//                      </div>
//                   </div>
//                </div>
//             </div>
//             {/* <tr>
//                <th>Amount</th>
//                <th>Type</th>
//                <th>Month</th>
//                <th>Income</th>
//             </tr> */}
//          </Container>
//       </div>
//    )
// }

// export default IncomeExpense