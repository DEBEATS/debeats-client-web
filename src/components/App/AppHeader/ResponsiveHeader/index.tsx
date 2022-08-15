import AppContainer from 'components/App/AppContainer'
import Link from 'next/link'
import { useState } from 'react'
import css from './ResponsiveHeader.module.scss'

type ResponsiveMenuProps = {
  className?: string
  transparent?: boolean
}

const ResponsiveHeader = ({ className, transparent }: ResponsiveMenuProps) => {
  const [showResponsiveMenu, setShowResponsiveMenu] = useState(false)

  const handleResponsiveMenuShowButtonOnClick = () => {
    setShowResponsiveMenu(true)
  }

  const handleResponsiveMenuCancelButtonOnClick = () => {
    setShowResponsiveMenu(false)
  }

  return (
    <header
      className={css.ResponsiveHeader}
      style={{
        // backgroundColor: transparent ? 'transparent' : undefined,
        // borderBottom: transparent ? 'none' : `1px solid #000`,
      }}
    >
      <AppContainer className={css.container}>
        <div className={css.leftPart}>
          <Link href='/'>
            <a className={css.appLogo}>
              <img src='/app-logo-debeats-full.svg' alt='Web3Games' />
            </a>
          </Link>
        </div>
        <div className={css.rightPart}>
          {/* <Web3StatusWidget /> */}
          {/* <AppLanguageMenu /> */}
          {/* <Button
            className={css.menuButton}
            icon={<MenuOutlined />}
            type='link'
            onClick={handleResponsiveMenuShowButtonOnClick}
          />
          <MenuModal
            visible={showResponsiveMenu}
            onCancel={handleResponsiveMenuCancelButtonOnClick}
          /> */}
        </div>
      </AppContainer>
    </header>
  )
}
export default ResponsiveHeader
