import React, { useEffect } from 'react'
import clsx from 'clsx'
import css from './SectionHeader.module.scss'

const SectionHeader = (props: any = {}) => {
  const {
    className,
    subtitle,
    title,
    content,
  } = props

  return (
    <div className={clsx(css.SectionHeader, className)}>
      {
        subtitle && (
          <div className={css.sectionHeaderSubtitle}>
            {subtitle}
          </div>
        )
      }
      {
        title && (
          <div className={css.sectionHeaderTitle}>
            {title}
          </div>
        )
      }
      {
        content && (
          <div className={css.sectionHeaderDescription}>
            {content}
          </div>
        )
      }
    </div>
  )
}

export default SectionHeader

