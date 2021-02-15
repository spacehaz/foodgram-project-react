import styles from './style.module.css'
import { LinkComponent, Icons, Button, Tag } from '../index'
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

  const defineTagColor = tag => {
    if (tag === 'Завтрак') {
      return 'orange'
    } else if (tag === 'Обед') {
      return 'green'
    } else {
      return 'violet'
    }
  }

  return <div className={styles.card}>
      <div className={styles.card__image} style={{ backgroundImage: `url(${ img })`}} />
      <div className={styles.card__body}>
        <LinkComponent
          className={styles.card__title}
          href={`/recipes/${id}`}
          title={title}
        />
        <div className={styles.card__tags}>
          {tags.map(tag => {
            const color = defineTagColor(tag)
            return <Tag type={color} title={tag} />
          })}
        </div>
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