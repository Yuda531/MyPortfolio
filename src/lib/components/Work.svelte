<script lang="ts">
    import gsap from 'gsap';
    import { projects, type Project } from '$lib/data/projects';
    import ProjectModal from './ProjectModal.svelte';

    let section: HTMLElement;
    let selectedProject: Project | null = $state(null);

    $effect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top 75%",
            }
        });

        // Heading scales in with a subtle bounce
        tl.fromTo(section.querySelector('.animate-work-heading'),
            { scale: 0.8, opacity: 0, y: 30 },
            { scale: 1, opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.5)" }
        )
        // Cards fly in from bottom with staggered rotation
        .fromTo(section.querySelectorAll('.project-card'),
            { y: 100, opacity: 0, scale: 0.9, rotateX: 15 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                rotateX: 0,
                duration: 0.7,
                stagger: { amount: 0.8, from: "start" },
                ease: "power3.out"
            },
            "-=0.4"
        )
        // CTA button slides up
        .fromTo(section.querySelector('.animate-work-cta'),
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
            "-=0.3"
        );
    });

    function openModal(project: Project) {
        selectedProject = project;
    }

    function closeModal() {
        selectedProject = null;
    }
</script>

<section id="work" class="py-20 bg-canvas" bind:this={section}>
    <div class="container mx-auto px-6">
        <h2 class="animate-work-heading text-3xl md:text-4xl font-bold mb-16 text-center text-ink-deep">
            Selected Work
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each projects as project}
                <!-- svelte-ignore a11y_click_events_have_key_events -->
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <div 
                    class="project-card bg-canvas rounded-4xl overflow-hidden border border-hairline-soft cursor-pointer hover:shadow-lg transition-shadow duration-300 group"
                    onclick={() => openModal(project)}
                >
                    <div class="h-56 bg-surface-soft flex items-center justify-center project-image overflow-hidden p-4">
                        <img 
                            src={project.thumbnail} 
                            alt={project.title} 
                            class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        >
                    </div>
                    <div class="p-6 project-content bg-canvas">
                        <h3 class="text-xl font-bold mb-3 text-ink-deep">{project.title}</h3>
                        <p class="text-slate mb-5 text-sm line-clamp-3">
                            {project.shortDescription}
                        </p>
                        <div class="flex flex-wrap gap-2">
                            {#each project.technologies.slice(0, 3) as tech}
                                <span class="bg-surface-soft text-charcoal px-3 py-1 text-xs font-bold rounded-full border border-hairline">
                                    {tech}
                                </span>
                            {/each}
                            {#if project.technologies.length > 3}
                                <span class="bg-surface-soft text-charcoal px-3 py-1 text-xs font-bold rounded-full border border-hairline">
                                    +{project.technologies.length - 3}
                                </span>
                            {/if}
                        </div>
                    </div>
                </div>
            {/each}
        </div>

        <div class="animate-work-cta text-center mt-16">
            <a href="https://github.com/Yuda531?tab=repositories"
                class="inline-flex items-center border-2 border-ink-deep text-ink-deep px-8 py-3 rounded-full hover:bg-surface-soft transition-colors font-bold text-sm" 
                target="_blank">
                View All Projects <i class="fab fa-github ml-2"></i>
            </a>
        </div>
    </div>
</section>

{#if selectedProject}
    <ProjectModal project={selectedProject} {closeModal} />
{/if}
