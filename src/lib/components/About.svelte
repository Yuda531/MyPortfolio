<script lang="ts">
    import gsap from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';

    let section: HTMLElement;

    $effect(() => {
        gsap.registerPlugin(ScrollTrigger);

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
                    Software Engineer with <strong class="text-ink-deep">1+ year of experience</strong> in
                    full-stack web development, specializing in building scalable and
                    responsive web applications. Graduated from
                    <strong class="text-ink-deep">Universitas Teknologi Bandung</strong> with a
                    <strong class="text-ink-deep">GPA of 3.91/4.00 (Cum Laude)</strong> in Software Engineering,
                    and recognized as a <strong class="text-ink-deep">Distinction Graduate</strong> of
                    Google's Bangkit Academy in Mobile Development.
                </p>
                <p class="animate-text mb-6 text-base text-ink leading-relaxed">
                    Skilled in <strong class="text-ink-deep">React.js, Next.js, SvelteKit, and Node.js</strong> for
                    full-stack web development, and <strong class="text-ink-deep">Kotlin with Android Studio</strong> for
                    mobile development. Experienced in building
                    <strong class="text-ink-deep">RESTful API integrations</strong>,
                    real-time systems with Socket.IO, and integrating machine
                    learning-powered features like TensorFlow Lite into Android
                    applications. Delivering end-to-end software solutions from
                    design to deployment.
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div class="animate-card bg-canvas p-6 rounded-2xl border border-hairline-soft shadow-sm">
                        <h4 class="font-bold mb-4 text-lg text-ink-deep border-b border-hairline pb-2">Skills</h4>
                        <ul class="space-y-3 text-sm text-charcoal">
                            <li class="flex items-start"><span class="w-2 h-2 bg-primary rounded-full mr-3 mt-1.5 shrink-0"></span><span>Programming Languages</span></li>
                            <li class="flex items-start"><span class="w-2 h-2 bg-primary rounded-full mr-3 mt-1.5 shrink-0"></span><span>Frontend Development</span></li>
                            <li class="flex items-start"><span class="w-2 h-2 bg-primary rounded-full mr-3 mt-1.5 shrink-0"></span><span>Fullstack Framework</span></li>
                            <li class="flex items-start"><span class="w-2 h-2 bg-primary rounded-full mr-3 mt-1.5 shrink-0"></span><span>Backend Development</span></li>
                            <li class="flex items-start"><span class="w-2 h-2 bg-primary rounded-full mr-3 mt-1.5 shrink-0"></span><span>Mobile Development</span></li>
                            <li class="flex items-start"><span class="w-2 h-2 bg-primary rounded-full mr-3 mt-1.5 shrink-0"></span><span>Database Management</span></li>
                            <li class="flex items-start"><span class="w-2 h-2 bg-primary rounded-full mr-3 mt-1.5 shrink-0"></span><span>Development Tools</span></li>
                        </ul>
                    </div>
                    <div class="animate-card bg-canvas p-6 rounded-2xl border border-hairline-soft shadow-sm">
                        <h4 class="font-bold mb-4 text-lg text-ink-deep border-b border-hairline pb-2">Tech Stack</h4>
                        <ul class="space-y-3 text-sm text-charcoal">
                            <li class="flex items-start"><span class="w-2 h-2 bg-primary rounded-full mr-3 mt-1.5 shrink-0"></span><span>Kotlin, JavaScript, Java, PHP</span></li>
                            <li class="flex items-start"><span class="w-2 h-2 bg-primary rounded-full mr-3 mt-1.5 shrink-0"></span><span>React.js, Next.js, PrimeReact, Bootstrap</span></li>
                            <li class="flex items-start"><span class="w-2 h-2 bg-primary rounded-full mr-3 mt-1.5 shrink-0"></span><span>SvelteKit, Laravel</span></li>
                            <li class="flex items-start"><span class="w-2 h-2 bg-primary rounded-full mr-3 mt-1.5 shrink-0"></span><span>Node.js</span></li>
                            <li class="flex items-start"><span class="w-2 h-2 bg-primary rounded-full mr-3 mt-1.5 shrink-0"></span><span>Android Studio, Kotlin, TensorFlow Lite</span></li>
                            <li class="flex items-start"><span class="w-2 h-2 bg-primary rounded-full mr-3 mt-1.5 shrink-0"></span><span>MySQL, PostgreSQL, Room Database, Data Store</span></li>
                            <li class="flex items-start"><span class="w-2 h-2 bg-primary rounded-full mr-3 mt-1.5 shrink-0"></span><span>Visual Studio Code, Postman, Git, XAMPP</span></li>
                        </ul>
                    </div>
                </div>

                <div class="animate-cta">
                    <a href="https://drive.google.com/file/d/1xDAWNUeYbb9GrYpwj52_hZuvyWuCm1-q/view?usp=drive_link"
                        target="_blank"
                        class="inline-flex items-center text-primary font-bold hover:text-primary-deep transition-colors">
                        Download Resume <i class="fas fa-download ml-2"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
