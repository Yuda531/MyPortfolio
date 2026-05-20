<script lang="ts">
    import { getLenis } from '$lib/lenis';

    let isMobileMenuOpen = $state(false);
    let activeSection = $state('home');

    function toggleMobileMenu() {
        isMobileMenuOpen = !isMobileMenuOpen;
    }

    function scrollToSection(e: Event, id: string) {
        e.preventDefault();
        isMobileMenuOpen = false;
        
        const lenis = getLenis();
        if (lenis) {
            lenis.scrollTo(`#${id}`);
        } else {
            const target = document.getElementById(id);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }

    $effect(() => {
        const updateActiveState = () => {
            const scrollPos = window.scrollY;
            const sections = document.querySelectorAll('section');

            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionBottom = sectionTop + section.offsetHeight;

                if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                    activeSection = section.id;
                }
            });
        };

        window.addEventListener('scroll', updateActiveState);
        return () => window.removeEventListener('scroll', updateActiveState);
    });
</script>

<nav class="fixed w-full bg-canvas z-50 shadow-sm transition-all duration-300">
    <div class="container mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
            <!-- svelte-ignore a11y_invalid_attribute -->
            <a href="#" onclick={(e) => scrollToSection(e, 'home')} class="text-2xl font-bold font-sans tracking-tight">AYP</a>

            <div class="hidden md:flex space-x-8">
                {#each ['home', 'about', 'work', 'contact'] as section}
                    <a 
                        href="#{section}" 
                        onclick={(e) => scrollToSection(e, section)} 
                        class="nav-link px-4 py-2 capitalize font-medium {activeSection === section ? 'active' : ''}"
                    >
                        {section}
                    </a>
                {/each}
            </div>

            <!-- svelte-ignore a11y_consider_explicit_label -->
            <button onclick={toggleMobileMenu} class="md:hidden focus:outline-none">
                <i class="fas {isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl"></i>
            </button>
        </div>

        {#if isMobileMenuOpen}
            <div class="md:hidden mt-4">
                <div class="px-2 pt-2 pb-4 space-y-1 bg-surface-soft rounded-lg">
                    {#each ['home', 'about', 'work', 'contact'] as section}
                        <a 
                            href="#{section}" 
                            onclick={(e) => scrollToSection(e, section)} 
                            class="block px-3 py-2 hover:bg-hairline-soft rounded capitalize font-medium {activeSection === section ? 'text-primary' : ''}"
                        >
                            {section}
                        </a>
                    {/each}
                </div>
            </div>
        {/if}
    </div>
</nav>

<style>
    .nav-link {
        position: relative;
        color: var(--color-ink);
        transition: color 0.3s ease;
    }

    .nav-link::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: var(--color-ink);
        transition: width 0.3s ease;
    }

    .nav-link:hover::after,
    .nav-link.active::after {
        width: 100%;
    }
</style>
