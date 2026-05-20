<script lang="ts">
    import gsap from 'gsap';

    let section: HTMLElement;
    let formElement: HTMLFormElement;
    
    let isSubmitting = $state(false);
    let showSuccess = $state(false);

    let formData = $state({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    let errors = $state({
        name: false,
        email: false,
        subject: false,
        message: false
    });

    $effect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top 75%",
            }
        });

        // Heading clips in from below with scale
        tl.fromTo(section.querySelector('.animate-contact-heading'),
            { y: 60, opacity: 0, scale: 0.9 },
            { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.3)" }
        )
        // Left column slides in from the left
        .fromTo(section.querySelector('.animate-contact-left'),
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
            "-=0.4"
        )
        // Right column slides in from the right
        .fromTo(section.querySelector('.animate-contact-right'),
            { x: 100, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
            "-=0.7"
        )
        // Contact info items stagger in
        .fromTo(section.querySelectorAll('.animate-contact-item'),
            { y: 30, opacity: 0, scale: 0.95 },
            { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" },
            "-=0.4"
        )
        // Social links pop in
        .fromTo(section.querySelectorAll('.animate-contact-social'),
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.4, stagger: 0.08, ease: "back.out(2)" },
            "-=0.2"
        );
    });

    async function handleSubmit(e: Event) {
        e.preventDefault();
        
        // Basic validation
        let isValid = true;
        
        if (!formData.name) { errors.name = true; isValid = false; } else { errors.name = false; }
        if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { errors.email = true; isValid = false; } else { errors.email = false; }
        if (!formData.subject) { errors.subject = true; isValid = false; } else { errors.subject = false; }
        if (!formData.message) { errors.message = true; isValid = false; } else { errors.message = false; }

        if (!isValid) return;

        isSubmitting = true;

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            showSuccess = true;
            formData = { name: '', email: '', subject: '', message: '' };
            
            setTimeout(() => {
                showSuccess = false;
            }, 3000);
        } catch (error) {
            alert('An error occurred. Please try again later.');
        } finally {
            isSubmitting = false;
        }
    }
</script>

<section id="contact" class="py-20 bg-surface-soft" bind:this={section}>
    <div class="container mx-auto px-6 max-w-6xl">
        <h2 class="animate-contact-heading text-3xl md:text-4xl font-bold mb-16 text-center text-ink-deep font-sans">
            Get In Touch
        </h2>

        <div class="flex flex-col md:flex-row gap-12 lg:gap-20">
            <div class="md:w-5/12 animate-contact-left">
                <h3 class="text-3xl font-bold mb-6 text-ink-deep font-sans">Let's work together</h3>
                <p class="mb-10 text-lg text-charcoal leading-relaxed">
                    Have a project in mind or want to discuss potential opportunities?
                    I'm always open to new collaborations and interesting challenges.
                    Feel free to reach out through the form or directly via email.
                </p>

                <div class="space-y-6 bg-canvas p-8 rounded-[32px] border border-hairline-soft shadow-sm">
                    <a href="mailto:yudaagung70@gmail.com" class="animate-contact-item flex items-center group">
                        <div class="w-12 h-12 bg-surface-soft rounded-full flex items-center justify-center mr-4 group-hover:bg-primary transition-colors">
                            <i class="fas fa-envelope text-xl text-ink-deep group-hover:text-canvas transition-colors"></i>
                        </div>
                        <span class="text-ink group-hover:text-primary transition-colors font-medium">yudaagung70@gmail.com</span>
                    </a>
                    <a href="tel:+6281380625291" class="animate-contact-item flex items-center group">
                        <div class="w-12 h-12 bg-surface-soft rounded-full flex items-center justify-center mr-4 group-hover:bg-primary transition-colors">
                            <i class="fas fa-phone text-xl text-ink-deep group-hover:text-canvas transition-colors"></i>
                        </div>
                        <span class="text-ink group-hover:text-primary transition-colors font-medium">+6281380625291</span>
                    </a>
                    <a href="https://www.google.com/maps/search/?api=1&query=Bandung,+East+Java,+Indonesia"
                        target="_blank" class="animate-contact-item flex items-center group">
                        <div class="w-12 h-12 bg-surface-soft rounded-full flex items-center justify-center mr-4 group-hover:bg-primary transition-colors">
                            <i class="fas fa-map-marker-alt text-xl text-ink-deep group-hover:text-canvas transition-colors"></i>
                        </div>
                        <span class="text-ink group-hover:text-primary transition-colors font-medium">Bandung, East Java</span>
                    </a>
                </div>

                <div class="flex space-x-4 mt-10">
                    <a href="https://www.linkedin.com/in/agung-yuda-pratama-4b1866250/" target="_blank"
                        class="animate-contact-social w-12 h-12 rounded-full border border-hairline bg-canvas flex items-center justify-center text-ink hover:bg-surface-soft hover:border-ink transition-all shadow-sm">
                        <i class="fab fa-linkedin-in text-lg"></i>
                    </a>
                    <a href="https://github.com/Yuda531" target="_blank"
                        class="animate-contact-social w-12 h-12 rounded-full border border-hairline bg-canvas flex items-center justify-center text-ink hover:bg-surface-soft hover:border-ink transition-all shadow-sm">
                        <i class="fab fa-github text-lg"></i>
                    </a>
                    <a href="https://www.instagram.com/yudaagung531/" target="_blank"
                        class="animate-contact-social w-12 h-12 rounded-full border border-hairline bg-canvas flex items-center justify-center text-ink hover:bg-surface-soft hover:border-ink transition-all shadow-sm">
                        <i class="fab fa-instagram text-lg"></i>
                    </a>
                </div>
            </div>

            <div class="md:w-7/12 animate-contact-right">
                <div class="bg-canvas p-8 md:p-10 rounded-[32px] border border-hairline-soft shadow-sm">
                    <form bind:this={formElement} onsubmit={handleSubmit} class="space-y-6">
                        <div>
                            <label for="name" class="block mb-2 font-bold text-sm text-ink-deep">Name</label>
                            <input type="text" id="name" bind:value={formData.name}
                                class="w-full px-4 py-3 bg-surface-soft border border-hairline rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-soft transition-all text-ink {errors.name ? 'border-critical-strong' : ''}"
                                placeholder="Your name" />
                            {#if errors.name}<p class="text-critical-strong text-xs mt-2 font-medium">Please enter your name</p>{/if}
                        </div>
                        
                        <div>
                            <label for="email" class="block mb-2 font-bold text-sm text-ink-deep">Email</label>
                            <input type="email" id="email" bind:value={formData.email}
                                class="w-full px-4 py-3 bg-surface-soft border border-hairline rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-soft transition-all text-ink {errors.email ? 'border-critical-strong' : ''}"
                                placeholder="Your email address" />
                            {#if errors.email}<p class="text-critical-strong text-xs mt-2 font-medium">Please enter a valid email</p>{/if}
                        </div>
                        
                        <div>
                            <label for="subject" class="block mb-2 font-bold text-sm text-ink-deep">Subject</label>
                            <input type="text" id="subject" bind:value={formData.subject}
                                class="w-full px-4 py-3 bg-surface-soft border border-hairline rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-soft transition-all text-ink {errors.subject ? 'border-critical-strong' : ''}"
                                placeholder="What is this regarding?" />
                            {#if errors.subject}<p class="text-critical-strong text-xs mt-2 font-medium">Please enter a subject</p>{/if}
                        </div>
                        
                        <div>
                            <label for="message" class="block mb-2 font-bold text-sm text-ink-deep">Message</label>
                            <textarea id="message" rows="5" bind:value={formData.message}
                                class="w-full px-4 py-3 bg-surface-soft border border-hairline rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-soft transition-all text-ink resize-none {errors.message ? 'border-critical-strong' : ''}"
                                placeholder="Your message..."></textarea>
                            {#if errors.message}<p class="text-critical-strong text-xs mt-2 font-medium">Please enter your message</p>{/if}
                        </div>
                        
                        <div class="relative pt-2">
                            <button type="submit" disabled={isSubmitting}
                                class="bg-ink-button text-on-ink-button px-8 py-3.5 rounded-full hover:bg-charcoal transition-colors w-full sm:w-auto flex items-center justify-center font-bold text-sm min-w-[160px] disabled:opacity-70 disabled:cursor-not-allowed">
                                {#if isSubmitting}
                                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                {:else}
                                    Send Message
                                {/if}
                            </button>
                            
                            {#if showSuccess}
                                <div class="absolute inset-0 bg-success text-canvas rounded-full flex items-center justify-center font-bold text-sm shadow-md transition-all sm:w-max px-8">
                                    <i class="fas fa-check-circle mr-2"></i> Message sent successfully!
                                </div>
                            {/if}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
