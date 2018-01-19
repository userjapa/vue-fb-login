<template>
  <div>
    <button class="fb-login-btn" @click="checkLoginState()">Login</button>
  </div>
</template>

<script>
import props from './props'
import methods from './methods'
import mounted from './mounted'

export default {
  name: 'FacebookLogin',
  props,
  methods,
  mounted
}
</script>

<style>
.fb-login-btn {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: 700;
  color: #dfe3ee;
  background: #3b5998;
  border: none;
  border-radius: 10px;
  padding: 10px;
  min-width: 75px;
  outline: none;
}

.fb-login-btn:active {
  background: #dfe3ee;
  color: #3b5998;
}
</style>
