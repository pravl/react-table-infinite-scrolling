import React from "react"
import { Flex } from "rebass"

import { DataTable } from "./DataTable"
import { useEffect } from "react"
import { useState } from "react"

export const TableHandler = () => {

const [ data, setData ] = useState([])
const [selected , setSelected] = useState({})

useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => { 
         setData(json)
      })
   },[])

   return (
   <Flex m="16px" 
   sx={{ width: "100%", height: "100%", justifyContent: "center"}}>
      <DataTable 
         column={[{
            "id" : "id",
            "numeric": true,
            "label": "ID",
            "width": "80px",
         },
         {
            "id" : "albumId",
            "numeric": true,
            "label": "AlbumID",
            "width": "80px",
         },
         {
            "id" : "title",
            "numeric": false,
            "label": "Title",
            "width": "500px",
         },
      ]}
      row={data}
      selected={selected}
      onRowClick={(e) => {
         setSelected({
            ...selected,
            [e.currentTarget.id]: selected[e.currentTarget.id] ? false : true
         })
      }}/>
   </Flex>
)}