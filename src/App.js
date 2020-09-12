import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import faker from 'faker';
import './App.css';
import TestList from "./components/List";





function App() {
  const [data, setData] = useState([]);
  //const [loading, setData] = useState([]);
  function makeData(){
    let size = 1000;
    let data = [];
    for(let i = 0; i < size; i++){
      data[i] = {
        id: i + 1,
        name: faker.name.firstName() + " " + faker.name.lastName(),
        address: faker.finance.bitcoinAddress(),
        process: 0
      }
    }
    console.log(data)
    return data;
  }

  const refreshData = (id = null) => {
    console.log(id)
    for(let i = 0; i < 300 ; i++){
      let id = (Math.random()*990).toFixed(0);
      data[id] = {
        ...data[id],
        address: faker.finance.bitcoinAddress(),
        process: data[id].process + faker.random.number(5)
      }
    }
    setData([...data]);
  }

  const addNew = () => {
    setData([...data, {
      id: data.length + 1,
      name: faker.name.firstName() + " " + faker.name.lastName(),
      address: faker.finance.bitcoinAddress(),
      process: 0
    }])
  }


  useEffect(() => {
    setData(makeData());
  }, []);

  if(data.length === 0){
    return null;
  }


  return (
      <div>

        <TestList data={data}  refresh={refreshData} addNew={addNew}/>

      </div>

  );
}

export default App;
