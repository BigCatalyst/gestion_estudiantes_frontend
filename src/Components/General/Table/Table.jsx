import styles from "./Table.module.css";
import { useReactTable, getCoreRowModel, flexRender, getSortedRowModel, getFilteredRowModel } from "@tanstack/react-table";
import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Table = ({data, columns}) =>{

  const [sorting, setSorting] = useState([])
  const [filtering, setFiltering] = useState("")

  const table = useReactTable({data, 
                              columns, 
                              getCoreRowModel: getCoreRowModel(),
                              getFilteredRowModel: getFilteredRowModel(),
                              getSortedRowModel: getSortedRowModel(),
                              state: {
                                sorting,
                                globalFilter: filtering,
                              },                             
                              onSortingChange: setSorting,
                              onGlobalFilterChange: setFiltering,
                            });

  return(
    <div className={styles.sts}>
      <div className={styles.bs}>
        <FaMagnifyingGlass color="#074ca7"/>
      <input           
           type="text"
           value ={filtering}
           onChange={(e) => setFiltering(e.target.value)}
           placeholder= " Buscador"
           /> 
           </div>    
      <div className={styles.div}>       
          <table className={styles.table}>
            <thead className={styles.head}>
              {table.getHeaderGroups().map((headerGroup) =>(
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) =>(
                        <th className={styles.filah} key={header.id}
                          onClick={header.column.getToggleSortingHandler()}
                        >                      
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {
                             {'asc': "⬆", 'desc': "⬇" }[header.column.getIsSorted() ??
                              null]   
                          }                        
                        </th>
                      ))}
                  </tr>
                ))}
            </thead>
            <tbody className={styles.body}>
              {table.getRowModel().rows.map((row) =>(
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) =>(
                      <td className={styles.filad} key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}            
                      </td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
      </div>      
    </div>
  );
}  
   
   export default Table;