<template>
  <div class="container">
    <div class="register-form">
      <h2>用户注册</h2>

      <div class="form-row">
        <label>用户名：</label>
        <input type="text" v-model="form.username" />
      </div>

      <div class="form-row">
        <label>密码：</label>
        <input type="password" v-model="form.password" />
      </div>

      <div class="form-row">
        <label>确认密码：</label>
        <input type="password" v-model="form.confirmPassword" />
      </div>

      <div class="form-row">
        <label>邮箱：</label>
        <input type="email" v-model="form.email" />
      </div>

      <div class="form-row">
        <label>验证码：</label>
        <div class="horizontal-group">
          <input type="text" v-model="form.verificationCode" />
          <button type="button" @click="getCode">获取验证码</button>
        </div>
      </div>

      <div class="form-row">
        <label>出生日期：</label>
        <div class="horizontal-group">
          <select v-model="form.year">
            <option v-for="year in years" :key="year">{{ year }}</option>
          </select>
          <span>年</span>
          <select v-model="form.month">
            <option v-for="month in months" :key="month">{{ month }}</option>
          </select>
          <span>月</span>
          <select v-model="form.day">
            <option v-for="day in days" :key="day">{{ day }}</option>
          </select>
          <span>日</span>
        </div>
      </div>

      <div class="form-row">
        <label>性别：</label>
        <div class="horizontal-group">
          <label><input type="radio" value="男" v-model="form.gender" /> 男</label>
          <label><input type="radio" value="女" v-model="form.gender" /> 女</label>
          <label><input type="radio" value="保密" v-model="form.gender" /> 保密</label>
        </div>
      </div>

      <div class="form-row">
        <span class="style-tip">请选择歌曲风格（可多选）</span>
      </div>

      <div class="form-row">
        <div class="style-select">
          <label v-for="style in songStyles" :key="style">
            <input type="checkbox" :value="style" v-model="form.songStyle" /> {{ style }}
          </label>
        </div>
      </div>

      <button type="button" class="submit-btn" @click="register">注册</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  username: '',
  password: '',
  confirmPassword: '',
  email: '',
  verificationCode: '',
  year: 2004,
  month: 1,
  day: 1,
  gender: '',
  songStyle: [],
})

const years = Array.from({ length: 26 }, (_, i) => 2000 + i)
const months = Array.from({ length: 12 }, (_, i) => i + 1)
const days = Array.from({ length: 31 }, (_, i) => i + 1)
const songStyles = ['摇滚', '民谣', '流行', '蓝调', '电音', '其他']

function getCode() {
  alert('验证码已发送')
}

function register() {
  console.log('注册信息：', form.value)
  alert('注册成功')
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(to right, #fbc2eb, #a6c1ee);
}

/* 注册框样式 */
.register-form {
  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(6px);
  padding: 30px;
  width: 480px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.register-form h2 {
  text-align: center;
  margin-bottom: 10px;
}

.form-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.form-row label {
  width: 90px;
  text-align: right;
  font-weight: bold;
  flex-shrink: 0;
}

.form-row input,
.form-row select {
  flex: 1;
  padding: 8px;
  border-radius: 5px;
  border: none;
  box-sizing: border-box;
}

/* 水平内容容器：验证码、日期、性别、风格 */
.horizontal-group {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.style-tip {
  text-align: right;
  font-weight: bold;
  flex-shrink: 0;
}

/* 歌曲风格复选 */
.style-select {
  flex: 1;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

/* 验证码按钮 */
button[type='button'] {
  padding: 8px 14px;
  border: none;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
}

button[type='button']:hover {
  background-color: #eee;
}

/* 注册按钮 */
.submit-btn {
  width: 100%;
  font-size: 18px;
  padding: 12px;
  background-color: deepskyblue;
  color: black;
  border: none;
  border-radius: 8px;
  margin-top: 30px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.submit-btn:hover {
  background-color: #4aa0d0;
}
</style>
