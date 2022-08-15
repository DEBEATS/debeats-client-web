import clsx from 'clsx'
import { APP_DISCORD_URL, APP_TWITTER_URL } from 'constants/index'
import getConfig from 'next/config'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { RootState } from 'reducers'
import css from './DesktopHeader.module.scss'

const { publicRuntimeConfig } = getConfig()
const { CORE_API_URL } = publicRuntimeConfig

type ResponsiveMenuProps = {
  className?: string
  transparent?: boolean
}

const DesktopHeader = ({
  className,
  transparent,
}: ResponsiveMenuProps) => {
  const appState: any = {} = useSelector((state: RootState) => state.app)

  return (
    <header
      className={css.DesktopHeader}
      style={{
        // backgroundColor: transparent ? 'transparent' : undefined,
        // borderBottom: transparent ? 'none' : `1px solid #282828`,
      }}
    >
      <div className={css.leftPart}>
        <Link href='/'>
          <a className={css.appLogo}>
            <img src='/app-logo-debeats-full.svg' alt='Web3Games' />
          </a>
        </Link>
      </div>
      <div className={css.rightPart}>
        <a
          className={clsx(css.menuLink)}
          target="_blank"
          rel="noopener norefer noreferrer"
        >
          Play DEBEATS
        </a>
        <a
          className={clsx(css.menuLink)}
          target="_blank"
          rel="noopener norefer noreferrer"
        >
          Whitepaper
        </a>
        <a
          href={APP_TWITTER_URL}
          className={clsx(css.menuLink)}
          target="_blank"
          rel="noopener norefer noreferrer"
        >
          Twitter
        </a>
        <a
          href={APP_DISCORD_URL}
          className={clsx(css.menuLink)}
          target="_blank"
          rel="noopener norefer noreferrer"
        >
          Discord
        </a>
      </div>
    </header>
  )
}
export default DesktopHeader
