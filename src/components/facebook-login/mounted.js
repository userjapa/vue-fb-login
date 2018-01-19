export default function () {
  if (this.appId && typeof this.appId === 'string' && this.app !== '') {
    window.fbAsyncInit = () => {
      window.FB.init({
        appId: this.appId,
        cookie: true,
        xfbml: true,
        version: 'v2.11'
      })
      window.FB.AppEvents.logPageView()
    }
  } else {
    console.log('Application ID is required!')
  }
  (function (d, s, id) {
    let js
    let fjs = d.getElementsByTagName(s)[0]
    if (d.getElementById(id)) { return }
    js = d.createElement(s)
    js.id = id
    js.src = 'https://connect.facebook.net/en_US/sdk.js'
    fjs.parentNode.insertBefore(js, fjs)
    console.log('Facebook JavaScript SDK loaded!')
  }(document, 'script', 'facebook-jssdk'))
}
