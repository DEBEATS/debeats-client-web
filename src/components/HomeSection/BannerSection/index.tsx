import clsx from 'clsx';
import AppContainer from 'components/App/AppContainer';
import css from './BannerSection.module.scss'

const BannerSection = ({ className }: any) => {
  return (
    <div className={css.BannerSection}>
      <AppContainer>
        <div className={css.sectionContent}>
          <div className={css.leftPart}>
            <div className={css.title}>
              The #1
              <br />
              Decentralized
              <br />
              Rhythm Game
            </div>
            <div className={css.description}>
              Built on
              <br />
            <img src='/logo-solana.png' alt='Solana' />
            </div>
            <div className={css.buttonGrid}>
              <a
                href='https://portal-dev.web3games.com/games/debeats-dev'
                className={clsx(css.button)}
                target="_blank"
                rel="noopener norefer noreferrer"
              >
                MINT TEST NFT
              </a>
              <a
                target="_blank"
                rel="noopener norefer noreferrer"
              >
                <img src='/button-app-store.svg' alt='App Store' />
              </a>
              <a
                target="_blank"
                rel="noopener norefer noreferrer"
              >
                <img src='/button-google-play.svg' alt='Google Play' />
              </a>
            </div>
          </div>
          <div className={css.rightPart}
            style={{
              backgroundImage: `url(/graphic-banner-section-d.png)`,
            }}
          />
        </div>
      </AppContainer>
    </div>
  )
};

export default BannerSection;
