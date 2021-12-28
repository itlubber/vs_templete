<template>
  <form @submit.prevent="onsubmit()">
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
        v-model="agreedToTerms"
        class="mb-0"
        :error="!!agreedToTermsErrors.length"
        :errorMessages="agreedToTermsErrors"
      >
        <template #label>
          <span class="ml-1">
            我同意
            <span class="link">使用条款</span>
          </span>
        </template>
      </va-checkbox>
      <router-link class="ml-1 link" :to="{ name: 'recover-password' }">
        重置密码
      </router-link>
    </div>

    <div class="d-flex justify--center mt-3">
      <va-button @click="onsubmit" class="my-0">注册</va-button>
    </div>
  </form>
</template>

<script>
export default {
  name: "signup",
  data() {
    return {
      email: "",
      password: "",
      agreedToTerms: false,
      emailErrors: [],
      passwordErrors: [],
      agreedToTermsErrors: [],
    };
  },
  methods: {
    onsubmit() {
      this.emailErrors = this.email ? [] : ["Email is required"];
      this.passwordErrors = this.password ? [] : ["Password is required"];
      this.agreedToTermsErrors = this.agreedToTerms
        ? []
        : ["You must agree to the terms of use to continue"];
      if (!this.formReady) {
        return;
      }
      this.$router.push({ name: "dashboard" });
    },
  },
  computed: {
    formReady() {
      return !(
        this.emailErrors.length ||
        this.passwordErrors.length ||
        this.agreedToTermsErrors.length
      );
    },
  },
};
</script>

<style lang="scss">
</style>
