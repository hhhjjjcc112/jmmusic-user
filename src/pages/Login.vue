<template>
  <div class="login-page">
    <!-- Decorative background blob -->
    <div class="blob-bg"></div>

    <!-- Main card -->
    <div class="card">
      <!-- Illustration on the left -->
      <div class="illustration">
        <!-- Replace the src with your own image asset -->
        <img src="@/assets/login/illustration.png" alt="Illustration" />
      </div>

      <!-- Login form on the right -->
      <div class="form-wrapper">
        <h2>Hello JIMI</h2>
        <form @submit.prevent="onLogin">
          <!-- E‑mail -->
          <div class="input-group">
            <i class="icon mail" />
            <input
                type="email"
                v-model="email"
                placeholder=" 邮箱"
                required
            />
          </div>

          <!-- Password -->
          <div class="input-group">
            <i class="icon lock" />
            <input
                type="password"
                v-model="password"
                placeholder=" 密码"
                required
            />
          </div>

          <!-- Remember & forgot -->
          <div class="options">
            <label>
              <input type="checkbox" v-model="remember" /> 记住我
            </label>
            <router-link to="/forgot" class="forgot">忘记密码?</router-link>
          </div>

          <!-- Action buttons -->
          <div class="actions">
            <button type="submit" class="btn primary">登录</button>
            <router-link to="/register" class="btn secondary">注册</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");
const remember = ref(false);

function onLogin() {
  // TODO: handle real authentication
  console.log("Logging in with", { email: email.value, password: password.value, remember: remember.value });
}
</script>

<style scoped>
/* Layout */
.login-page {
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f7fa;
  overflow: hidden;
}

/* Background blob image */
.blob-bg {
  position: absolute;
  width: 90%;
  height: 90%;
  background: url("@/assets/login/blob-bg.png") no-repeat center/cover;
  z-index: 0;
}

/* Card */
.card {
  width: 80%;
  max-width: 1100px;
  height: 680px;
  background: #ffffff;
  display: flex;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  z-index: 1;
}

/* Illustration */
.illustration {
  flex: 1 1 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
}
.illustration img {
  width: 700px;
  height: 500px;
  margin-left: -100px;
}

/* Form */
.form-wrapper {
  flex: 1 1 50%;
  padding: 60px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h2 {
  margin-bottom: 40px;
  font-size: 32px;
  font-weight: 700;
  transform: translateX(30px);
}

/* Input group */
.input-group {
  position: relative;
  margin-bottom: 24px;
  margin-left: -50px;
}
.input-group .icon {
  position: absolute;
  transform: translateY(-50%);
  background-size: contain;
  background-repeat: no-repeat;
}
.input-group .mail {
  background-image: url("@/assets/login/icon-mail.png");
  left: 9px;
  top: 52%;
  width: 25px;
  height: 30px;
}
.input-group .lock {
  background-image: url("@/assets/login/icon-lock.png");
  left: 8px;
  top: 53%;
  width: 35px;
  height: 30px;
}
.input-group input {
  width: 75%;
  padding: 18px 12px 18px 40px;
  border: 1px solid #e5e9f2;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  transition: border 0.2s ease;
}
.input-group input:focus {
  border-color: #169dff;
}

/* Options */
.options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  font-size: 14px;
  margin-left: -30px;
}
.forgot {
  color: #888;
  text-decoration: none;
  transition: color 0.2s ease;
  transform: translateX(-80px);
}
.forgot:hover {
  color: #169dff;
}

/* Buttons */
.actions {
  display: flex;
  gap: 16px;
  transform: translateX(-55px);
}
.btn {
  flex: 1;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.btn.primary {
  background: #169dff;
  text-align: center;
  color: #ffffff;
}
.btn.primary:hover {
  opacity: 0.9;
}
.btn.secondary {
  background: #ffffff;
  border: 1px solid #169dff;
  color: #169dff;
  text-align: center;
  line-height: 1.2;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn.secondary:hover {
  background: #f0f8ff;
}
</style>
