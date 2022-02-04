import React, { useEffect, useState } from 'react';
import * as apiSocios from '../api/apiSocios.js'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function TableView({ option }) {

  const [tableRows, setTableRows] = useState([])
  const [totalSocios, setTotalSocios] = useState(0)
  const [promedio, setPromedio] = useState(0)

  useEffect(() => {
    if (option === '1') getSocios()
    if (option === '2') getPromedioEdadRacing()
    if (option === '3') getCasadosUniversitarios()
    if (option === '4') getNombresRiver()
    if (option === '5') getSociosEdadPorEquipo()
  }, [option]);

  const getSocios = async () => {
    let resp;
    resp = await apiSocios.getTotalSocios();
    if(resp) setTotalSocios(resp.data.result)
  }

  const getPromedioEdadRacing = async () => {
    let resp;
    resp = await apiSocios.getPromedioEdadRacing();
    if(resp) setPromedio(resp.data.result)
  }

  const getCasadosUniversitarios = async () => {
    let resp;
    resp = await apiSocios.getCasadosUniversitarios();
    if(resp) setTableRows(resp.data.result)
  }

  const getNombresRiver = async () => {
    let resp;
    resp = await apiSocios.getNombresRiver();
    if(resp) setTableRows(resp.data.result)
  }

  const getSociosEdadPorEquipo = async () => {
    let resp;
    resp = await apiSocios.getSociosEdadPorEquipo();
    if(resp) setTableRows(resp.data.result)
  }

  return (
    <div className="container-box">
      {(() => {
        switch (option) {
          case '1':
            return (
              <div>
                <p style={{display: 'inline-flex', alignItems: 'center',fontSize: '20px' }}>
                  La cantidad total de personas es: 
                  <strong style={{margin: '0px', marginLeft: '5px', color: 'red', fontSize: '30px'}}>
                     {totalSocios}
                  </strong>
                </p>
              </div>
            )
          case '2':
            return (
              <div>
                <p style={{display: 'inline-flex', alignItems: 'center',fontSize: '20px'}}>
                  El promedio de edad de los socios de Racing es:  
                  <strong style={{margin: '0px', marginLeft: '5px', color: 'red', fontSize: '30px'}}>
                     {promedio.toFixed(2)}
                  </strong>
                </p>
              </div>
            )
          case '3':
            return (
              <TableContainer sx={{ maxHeight: 440 , maxWidth: 600}} component={Paper} className='container-table'>
                <Table>
                  <TableHead style={{ backgroundColor: '#b2b8b4' }}>
                    <TableRow>
                      {tableRows[0]?.nombre ? <TableCell>Nombre</TableCell> : null}
                      {tableRows[0]?.edad ? <TableCell>Edad</TableCell> : null}
                      {tableRows[0]?.equipo ? <TableCell>Equipo</TableCell> : null}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tableRows?.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>{row.nombre}</TableCell>
                        <TableCell>{row.edad}</TableCell>
                        <TableCell>{row.equipo}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )
          case '4':
            return (
              <TableContainer sx={{ maxHeight: 440, maxWidth: 400 }} component={Paper} className='container-table'>
                <Table>
                  <TableHead style={{ backgroundColor: '#b2b8b4' }}>
                    <TableRow>
                      {tableRows[0] ? <TableCell>Nombre</TableCell> : null}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tableRows?.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>{row}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )
          case '5':
            return (
              <TableContainer sx={{ maxHeight: 440 }} component={Paper} className='container-table'>
                <Table>
                  <TableHead style={{ backgroundColor: '#b2b8b4' }}>
                    <TableRow>
                      {tableRows[0]?.equipo ? <TableCell>Equipo</TableCell> : null}
                      {tableRows[0]?.socios ? <TableCell>Cantidad de socios</TableCell> : null}
                      {tableRows[0]?.promedioEdad ? <TableCell>Promedio de edad</TableCell> : null}
                      {tableRows[0]?.edadMinima ? <TableCell>Edad Minima</TableCell> : null}
                      {tableRows[0]?.edadMaxima ? <TableCell>Edad Maxima</TableCell> : null}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tableRows?.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>{row.equipo}</TableCell>
                        <TableCell>{row.socios}</TableCell>
                        <TableCell>{row.promedioEdad?.toFixed(2)}</TableCell>
                        <TableCell>{row.edadMinima}</TableCell>
                        <TableCell>{row.edadMaxima}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )
          default:
            return null
        }
      })()}
    </div>

  );
}