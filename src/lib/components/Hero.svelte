<script lang="ts">
    import gsap from 'gsap';
    import { getLenis } from '$lib/lenis';

    let heroContainer: HTMLElement;
    let imageContainer: HTMLElement;

    function scrollToSection(e: Event, id: string) {
        e.preventDefault();
        
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
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        // Heading clips in from below
        tl.fromTo(heroContainer.querySelectorAll('.hero-text'),
            { y: 80, opacity: 0, skewY: 4 },
            { y: 0, opacity: 1, skewY: 0, duration: 1, stagger: 0.15 }
        )
        // Image rotates and scales in with a bounce
        .fromTo(imageContainer,
            { scale: 0, rotate: -15, opacity: 0 },
            { scale: 1, rotate: 0, opacity: 1, duration: 1.2, ease: "elastic.out(1, 0.6)" },
            "-=0.8"
        );

        // Continuous floating animation on the image
        gsap.to(imageContainer, {
            y: -12,
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 1.5
        });
    });
</script>

<section id="home" class="min-h-screen flex items-center pt-20 bg-canvas">
    <div class="container mx-auto px-6 py-20" bind:this={heroContainer}>
        <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 mb-10 md:mb-0">
                <h1 class="hero-text text-4xl md:text-6xl font-bold mb-4 text-ink-deep leading-tight">
                    Hello, I'm <span class="border-b-4 border-primary">Yuda</span>
                </h1>
                <h2 class="hero-text text-2xl md:text-3xl font-light mb-6 text-charcoal">
                    Web Front End and Android Developer
                </h2>
                <p class="hero-text text-lg mb-8 max-w-lg text-slate leading-relaxed">
                    I create elegant digital experiences with a focus on clean design
                    and seamless functionality.
                </p>
                <div class="hero-text flex space-x-4">
                    <a href="#work" onclick={(e) => scrollToSection(e, 'work')} class="bg-ink-button text-on-ink-button px-8 py-3 rounded-full hover:bg-charcoal transition-colors font-bold text-sm">
                        View Work
                    </a>
                    <a href="#contact" onclick={(e) => scrollToSection(e, 'contact')} class="bg-transparent text-ink-deep border-2 border-ink-deep px-8 py-3 rounded-full hover:bg-surface-soft transition-colors font-bold text-sm">
                        Contact Me
                    </a>
                </div>
            </div>
            <div class="md:w-1/2 flex justify-center">
                <div 
                    bind:this={imageContainer}
                    class="w-80 h-80 md:w-96 md:h-96 bg-surface-soft rounded-full overflow-hidden border-8 border-hairline-soft shadow-lg relative">
                    <div class="w-full h-full bg-hairline flex items-center justify-center">
                        <img src="/img/agung.png" alt="Me" class="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
