import { Title, Pagination, Container, Main, SubscriptionList  } from '../../components'
import img1 from '../../images/1.jpg'
import img2 from '../../images/2.jpg'

const SubscriptionsPage = () => {
  const subscriptions = [{
    email: 'spacehaz@gmail.com',
    name: 'Вероника Чернова',
    id: 1,
    recipes_count: 10,
    recipes: [{
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
  }, {
    email: 'spacehaz@gmail.com',
    name: 'Вероника Чернова',
    id: 1,
    recipes_count: 10,
    recipes: [{
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
  }]

  
  return <Main>
    <Container>
      <Title title='Мои подписки' />
      <SubscriptionList subscriptions={subscriptions} />
      <Pagination />
    </Container>
  </Main>
}

export default SubscriptionsPage