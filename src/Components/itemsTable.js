import { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';

function ItemsTable() {

    const [itemsData, setItemsData] = useState([1,2])

    useEffect(() => {
        // GET the items data from the API
        axios('http://localhost:8080/api/items')
            .then(
                response => (response) => setItemsData(response.data)
            )
            .catch(
                error => {
                    console.log("Error getting data: " + error)
                }
            )
    }, []);

    //const itemTable = Object.entries(itemsData).map((imageURL) => {
    //    <li><img src={imageURL} alt="item"></img></li>
    //})

  return (
    <div className="ItemsTable">
        {itemsData.data.name}
    </div>
  );
}

export default ItemsTable;