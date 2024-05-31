import React from "react";
import './Burger.css';

interface Ingredient {
    id: string;
    ingredient:string;
    count:number;
    price:number;
    image: string;
}

interface BurgerProps {
    ingredients: Ingredient[];
    totalPrice: number;
}

const showIngredients = (countIngredient : Ingredient) => {
    return Array.from({ length: countIngredient .count }, () => (
        <div key={countIngredient .id} className={countIngredient .ingredient}></div>
    ));
}

const Burger: React.FC<BurgerProps> = ({ingredients, totalPrice }) => {
    return (
        <div className="Burger">
            <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>
            {ingredients.map(ingredient =>
                showIngredients(ingredient)
            )}
            <div className="BreadBottom"></div>
            <span>Price: {totalPrice}</span>
        </div>
    );
}

export default Burger;


