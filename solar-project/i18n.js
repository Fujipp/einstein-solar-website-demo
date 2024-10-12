// i18n.js
import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    form: {
      title: 'Schedule a Consultation with an Expert',
      name: 'Name',
      phone: 'Phone',
      email: 'E-mail',
      selectContactType: 'Select Contact Type',
      consultation: 'Consultation',
      support: 'Support',
      message: 'Message',
      submit: 'Submit',
      successMessage: 'Form submitted successfully!',
      errorMessage: 'There was an error submitting the form. Please try again.'
    }
  },
  th: {
    form: {
      title: 'นัดหมาย เพื่อรับคำปรึกษาจากผู้เชี่ยวชาญ',
      name: 'ชื่อ',
      phone: 'เบอร์โทรศัพท์',
      email: 'E-mail',
      selectContactType: 'เลือกประเภทการติดต่อ',
      consultation: 'ปรึกษา',
      support: 'สนับสนุน',
      message: 'ข้อความ',
      submit: 'ส่งข้อความ',
      successMessage: 'ส่งฟอร์มสำเร็จแล้ว!',
      errorMessage: 'เกิดข้อผิดพลาดในการส่งฟอร์ม กรุณาลองใหม่อีกครั้ง.'
    }
  }
};

const i18n = createI18n({
  locale: 'th', // กำหนดภาษาเริ่มต้น
  fallbackLocale: 'en', // กำหนดภาษาสำรอง
  messages
});

export default i18n;