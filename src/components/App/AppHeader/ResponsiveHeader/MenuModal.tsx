import { CloseOutlined } from '@ant-design/icons'
import { Button, Modal } from 'antd'
import AppContainer from 'components/App/AppContainer'
import Link from 'next/link'
import css from './ResponsiveHeader.module.scss'

const ResponsiveMenuModal = (props: any = {}) => {
  const {
    intl,
    router,
    visible,
    onCancel,
  } = props

  const handlePageMenuOnClick = (params: any) => {
    const { href } = params.item.props.menuitem
    if (href) {
      router.push(href, href, { scroll: true })
    }
  }

  return (
    <Modal
      transitionName=''
      maskTransitionName=''
      visible={visible}
      onCancel={onCancel}
      footer={null}
      maskClosable
      maskStyle={{
        height: '100%',
      }}
      width='100%'
      wrapClassName={css.ResponsiveMenuModal}
      className='app-responsive-menu-modal'
    >
      <div className='modal-header'>
        <AppContainer className='container'>
          <div className='left-part'>
            <Link href='/'>
              <a className='app-logo'>
                <img src='/logo-debeats-w-white.png' alt='Web3Games' />
              </a>
            </Link>
            {/* <AppLanguageMenu /> */}
          </div>
          <div className='right-part'>
            <Button
              className='close-button'
              icon={<CloseOutlined />}
              type='link'
              onClick={onCancel}
            />
          </div>
        </AppContainer>
      </div>
      <div className='modal-content'>
        {/* <AppSidebar /> */}
      </div>
    </Modal>
  )
}

// const mapStateToProps = (state) => {
//   const {
//     accessToken,
//     user,
//   } = state.app
//   return {
//     accessToken,
//     user,
//   }
// }

// const mapDispatchToProps = dispatch => ({
//   userSignOut: () => dispatch(userSignOut()),
//   setRouteBeforeSignIn: ({ route, params }) => dispatch(setRouteBeforeSignIn({ route, params })),
// })

export default ResponsiveMenuModal

// compose(
//   injectIntl,
//   withRouter,
//   // connect(
//   //   mapStateToProps,
//   //   mapDispatchToProps,
//   // ),
// )(MenuModal)
