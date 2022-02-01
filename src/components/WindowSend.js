import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, OutlinedInput, Button} from '@mui/material'
import TableView from './TableView.js'
import './styles.css'


export default function WindowSend({setSelectOption, selectOption, setListTableId}) {

    
    const optionsTitle = [
        '',
        '1',
        '2',
        '3',
        '4',
        '5'
    ]  
    

    const handleChange = (event) => {
        setSelectOption(event.target.value)
    };
    
    const handleClick = (event) => {
        setListTableId(selectOption)
    };

    return (
        <div className="box-send">
                <FormControl sx={{ m: 1, width: '16.5em', height: '100%', display: 'flex', justifyContent: 'space-between', marginTop:'10px'}}>
                    <InputLabel id="demo-multiple-name-label" style={{backgroundColor: 'white', width: 'auto', paddingRight: '3px', paddingLeft: '3px'}}>Opciones</InputLabel>
                    <Select
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        value={selectOption}
                        onChange={handleChange}
                        input={<OutlinedInput label="Name" />}
                    >
                        {optionsTitle.map((item) => (
                            <MenuItem
                                key={item}
                                value={item}
                                style={{height:'36px'}}
                            >
                                {item ? item : 'Selecciona una opcion'}
                            </MenuItem>
                        ))}
                    </Select>
                    
                    <Button onClick={handleClick} 
                        style={{marginBottom: '30px'}} 
                        disabled={selectOption ? false : true}
                        className={selectOption ? 'button-send' : 'button-send-inactive'} 
                        variant="contained">
                            Enviar
                    </Button>
                </FormControl>
        </div>
    );


}