<script setup>
import { Notyf } from 'notyf';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const notyf = new Notyf();

// Form Input Values (Reactive State Variables)
const name = ref("");
const email = ref("");
const message = ref("");
const isLoading = ref(false);

// Web3Forms and Google reCAPTCHA Key Credentials
const WEB3FORMS_ACCESS_KEY = "6LcT9AgtAAAAAHYHhAsC9EXFy7BNEb8zdy8RaVEO";
const SITE_KEY = '123c9d60-de54-430d-a6ee-bfc755fcd050';  
const subject = "New message from Rojan Portfolio Contact Form";

// reCAPTCHA References and Tokens
const recaptchaContainer = ref(null);
const recaptchaWidgetId = ref(null);
const recaptchaToken = ref('');

// Runs when the user successfully completes the reCAPTCHA challenge
function onRecaptchaSuccess(token) {
    recaptchaToken.value = token;
}

// Runs when the reCAPTCHA verification expires
function onRecaptchaExpired() {
    recaptchaToken.value = '';
}

// Creates and displays the reCAPTCHA widget
function renderRecaptcha() {
    if (!window.grecaptcha) {
        console.error('reCAPTCHA not loaded');
        return;
    }

    recaptchaWidgetId.value = window.grecaptcha.render(recaptchaContainer.value, {
        sitekey: SITE_KEY,
        size: 'normal',
        theme: 'dark', // Perfectly matches your dark aesthetic
        callback: onRecaptchaSuccess,
        'expired-callback': onRecaptchaExpired,
    });
}

// Resets the reCAPTCHA widget safely after submissions
function resetRecaptcha() {
    if (recaptchaWidgetId.value !== null) {
        window.grecaptcha.reset(recaptchaWidgetId.value);
        recaptchaToken.value = '';
    }
}

// Form Submission API Dispatch Pipeline
const submitForm = async () => {
    // 1. Enforce validation checkpoint check
    if (!recaptchaToken.value) {
        notyf.error('Please verify that you are not a robot');
        return;
    }

    isLoading.value = true;

    try {
        // 2. FIXED URL: Points exactly to the live Web3Forms data endpoint
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
                "g-recaptcha-response": recaptchaToken.value // Secure validation token pass
            })
        });

        const result = await response.json();

        if (result.success) {
            notyf.success("Message Sent Successfully!");
            // 3. Clear all reactive input fields
            name.value = "";
            email.value = "";
            message.value = "";
        } else {
            notyf.error(result.message || "Failed to submit message data.");
        }
    } catch (error) {
        console.error("Submission Error Log:", error);
        notyf.error("A network error occurred.");
    } finally {
        isLoading.value = false;
        // 4. Force checkbox refresh reset
        resetRecaptcha();
    }
}

// Async lifecycle validation loop
let interval = null;

onMounted(() => {
    interval = setInterval(() => {
        if (window.grecaptcha && window.grecaptcha.render) {
            renderRecaptcha();
            clearInterval(interval);
        }
    }, 100);
});  

onBeforeUnmount(() => {
    if (interval) {
        clearInterval(interval);
    }
});
</script>

<template>
    <!-- Contact Section -->
    <section id="contact" class="contact-section py-5 bg-black">
        <div class="container">
            <div class="row g-4 g-lg-5 align-items-center">

                <!-- Left Column: Intro & Email Card -->
                <div class="col-lg-6 text-start">
                    <div class="mb-5 text-center text-lg-start">
                        <h2 class="text-white fw-bold display-6 mb-3">Let's Connect!</h2>
                        <p class="text-secondary lead px-2 px-lg-0">
                            I create high-performing websites by combining marketing design that attracts customers
                            with full-stack development that makes your site fast and secure.
                        </p>
                    </div>

                    <!-- Email Card -->
                    <div class="premium-card p-4 d-block w-100 w-md-auto">
                        <h5 class="text-white fw-bold mb-2">Prefer Email?</h5>
                        <p class="text-secondary small mb-3">Got questions or ideas? Send me an email.</p>
                        <a href="mailto:mnladigitalmarketing@gmail.com" class="btn btn-success w-100 rounded-3 py-2 fw-bold text-white text-decoration-none d-block text-center">Email me ↗</a>
                    </div>
                </div>

                <!-- Right Column: Form Interface Integration -->
                <div class="col-lg-6 text-start">
                    <div class="premium-card p-4 p-md-5">
                        <h3 class="text-white fw-bold mb-1">Get in Touch</h3>
                        <p class="text-secondary small mb-4">Have a project or just want to say hello?</p>

                        <!-- Form Submission Prevent Directive Attached -->
                        <form @submit.prevent="submitForm">
                            <input 
                                type="text" 
                                v-model="name" 
                                class="form-control premium-input mb-3" 
                                placeholder="Your Name" 
                                required
                            >
                            <input 
                                type="email" 
                                v-model="email" 
                                class="form-control premium-input mb-3" 
                                placeholder="Your Email" 
                                required
                            >
                            <textarea 
                                v-model="message" 
                                class="form-control premium-input mb-4" 
                                rows="4" 
                                placeholder="Leave me a message" 
                                required
                            ></textarea>

                            <!-- FIXED: Google reCAPTCHA Target Container Box -->
                            <div class="d-flex justify-content-center justify-content-lg-start mb-4">
                                <div ref="recaptchaContainer"></div>
                            </div>

                            <button 
                                type="submit" 
                                class="btn btn-purple w-100 py-3 fw-bold text-white" 
                                :disabled="isLoading"
                            >
                                {{ isLoading ? "Sending Message..." : "Send Message" }}
                            </button>
                        </form>
                    </div>
                </div>

                <!-- Bottom Social Bar / Footer Section -->
                <div class="col-12 mt-5">
                    <div class="premium-card p-4 p-md-5">
                        <div class="row align-items-center">
                            <div class="col-lg-5 mb-4 mb-lg-0 text-center text-lg-start">
                                <h4 class="text-white fw-bold">Rojan Pilar</h4>
                                <p class="text-secondary small mb-3">© All Rights Reserved 2026</p>
                                <a href="#landing" class="btn btn-blue rounded-pill px-4 text-white text-decoration-none py-2 d-inline-block">Resume ↗</a>
                            </div>
                            <div class="col-lg-7">
                                <div class="row g-2">
                                    <div class="col-6 col-sm-3 col-lg-6">
                                        <a href="https://gitlab.com" target="_blank" rel="noopener noreferrer" class="social-link btn btn-success w-100 py-2 text-white text-decoration-none d-block text-center">GitLab ↗</a>
                                    </div>
                                    <div class="col-6 col-sm-3 col-lg-6">
                                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="social-link btn btn-success w-100 py-2 text-white text-decoration-none d-block text-center">GitHub ↗</a>
                                    </div>
                                    <div class="col-6 col-sm-3 col-lg-6">
                                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="social-link btn btn-success w-100 py-2 text-white text-decoration-none d-block text-center">Facebook ↗</a>
                                    </div>
                                    <div class="col-6 col-sm-3 col-lg-6">
                                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="social-link btn btn-success w-100 py-2 text-white text-decoration-none d-block text-center">LinkedIn ↗</a>
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
    background-color: #0b0c10 !important;
    border: 1px solid rgba(255, 255, 255, 0.05) !important;
    border-radius: 16px !important;
}
.premium-input {
    background-color: #1f2833 !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
    color: #ffffff !important; 
}
.premium-input:focus {
    background-color: #1f2833 !important;
    border-color: #238845 !important;
    color: #ffffff !important;
    box-shadow: 0 0 0 0.25rem rgba(35, 136, 69, 0.25) !important;
}
.premium-input::placeholder {
    color: rgba(255, 255, 255, 0.4) !important;
}
</style>
