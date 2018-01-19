export default {
  onlogin () {
    window.FB.login((response) => {
      this.checkLoginState()
    })
  },
  checkLoginState () {
    window.FB.getLoginStatus((response) => {
      this.statusChangeCallback(response)
    })
  },
  testAPI (status) {
    window.FB.api('/me?fields=id,name,picture,email', (response) => {
      if (typeof this.login !== 'function') {
        console.log('Login callback is needed!')
      } else {
        response.authResponse = status.authResponse
        this.login(response)
      }
    })
  },
  statusChangeCallback (response) {
    if (response.status === 'connected') {
      this.testAPI(response)
    } else if (response.status === 'disconnected' || response.status === 'unknown') {
      this.onlogin()
    } else {
      if (typeof this.error !== 'function') {
        console.log('Error callback is not defined!', response)
      } else {
        this.error(response)
      }
    }
  }
}
