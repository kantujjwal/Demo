// import React, { useState } from "react";
// import { Container } from "react-bootstrap";
// import { Pie } from "react-chartjs-2";

// const PieChart = () => {
//   const [chartData, setChartData] = useState({
//     labels: [],
//     datasets: [
//       {
//         data: [],
//         backgroundColor: [],
//       },
//     ],
//   });

//   const handleDataEntry = (event) => {
//     event.preventDefault();
//     const { labels, values } = event.target.elements;
//     const newLabel = labels.value;
//     const newValue = parseInt(values.value);

//     setChartData((prevState) => {
//       const updatedLabels = [...prevState.labels, newLabel];
//       const updatedValues = [...prevState.datasets[0].data, newValue];
//       const updatedColors = generateRandomColors(updatedLabels.length);

//       return {
//         labels: updatedLabels,
//         datasets: [
//           {
//             data: updatedValues,
//             backgroundColor: updatedColors,
//           },
//         ],
//       };
//     });

//     event.target.reset();
//   };

//   const generateRandomColors = (numColors) => {
//     const colors = [];
//     for (let i = 0; i < numColors; i++) {
//       const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//       colors.push(color);
//     }
//     return colors;
//   };

//   return (
//     <div className="pt-3 pb-3">
//       <Container className="mt-5 pt-5 pb-5">
//         <h1 className="text-center mb-4">Pie Chart</h1>
//         <form onSubmit={handleDataEntry}>
//           <label htmlFor="labels">Label:</label>
//           <input type="text" id="labels" required />
//           <label htmlFor="values">Value:</label>
//           <input type="number" id="values" required />
//           <button type="submit">Add Data</button>
//         </form>
//         <Pie data={chartData} />
//       </Container>
//     </div>
//   );
// };

// export default PieChart;
