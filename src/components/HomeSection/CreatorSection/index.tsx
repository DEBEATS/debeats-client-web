import clsx from 'clsx';
import AppContainer from 'components/App/AppContainer';
import css from './CreatorSection.module.scss';

const CreatorSection = ({ className }: any) => {
  return (
    <div className={css.CreatorSection}>
      <div className={clsx(css.overlay, css.top)} />
      <div className={clsx(css.overlay, css.bottom)} />
      <AppContainer>
        <div className={css.sectionLayout}>
          <div className={css.sectionHeader}>
            <div className={css.title}>
              CONTRIBUTE AND
              <br />
              SHARE REVENUE
            </div>
            <div className={css.subtitle}>
              All artists and beatmap makers will receive a share of the initial Beatmap NFT Sale. Subsequent trading fees generate ongoing revenue, and extra rewards are allocated based on beatmap playthroughs.
            </div>
            {/* <div className={css.buttonGrid}>
              <a
                href='https://whitepaper.debeats.com/'
                className={clsx(css.button)}
                target="_blank"
                rel="noopener norefer noreferrer"
              >
                Whitepaper
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
            </div> */}
          </div>
          <div
            className={css.sectionCoverImage}
            style={{
              // backgroundImage: `url(/illustration-creator.png)`
            }}
          />
        </div>
      </AppContainer >
    </div >
  )
};

export default CreatorSection
