<script setup>
import { Notyf } from 'notyf';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const notyf = new Notyf();

const name = ref("");
const email = ref("");
const message = ref("");
const isLoading = ref(false);

// REPLACE THESE WITH YOUR KEYS
const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY_HERE";
const SITE_KEY = 'YOUR_GOOGLE_RECAPTCHA_SITE_KEY_HERE';  
const subject = "New message from Portfolio Contact Form";

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
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({
                access_key: WEB3FORMS_ACCESS_KEY,
                subject: subject,
                name: name.value,
                email: email.value,
                message: message.value,
                "g-recaptcha-response": recaptchaToken.value // Dispatches token verification securely
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
    if (loadingInterval) clearInterval(loadingInterval);
});
</script>

<template>
	<section id="contact" class="contact-section py-5 bg-black">
		<div class="container">
			<div class="row g-4 g-lg-5 align-items-center">
				<div class="col-lg-6">
					<div class="mb-5 text-center text-lg-start">
						<h2 class="text-white fw-bold display-6 mb-3">Let's Connect!</h2>
						<p class="text-secondary lead px-2 px-lg-0">
							I create high-performing websites by combining marketing design with full-stack development.
						</p>
					</div>
					<div class="premium-card p-4 d-block w-100 w-md-auto">
						<h5 class="text-white fw-bold mb-2">Prefer Email?</h5>
						<a href="https://gmail.com" target="_blank" class="btn btn-blue w-100 rounded-3">Email me ↗</a>
					</div>
				</div>

				<div class="col-lg-6">
					<div class="premium-card p-4 p-md-5">
						<h3 class="text-white fw-bold mb-1">Get in Touch</h3>
						<form @submit.prevent="submitForm">
							<input type="text" v-model="name" class="form-control premium-input mb-3" placeholder="Your Name" required>
							<input type="email" v-model="email" class="form-control premium-input mb-3" placeholder="Your Email" required>
							<textarea v-model="message" class="form-control premium-input mb-4" rows="4" placeholder="Leave me a message" required></textarea>
							
							<!-- Recaptcha Container Rendering Box Target -->
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
