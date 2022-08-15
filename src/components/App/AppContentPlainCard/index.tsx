import clsx from 'clsx'
import React from 'react'
import css from './ContentPlainCard.module.scss'

const ContentPlainCard = (props: any = {}) => {
  const { 
    title,
    content,
   } = props
  if (!title && !content) {
    return null
  }

  return (
    <div
      className={clsx(css.ContentPlainCard)}
    >
      <div className={css.cardBody}>
        <div className={css.title}>
          {title}
        </div>
        <div className={css.content}>
          {content}
        </div>
      </div>
    </div>
  )
}

export default ContentPlainCard

