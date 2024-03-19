import React, { useEffect } from "react";
import { useState } from "react";
import { fetchRecipes, fetchRecipesById } from "./utils/api";
import Loader from "./components/Loader";
import Header from "./components/Header/Header";
import RecipeList from "./components/RecipeList/RecipeList";

function App() {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const fetchRecipesData = async () => {
      try {
        const data = await fetchRecipes()
        // const data = await fetchRecipesById('')
        setRecipes(data)
        setLoading(false)
      } catch {
        setLoading(false)
      }
    }
    fetchRecipesData()
  }, [])

  return (
    <div className="App">
      <Header title={'Recipe App'} />

      {loading ? <Loader name={'recipes is loading'} />
        : <RecipeList recipes={recipes} />}
      {/* {recipes.title} */}
    </div>
  );
}

export default App;
