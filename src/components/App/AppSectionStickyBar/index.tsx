import clsx from 'clsx'
import css from './SectionStickyBar.module.scss'

const SectionStickyBar = (props: any = {}) => {
  const {
    className,
    // subtitle,
    title,
    button,
    // content,
  } = props

  return (
    <div className={clsx(css.SectionStickyBar, className)}>
      {/* {
        subtitle && (
          <div className={css.sectionHeaderSubtitle}>
            {subtitle}
          </div>
        )
      } */}
      {
        !!title && (
          <div className={css.sectionHeaderTitle}>
            {title}
          </div>
        )
      }
      {
        !!button ? button : undefined
      }
      {/* {
        content && (
          <div className={css.sectionHeaderDescription}>
            {content}
          </div>
        )
      } */}
    </div>
  )
}

export default SectionStickyBar

