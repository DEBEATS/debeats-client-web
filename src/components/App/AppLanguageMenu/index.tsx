import { Dropdown, Menu } from 'antd'
import { APP_LANGUAGES } from 'constants/index'
import { useRouter } from 'next/router'
import DropdownMenu from 'components/App/AppDropdownMenu'
import getLanguageTitle from 'utils/getLanguageTitle'
import css from './AppLanguageMenu.module.scss'

const LanguageMenu = (props: any) => {
  const router = useRouter()
  const { locale, asPath, route } = router

  const languageDropdownMenuOnClick = ({ key }: any) => {
    if (key === locale) {
      return
    }
    router.push(route, asPath, { locale: key, scroll: true })
  }

  const languageDropdownMenu = (
    <DropdownMenu>
      <Menu
        theme='dark'
        onClick={languageDropdownMenuOnClick}
        selectedKeys={[]}
        defaultSelectedKeys={[]}
      >
        {
          APP_LANGUAGES.map(key => (
            <Menu.Item key={key}>
              {getLanguageTitle(key)}
            </Menu.Item>
          ))
        }
      </Menu>
    </DropdownMenu>
  );

  return (
    <Dropdown
      overlay={languageDropdownMenu}
    >
      <div className={css.AppLanguageMenu}>
        {`🌎 ${getLanguageTitle(locale)}`}
      </div>
    </Dropdown>
  )
}

export default LanguageMenu
