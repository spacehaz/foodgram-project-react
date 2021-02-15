class Api {
  constructor (url, headers) {
    this._url = url
    this._headers = headers
  }

  addFavorite (id) {
    return fetch(
      `${this._url}/favorites`,
      {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          id
        })
      }
    ).then(res => {
      if (res.ok) {
        return res.json()
      }
    })
  }

  getCards () {
    return fetch(
      `${this._url}/purchases`,
      {
        headers: this._headers
      }
    ).then(res => {
      if (res.ok) {
        return res.json()
      }
    })
  }

  getCard (id) {
    return fetch(
      `${this._url}/purchases/${id}`,
      {
        headers: this._headers
      }
    ).then(res => {
      if (res.ok) {
        return res.json()
      }
    })
  }

  removeFavorite (id) {
    return fetch(
      `${this._url}/favorites/${id}`,
      {
        method: 'DELETE',
        headers: this._headers
      }
    ).then(res => {
      if (res.ok) {
        return res.json()
      }
    })
  }
}
console.log(process.env.API_URL)
const api = new Api(process.env.API_URL, { 'content-type': 'application/json'})

export default api