import styles from './style.module.css'
import { LinkComponent, Icons, Button, TagsContainer } from '../index'
import { useState } from 'react'
// import api from 'api'

const Card = ({
  title = 'Без названия',
  id,
  img,
  isFavorite,
  tags,
  time,
  author
}) => {

  const [
    favorite, setFavorite
  ] = useState(isFavorite)

  

  return <div className={styles.card}>
      <div className={styles.card__image} style={{ backgroundImage: `url(${ img })`}} />
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
          <Icons.UserIcon /> {author}
        </div>
      </div>
      
      <div className={styles.card__footer}>
          <Button modifier='style_light-blue' clickHandler={_ => {}}>Купить</Button>
          
          <Button
            modifier='style_none'
            clickHandler={_ => {
           {/*   favorite ?
                api.removeFavorite(id).then(_ => setFavorite(false)) :
                api.addFavorite(id).then(_ => setFavorite(true))*/}
            }}
          >
            {favorite ? <Icons.StarActiveIcon /> : <Icons.StarIcon />}
          </Button>
      </div>
  </div>
}

export default Card