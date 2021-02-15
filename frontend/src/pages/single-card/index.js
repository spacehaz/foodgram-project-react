import { Container, Main } from '../../components'
import { RecipesContext } from '../../contexts'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'


const SingleCard = () => {
  const value = useContext(RecipesContext);
  const { id } = useParams();
  const currentItem = value.find(card => Number(card.id) === Number(id))
  if (!currentItem) return 'Not found'
  const { author, img, tags, time, title, ingredients, description } = currentItem
  return <Main>
    <Container>
      {title}
    </Container>
  </Main>
}

export default SingleCard

