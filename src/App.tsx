import { useState } from 'react';
import './App.css';
import Burger from './components/Burger/Burger';
import Ingredients from './components/Ingredients/Ingredients';
import meatImage from './assets/Meat.png';
import CheeseImage from './assets/Cheese.png';
import SaladImage from './assets/Salad.png';
import BaconImage from './assets/bacon.png';

interface Ingredient {
    id: string;
    ingredient:string;
    count:number;
    price:number;
    image: string;
}

const App = () => {
    const [ingredients, setIngredients] = useState<Ingredient[]>([
        { id: '1', ingredient: 'Meat', count: 1 ,  price:80, image: meatImage },
        { id: '2', ingredient: 'Cheese', count: 1,   price:50,image: CheeseImage},
        { id: '3', ingredient: 'Salad', count: 1 ,  price:10,image: SaladImage },
        { id: '4', ingredient: 'Bacon', count: 1 ,  price:60,image: BaconImage},
    ]);

    const removeIngredient = (id: string) => {
        setIngredients((prevIngredients)=>{
            return prevIngredients.filter((count) => count.id !== id);
        });
    };

    const addIngredient = (id: string) => {
        setIngredients((prevIngredients)=>{
            return prevIngredients.filter((count) => count.id !== id);
        });
    };
    const TotalPrice=ingredients.reduce((acc,i)=> {
        return acc + i.price;
    },0);
    return (
        <>
            <div className="ingredients-list">
                {ingredients.map(ingredient => (
                    <Ingredients
                        key={ingredient.id}
                        id={ingredient.id}
                        image={ingredient.image}
                        onAddIngredients={() => addIngredient(ingredient.id)}
                        ingredient={ingredient.ingredient}
                        count={ingredient.count}
                        price={ingredient.price}
                        onRemove={() => removeIngredient(ingredient.id)}
                    />
                ))}
            </div>
            <Burger
            />
            <span>Price:{TotalPrice}</span>
        </>
    );
}

export default App;