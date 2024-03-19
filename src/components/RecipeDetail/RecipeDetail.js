
import React, { useEffect, useState } from 'react'
import { fetchRecipesById } from '../../utils/api'
import { useParams } from 'react-router-dom'
import Loader from '../Loader'

function RecipeDetail() {

    const [recipe, setRecipe] = useState([])
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {

        const fetchRecipesData = async () => {
            try {
                const data = await fetchRecipesById(id)

                setRecipe(data)
                setLoading(false)
            } catch {
                setLoading(false)
            }
        }
        fetchRecipesData()
    }, [id]);
    return (
        <div>
            {loading ? <Loader /> :
                <div className='details'>
                    <link to={'/'}>Go back</link>
                    <div>
                        <h2>{recipe.title}</h2>
                        <button>Add to Favorites</button>
                    </div>
                    <div className='content'>
                        <img src={recipe.image} />
                    </div>

                </div>
            }
        </div>
    )
}

export default RecipeDetail;


