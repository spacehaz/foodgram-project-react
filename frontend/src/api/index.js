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

  signin ({ email, password }) {
    return fetch(
      '/api/auth/token/login/',
      {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          email, password
        })
      }
    ).then(this.checkResponse)
  }

  signup ({ email, password, username, first_name, last_name }) {
    return fetch(
      `${this._url}/api/auth/users`,
      {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          email, password, username, first_name, last_name
        })
      }
    ).then(this.checkResponse)
  }


  // recipes

  getRecipes ({
    page = 1,
    limit = 6,
    is_favorited = false,
    is_in_shopping_cart = false,
    author
  } = {}) {
      const token = localStorage.getItem('token')
      return fetch(
        `/recipes?page=${page}&limit=${limit}&is_favorited=${is_favorited}&is_in_shopping_cart=${is_in_shopping_cart}${author ? `&author=${author}` : ''}`,
        {
          method: 'GET',
          headers: {
            ...this._headers,
            'authorization': `Token ${token}`
          }
        }
      ).then(this.checkResponse)
  }

  getRecipe ({
    recipe_id
  }) {
    const token = localStorage.getItem('token')
    return fetch(
      `/recipes/${recipe_id}`,
      {
        method: 'GET',
        headers: {
          ...this._headers,
          'authorization': `Token ${token}`
        }
      }
    ).then(this.checkResponse)
  }

  createRecipe ({
    title = '',
    img,
    tags = [],
    time = 0,
    description = '',
    ingredients = []
  }) {
    const token = localStorage.getItem('token')
    return fetch(
      `/recipes`,
      {
        method: 'POST',
        headers: {
          ...this._headers,
          'authorization': `Token ${token}`
        },
        body: JSON.stringify({
          token,
          title,
          img,
          tags,
          time,
          description,
          ingredients
        })
      }
    ).then(this.checkResponse)
  }

  updateRecipe ({
    title,
    recipe_id,
    img,
    tags,
    time,
    description,
    ingredients
  }) {
    const token = localStorage.getItem('token')
    return fetch(
      `/recipes/${recipe_id}`,
      {
        method: 'PUT',
        headers: {
          ...this._headers,
          'authorization': `Token ${token}`
        },
        body: JSON.stringify({
          token,
          title,
          img,
          tags,
          time,
          description,
          ingredients
        })
      }
    ).then(this.checkResponse)
  }

  getUser ({ id }) {
    const token = localStorage.getItem('token')
    return fetch(
      `/users/${id}`,
      {
        method: 'GET',
        headers: {
          ...this._headers,
          'authorization': `Token ${token}`
        }
      }
    ).then(this.checkResponse)
  }

  getUsers () {
    const token = localStorage.getItem('token')
    return fetch(
      `/api/users/`,
      {
        method: 'GET',
        headers: {
          ...this._headers,
          'authorization': `Token ${token}`
        }
      }
    ).then(this.checkResponse)
  }



  // subscriptions

  getSubscriptions ({
    page, 
    limit,
    recipes_limit = 3
  }) {
    const token = localStorage.getItem('token')
    return fetch(
      `/subscriptions?page=${page}&limit=${limit}&recipes_limit=${recipes_limit}`,
      {
        method: 'GET',
        headers: {
          ...this._headers,
          'authorization': `Token ${token}`
        }
      }
    ).then(this.checkResponse)
  }

  deleteSubscriptions ({ author_id }) {
    const token = localStorage.getItem('token')
    return fetch(
      `/subscriptions`,
      {
        method: 'DELETE',
        headers: {
          ...this._headers,
          'authorization': `Token ${token}`
        },
        body: JSON.stringify({
          author_id
        })
      }
    ).then(this.checkResponse)
  }

  subscribe ({ author_id }) {
    const token = localStorage.getItem('token')
    return fetch(
      `/subscriptions`,
      {
        method: 'POST',
        headers: {
          ...this._headers,
          'authorization': `Token ${token}`
        },
        body: JSON.stringify({
          author_id
        })
      }
    ).then(this.checkResponse)
  }

  // ingredients
  getIngredients () {
    const token = localStorage.getItem('token')
    return fetch(
      `/ingredients`,
      {
        method: 'GET',
        headers: {
          ...this._headers
        }
      }
    ).then(this.checkResponse)
  }

  // tags
  getTags () {
    const token = localStorage.getItem('token')
    return fetch(
      `/tags`,
      {
        method: 'GET',
        headers: {
          ...this._headers
        }
      }
    ).then(this.checkResponse)
  }


  // oreder
  getOrders () {
    const token = localStorage.getItem('token')
    return fetch(
      `/order`,
      {
        method: 'GET',
        headers: {
          ...this._headers,
          'authorization': `Token ${token}`
        }
      }
    ).then(this.checkResponse)
  }

  deleteOrders () {
    const token = localStorage.getItem('token')
    return fetch(
      `/order`,
      {
        method: 'DELETE',
        headers: {
          ...this._headers,
          'authorization': `Token ${token}`
        }
      }
    ).then(this.checkResponse)
  }


  addToOrders ({ recipe_id }) {
    const token = localStorage.getItem('token')
    return fetch(
      '/order',
      {
        method: 'POST',
        headers: {
          ...this._headers,
          'authorization': `Token ${token}`
        }
      }
    ).then(this.checkResponse)
  }
}

export default new Api(process.env.API_URL || 'http://localhost', { 'content-type': 'application/json' })
