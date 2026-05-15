<script lang="ts">
    import Navbar from '$lib/components/Navbar.svelte';
    import Hero from '$lib/components/Hero.svelte';
    import About from '$lib/components/About.svelte';
    import Work from '$lib/components/Work.svelte';
    import Contact from '$lib/components/Contact.svelte';
    import Footer from '$lib/components/Footer.svelte';

    let showBackToTop = $state(false);

    function handleScroll() {
        showBackToTop = window.scrollY > 300;
    }

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    $effect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });
</script>

<svelte:head>
    <title>Agung Yuda Pratama - Portfolio</title>
</svelte:head>

<Navbar />

<main>
    <Hero />
    <About />
    <Work />
    <Contact />
</main>

<Footer />

<button 
    class="fixed bottom-8 right-8 w-12 h-12 bg-ink-button text-on-ink-button rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-40 {showBackToTop ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4'} hover:bg-charcoal hover:scale-110"
    onclick={scrollToTop}
    aria-label="Back to top"
>
    <i class="fas fa-arrow-up"></i>
</button>
