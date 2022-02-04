import React, { useState , useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import WindowSend from './components/WindowSend'
import TableView from './components/TableView';

function App() {

  const [selectOption, setSelectOption] = useState('')
  const [listTableId, setListTableId] = useState('')
  const [dataTable, setDataTable] = useState()

  useEffect(() => {
    console.log(listTableId)
  }, [listTableId]);

  const options = [
    'Cantidad total de personas registradas.',
    'El promedio de edad de los socios de Racing.',
    'Un listado con las 100 primeras personas casadas, con estudios Universitarios, ordenadas de menor a mayor según su edad. Por cada persona, mostrar: nombre, edad y equipo.',
    'Un listado con los 5 nombres más comunes entre los hinchas de River.',
    'Un listado, ordenado de mayor a menor según la cantidad de socios, que enumere, junto con cada equipo, el promedio de edad de sus socios, la menor edad registrada y la mayor edad registrada.'
  ]


  return (
    <div>
      <div className="container-text-option">
        <h1>Seleccione la opción que desee</h1>
        {options.map((item, index) => (
          <div key={index}>
            <p style={{ margin: '3px', fontSize: '14px' }}>{index + 1} - {item}</p>
          </div>
        ))}
      </div>
      <WindowSend 
        setSelectOption={setSelectOption} 
        selectOption={selectOption} 
        setListTableId={setListTableId}
        setDataTable={setDataTable}
        >
        </WindowSend>
        <TableView option={listTableId}></TableView>
    </div>
  );
}

export default App;
