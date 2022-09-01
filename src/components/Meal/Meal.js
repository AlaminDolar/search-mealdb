import React, { useEffect, useState } from 'react';
import MealCard from '../MealCard/MealCard';

const Meal = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);

    useEffect(() => {

        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))

    }, [searchText]);

    const searchField = e => {
        setSearchText(e.target.value);


    }
    return (
        <div>
            <h2 className='text-4xl'>Find The Food You Want</h2>
            <input onChange={searchField} className='p-2 m-10 bg-gray-400 border-black rounded w-60'
                type="search" name="" id="" />
            <br />
            <h3 className='text-2xl'>Result Found: {meals.length}</h3>

            <div className='grid grid-cols-3 gap-3 pl-10'>
                {
                    meals.map(meal => <MealCard key={meal.idMeal} meal={meal}></MealCard>)
                }
            </div>
        </div>
    );
};

export default Meal;