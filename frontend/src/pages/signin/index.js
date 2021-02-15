import { Container, Input, Title, Main, Form, Button } from '../../components'
import styles from './styles.module.css'

const SignIn = ({ onSignIn}) => {

  return <Main>
    <Container>
      <Title title='Войти на сайт' />
      <Form className={styles.form}>
        <Input label='Имя пользователя' />
        <Input label='Пароль' type='password' />
        <Button
          modifier='style_dark-blue'
          clickHandler={onSignIn}
        >
          Войти
        </Button>
      </Form>
    </Container>
  </Main>
}

export default SignIn
