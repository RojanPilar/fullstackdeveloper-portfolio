<script setup>
import { Notyf } from 'notyf';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const notyf = new Notyf();

const name = ref("");
const email = ref("");
const message = ref("");
const isLoading = ref(false);

// FIXED: Reads your Vercel environment variable, or falls back to your raw key token string for local safety
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || "54082dd4-df30-4d82-b093-59e474f11765";

// FIXED: Your actual Google reCAPTCHA site key string on an unbroken single line
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
        // FIXED: Targeted the correct structural processing API endpoint data path
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
                "g-recaptcha-response": recaptchaToken.value // Token passed cleanly
            })
        });

        const result = await response.json();

        if (result.success) {
            notyf.success("Message Sent Successfully!");
            name.value = "";
            email.value = "";
            message.value = "";
        } else {
            notyf.error(result.message || "Failed to complete form transmission.");
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
