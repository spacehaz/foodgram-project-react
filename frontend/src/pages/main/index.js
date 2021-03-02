import { Card, Title, Pagination, CardList, Container, Main  } from '../../components'

const HomePage = ({ recipes = [], handleLike, handleAddToCart }) => {
  return <Main>
    <Container>
      <Title title='Рецепты' />
      <CardList>
        {recipes.map(card => <Card
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

