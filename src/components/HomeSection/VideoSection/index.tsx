import AppContainer from 'components/App/AppContainer';
import WEB3GAMES_PROJECTS from 'constants/web3gamesProjects';
import css from './VideoSection.module.scss';

const VideoSection = ({ className }: any) => {
  return (
    <div className={css.VideoSection}>
      <div className={css.coverVideoContainer}>
        <video
          className={css.coverVideo}
          src={WEB3GAMES_PROJECTS.DEBEATS['cover_animation_url']}
          playsInline
          autoPlay
          muted
          loop
          controls={false}
        >
        </video>
      </div>
      <div className={css.overlay} />
      <AppContainer className={css.sectionContentContainer}>
        <div className={css.sectionContent}>
          <div className={css.title}>
            Make Music NFTS Playable
          </div>
          <div className={css.description}>
            PLAY, CREATE & EARN IN THE FIRST DECENTRALIZED MUSIC NFT GAME
          </div>
        </div>
      </AppContainer>
    </div>
  )
};

export default VideoSection;
