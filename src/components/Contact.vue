<script setup>
import { Notyf } from 'notyf';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const notyf = new Notyf();

const name = ref("");
const email = ref("");
const message = ref("");
const isLoading = ref(false);

// Uses your Vercel environment variable or falls back to your raw valid testing token securely
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || "54082dd4-df30-4d82-b093-59e474f11765";
const SITE_KEY = "6Lfi0wgTAAAAAJBiW_08gIZSmBAWKMaXHLP8KmUs";
const subject = "New message from Rojan Portfolio Contact Form";

const recaptchaContainer = ref(null);
const recaptchaWidgetId = ref(null);
const recaptchaToken = ref('');
let loadingInterval = null;

function onRecaptchaSuccess(token) {
    recaptchaToken.value = token;
}

function onRecaptchaExpired() {
    recaptchaToken.value = '';
}

function renderRecaptcha() {
    if (!window.grecaptcha) return;
    recaptchaWidgetId.value = window.grecaptcha.render(recaptchaContainer.value, {
        sitekey: SITE_KEY,
        size: 'normal',
        theme: 'dark',
        callback: onRecaptchaSuccess,
        'expired-callback': onRecaptchaExpired,
    });
}

function resetRecaptcha() {
    if (recaptchaWidgetId.value !== null) {
        window.grecaptcha.reset(recaptchaWidgetId.value);
        recaptchaToken.value = '';
    }
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
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                access_key: WEB3FORMS_ACCESS_KEY,
                subject: subject,
                name: name.value,
                email: email.value,
                message: message.value,
                "g-recaptcha-response": recaptchaToken.value
            })
        });

        const result = await response.json();

        if (result.success) {
            notyf.success("Message Sent Successfully!");
            name.value = "";
            email.value = "";
            message.value = "";
        } else {
            notyf.error(result.message || "Failed to process message.");
        }
    } catch (error) {
        console.error(error);
        notyf.error("A network error occurred.");
    } finally {
        isLoading.value = false;
        resetRecaptcha();
    }
}

onMounted(() => {
    loadingInterval = setInterval(() => {
        if (window.grecaptcha && window.grecaptcha.render) {
            renderRecaptcha();
            clearInterval(loadingInterval);
        }
    }, 100);
});

onBeforeUnmount(() => {
    if (loadingInterval) {
        clearInterval(loadingInterval);
    }
});
</script>

<template>
    <!-- Contact Section Restored -->
    <section id="contact" class="contact-section py-5 bg-black text-white">
        <div class="container">
            <div class="row g-4 g-lg-5 align-items-center">

                <!-- Left Side content info panels -->
                <div class="col-lg-6">
                    <div class="mb-5 text-center text-lg-start">
                        <h2 class="text-white fw-bold display-6 mb-3">Let's Connect!</h2>
                        <p class="text-secondary lead px-2 px-lg-0">
                            I create high-performing websites by combining marketing design that attracts customers
                            with full-stack development that makes your site fast and secure.
                        </p>
                    </div>

                    <div class="premium-card p-4 d-block w-100 w-md-auto">
                        <h5 class="text-white fw-bold mb-2">Prefer Email?</h5>
                        <p class="text-secondary small mb-3">Got questions or ideas? Send me an email.</p>
                        <a href="https://gmail.com" target="_blank" rel="noopener noreferrer" class="btn btn-blue w-100 rounded-3">Email me ↗</a>
                    </div>
                </div>

                <!-- Right Side form interface containing recaptcha tags and fields input mappings -->
                <div class="col-lg-6">
                    <div class="premium-card p-4 p-md-5">
                        <h3 class="text-white fw-bold mb-1">Get in Touch</h3>
                        <p class="text-secondary small mb-4">Have a project or just want to say hello?</p>

                        <form @submit.prevent="submitForm">
                            <input type="text" v-model="name" class="form-control premium-input mb-3" placeholder="Your Name" required>
                            <input type="email" v-model="email" class="form-control premium-input mb-3" placeholder="Your Email" required>
                            <textarea v-model="message" class="form-control premium-input mb-4" rows="4" placeholder="Leave me a message" required></textarea>

                            <div class="d-flex justify-content-center justify-content-lg-start mb-4">
                                <div ref="recaptchaContainer"></div>
                            </div>

                            <button type="submit" class="btn btn-purple w-100 py-3 fw-bold" :disabled="isLoading">
                                {{ isLoading ? "Sending Message..." : "Send Message" }}
                            </button>
                        </form>
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
.premium-input::placeholder {
    color: #c5a059 !important;
    opacity: 0.5;
}
.btn-purple {
    background-color: #6f42c1 !important;
    border-color: #6f42c1 !important;
    color: white !important;
}
.btn-blue {
    background-color: #007bff !important;
    color: white !important;
    text-decoration: none;
}
</style>
