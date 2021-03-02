import { Card, Title, Pagination, CardList, Container, Main  } from '../../components'

const HomePage = ({ recipes = [], name = 'Без имени' }) => {
  return <Main>
    <Container>
      <Title title={name} />
      <CardList>
        {recipes.map(card => <Card {...card} key={card.id} />)}
      </CardList>
      <Pagination />
    </Container>
  </Main>
}

export default HomePage

