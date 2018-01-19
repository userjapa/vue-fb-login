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
  testAPI () {
    window.FB.api('/me', (response) => {
      if (typeof this.login !== 'function') {
        console.log('Login callback is needed!')
      } else {
        this.login(response)
      }
    })
  },
  statusChangeCallback (response) {
    if (response.status === 'connected') {
      this.testAPI()
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
