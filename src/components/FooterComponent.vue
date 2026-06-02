<script setup>
// No reactive state logic is needed for this static footer presentation layout component
</script>

<template>
	<!-- Bottom Social Bar / Footer Section Grid Block Wrapper -->
	<div class="col-12 mt-5">
		<div class="premium-card p-4 p-md-5">
			<div class="row align-items-center">
				
				<!-- Left Content Panel Section column formatting -->
				<div class="col-lg-5 mb-4 mb-lg-0 text-center text-lg-start">
					<h4 class="text-white fw-bold">Rojan Pilar</h4>
					<p class="text-secondary small mb-3">© All Rights Reserved 2026</p>
					<a href="#landing" class="btn btn-blue rounded-pill px-4">Resume ↗</a>
				</div>
				
				<!-- Right Grid Panel Layout Section column mapping blocks -->
				<div class="col-lg-7">
					<!-- Social grid row configuration: handles side columns even on compact devices -->
					<div class="row g-2">
						
						<!-- Column 1: GitLab Channel -->
						<div class="col-6 col-sm-3 col-lg-6">
							<a href="https://gitlab.com" target="_blank" rel="noopener noreferrer" class="social-link w-100 d-block text-center btn-success p-2 rounded">
								GitLab ↗
							</a>
						</div>
						
						<!-- Column 2: GitHub Channel (FIXED: Restored missing anchor element card structure) -->
						<div class="col-6 col-sm-3 col-lg-6">
							<a href="https://github.com" target="_blank" rel="noopener noreferrer" class="social-link w-100 d-block text-center btn-success p-2 rounded">
								GitHub ↗
							</a>
						</div>
						
						<!-- Column 3: Facebook Profile link interface -->
						<div class="col-6 col-sm-3 col-lg-6">
							<a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="social-link w-100 d-block text-center btn-success p-2 rounded">
								Facebook ↗
							</a>
						</div>
						
						<!-- Column 4: LinkedIn Profile navigation anchor element -->
						<div class="col-6 col-sm-3 col-lg-6">
							<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="social-link w-100 d-block text-center btn-success p-2 rounded">
								LinkedIn ↗
							</a>
						</div>
						
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<style scoped>
/* Scoped local background custom utility structural rules configurations stylesheets panel */
.premium-card {
	background-color: #0b0c10;
	border: 1px solid rgba(255, 255, 255, 0.05);
	border-radius: 16px;
}

/* Custom premium design class overrides matching your screenshot buttons formatting appearance */
.btn-success {
	background-color: #198754 !important;
	border-color: #198754 !important;
	color: white !important;
	text-weight: 500;
	text-decoration: none;
	transition: all 0.2s ease-in-out;
}

.btn-success:hover {
	opacity: 0.9;
	transform: translateY(-2px);
}

.btn-blue {
	background-color: #007bff !important;
	color: white !important;
	text-decoration: none;
}
</style>
