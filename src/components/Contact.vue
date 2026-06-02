<script setup>
import { Notyf } from 'notyf';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const notyf = new Notyf();

const name = ref("");
const email = ref("");
const message = ref("");
const isLoading = ref(false);

// FIXED: Hardcode your personal Web3Forms Access Key right here to bypass environment mapping failures
const WEB3FORMS_ACCESS_KEY = "a47dd65d-d9c2-4554-9165-60acb7df3851"; 

// Your verified active Google reCAPTCHA site key token
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
        // FIXED: Explicitly targeted the live production submission data portal endpoint URL path
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
                "g-recaptcha-response": recaptchaToken.value // Captcha payload dispatched safely
            })
        });

        const result = await response.json();

        if (result.success) {
            notyf.success("Message Sent Successfully!");
            name.value = "";
            email.value = "";
            message.value = "";
        } else {
            notyf.error(result.message || "Failed to complete form data submission pipeline.");
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
