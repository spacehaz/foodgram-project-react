import logo from './logo.svg';
import './App.css';
import { Switch, Route, useHistory } from 'react-router-dom'
import React from 'react'
import { Header, Footer, ProtectedRoute } from './components'
import { Main, SignIn, SingleCard, SignUp } from './pages'
import { useState } from 'react'
import img1 from './images/1.jpg'
import img2 from './images/2.jpg'
import { RecipesContext } from './contexts'
function App() {
  const recipes = [
    {
      title: 'Круассан с омлетом, лососем и голландским соусом',
      id: 1,
      img: img1,
      tags: ['Обед', 'Ужин'],
      time: 30,
      author: 'Александр Бородин',
      description: '<p>Смешать молоко с сахаром, добавить яйца, тщательно все взбить. Обмакнуть тосты в смесь и жарить на сливочном масле до золотистой корочки.</p><p>Полить сверху сиропом топинамбура и украсить ягодами.</p>',
      ingredients: [
        {
          title: 'Яйцо',
          amount: 2,
          dimension: 'шт'
        }, {
          title: 'Молоко',
          amount: 200,
          dimension: 'мл'
        }, {
          title: 'Тосты',
          amount: 4,
          dimension: 'шт'
        }, {
          title: 'Сахар',
          amount: 2,
          dimension: 'стл.л.'
        }, {
          title: 'Ягоды',
          amount: 100,
          dimension: 'гр'
        }, {
          title: 'Сироп Топинамбура',
          amount: 3,
          dimension: 'стл.л'
        }
      ]
    },
    {
      title: 'Французские тосты',
      id: 2,
      img: img2,
      tags: ['Обед', 'Ужин'],
      time: 30,
      author: 'Александр Бородин'
    },
    {
      title: 'Французский тост с сиропом агавы',
      id: 3,
      img: img1,
      tags: ['Обед', 'Ужин'],
      time: 30,
      author: 'Александр Бородин'
    },
    {
      title: 'Вафли с яйцом «Бенедикт» и лососем',
      id: 4,
      img: img2,
      tags: ['Обед', 'Ужин'],
      time: 30,
      author: 'Александр Бородин'
    }
  ]
  const [ loggedIn, setLoggedIn ] = useState(true)
  const history = useHistory()
  
  return (
    <RecipesContext.Provider value={recipes}>
      <div className="App">
        <Header loggedIn={loggedIn} />
        <Switch>
          <ProtectedRoute
            exact
            path='/recipes'
            recipes={recipes}
            component={Main}
            loggedIn={loggedIn}
          />
          <Route exact path='/recipes/:id'>
            <SingleCard />
          </Route>

          <Route exact path='/signin'>
            <SignIn onSignIn={_ => {
              history.push('/recipes')
            }}/>
          </Route>
          <Route exact path='/signup'>
            <SignUp onSignUp={_ => {
              history.push('/recipes')
            }}/>
          </Route>
        </Switch>
        <Footer />
      </div>
    </RecipesContext.Provider>
  );
}

export default App;
