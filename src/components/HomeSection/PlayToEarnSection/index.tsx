import clsx from 'clsx';
import AppContainer from 'components/App/AppContainer';
import css from './PlayToEarnSection.module.scss';

const PlayToEarnSection = ({ className }: any) => {
  return (
    <div className={css.PlayToEarnSection}>
      <div className={clsx(css.overlay, css.top)} />
      <div className={clsx(css.overlay, css.bottom)} />
      <AppContainer>
        <div className={css.sectionLayout}>
          <div className={css.desktop}>
            <div
              className={clsx(css.sectionCoverImage)}
              style={{
                // backgroundImage: `url(/illustration-playtoearn.png)`
              }}
            />
          </div>
          <div className={css.sectionHeader}>
            <div className={css.title}>
              Free to Play
              <br />
              Play to Earn
            </div>
            <div className={css.subtitle}>
              Play for free on readymade beatmaps, or compete with others to earn tokens from beatmaps you design.
            </div>
          </div>
          <div className={css.reponsive}>
            <div
              className={clsx(css.sectionCoverImage)}
              style={{
                backgroundImage: `url(/illustration-playtoearn.png)`
              }}
            />
          </div>
        </div>
      </AppContainer >
    </div >
  )
};

export default PlayToEarnSection
