<script lang="ts">
    import type { Project } from '$lib/data/projects';
    import { onMount } from 'svelte';

    let { project, closeModal }: { project: Project; closeModal: () => void } = $props();

    let currentSlide = $state(0);
    let slideInterval: ReturnType<typeof setInterval>;

    function nextSlide() {
        currentSlide = (currentSlide + 1) % project.images.length;
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + project.images.length) % project.images.length;
    }

    function goToSlide(index: number) {
        currentSlide = index;
    }

    function startSlideInterval() {
        stopSlideInterval();
        slideInterval = setInterval(nextSlide, 3000);
    }

    function stopSlideInterval() {
        if (slideInterval) clearInterval(slideInterval);
    }

    $effect(() => {
        document.body.style.overflow = 'hidden';
        startSlideInterval();

        const handleKeydown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
        };

        window.addEventListener('keydown', handleKeydown);

        return () => {
            document.body.style.overflow = '';
            stopSlideInterval();
            window.removeEventListener('keydown', handleKeydown);
        };
    });
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="fixed inset-0 bg-ink-deep/80 z-100 flex items-center justify-center p-4 backdrop-blur-sm" onclick={closeModal}>
    <div 
        class="bg-canvas rounded-4xl w-full max-w-5xl max-h-[90vh] overflow-y-auto relative shadow-2xl" 
        onclick={(e) => e.stopPropagation()}
    >
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <button 
            onclick={closeModal} 
            class="absolute top-6 right-6 w-10 h-10 bg-surface-soft hover:bg-hairline rounded-full flex items-center justify-center text-ink transition-colors z-10"
        >
            <i class="fas fa-times text-xl"></i>
        </button>
        
        <div class="p-8 md:p-10">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <!-- Carousel -->
                <div class="relative rounded-2xl overflow-hidden bg-surface-soft border border-hairline-soft group"
                     onmouseenter={stopSlideInterval}
                     onmouseleave={startSlideInterval}
                >
                    <div class="relative h-112">
                        {#each project.images as image, index}
                            <div 
                                class="absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out p-4"
                                style="opacity: {currentSlide === index ? 1 : 0}; pointer-events: {currentSlide === index ? 'auto' : 'none'};"
                            >
                                <img src={image} alt="{project.title} - Image {index + 1}" class="max-w-full max-h-full object-contain drop-shadow-md rounded-lg">
                            </div>
                        {/each}
                    </div>
                    
                    <!-- svelte-ignore a11y_consider_explicit_label -->
                    <button class="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-canvas/80 backdrop-blur text-ink rounded-full flex items-center justify-center shadow hover:bg-canvas transition-colors opacity-0 group-hover:opacity-100" onclick={prevSlide}>
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <!-- svelte-ignore a11y_consider_explicit_label -->
                    <button class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-canvas/80 backdrop-blur text-ink rounded-full flex items-center justify-center shadow hover:bg-canvas transition-colors opacity-0 group-hover:opacity-100" onclick={nextSlide}>
                        <i class="fas fa-chevron-right"></i>
                    </button>

                    <div class="absolute bottom-4 left-0 right-0 flex justify-center gap-2 px-4">
                        {#each project.images as _, index}
                            <button 
                                class="h-2 rounded-full transition-all duration-300 {currentSlide === index ? 'w-6 bg-primary' : 'w-2 bg-canvas/60 hover:bg-canvas'}"
                                onclick={() => goToSlide(index)}
                                aria-label="Go to slide {index + 1}"
                            ></button>
                        {/each}
                    </div>
                </div>

                <!-- Content -->
                <div>
                    <h3 class="text-3xl font-bold mb-4 text-ink-deep font-sans">{project.title}</h3>
                    <p class="text-charcoal mb-8 leading-relaxed">{project.description}</p>
                    
                    <div class="mb-8 p-6 bg-surface-soft rounded-2xl border border-hairline-soft">
                        <h4 class="font-bold mb-4 text-ink-deep flex items-center"><i class="fas fa-code mr-2 text-primary"></i> Technologies Used</h4>
                        <div class="flex flex-wrap gap-2">
                            {#each project.technologies as tech}
                                <span class="bg-canvas text-ink-deep px-3 py-1.5 text-sm font-bold rounded-full border border-hairline shadow-sm">${tech}</span>
                            {/each}
                        </div>
                    </div>

                    <div class="mb-8">
                        <h4 class="font-bold mb-4 text-ink-deep flex items-center"><i class="fas fa-star mr-2 text-primary"></i> Key Features</h4>
                        <ul class="space-y-3">
                            {#each project.features as feature}
                                <li class="flex items-start text-charcoal">
                                    <span class="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 shrink-0"></span>
                                    <span>{feature}</span>
                                </li>
                            {/each}
                        </ul>
                    </div>

                    <div class="mt-8 pt-6 border-t border-hairline-soft">
                        <a href={project.githubLink} target="_blank" 
                           class="inline-flex items-center bg-ink-button text-on-ink-button px-6 py-3 rounded-full hover:bg-charcoal transition-colors font-bold text-sm shadow-sm">
                            <i class="fab fa-github mr-2 text-lg"></i>
                            View Repository
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
