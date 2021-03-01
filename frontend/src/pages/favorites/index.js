import { Title, Pagination, Container, Main, CardList, Card } from '../../components'
import img1 from '../../images/1.jpg'
import img2 from '../../images/2.jpg'

const FavoritesPage = ({ favorites }) => {
  return <Main>
    <Container>
      <Title title='Избранное' />
      <CardList>
        {favorites.map(card => <Card {...card} key={card.id} />)}
      </CardList>
      <Pagination />
    </Container>
  </Main>
}

export default FavoritesPage