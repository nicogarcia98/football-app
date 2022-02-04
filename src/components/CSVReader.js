import { useState } from 'react';
import TableView from './TableView.js'


export default function CSVReader({setDataTable}) {

    const [csvFile, setCsvFile] = useState();

    const submit = (e) => {
        let reader = new FileReader()
        reader.onload = (e) => {
            const rows = e.target.result.split('\n')
            setDataTable(rows)
        }

        reader.readAsText(csvFile)
    } 


    return (
        <div style={{ width: '264px' }}>
            <input
                type="file"
                accept='csv'
                style={{ maxWidth: '100%', height: '100px' }}
                id="csvFile"
                onChange={(e) => {
                    setCsvFile(e.target.files[0]);
                }}
            />
            <button
                onClick={(e) => {
                    e.preventDefault()
                    if (csvFile) submit(e)
                }}
            >
                Submit
            </button>
        </div>
    )


}
