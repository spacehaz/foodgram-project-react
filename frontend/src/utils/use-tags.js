import React from "react";

export function useTags() {
  const [ value, setValue ] = React.useState([{
    id: 1,
    title: 'Завтрак',
    color: '#E26C2D',
    slug: 'breakfast',
    value: true
  }, {
    id: 2,
    title: 'Обед',
    color: '#49B64E',
    slug: 'meal',
    value: true

  }, {
    id: 3,
    title: 'Ужин',
    color: '#8775D2',
    slug: 'dinner',
    value: true
  }])

  const handleChange = id => {
    const valueUpdated = value.map(item => {
      if (item.id === id) {
        item.value = !item.value
      }
      return item
    })
    setValue(valueUpdated)
  }

  return { value, handleChange, setValue }
}
