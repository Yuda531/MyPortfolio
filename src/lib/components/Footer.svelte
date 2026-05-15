<script lang="ts">
    function scrollToSection(e: Event, id: string) {
        e.preventDefault();
        const target = document.getElementById(id);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
</script>

<footer class="bg-ink text-canvas py-16 border-t border-hairline-soft">
    <div class="container mx-auto px-6 max-w-6xl">
        <div class="flex flex-col md:flex-row justify-between items-center md:items-start mb-12">
            <div class="mb-8 md:mb-0 text-center md:text-left">
                <a href="#" onclick={(e) => scrollToSection(e, 'home')} class="text-2xl font-bold font-sans tracking-tight text-canvas">AYP</a>
                <p class="mt-3 text-stone text-sm">© {new Date().getFullYear()} Agung Yuda Pratama</p>
            </div>

            <div class="flex flex-wrap justify-center gap-x-8 gap-y-4">
                {#each ['home', 'about', 'work', 'contact'] as section}
                    <a 
                        href="#{section}" 
                        onclick={(e) => scrollToSection(e, section)} 
                        class="text-stone hover:text-canvas transition-colors capitalize text-sm font-bold"
                    >
                        {section}
                    </a>
                {/each}
            </div>
        </div>

        <div class="border-t border-charcoal pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p class="text-stone text-xs text-center md:text-left">
                Designed and developed by <span class="text-canvas font-bold">Agung Yuda Pratama</span>
            </p>
            <p class="text-stone text-xs">
                Built with <a href="https://svelte.dev" target="_blank" class="text-canvas hover:underline">SvelteKit</a> & <a href="https://tailwindcss.com" target="_blank" class="text-canvas hover:underline">Tailwind v4</a>
            </p>
        </div>
    </div>
</footer>
