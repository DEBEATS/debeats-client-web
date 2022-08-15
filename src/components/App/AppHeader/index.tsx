import React, { useEffect, useState } from 'react'
import DesktopHeader from './DesktopHeader'
import ResponsiveHeader from './ResponsiveHeader'

type HeaderProps = {
  className?: string
  transparent?: boolean
}

const Header = ({
  className,
  transparent = true,
}: HeaderProps) => {

  const [scrollY, setScrollY] = useState(0)
  const logit = () => {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    // Remove listener (like componentWillUnmount)
    return () => {
      window.removeEventListener("scroll", logit)
    }
  }, [])

  return (
    <>
      <DesktopHeader transparent={scrollY > 100 ? false : transparent} />
      <ResponsiveHeader transparent={scrollY > 100 ? false : transparent} />
    </>
  )
}
export default Header
