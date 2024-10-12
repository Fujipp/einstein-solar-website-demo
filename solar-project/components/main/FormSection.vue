<template>
  <div class="max-w-4xl mx-auto my-8 p-6 bg-white shadow-md rounded-md">
    <h2 class="text-2xl font-bold text-center mb-6">{{ $t('form.title') }}</h2>
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" v-model="name" :placeholder="$t('form.name')" class="form-input p-2 border rounded-md" />
        <input type="text" v-model="phone" :placeholder="$t('form.phone')" class="form-input p-2 border rounded-md" />
        <input type="email" v-model="email" :placeholder="$t('form.email')" class="form-input p-2 border rounded-md" />
        <select v-model="contactType" class="form-select p-2 border rounded-md">
          <option disabled value="">{{ $t('form.selectContactType') }}</option>
          <option value="consultation">{{ $t('form.consultation') }}</option>
          <option value="support">{{ $t('form.support') }}</option>
        </select>
      </div>
      <textarea v-model="message" :placeholder="$t('form.message')" class="form-textarea p-2 border rounded-md w-full h-32"></textarea>
      <div class="text-right">
        <button type="submit" class="px-4 py-2 bg-orange-500 text-white rounded-md flex items-center">
          <font-awesome-icon icon="check" class="h-5 w-5 mr-2" />
          {{ $t('form.submit') }}
        </button>
      </div>
      <!-- แสดงข้อความยืนยันหรือข้อผิดพลาด -->
      <div v-if="formStatus.message" :class="{'text-green-500': formStatus.success, 'text-red-500': !formStatus.success}" class="mt-4">
        {{ formStatus.message }}
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      phone: '',
      email: '',
      contactType: '',
      message: '',
      formStatus: {
        message: '',
        success: false
      }
    };
  },
  methods: {
    async handleSubmit() {
      const formData = {
        name: this.name,
        phone: this.phone,
        email: this.email,
        contactType: this.contactType,
        message: this.message,
      };
      
      try {
        const response = await axios.post('http://localhost:3000/api/contact', formData);
        this.formStatus.message = this.$t('form.successMessage');
        this.formStatus.success = true;
        this.clearForm();
      } catch (error) {
        console.error('เกิดข้อผิดพลาดในการส่งฟอร์ม:', error);
        this.formStatus.message = this.$t('form.errorMessage');
        this.formStatus.success = false;
      }
    },
    clearForm() {
      this.name = '';
      this.phone = '';
      this.email = '';
      this.contactType = '';
      this.message = '';
    }
  },
};
</script>

<style scoped>
.form-input, .form-select, .form-textarea {
  transition: border-color 0.2s ease-in-out;
}
.form-input:focus, .form-select:focus, .form-textarea:focus {
  border-color: #3182ce;
  outline: none;
}
</style>