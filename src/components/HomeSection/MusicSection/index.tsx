import clsx from 'clsx';
import AppContainer from 'components/App/AppContainer';
import css from './MusicSection.module.scss';

const MusicSection = ({ className }: any) => {
  return (
    <div className={css.MusicSection}>
      <div className={clsx(css.overlay, css.top)} />
      <div className={clsx(css.overlay, css.bottom)} />
      <AppContainer>
        <div className={css.sectionLayout}>
          <div className={css.sectionHeader}>
            <div className={css.title}>
              Discover
              <br />
              hot new music
            </div>
            <div className={css.subtitle}>
              DEBEATS works with up-and-coming artists and labels to find the freshest and most exciting new music from around the world.
            </div>
          </div>
          <div
            className={css.sectionCoverImage}
            // style={{
            //   backgroundImage: `url(/illustration-music.png)`
            // }}
          />
        </div>
      </AppContainer >
    </div >
  )
};

export default MusicSection
