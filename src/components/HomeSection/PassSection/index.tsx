import clsx from 'clsx';
import AppContainer from 'components/App/AppContainer';
import css from './PassSection.module.scss';

const SLIDE_PASS_CARD_ROW_1 = [
  'green/green-01',
  'silver/silver-02',
  'gold/gold-03',
  'galaxy/galaxy-04',
  'green/green-05',
  'silver/silver-06',
  'gold/gold-07',
  'galaxy/galaxy-08',
  'green/green-09',
  'silver/silver-10',
  'gold/gold-11',
  'galaxy/galaxy-12',
]

const SLIDE_PASS_CARD_ROW_2 = [
  'green/green-01',
  'silver/silver-02',
  'gold/gold-03',
  'galaxy/galaxy-04',
  'green/green-05',
  'silver/silver-06',
  'gold/gold-07',
  'galaxy/galaxy-08',
  'green/green-09',
  'silver/silver-10',
  'gold/gold-11',
  'galaxy/galaxy-12',
].reverse()

const PassSection = ({ className }: any) => {
  return (
    <div className={css.PassSection}>
      <div className={css.sliderContainer}>
        <div className={css.slider}>
          <div className={css.slideTrack}>
            {
              SLIDE_PASS_CARD_ROW_1.map((carditem) => (
                <div
                  className={css.slide}
                  key={`slide-${carditem}`}
                >
                  <img
                    src={`https://debeats.oss-accelerate.aliyuncs.com/pass-nft/${carditem}.png`}
                   />
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className={css.sliderContainer}>
        <div className={css.slider}>
          <div className={clsx(css.slideTrack, css.row2)}>
            {
              SLIDE_PASS_CARD_ROW_2.map((carditem) => (
                <div
                  className={css.slide}
                  key={`slide-${carditem}`}
                >
                  <img
                    src={`https://debeats.oss-accelerate.aliyuncs.com/pass-nft/${carditem}.png`}
                   />
                </div>
              ))
            }
          </div>
        </div>
      </div>

      <AppContainer>
        <div className={css.sectionLayout}>
          <div className={css.mockUpImage}>
            <img src='/graphic-pass.png' alt='DEBEATS' />
          </div>
          <div className={css.sectionHeader}>
            <div className={css.title}>
              DEBEATS
              <br />
              PASS NFT
            </div>
            <div className={css.subtitle}>
              PASS NFTs are entry tickets that give users access to the DEBEATS gameplay.
              <br />
              <br />
              There are 4 separate grades of PASS, with 52 different designs for each grade. Each PASS card has a unique appearance and distinct qualities and properties, which directly affect in-game play-to-earn efficiency.
            </div>
          </div>
        </div>
      </AppContainer >
    </div >
  )
};

export default PassSection
