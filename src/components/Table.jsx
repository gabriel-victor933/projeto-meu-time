import React from "react";
import { useTable } from "react-table"
import { styled } from "styled-components";

export default function Table({fixtures, columns}){
  console.log(fixtures)
  if(Object.keys(fixtures).length === 0 ) return (<div>sem informações.</div>)
    
    const tableInstance = useTable({ columns, data:[fixtures] })
     const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = tableInstance
 
    return(
        <TableContainer>
    <table {...getTableProps()}>
    <thead>
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <th {...column.getHeaderProps()}>{column.render("Header")}</th>
          ))}
        </tr>
      ))}
    </thead>
    <tbody {...getTableBodyProps()}>
      {rows.map((row, i) => {
        prepareRow(row);
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map(cell => {
              return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  </table>
  
  </TableContainer>
  ) 
    
}

const TableContainer = styled.div`

    width: 100%;
    display: flex;
    justify-content: center;
    margin: 20px 0px;
    
    table {
  width: 90%;
  border-collapse: collapse;

}

thead {
  background-color: #f2f2f2;
}

thead tr th {
  padding: 8px;
  font-weight: bold;
  border: 1px solid #ddd;
}

tbody tr td {
  padding: 8px;
  border: 1px solid #ddd;
}

tbody tr:nth-child(even) {
  background-color: #f2f2f2;
  
}

td:nth-child(even){
    background-color: #f2f2f2;
}


`

