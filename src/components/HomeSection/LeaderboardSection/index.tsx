import clsx from 'clsx';
import AppContainer from 'components/App/AppContainer';
import css from './LeaderboardSection.module.scss';

const LeaderboardSection = ({ className }: any) => {
  return (
    <div className={css.LeaderboardSection}>
      <div className={clsx(css.overlay, css.top)} />
      <div className={clsx(css.overlay, css.bottom)} />
      <AppContainer>
        <div className={css.sectionLayout}>
          <div className={css.desktop}>
            <div
              className={clsx(css.sectionCoverImage)}
              style={{
                // backgroundImage: `url(/illustration-leaderboard.png)`
              }}
            />
          </div>
          <div className={css.sectionHeader}>
            <div className={css.title}>
              CHALLENGE
              <br />
              PLAYERS Worldwide
            </div>
            <div className={css.subtitle}>
              Compete against other players on the beatmaps of your choice. Win head-to-heads to move up the rankings and earn more tokens.
            </div>
          </div>
          <div className={css.reponsive}>
            <div
              className={clsx(css.sectionCoverImage)}
              style={{
                backgroundImage: `url(/illustration-leaderboard.png)`
              }}
            />
          </div>
        </div>
      </AppContainer >
    </div >
  )
};

export default LeaderboardSection
