<script setup>

</script>

<template>

	<!-- Navbar Wrapper -->
	<nav class="navbar navbar-expand-lg navbar-light fixed-top">
		<div class="container d-flex justify-content-center mt-2">
			<!-- Floating Container -->
			<div class="custom-navbar-container px-4 py-2">

				<!-- This wrapper ensures Brand and Toggler stay on one line -->
				<div class="d-flex align-items-center justify-content-between w-100">

					<!-- Branding/Profile -->
					<div class="d-flex align-items-center brand-section">
						<img src="/images/rojan.png" alt="Rojan Pilar profile photo" class="profile-circle me-3">
						<div class="brand-text">
							<span class="d-block text-dark fw-bold lh-1">Rojan</span>
							<!-- Hidden on extra small screens to save space -->
							<small class="text-secondary d-none d-sm-block">Full Stack Web Developer</small>
						</div>
					</div>

					<!-- Toggler Button (Hamburger) -->
					<button
						class="navbar-toggler border-0 shadow-none"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
				</div>

				<!-- Collapsible Menu Links -->
				<div class="collapse navbar-collapse" id="navbarNav">
					<div class="navbar-nav ms-lg-4 gap-lg-4 text-center mt-3 mt-lg-0">
						<a class="nav-link p-0" href="#landing">Home</a>
						<a class="nav-link p-0 text-nowrap" href="#projects">My Projects</a>
						<a class="nav-link p-0" href="#tools">Tools</a>
						<a class="nav-link p-0" href="#contact">Contact</a>
					</div>
				</div>

			</div>
		</div>
	</nav>
	<!-- End of Navbar -->

</template>

<style scoped>

nav.navbar {
	background: black !important;
	background-color: black !important;
}

</style>