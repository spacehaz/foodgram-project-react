import { PurchaseList, Title, Container, Main  } from '../../components'
import img1 from '../../images/1.jpg'
import img2 from '../../images/2.jpg'

const Cart = () => {
  const orders = [
      {
        title: 'Круассан с омлетом, лососем и голландским соусом',
        id: 1,
        img: img1,
        time: 20
      }, {
        title: 'Французские тосты',
        id: 2,
        img: img2,
        time: 30
      }, {
        title: 'Французский тост с сиропом агавы',
        id: 3,
        img: img2,
        time: 20
      }
  ]
  return <Main>
    <Container>
      <Title title='Список покупок' />
      <PurchaseList orders={orders} />
    </Container>
  </Main>
}

export default Cart

