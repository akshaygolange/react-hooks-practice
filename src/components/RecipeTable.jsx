import React from "react";

function RecipeTable({ recipes }) {
  return (
    <div>
      <h1>this is comin from recipe table</h1>
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
          {recipes
            ?.filter((recipe, index) => index < 3)
            .map(({ id, name, ingredients, image }) => (
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
  );
}

export default RecipeTable;
