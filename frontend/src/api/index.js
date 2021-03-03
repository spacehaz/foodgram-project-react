class Api {
  constructor (url, headers) {
    this._url = url
    this._headers = headers
  }

  checkResponse (res) {
    return new Promise((resolve, reject) => {
      const func = res.status < 400 ? resolve : reject
      res.json().then(data => func(data))
    })
  }

  signin ({ email, password }) => {
    return fetch(
      '/api/auth/token/login/',
      {
        method: 'POST',
        headers: this._headers,
        body: JSON.strigify({
          email, password
        })
      }
    ).then(checkResponse)
  }

  signup ({ email, password, username, first_name, last_name }) => {
    return fetch(
      '/api/auth/users',
      {
        method: 'POST',
        headers: this._headers,
        body: JSON.strigify({
          email, password, username, first_name, last_name
        })
      }
    ).then(checkResponse)
  }


  // recipes

  getRecipes ({
    token,
    page = 1,
    limit = 6,
    is_favorited = false,
    is_in_shopping_cart = false,
    author }) {
      return fetch(
        `/recipes?page=${page}&limit=${limit}&is_favorited=${is_favorited}&is_in_shopping_cart=${is_in_shopping_cart}${author ? `&author=${author}` : ''}`,
        {
          method: 'GET',
          headers: {
            ...this._headers,
            'authorization': `Token ${token}`
          }
        }
      ).then(checkResponse)
  }

  getRecipe ({
    token,
    recipe_id
  }) {
      return fetch(
        `/recipes/${recipe_id}`,
        {
          method: 'GET',
          headers: {
            ...this._headers,
            'authorization': `Token ${token}`
          }
        }
      ).then(checkResponse)
  }

  createRecipe ({
    token,
    title = '',
    img,
    tags = [],
    time = 0,
    description = '',
    ingredients = []
  }) {
    return fetch(
      `/recipes`,
      {
        method: 'POST',
        headers: {
          ...this._headers,
          'authorization': `Token ${token}`
        },
        body: JSON.strigify({
          token,
          title,
          img,
          tags,
          time,
          description,
          ingredients
        })
      }
    ).then(checkResponse)
  }

  updateRecipe ({
    token,
    title,
    recipe_id,
    img,
    tags,
    time,
    description,
    ingredients
  }) {
    return fetch(
      `/recipes/${recipe_id}`,
      {
        method: 'PUT',
        headers: {
          ...this._headers,
          'authorization': `Token ${token}`
        },
        body: JSON.strigify({
          token,
          title,
          img,
          tags,
          time,
          description,
          ingredients
        })
      }
    ).then(checkResponse)
  }







  getUser ({ token, id }) {
    return fetch(
      `/users/${id}`,
      {
        method: 'GET',
        headers: {
          ...this._headers,
          'authorization': `Token ${token}`
        }
      }
    ).then(checkResponse)
  }



  // subscriptions

  getSubscriptions ({
    page, 
    token,
    limit,
    recipes_limit = 3
  }) {
    return fetch(
      `/subscriptions?page=${page}&limit=${limit}&recipes_limit=${recipes_limit}`,
      {
        method: 'GET',
        headers: {
          ...this._headers,
          'authorization': `Token ${token}`
        }
      }
    ).then(checkResponse)
  }

  deleteSubscriptions ({ author_id, token }) {
    return fetch(
      `/subscriptions`,
      {
        method: 'DELETE',
        headers: {
          ...this._headers,
          'authorization': `Token ${token}`
        },
        body: JSON.strigify({
          author_id
        })
      }
    ).then(checkResponse)
  }

  subscribe ({ token, author_id }) {
    return fetch(
      `/subscriptions`,
      {
        method: 'POST',
        headers: {
          ...this._headers,
          'authorization': `Token ${token}`
        },
        body: JSON.strigify({
          author_id
        })
      }
    ).then(checkResponse)
  }

  // ingredients
  getIngredients ({ token }) {
    return fetch(
      `/ingredients`,
      {
        method: 'GET',
        headers: {
          ...this._headers
        }
      }
    ).then(checkResponse)
  }

  // tags
  getTags ({ token }) {
    return fetch(
      `/tags`,
      {
        method: 'GET',
        headers: {
          ...this._headers
        }
      }
    ).then(checkResponse)
  }


  // oreder
  getOrders ({ token }) {
    return fetch(
      `/order`,
      {
        method: 'GET',
        headers: {
          ...this._headers,
          'authorization': `Token ${token}`
        }
      }
    ).then(checkResponse)
  }

  deleteOrders ({ token }) {
    return fetch(
      `/order`,
      {
        method: 'DELETE',
        headers: {
          ...this._headers,
          'authorization': `Token ${token}`
        }
      }
    ).then(checkResponse)
  }


  addToOrders ({ token, recipe_id }) {
    return fetch(
      '/order',
      {
        method: 'POST',
        headers: {
          ...this._headers,
          'authorization': `Token ${token}`
        }
      }
    ).then(checkResponse)
  }
}

const api = new Api(process.env.API_URL, { 'content-type': 'application/json' })

export default api