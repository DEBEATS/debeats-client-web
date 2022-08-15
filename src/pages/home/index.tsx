import AppFooter from 'components/App/AppFooter'
import AppHeader from 'components/App/AppHeader'
import AppLayout from 'components/App/AppLayout'
import BannerSection from 'components/HomeSection/BannerSection'
import BeatmapSection from 'components/HomeSection/BeatmapSection'
import CommunitySection from 'components/HomeSection/CommunitySection'
import CreatorSection from 'components/HomeSection/CreatorSection'
import DownloadSection from 'components/HomeSection/DownloadSection'
import LeaderboardSection from 'components/HomeSection/LeaderboardSection'
import MusicSection from 'components/HomeSection/MusicSection'
import NewsSection from 'components/HomeSection/NewsSection'
import PlayToEarnSection from 'components/HomeSection/PlayToEarnSection'
import VideoSection from 'components/HomeSection/VideoSection'
import type { NextPage } from 'next'
import css from './home.module.scss'

const HomePage: NextPage = () => {
  return (
    <div className={css.HomePage}>
      <AppLayout>
        <AppHeader transparent />
        <BannerSection />
        <VideoSection />
        <BeatmapSection />
        <PlayToEarnSection />
        <MusicSection />
        <LeaderboardSection />
        <CreatorSection />
        <NewsSection />
        <DownloadSection />
        <CommunitySection />
        <AppFooter />
      </AppLayout>
    </div>
  )
}

export default HomePage
