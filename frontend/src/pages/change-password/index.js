import { Container, Input, Title, Main, Form, Button } from '../../components'
import styles from './styles.module.css'
import { useFormWithValidation } from '../../utils'
import { AuthContext } from '../../contexts'
import { Redirect } from 'react-router-dom'
import { useContext } from 'react'

const ChangePassword = ({ onSignIn }) => {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation()
  const authContext = useContext(AuthContext)

  return <Main>
    <Container>
      <Title title='Изменить пароль' />
      <Form className={styles.form}>
        <Input
          required
          label='Старый Пароль'
          type='password'
          name='old_password'
          onChange={handleChange}
        />
        <Input
          required
          label='Новый пароль'
          type='password'
          name='new_password'
          onChange={handleChange}
        />
        <Input
          required
          label='Подтверждение нового пароля'
          type='password'
          name='repeat_password'
          onChange={handleChange}
        />
        <Button
          modifier='style_dark-blue'
          clickHandler={_ => onSignIn(values)}
          disabled={!isValid}
        >
          Изменить пароль
        </Button>
      </Form>
    </Container>
  </Main>
}

export default ChangePassword
