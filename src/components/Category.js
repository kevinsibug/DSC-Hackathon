import React from 'react'
// import Food from '../static/categories/food.png'
// import Arts from '../static/categories/arts.png'
// import Clothes from '../static/categories/clothes.png'
// import Gardening from '../static/categories/gardening.png'
// import Services from '../static/categories/others.png'

const Category = (props) => {

    const category = props.values.category
    console.log(category.split(" ")[0])
    return (
        <div className = "category">
            <img data-value = {category} src = {`/images/categories/${category.split(" ")[0].toLowerCase()}.png`} className = "category-image"></img>
        </div>
    )
}

export default Category
