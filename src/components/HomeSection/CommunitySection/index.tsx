import clsx from 'clsx';
import AppContainer from 'components/App/AppContainer';
import { APP_DISCORD_URL } from 'constants/index';
import { APP_TWITTER_URL } from 'constants/index';
import css from './CommunitySection.module.scss';

const CommunitySection = ({ className }: any) => {
  return (
    <div className={css.CommunitySection}>
      <div className={css.overlay} />
      <AppContainer className={css.sectionContentContainer}>
        <div className={css.sectionContent}>
          <div className={css.title}>
            JOIN OUR COMMUNITY
          </div>
          <div className={css.description}>
            {/* Share and discover with other players */}
          </div>
          <div className={css.buttonGrid}>
            <a
              href={APP_TWITTER_URL}
              className={clsx(css.button, css.twitter)}
              target="_blank"
              rel="noopener norefer noreferrer"
            >
              <img src='/icon-twitter.svg' />
              Twitter
            </a>
            <a
              href={APP_DISCORD_URL}
              className={clsx(css.button, css.discord)}
              target="_blank"
              rel="noopener norefer noreferrer"
            >
              <img src='/icon-discord.svg' />
              Discord
            </a>
          </div>
        </div>
      </AppContainer>
    </div>
  )
};

export default CommunitySection;
