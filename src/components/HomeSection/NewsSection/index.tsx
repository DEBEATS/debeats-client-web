import clsx from 'clsx';
import AppContainer from 'components/App/AppContainer';
import css from './NewsSection.module.scss';

const NewsSection = ({ className }: any) => {
  return (
    <div className={css.NewsSection}>
      <div className={css.overlay} />
      <AppContainer className={css.sectionContentContainer}>
        <div className={css.sectionContent}>
          <div className={css.title}>
            FEATURED NEWS
          </div>
          <div className={css.description}>
            {/* Share and discover with other players */}
          </div>
          <div className={css.newsGrid}>
            <a
              href='https://medium.com/web3games/dj-drop-debeats-757f20f04a6b'
              className={clsx(css.newsCard)}
              target="_blank"
              rel="noopener norefer noreferrer"
            >
              <div className={css.newsCard}>
                <div
                  className={css.newsCoverImage}
                  style={{
                    backgroundImage: `url(https://miro.medium.com/max/1400/1*z5BI0MpEBgy9wRZP9vT9Zw.png)`
                  }}
                />
                <div className={css.newsContent}>
                  <div className={css.newsTitle}>
                    🎧 DJ, Drop deBeats!
                  </div>
                  <div className={css.newsSubTitle}>
                    Web3Games 0509 Weekly AMA — DEBEATS
                  </div>
                </div>
              </div>
            </a>
            <a
              href='https://medium.com/web3games/introducing-debeats-97b4dba2ead5'
              className={clsx(css.newsCard)}
              target="_blank"
              rel="noopener norefer noreferrer"
            >
              <div className={css.newsCard}>
                <div
                  className={css.newsCoverImage}
                  style={{
                    backgroundImage: `url(https://miro.medium.com/max/1400/1*y3w548a0RuNebh6-y2GB0Q.png)`
                  }}
                />
                <div className={css.newsContent}>
                  <div className={css.newsTitle}>
                    Introducing DEBEATS
                  </div>
                  <div className={css.newsSubTitle}>
                    The story behind Web3Games Studios’ first music game
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </AppContainer>
    </div>
  )
};

export default NewsSection;
