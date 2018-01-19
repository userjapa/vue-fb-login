export default {
  onlogout () {
    window.FB.logout((response) => {
      if (typeof this.logout === 'function') {
        this.logout(response)
      } else {
        console.log('Callback not informed', response)
      }
    })
  }
}
