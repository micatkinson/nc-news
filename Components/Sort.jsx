import { useState } from "react"

export default function Sort({selectedValue, setSelectedValue, order, setOrder, isLoading, setSortOrder}){

        const handleSortChange = (event) => {
        const newValue = event.target.value
        setSelectedValue(newValue)
        setSortOrder(newValue)
    }

        const switchSortOrder = (order) => {
            return order === 'asc' ? 'desc' : 'asc'
        } 

    return (
        <>
        <label htmlFor="sorter">Sort by</label>
        <select id="sorter" onChange={handleSortChange}>
            <option value="created_at"> Date</option>
            {/* <option value="comment_count"> Comment</option> */}
            <option value="votes">Votes</option>
        </select>
        <button disabled={isLoading} onClick={() => setOrder(switchSortOrder(order))}>
        {order === 'asc' ? 'Desc' : 'Asc'
         }
        </button>
        </>
    )
}


