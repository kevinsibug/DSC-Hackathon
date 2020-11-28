import React, {useContext} from 'react'

import ListingContext from '../context/listingContext'

const Category = (props) => {
    const category = props.values.category

    const listingContext = useContext(ListingContext)
    const { showCategory } = listingContext;

    const onClick = (e) => {
        e.preventDefault();
        showCategory(category);
    }
    return (
        <div className = "category">
            <img onClick = {onClick} data-value = {category} src = {`/images/categories/${category.split(" ")[0].toLowerCase()}.png`} className = "category-image"></img>
        </div>
    )
}

export default Category
