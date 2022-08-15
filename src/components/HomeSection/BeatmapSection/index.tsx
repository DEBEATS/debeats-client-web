import clsx from 'clsx';
import AppContainer from 'components/App/AppContainer';
import css from './BeatmapSection.module.scss';

const BeatmapSection = ({ className }: any) => {
  return (
    <div className={css.BeatmapSection}>
      <div className={clsx(css.overlay, css.top)} />
      <div className={clsx(css.overlay, css.bottom)} />
      <AppContainer>
        <div className={css.sectionLayout}>
          <div className={css.sectionHeader}>
            <div className={css.title}>
              Create BEATMAPS
              <br />
              Own BEATMAPS
            </div>
            <div className={css.subtitle}>
              Every beatmap created is an NFT. Player-made beatmaps are listed in-game and ranked by popularity in the DEBEATS community.
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
              // backgroundImage: `url(/illustration-beatmap.png)`
            }}
          />
        </div>
      </AppContainer >
    </div >
  )
};

export default BeatmapSection
