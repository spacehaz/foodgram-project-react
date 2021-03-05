import {
  Card,
  Title,
  Pagination,
  CardList,
  Button,
  CheckboxGroup,
  Container,
  Main 
} from '../../components'

import styles from './styles.module.css'
import { useTags } from '../../utils'

const UserPage = ({ recipes = [], name = 'Без имени' }) => {
  const { value, handleChange } = useTags()
  const filters = value.filter(item => item.value).map(item => item.id)
  const recipesToShow = recipes.filter(recipe => {
    return recipe.tags.find(tag => filters.indexOf(tag.id) > -1)
  })
  return <Main>
    <Container className={styles.container}>
      <div className={styles.title}>
        <Title className={styles.titleText} title={name} />
        <CheckboxGroup values={value} handleChange={handleChange} />
      </div>
      <Button className={styles.buttonSubscribe}>Подписаться на автора</Button>
      <CardList>
        {recipes.map(card => <Card {...card} key={card.id} />)}
      </CardList>
      <Pagination />
    </Container>
  </Main>
}

export default UserPage

