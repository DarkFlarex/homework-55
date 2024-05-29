import React from 'react';
import './Ingredients.css';

interface ingredientsProps {
    id: string;
    image: string;
    ingredient:string;
    count:number;
    price:number;
    onRemove: React.MouseEventHandler;
    onAddIngredients:React.MouseEventHandler;
}

    const Ingredients: React.FC<ingredientsProps> = ({
    image,
    ingredient    ,
    count,
    price,
    onRemove,
    onAddIngredients
}) => {
    return (
        <form className={"Ingredients"}>
            <img src={image} alt={ingredient} className="ingredient-image" onClick={onAddIngredients}/>
            <span className={"ingredient-name"}>{ingredient}</span>
            <span className={"ingredient-count"}>x{count}</span>
                <span className={"ingredient-price"}>{price}Сом</span>
                <button className={"button-Ingredients-Remove"} onClick={onRemove}>Удалить</button>
        </form>
    );
};

export default Ingredients;
