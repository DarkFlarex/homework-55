import './Burger.css';
import React from "react";

interface Ingredient {
    id: string;
    ingredient:string;
    count:number;
    price:number;
    image: string;
}

interface BurgerProps {
    ingredients: Ingredient[];
}

const Burger: React.FC<BurgerProps> = ({ingredients}) => {
    return (
        <div className="Burger">
            <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>
            {ingredients.map(ingredient =>
                <div key={ingredient.id} className={ingredient.ingredient}></div>
            )}
            <div className="BreadBottom"></div>
        </div>
    );
}

export default Burger;


