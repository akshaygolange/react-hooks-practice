import React, { useEffect, useState } from "react";
import RecipeTable from "./RecipeTable";

const UseEffectDemo = () => {
  const [count, setCount] = useState(0);
  const [recipes, setRecipes] = useState([]);
  console.log("count ->", count);

  const fetchRecipes = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/recipes`);
      const { recipes } = await response.json();
      console.log(recipes);
      setRecipes(recipes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("this runs When count changes");
  }, [count]);

  useEffect(() => {
    console.log("this will run once");
    fetchRecipes();
  }, []);

  console.log(
    "Type of recipes:",
    typeof recipes,
    "Is Array?:",
    Array.isArray(recipes),
  );

  const limitSetRecipes = recipes?.slice(0, 3) || [];
  console.log(
    "recipe.length",
    recipes?.length,
    "limitSetRecipe.length",
    limitSetRecipes?.length,
  );

  return (
    <div>
      <h1>COunt -{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>chnage count</button>
      <RecipeTable recipes={recipes}/>

      <div>
        {limitSetRecipes?.map(({ id, name, ingredients, image }) => (
          <div key={id}>
            <h4>ID -{id}</h4>
            <h2>{name}</h2>
            {image && (
              <img
                src={image}
                alt={name}
                style={{
                  width: "100%",
                  maxWidth: "200px",
                  maxHeight: "200px",
                  height: "auto",
                  borderRadius: "4px",
                }}
              />
            )}
            <h4>Indgredients-</h4>
            <ul>
              {ingredients?.map((ingredient, index) => (
                <div key={index}>
                  <li>{ingredient}</li>
                </div>
              ))}
            </ul>
          </div>
        ))}
      </div>




       //Tabular data
      <div>
        <table border={1} style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Recipe Name</th>
              <th>Ingredients</th>
            </tr>
          </thead>

          <tbody>
            {limitSetRecipes?.map(({ id, name, ingredients, image }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>
                  {image && (
                    <img src={image} alt={name} width={100} height={100} />
                  )}
                </td>
                <td>{name}</td>
                <td>
                  <ul>
                    {ingredients?.map((ingredient, index) => (
                      <li key={index}> {ingredient}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UseEffectDemo;
