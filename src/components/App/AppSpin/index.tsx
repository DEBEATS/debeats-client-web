import React from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import css from './AppSpin.module.scss'

const AppSpin = () => {
  return (
    <div className={css.AppSpin}>
      <LoadingOutlined />
    </div>
  )
}

export default AppSpin
