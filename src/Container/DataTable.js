import React, { useEffect, useRef, useState } from "react"
import { Flex } from "rebass"
import { Checkbox, Label } from '@rebass/forms'


export const DataTable = ({column, row, onRowClick, selected }) => {

    const oldScrollPosition = useRef(0)

    const [ tableData, setTableData ] = useState([])

    const scrollHandler = (e) => {
        let currentPos = e.currentTarget.scrollTop

        if (currentPos > oldScrollPosition.current) {
            setTimeout(() => {
                setTableData( 
                    row.slice(
                       0, 
                        tableData.length+  Math.floor(currentPos/150), 
                    ))
            }, 500)
        }
        
        oldScrollPosition.current = currentPos
     }

     useEffect(() => {
        setTableData(row.slice(0, 25))
     },[row])
    

    return ( tableData.length > 0  &&
        <Flex p={5} sx={{
            flexDirection: "column",
            width: "700px",
            border: "2px solid black",
            height: "450px",
        }}>
            <Flex sx={{ borderBottom: "1px solid #1b1919" }}>

                {column.map((el => (
                     <Flex key={el.id} p="16px" 
                        sx={{ 
                            justifyContent: "center", 
                            flex: `0 1 ${el.width}`,
                            fontWeight: "bold"
                            }}>
                        {el.label}
                        </Flex>
                )))}
            </Flex>
            <Flex 
            onScroll={(e)=> {
                scrollHandler(e)
            }}
            sx={{  
                position: "relative",
                willChange: "transform",
                height: "450px",
                overflow: "auto", 
                flexDirection: "column",
                width: "100%"
                }}>
            {tableData.map(el => (
                <Flex key={el.id} 
                    sx={{ 
                        width: "100%",
                        height: "70px",
                        borderBottom: "1px solid #e0e0e0", 
                        position: "absolute",
                        top: 70*(el.id-1)+"px",
                        overflow: "hidden",
                    }}>
                    <Flex sx={{alignItems: "center"}}>
                    <Label>
                    <Checkbox
                        sx={{color: "blue"}}
                        onClick={el => onRowClick(el)}
                        checked= {selected[el.id]}
                        id={`${el.id}`}
                    />
                    </Label>
                    </Flex>
                    <Flex p={4} sx={{ flex: "0 1 80px", alignItems: "center"}}>{el.id}</Flex>
                    <Flex  p={4} sx={{ flex: "0 1 80px", alignItems: "center"}}>{el.albumId}</Flex>
                    <Flex  p={4} sx={{ flex: "0 1 500px", alignItems: "center"}}>{el.title}</Flex>
                </Flex>
            ))}
            </Flex>
        </Flex>
)}