import css from './AppLayout.module.scss'

const AppLayout = (props: any = {}) => {
  const {
    children,
  } = props
  return (
    <div className={css.AppLayout}>
      {children}
    </div>
  )
}
export default AppLayout
