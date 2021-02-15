import { Container, Input, Title, Main, Form, Button } from '../../components'
import styles from './styles.module.css'

const SignUp = ({ onSignUp}) => {

  return <Main>
    <Container>
      <Title title='Регистрация' />
      <Form className={styles.form}>
        <Input
          label='Имя'
        />
        <Input
          label='Имя пользователя'
        />
        <Input
          label='Адрес электронной почты'
        />
        <Input
          label='Пароль'
          type='password'
        />
        <Button
          modifier='style_dark-blue'
          clickHandler={onSignUp}
        >
          Создать аккаунт
        </Button>
      </Form>
    </Container>
  </Main>
}

export default SignUp
