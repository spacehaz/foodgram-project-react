import { Container, Input, Title, CheckboxGroup, Main, Form, Button, Checkbox, Textarea } from '../../components'
import styles from './styles.module.css'
import { useState, useContext, useEffect } from 'react'
import { useRouteMatch, useParams, useLocation } from 'react-router-dom'
import { RecipesContext } from '../../contexts'

const RecipeEdit = ({ onEdit, loadItem }) => {
  const [ loading, setLoading ] = useState(true)
  const value = useContext(RecipesContext)
  // const { id } = useParams()
  // const params = useLocation()
  // console.log({ params })
  // useEffect(_ => {
  //   loadItem({ id, callback: () => setLoading(false)  })
  // }, [])
  
  // const { url } = useRouteMatch()
  // const currentItem = value.find(card => Number(card.id) === Number(id))
  // console.log({ currentItem })
  // // if (loading) return 'Loading'
  // if (!currentItem) return 'Not found'
  // const { author, img, tags, time, title, ingredients, description } = currentItem

  return <Main>
    <Container>
      <Title title='Редактирование рецепта' />
      <Form className={styles.form}>
        <Input label='Название рецепта' />
        <CheckboxGroup title='Теги' />
        <Textarea label='Описание рецепта' onUpdated/>
        <Button
          modifier='style_dark-blue'
        >
          Редактировать рецепт
        </Button>
      </Form>
    </Container>
  </Main>
}

export default RecipeEdit
