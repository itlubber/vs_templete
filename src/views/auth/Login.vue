<template>
  <form @submit.prevent="onsubmit">
    <va-input
      class="mb-3"
      v-model="email"
      type="email"
      label="电子邮箱"
      :error="!!emailErrors.length"
      :error-messages="emailErrors"
    />

    <va-input
      class="mb-3"
      v-model="password"
      type="password"
      label="密码"
      :error="!!passwordErrors.length"
      :error-messages="passwordErrors"
    />

    <div
      class="auth-layout__options d-flex align--center justify--space-between"
    >
      <va-checkbox
        v-model="keepLoggedIn"
        class="mb-0"
        label="保持登陆"
      />
      <router-link class="ml-1 link" :to="{ name: 'recover-password' }">
        重置密码
      </router-link>
    </div>

    <div class="d-flex justify--center mt-3">
      <va-button @click="onsubmit" class="my-0">登录</va-button>
    </div>
  </form>
</template>

<script>
export default {
  name: "login",

  data() {
    return {
      email: "",
      password: "",
      keepLoggedIn: false,
      emailErrors: [],
      passwordErrors: [],
    };
  },
  computed: {
    formReady() {
      return !this.emailErrors.length && !this.passwordErrors.length;
    },
  },
  methods: {
    onsubmit() {
      this.emailErrors = this.email ? [] : ["Email is required"];
      this.passwordErrors = this.password ? [] : ["Password is required"];
      if (!this.formReady) {
        return;
      }
      this.$router.push({name: "admin"});
    },
  },
};
</script>
