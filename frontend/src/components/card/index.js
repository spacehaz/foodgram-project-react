import styles from './style.module.css'
import { LinkComponent, Icons, Button, TagsContainer } from '../index'
import { useState, useContext } from 'react'
import { AuthContext } from '../../contexts'

const Card = ({
  title = 'Без названия',
  id,
  img,
  is_favorited,
  is_in_shopping_cart,
  tags,
  time,
  author,
  handleLike,
  handleAddToCart
}) => {
  const authContext = useContext(AuthContext)

  return <div className={styles.card}>
      <div className={styles.card__image} style={{ backgroundImage: `url(${ img })` }} />
      <div className={styles.card__body}>
        <LinkComponent
          className={styles.card__title}
          href={`/recipes/${id}`}
          title={title}
        />
        <TagsContainer tags={tags} />
        <div className={styles.card__time}>
          <Icons.ClockIcon /> {time} мин.
        </div>
        <div className={styles.card__author}>
          <Icons.UserIcon /> <LinkComponent
            href={`/user/${id}`}
            title={author}
            className={styles.card__link}
          />
        </div>
      </div>
      
      <div className={styles.card__footer}>
          <Button className={styles.card__add} modifier='style_light-blue' clickHandler={_ => {
            handleAddToCart({ id, toAdd: !is_in_shopping_cart })
          }}>
            <Icons.PlusIcon fill='#4A61DD' />{is_in_shopping_cart ? 'Удалить из покупок' : 'Добавить в покупки'}
          </Button>
          
          {authContext && <Button
            modifier='style_none'
            clickHandler={_ => {
              handleLike({ id, toLike: !is_favorited })
            }}
          >
            {is_favorited ? <Icons.StarActiveIcon /> : <Icons.StarIcon />}
          </Button>}
      </div>
  </div>
}

export default Card