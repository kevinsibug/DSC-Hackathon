import React, {useState} from 'react'
import { useCollectionData } from "react-firebase-hooks/firestore";

import Category from './Category'


const Categories = (props) => {
    const [count, setCount] = useState("");
    const firestore = props.firestore;
    const categories = firestore.collection("categories").orderBy("order", "asc");
    const [categoriesList] = useCollectionData(categories, { idField: "id" })
    return (
        <div  className = "categories">
            {categoriesList && categoriesList.map((values, index) => (
                <Category key = {index} values = {values}/>
            ))}
        </div>
    )
}

export default Categories
