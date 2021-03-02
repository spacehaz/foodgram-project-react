import logo from './logo.svg';
import './App.css';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom'
import React from 'react'
import { Header, Footer, ProtectedRoute } from './components'

import {
  Main,
  Cart,
  SignIn,
  Subscriptions,
  Favorites,
  SingleCard,
  SignUp,
  RecipeEdit,
  RecipeCreate,
  User
} from './pages'

import { useState } from 'react'
import img1 from './images/1.jpg'
import img2 from './images/2.jpg'
import { RecipesContext, AuthContext } from './contexts'

function App() {
  const recipes = [
    {
      title: 'Круассан с омлетом, лососем и голландским соусом',
      id: 1,
      img: img1,
      tags: [{
        id: 1,
        title: 'Обед',
        color: '#E26C2D',
        slug: 'meal'
      }, {
        id: 2,
        title: 'Ужин',
        color: '#8775D2',
        slug: 'dinner'
      }],
      time: 30,
      author: 'Александр Бородин',
      description: '<p>Смешать молоко с сахаром, добавить яйца, тщательно все взбить. Обмакнуть тосты в смесь и жарить на сливочном масле до золотистой корочки.</p><p>Полить сверху сиропом топинамбура и украсить ягодами.</p>',
      ingredients: [
        {
          title: 'Яйцо',
          amount: 2,
          dimension: 'шт',
          id: 1
        }, {
          title: 'Молоко',
          amount: 200,
          dimension: 'мл',
          id: 2
        }, {
          title: 'Тосты',
          amount: 4,
          dimension: 'шт',
          id: 3
        }, {
          title: 'Сахар',
          amount: 2,
          dimension: 'стл.л.',
          id: 4
        }, {
          title: 'Ягоды',
          amount: 100,
          dimension: 'гр',
          id: 5
        }, {
          title: 'Сироп Топинамбура',
          amount: 3,
          dimension: 'стл.л',
          id: 6
        }
      ]
    },
    {
      title: 'Французские тосты',
      id: 2,
      img: img2,
      tags: [{
        id: 1,
        title: 'Обед',
        color: '#E26C2D',
        slug: 'meal'
      }, {
        id: 2,
        title: 'Ужин',
        color: '#8775D2',
        slug: 'dinner'
      }],
      time: 30,
      author: 'Александр Бородин'
    },
    {
      title: 'Французский тост с сиропом агавы',
      id: 3,
      img: img1,
      tags: [{
        id: 1,
        title: 'Обед',
        color: '#E26C2D',
        slug: 'meal'
      }, {
        id: 2,
        title: 'Ужин',
        color: '#8775D2',
        slug: 'dinner'
      }],
      time: 30,
      author: 'Александр Бородин'
    },
    {
      title: 'Вафли с яйцом «Бенедикт» и лососем',
      id: 4,
      img: img2,
      tags: [{
        id: 1,
        title: 'Обед',
        color: '#E26C2D',
        slug: 'meal'
      }, {
        id: 2,
        title: 'Ужин',
        color: '#8775D2',
        slug: 'dinner'
      }],
      time: 30,
      author: 'Александр Бородин'
    }
  ]
  const [ loggedIn, setLoggedIn ] = useState(true)
  const history = useHistory()

  const onSignOut = () => {
    setLoggedIn(false)
  }
  
  return (
    <RecipesContext.Provider value={recipes}>
      <AuthContext.Provider value={loggedIn}>
        <div className="App">
          <Header loggedIn={loggedIn} onSignOut={onSignOut} />
          <Switch>
            <ProtectedRoute
              exact
              path='/user/:id'
              component={User}
              loggedIn={loggedIn}
            />
            <ProtectedRoute
              exact
              path='/cart'
              component={Cart}
              loggedIn={loggedIn}
            />
            <ProtectedRoute
              exact
              path='/subscriptions'
              component={Subscriptions}
              loggedIn={loggedIn}
            />

            <ProtectedRoute
              exact
              path='/favorites'
              favorites={recipes}
              component={Favorites}
              loggedIn={loggedIn}
            />

            <ProtectedRoute
              exact
              path='/recipes/create'
              favorites={recipes}
              component={RecipeCreate}
              loggedIn={loggedIn}
            />

            <ProtectedRoute
              exact
              path='/recipes/:id/edit'
              component={RecipeEdit}
              loggedIn={loggedIn}
            />
            <Route exact path='/recipes/:id'>
              <SingleCard loggedIn={loggedIn} />
            </Route>

            <Route exact path='/recipes'>
              <Main recipes={recipes} loggedIn={loggedIn} />
            </Route>


            <Route exact path='/signin'>
              <SignIn onSignIn={values => {
                setLoggedIn(true)
                history.push('/recipes')
              }}/>
            </Route>
            <Route exact path='/signup'>
              <SignUp onSignUp={values => {
                history.push('/signin')
              }}/>
            </Route>
            <Route path='/'>
              {loggedIn ? <Redirect to='/recipes' /> : <Redirect to='/signin'/>}
            </Route>
          </Switch>
          <Footer />
        </div>
      </AuthContext.Provider>
    </RecipesContext.Provider>
  );
}

export default App;
