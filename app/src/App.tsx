import React from 'react';
import Chart from './components/Chart';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header/>
      <Chart data={[{name: 'hello'}]}/> 
    </div>
  );
}

export default App;
