import { Container, Input, Title, Main, Form, Button } from '../../components'
import styles from './styles.module.css'
import { useFormWithValidation } from '../../utils'
import { AuthContext } from '../../contexts'
import { Redirect } from 'react-router-dom'
import { useContext } from 'react'

const SignIn = ({ onSignIn }) => {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation()
  const authContext = useContext(AuthContext)

  return <Main>
    {authContext && <Redirect to='/recipes' />}
    <Container>
      <Title title='Войти на сайт' />
      <Form className={styles.form}>
        <Input
          required
          label='Имя пользователя'
          name='username'
          onChange={handleChange}
        />
        <Input
          required
          label='Пароль'
          type='password'
          name='password'
          onChange={handleChange}
        />
        <Button
          modifier='style_dark-blue'
          clickHandler={_ => onSignIn(values)}
          disabled={!isValid}
        >
          Войти
        </Button>
      </Form>
    </Container>
  </Main>
}

export default SignIn
