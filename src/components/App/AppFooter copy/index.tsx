import { PlayCircleFilled } from '@ant-design/icons'
import { Col, Row } from 'antd'
import { APP_DISCORD_URL, APP_MEDIUM_URL, APP_TWITTER_URL } from 'constants/index'
import Link from 'next/link'
import AppContainer from '../AppContainer'
import css from './Footer.module.scss'

const Footer = (props: any) => {
  const {
    intl,
  } = props
  return (
    <footer className={css.Footer}>
      {/* <div className='seperator' /> */}
      <AppContainer>
        <div className='website-link'>
          <Row gutter={48} align='top'>
            <Col xs={24} md={6} >
              <div className='widget'>
                <img
                  className='app-logo'
                  src='/app-logo-debeats-icon.svg'
                />
                <span>PRODUCED BY</span>
                <img
                  className='web3games-logo'
                  src='/app-logo-text-white.svg'
                />
              </div>
            </Col>
            <Col xs={24} md={6} >
              <div className='widget'>
                <div className='title'>
                  DEBEATS
                </div>
                <ul>
                  <li>
                    <Link href='/'>
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <a
                      // href='https://portal.web3games.com/games/debeats'
                      target="_blank"
                      rel="noopener norefer noreferrer"
                    >
                      Web3Games Portal
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={24} md={6} >
              <div className='widget'>
                <div className='title'>
                  Resources
                </div>
                <ul>
                  <li>
                    <a
                      // href='https://whitepaper.debeats.com/'
                      target='_blank' rel='noopener noreferrer'
                      >
                      Whitepaper
                    </a>
                  </li>
                  <li>
                    <Link href='/terms' >
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link href='/privacy' >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={24} md={6} >
              <div className='widget'>
                <div className='title'>
                  COMMUNITY
                </div>
                <ul>
                  <li>
                    <a href={APP_DISCORD_URL} target='_blank' rel='noopener noreferrer'>
                      Discord
                    </a>
                  </li>
                  <li>
                    <a href={APP_TWITTER_URL} target='_blank' rel='noopener noreferrer'>
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href={APP_MEDIUM_URL} target='_blank' rel='noopener noreferrer'>
                      Telegram
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
        <div className='website-info'>
          <div>
            <span className='copyright'>
              © 2022 DEBEATS BY WEB3GAMES STUDIOS
            </span>
          </div>
        </div>
      </AppContainer>
    </footer >
  )
}

export default Footer
