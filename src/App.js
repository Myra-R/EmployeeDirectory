// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import employeeData from './employee.json';

import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const App = () => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);

  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    setRowData(employeeData);
    // fetch(need to add raw data here from site )

    //   .then(result => result.json())
  //     .then(rowData => setRowData(rowData))
}, []);


  function onGridReady(params) {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  }

  return (
    <div className="ag-theme-alpine" style={{ height: 600, width: 800 }}>
      <AgGridReact
        onGridReady={onGridReady}
        rowData={rowData}>
        <AgGridColumn field="first_name" sortable={true} filter={true}></AgGridColumn>
        <AgGridColumn field="last_name"sortable={true} filter={true}></AgGridColumn>
        <AgGridColumn field="email"sortable={true} filter={true}></AgGridColumn>
        <AgGridColumn field="title"sortable={true} filter={true}></AgGridColumn>
      </AgGridReact>
    </div>
  );
};
export default App;
render(<App />, document.getElementById('root'));


