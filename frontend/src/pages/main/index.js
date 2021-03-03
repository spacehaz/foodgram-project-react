import { Card, Title, Pagination, CardList, Container, Main, CheckboxGroup  } from '../../components'
import styles from './styles.module.css'
import { useTags } from '../../utils'

const HomePage = ({ recipes = [], handleLike, handleAddToCart }) => {
  const { value, handleChange } = useTags()
  const filters = value.filter(item => item.value).map(item => item.id)
  const recipesToShow = recipes.filter(recipe => {
    return recipe.tags.find(tag => filters.indexOf(tag.id) > -1)
  })
  return <Main>
    <Container>
      <div className={styles.title}>
        <Title title='Рецепты' />
        <CheckboxGroup values={value} handleChange={handleChange} />
      </div>
      <CardList>
        {recipesToShow.map(card => <Card
          {...card}
          key={card.id}
          handleLike={handleLike}
          handleAddToCart={handleAddToCart}
        />)}
      </CardList>
      <Pagination />
    </Container>
  </Main>
}

export default HomePage

