import React from 'react'
import css from './Placeholder.module.scss'

const Placeholder = (props: any) => {
  const {
    title,
    children,
  } = props
  return (
    <div className={css.Placeholder}>
      {
        title && <div className={css.title}>{title}</div>
      }
      {
        children
      }
    </div>
  )
}

export default Placeholder
