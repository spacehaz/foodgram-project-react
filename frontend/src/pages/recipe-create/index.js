import { Container, Input, Title, CheckboxGroup, Main, Form, Button, Checkbox, Textarea } from '../../components'
import styles from './styles.module.css'
import api from '../../api'
import { useEffect, useState } from 'react'
import { useTags } from '../../utils'

const RecipeCreate = ({ onEdit }) => {
  const { value, handleChange } = useTags()
  const [ ingredients, setIngredients ] = useState([
    {
      id: 1,
      title: 'Мука',
      dimension: 'гр.'
    }, {
      id: 2,
      title: 'Яйца',
      dimension: 'шт.'
    }, {
      id: 3,
      title: 'Молоко',
      dimension: 'мл.'
    }, {
      id: 4,
      title: 'Майонез',
      dimension: 'мл.'
    }, {
      id: 5,
      title: 'Оливки',
      dimension: 'шт.'
    }, {
      id: 6,
      title: 'Тунец',
      dimension: 'гр.'
    }
  ])
  // useEffect(_ => {
  //   api
  //     .getIngredients()
  //     .then(res => {
  //       setIngredients(ingredients)
  //     })
  // }, [])
  return <Main>
    <Container>
      <Title title='Создание рецепта' />
      <Form className={styles.form}>
        <Input label='Название рецепта' />
        <CheckboxGroup label='Теги' values={value} handleChange={handleChange} />
        <Textarea label='Описание рецепта' />
        <Button
          modifier='style_dark-blue'
        >
          Создать рецепт
        </Button>
      </Form>
    </Container>
  </Main>
}

export default RecipeCreate
