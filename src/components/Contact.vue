<script setup>
import { Notyf } from 'notyf';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const notyf = new Notyf();
const name = ref("");
const email = ref("");
const message = ref("");
const isLoading = ref(false);

const WEB3FORMS_ACCESS_KEY = "a47dd65d-d9c2-4554-9165-60acb7df3851";
const SITE_KEY = "6Lfi0wgTAAAAAJBiW_08gIZSmBAWKMaXHLP8KmUs";

const recaptchaContainer = ref(null);
const recaptchaWidgetId = ref(null);
const recaptchaToken = ref('');
let loadingInterval = null;

function onRecaptchaSuccess(token) { recaptchaToken.value = token; }
function onRecaptchaExpired() { recaptchaToken.value = ''; }

function renderRecaptcha() {
  if (!window.grecaptcha) return;
  recaptchaWidgetId.value = window.grecaptcha.render(recaptchaContainer.value, {
    sitekey: SITE_KEY, size: 'normal', theme: 'dark',
    callback: onRecaptchaSuccess, 'expired-callback': onRecaptchaExpired,
  });
}

const submitForm = async () => {
  if (!recaptchaToken.value) {
    notyf.error('Please verify that you are not a robot');
    return;
  }
  isLoading.value = true;
  try {
    const response = await fetch("https://web3forms.com", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        name: name.value, email: email.value, message: message.value,
        "g-recaptcha-response": recaptchaToken.value
      })
    });
    const result = await response.json();
    if (result.success) {
      notyf.success("Message Sent Successfully!");
      name.value = ""; email.value = ""; message.value = "";
    } else {
      notyf.error(result.message || "Submission failed.");
    }
  } catch (error) {
    notyf.error("A network error occurred.");
  } finally {
    isLoading.value = false;
    if (recaptchaWidgetId.value !== null) { window.grecaptcha.reset(recaptchaWidgetId.value); recaptchaToken.value = ''; }
  }
}

onMounted(() => {
  loadingInterval = setInterval(() => {
    if (window.grecaptcha && window.grecaptcha.render) { renderRecaptcha(); clearInterval(loadingInterval); }
  }, 100);
});
onBeforeUnmount(() => { if (loadingInterval) clearInterval(loadingInterval); });
</script>

<template>
  <section id="contact" class="contact-section py-5 bg-black text-start">
    <div class="container">
      <div class="row g-4 g-lg-5 align-items-center">
        
        <div class="col-lg-6">
          <div class="mb-5 text-center text-lg-start">
            <h2 class="text-white fw-bold display-6 mb-3">Let's Connect!</h2>
            <p class="text-secondary lead">I create high-performing websites by combining marketing design with full-stack development.</p>
          </div>
          <div class="premium-card p-4">
            <h5 class="text-white fw-bold mb-2">Prefer Email?</h5>
            <a href="mailto:rojan@example.com" class="btn-blue w-100 text-center text-white fw-bold d-block text-decoration-none">Email me ↗</a>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="premium-card p-4 p-md-5">
            <h3 class="text-white fw-bold mb-1">Get in Touch</h3>
            <form @submit.prevent="submitForm" class="mt-4">
              <input type="text" v-model="name" class="form-control premium-input mb-3" placeholder="Your Name" required>
              <input type="email" v-model="email" class="form-control premium-input mb-3" placeholder="Your Email" required>
              <textarea v-model="message" class="form-control premium-input mb-4" rows="4" placeholder="Leave me a message" required></textarea>
              <div class="d-flex justify-content-center justify-content-lg-start mb-4"><div ref="recaptchaContainer"></div></div>
              <button type="submit" class="btn-purple w-100 py-3 fw-bold text-white" :disabled="isLoading">
                {{ isLoading ? "Sending Message..." : "Send Message" }}
              </button>
            </form>
          </div>
        </div>

        <!-- FOOTER BLOCK -->
        <div class="col-12 mt-5">
          <div class="premium-card p-4 p-md-5">
            <div class="row align-items-center">
              <div class="col-lg-5 text-center text-lg-start mb-4 mb-lg-0">
                <h4 class="text-white fw-bold">Rojan Pilar</h4>
                <p class="text-secondary small">© All Rights Reserved 2026</p>
                <a href="#landing" class="btn-blue rounded-pill px-4 text-white text-decoration-none d-inline-block py-2">Resume ↗</a>
              </div>
              <div class="col-lg-7">
                <div class="row g-2">
                  <div class="col-6 col-sm-3 col-lg-6" v-for="social in ['GitLab', 'GitHub', 'Facebook', 'LinkedIn']" :key="social">
                    <a :href="`https://${social.toLowerCase()}.com`" target="_blank" class="btn-blue w-100 text-center p-2 rounded text-white text-nowrap d-block text-decoration-none">{{ social }} ↗</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.premium-card {
  background-color: #0b0c10;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
}
.premium-input {
  background-color: #1f2833 !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  color: white !important;
}
</style>
