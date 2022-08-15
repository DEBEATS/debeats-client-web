import React from 'react'
import css from './DropdownMenu.module.scss'

const DropdownMenu = (props: any = {}) => {
  const {
    children,
  } = props

  return (
    <div className={css.DropdownMenu}>
      {
        children
      }
    </div>
  )
}
export default DropdownMenu
