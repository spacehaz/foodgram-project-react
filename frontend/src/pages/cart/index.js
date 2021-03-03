import { PurchaseList, Title, Container, Main, Button } from '../../components'
import img1 from '../../images/1.jpg'
import img2 from '../../images/2.jpg'
import styles from './styles.module.css'

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
    <Container className={styles.container}>
      <div className={styles.cart}>
        <Title title='Список покупок' />
        <PurchaseList orders={orders} />
        <Button
          modifier='style_dark-blue'
        >Скачать список</Button>
      </div>
    </Container>
  </Main>
}

export default Cart

