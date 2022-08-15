import AppContainer from 'components/App/AppContainer';
import css from './DownloadSection.module.scss';

const DownloadSection = ({ className }: any) => {
  return (
    <div className={css.DownloadSection}>
      <div className={css.overlay} />
      <AppContainer className={css.sectionContentContainer}>
        <div className={css.sectionContent}>
          <div className={css.title}>
            Time To Debeats
          </div>
          <div className={css.description}>
            Available soon on iOS and Android
          </div>
          <div className={css.buttonGrid}>
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
      </AppContainer>
    </div>
  )
};

export default DownloadSection;
