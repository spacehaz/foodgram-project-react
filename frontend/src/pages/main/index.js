import { Card, Title, Pagination, CardList, Container, Main  } from '../../components'

const HomePage = ({ recipes = [] }) => {
  return <Main>
    <Container>
      <Title title='Рецепты' />
      <CardList>
        {recipes.map(card => <Card {...card} key={card.id} />)}
      </CardList>
      <Pagination />
    </Container>
  </Main>
}

export default HomePage

