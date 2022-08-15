import React from 'react'
import clsx from 'clsx'
import css from './AppContainer.module.scss'

type AppContainerProps = {
  children: React.ReactNode
  className?: string
}

const AppContainer = ({ className, children }: AppContainerProps) => {
  return <div className={clsx(css.AppContainer, className)}>{children}</div>
}

export default AppContainer
