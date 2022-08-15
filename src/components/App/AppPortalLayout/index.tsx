import React from "react"
import clsx from 'clsx'
import AppFooter from 'components/App/AppFooter'
import AppContainer from "components/App/AppContainer"
import css from "./AppPortalLayout.module.scss"

const AppPortalLayout = (props: any = {}) => {
  const {
    centerPart,
    rightPart,
  } = props
  return (
    <div className={css.AppPortalLayout}>
      <AppContainer className={css.appContainer}>
        <div className={css.portalRow}>
          {
            centerPart && (
              <div className={clsx(css.portalColumn, css.centerPart)}>
                {
                  <>
                    {centerPart}
                  </>
                }
              </div>
            )
          }
          {
            rightPart && (
              <div className={clsx(css.portalColumn, css.rightPart)}>
                {rightPart}
              </div>
            )
          }
        </div>
      </AppContainer>
    </div >
  );
};

export default AppPortalLayout;
