<script lang="ts">
    import gsap from 'gsap';

    let section: HTMLElement;

    $effect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top 75%",
            }
        });

        // Section heading drops in with a fade
        tl.fromTo(section.querySelector('.animate-heading'),
            { y: -40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
        )
        // Photo slides in from the left with rotation
        .fromTo(section.querySelector('.animate-photo'),
            { x: -120, opacity: 0, rotate: -8 },
            { x: 0, opacity: 1, rotate: 0, duration: 1, ease: "power3.out" },
            "-=0.3"
        )
        // Text blocks slide in from the right
        .fromTo(section.querySelectorAll('.animate-text'),
            { x: 80, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "power3.out" },
            "-=0.7"
        )
        // Cards pop up with scale
        .fromTo(section.querySelectorAll('.animate-card'),
            { y: 60, opacity: 0, scale: 0.85 },
            { y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.15, ease: "back.out(1.4)" },
            "-=0.4"
        )
        // Resume link fades in
        .fromTo(section.querySelector('.animate-cta'),
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
            "-=0.2"
        );
    });
</script>

<section id="about" class="py-20 bg-surface-soft" bind:this={section}>
    <div class="container mx-auto px-6">
        <h2 class="animate-heading text-3xl md:text-4xl font-bold mb-16 text-center text-ink-deep">
            About Me
        </h2>

        <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/3 mb-10 md:mb-0 flex justify-center animate-photo">
                <div class="w-64 h-64 bg-hairline rounded-full overflow-hidden border-8 border-canvas shadow-lg">
                    <img src="/img/agung2.jpg" alt="Me" class="w-full h-full object-cover" />
                </div>
            </div>

            <div class="md:w-2/3 md:pl-16">
                <h3 class="animate-text text-2xl font-bold mb-4 text-ink-deep">My Story</h3>
                <p class="animate-text mb-6 text-base text-ink leading-relaxed">
                    As a dedicated Software Engineering student in my final
                    undergraduate year, I combine cutting-edge technical expertise
                    with hands-on professional experience gained through
                    <strong class="text-ink-deep">14 months</strong> of impactful work with
                    <strong class="text-ink-deep">tech startups</strong>. My specialization spans full-stack
                    web development using modern frameworks
                    <strong class="text-ink-deep">(Next.js, Node.js, PrimeReact, SvelteKit)</strong> and Android
                    development with <strong class="text-ink-deep">Android Studio using Kotlin</strong>,
                    complemented by robust skills in IT infrastructure management and
                    technical support.
                </p>
                <p class="animate-text mb-6 text-base text-ink leading-relaxed">
                    I architect enterprise-grade web solutions for corporate clients,
                    from
                    <strong class="text-ink-deep">REST API-driven platforms to WordPress ecosystems</strong>, 
                    while maintaining a parallel focus on developing performant
                    mobile applications. My engineering approach merges academic rigor
                    with real-world pragmatism, having polished my skills through
                    Google's selective <strong class="text-ink-deep">Bangkit Academy program with Distinction Graduate</strong> 
                    and sustained collaboration with agile startup teams.
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div class="animate-card bg-canvas p-6 rounded-2xl border border-hairline-soft shadow-sm">
                        <h4 class="font-bold mb-4 text-lg text-ink-deep border-b border-hairline pb-2">Skills</h4>
                        <ul class="space-y-3 text-sm text-charcoal">
                            <li class="flex items-center"><span class="w-2 h-2 bg-primary rounded-full mr-3"></span>Programming Languages</li>
                            <li class="flex items-center"><span class="w-2 h-2 bg-primary rounded-full mr-3"></span>Frontend Development</li>
                            <li class="flex items-center"><span class="w-2 h-2 bg-primary rounded-full mr-3"></span>Backend Development</li>
                            <li class="flex items-center"><span class="w-2 h-2 bg-primary rounded-full mr-3"></span>Mobile Development</li>
                            <li class="flex items-center"><span class="w-2 h-2 bg-primary rounded-full mr-3"></span>Database Management</li>
                            <li class="flex items-center"><span class="w-2 h-2 bg-primary rounded-full mr-3"></span>Development Tools</li>
                        </ul>
                    </div>
                    <div class="animate-card bg-canvas p-6 rounded-2xl border border-hairline-soft shadow-sm">
                        <h4 class="font-bold mb-4 text-lg text-ink-deep border-b border-hairline pb-2">Tools</h4>
                        <ul class="space-y-3 text-sm text-charcoal">
                            <li class="flex items-start"><span class="w-2 h-2 bg-primary rounded-full mr-3 mt-1.5 shrink-0"></span><span>Kotlin, JavaScript, TypeScript, Java, SQL</span></li>
                            <li class="flex items-start"><span class="w-2 h-2 bg-primary rounded-full mr-3 mt-1.5 shrink-0"></span><span>React.js, Next.js, Svelte, Tailwind, Bootstrap</span></li>
                            <li class="flex items-start"><span class="w-2 h-2 bg-primary rounded-full mr-3 mt-1.5 shrink-0"></span><span>Node.js, REST API</span></li>
                            <li class="flex items-start"><span class="w-2 h-2 bg-primary rounded-full mr-3 mt-1.5 shrink-0"></span><span>Android Studio, TensorFlow Lite</span></li>
                            <li class="flex items-start"><span class="w-2 h-2 bg-primary rounded-full mr-3 mt-1.5 shrink-0"></span><span>MySQL, PostgreSQL, Room Database</span></li>
                            <li class="flex items-start"><span class="w-2 h-2 bg-primary rounded-full mr-3 mt-1.5 shrink-0"></span><span>VS Code, IntelliJ IDEA, Postman, Git</span></li>
                        </ul>
                    </div>
                </div>

                <div class="animate-cta">
                    <a href="https://drive.google.com/file/d/1xDAWNUeYbb9GrYpwj52_hZuvyWuCm1-q/view?usp=sharing"
                        target="_blank"
                        class="inline-flex items-center text-primary font-bold hover:text-primary-deep transition-colors">
                        Download Resume <i class="fas fa-download ml-2"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
