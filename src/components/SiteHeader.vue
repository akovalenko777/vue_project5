<template>
	<header id="header" :class="{'fixed': isFixed}">
		<div class="header-content clearfix">
			<router-link to="/"><img src="../assets/images/logo.png" alt=""></router-link>
			<nav class="navigation" role="navigation">
				<ul class="primary-nav">
					<li><router-link to="/works">Works</router-link></li>
					<li><router-link to="/features">Features</router-link></li>

					<li><router-link to="/mynews">News</router-link></li>
					<!-- <li><a href="#features">Features</a></li>
					<li><a href="#works">Works</a></li>
					<li><a href="#teams">Our Team</a></li>
					<li><a href="#testimonials">Testimonials</a></li>
					<li><a href="#download">Download</a></li> -->
				</ul>
			</nav>
			<a href="#" class="nav-toggle" :class="{'close-nav': isOpenMobileMenu}" @click="toggleMobileMenu">Menu<span></span></a>
		</div><!-- header content -->
	</header>
</template>

<script>
export default {
	props: {
		stayFixed: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			isFixed: false,
			isOpenMobileMenu: false
		}
	},
	created() {
		if (this.stayFixed){
			this.isFixed = true
		} else {
			window.addEventListener('scroll', this.toggleFixedScroll)
		}
	},
	methods: {
		toggleFixedScroll(){
			this.isFixed = window.scrollY > 50
		},
		toggleMobileMenu(){
			this.isOpenMobileMenu = !this.isOpenMobileMenu
		}
	}
}
</script>