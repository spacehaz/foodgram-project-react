import { Container, Input, Title, CheckboxGroup, Main, Form, Button, Checkbox, Textarea } from '../../components'
import styles from './styles.module.css'

const RecipeCreate = ({ onEdit }) => {
  return <Main>
    <Container>
      <Title title='Создание рецепта' />
      <Form className={styles.form}>
        <Input label='Название рецепта' />
        <Textarea label='Описание рецепта' />
        <CheckboxGroup />
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
