<template>
<div class="login">

  <form @submit.prevent="handleSubmit">
    <h3 class="title">LOGIN</h3>

    <label for="email">EMAIL:</label>
    <input type="email" name="email" v-model="email" required>

    <label for="password">PASSWORD:</label>
    <input type="password" name="password" v-model="password" required>

    <button>LOGIN</button>

    <div class="error" v-if="error"> {{ error }} </div>

  </form>

</div>
  
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useLogin from '../composables/useLogin'


export default {
  setup() {
    const email = ref('')
    const password = ref('')

    const { login, error } = useLogin()
    const router = useRouter()

    const handleSubmit = async () => {
      
      await login(email.value, password.value)

      if(!error.value) {
        router.push('/admin')
      }
    }

    return { email, password, handleSubmit, error }
  }
}
</script>

<style scoped>

.login {
  width: 100vw;
}

.login form {
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 20vh 0;
  text-align: center;
  width: 70vw;
  color: var(--primary-color-offwhite);
}

.title {
  margin: auto;
  color: var(--primary-color-offwhite);
  margin-bottom: 10vh;
}

input {
  margin: auto;
  margin-bottom: 10vh;
  width: 50%;
}

label {
  margin-bottom: 3vh;
}

.error {
  color: red;
}

button {
  margin: auto;
  width: 20%;
  height: 5vh;
}

</style>