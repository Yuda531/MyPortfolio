export interface Project {
    id: string;
    title: string;
    shortDescription: string;
    description: string;
    technologies: string[];
    features: string[];
    githubLink: string;
    images: string[];
    thumbnail: string;
}

export const projects: Project[] = [
    {
        id: 'project1',
        title: 'Thriftify App',
        shortDescription: 'E-Commerce Platform For Buying And Selling Second-Hand Clothing',
        description: 'Thriftify is an innovative e-commerce platform for buying and selling second-hand clothing. Powered by machine learning for seamless categorization and personalized recommendations, it offers a user-friendly experience while promoting sustainable fashion and reducing fast fashion waste. Targeting eco-conscious 18-35-year-olds (Gen Z to Millennials).',
        technologies: ['Android Studio', 'Kotlin', 'Retrofit', 'Tensorflow', 'Room', 'Google Cloud'],
        features: [
            'Real-Time Data Updates',
            'Social Sharing Features And Chat Seller Directly',
            'Monetizing Unused Clothes',
            'User-Friendly Experience'
        ],
        githubLink: 'https://github.com/C242-PS121',
        images: [
            '/img/projects/Project1_1.png',
            '/img/projects/Project1_2.png',
            '/img/projects/Project1_3.png',
            '/img/projects/Project1_4.png',
            '/img/projects/Project1_5.png',
            '/img/projects/Project1_6.png',
            '/img/projects/Project1_7.png',
            '/img/projects/Project1_8.png',
            '/img/projects/Project1_9.png',
        ],
        thumbnail: '/img/projects/Project1_1.png'
    },
    {
        id: 'project2',
        title: 'Story App',
        shortDescription: 'A project for Android Intermediate Class Submission Dicoding',
        description: 'Story App is a user-friendly mobile application designed to allow users to share their stories through images and descriptions while incorporating advanced features such as maps integration, animations, and paging. This project was developed as part of the Android Intermediate Class submission for Dicoding, showcasing a robust implementation of modern Android development practices.',
        technologies: ['Android Studio', 'Kotlin', 'Retrofit', 'Coroutines'],
        features: [
            'Responsive Design For All Devices',
            'Provides A Secure And Seamless Authentication',
            'Browse And Interact With Shared Stories',
            'Maps and Paging Integration'
        ],
        githubLink: 'https://github.com/Yuda531/StoryApp',
        images: [
            '/img/projects/Project2_1.png',
            '/img/projects/Project2_2.png',
            '/img/projects/Project2_3.png',
            '/img/projects/Project2_4.png',
            '/img/projects/Project2_5.png',
            '/img/projects/Project2_6.png',
        ],
        thumbnail: '/img/projects/Project2_1.png'
    },
    {
        id: 'project3',
        title: 'Asclepius - Cancer Detection App',
        shortDescription: 'A Machine Learning-Powered Android Application for Skin Cancer Classification',
        description: 'The Cancer Detection App is an Android application designed to detect and classify skin cancer using machine learning. Built as part of a bootcamp project by Team Asclepius, the app leverages TensorFlow Lite to process images and classify them into two categories: cancer or non-cancer. The app aims to address real-world health challenges by providing users with a simple and accessible tool to identify potential skin cancer risks. Inspired by the Greek god of healing, Asclepius, this project combines Android development expertise with advanced machine learning models to deliver a practical solution for early detection of skin cancer.',
        technologies: ['Android Studio', 'Kotlin', 'Tensor Flow', 'Camera X'],
        features: [
            'Image Capture and Preview',
            'Machine Learning-Powered Prediction',
            'Confidence Score Display',
            'Model Integration'
        ],
        githubLink: 'https://github.com/Yuda531/Asclepius---Cancer-Detection-App',
        images: [
            '/img/projects/Project3_1.png',
            '/img/projects/Project3_2.png',
            '/img/projects/Project3_3.png'
        ],
        thumbnail: '/img/projects/Project3_1.png'
    },
    {
        id: 'project4',
        title: 'Cakwe',
        shortDescription: 'Meme Comunity for Everyone',
        description: 'Cakwe is an online platform that aims to facilitate interactive activities and sharing of funny content (memes) between users in a digital community.',
        technologies: ['Visual Studio Code', 'PHP', 'Bootstrap', 'Xampp', 'PHPMyAdmin', 'SQL'],
        features: [
            'Update Profile Details Like Name, Bio, And Profile Picture',
            'Display User Posts, Latest Updates, And Interactive Comments',
            'Share Thoughts, Images, And Youtube Links Easily',
            'Find Posts Using Keywords And Filters'
        ],
        githubLink: 'https://github.com/Yuda531/Cakwe_LaughAndShare',
        images: [
            '/img/projects/Project4_1.png',
            '/img/projects/Project4_2.png',
            '/img/projects/Project4_3.png',
            '/img/projects/Project4_4.png',
            '/img/projects/Project4_5.png',
            '/img/projects/Project4_6.png',
            '/img/projects/Project4_7.png',
            '/img/projects/Project4_8.png',
            '/img/projects/Project4_9.png'
        ],
        thumbnail: '/img/projects/Project4_4.png'
    },
    {
        id: 'project5',
        title: 'Restaurant System',
        shortDescription: 'A System Designed To Streamline And Organize The Food Ordering Process Within A Restaurant',
        description: 'A System Designed To Streamline And Organize The Food Ordering Process Within A Restaurant',
        technologies: ['Netbeans', 'Java'],
        features: [
            'Login and Register User',
            'Organize Food Order',
            'Organize The Employee',
            'Make A Periodic Report'
        ],
        githubLink: 'https://github.com/Yuda531/UAS_OOP2_Restaurant',
        images: [
            '/img/projects/Project5_1.png',
            '/img/projects/Project5_2.png',
            '/img/projects/Project5_3.png',
            '/img/projects/Project5_4.png',
            '/img/projects/Project5_5.png',
            '/img/projects/Project5_6.png',
            '/img/projects/Project5_7.png',
            '/img/projects/Project5_8.png',
            '/img/projects/Project5_9.png',
            '/img/projects/Project5_10.png'
        ],
        thumbnail: '/img/projects/Project5_4.png'
    },
    {
        id: 'project6',
        title: 'ABC Jobs Portal',
        shortDescription: 'ABC Jobs Portal Website Is Committed To Helping Job Seekers Find Their Dream Job.',
        description: 'ABC Jobs Portal Website Is Committed To Helping Job Seekers Find Their Dream Job. With Our User-Friendly Interface, You Can Easily Search For Jobs, Post Threads, And Comment. ABC Jobs Portal Is A Platform Designed To Connect Job Seekers With Employers Efficiently. Users Can Create Profiles, Browse Job Listings, Apply For Positions, And Track Their Applications, While Companies Can Post Job Openings And Find The Right Candidates Quickly. The Portal Streamlines The Hiring Process, Making Job Searching And Recruitment Easier, Faster, And More Accessible',
        technologies: ['Java', 'Spring Boot', 'Bootstrap'],
        features: [
            'Search Jobs',
            'Apply Jobs',
            'Comment on Post',
            'Posting a Job'
        ],
        githubLink: 'https://github.com/Yuda531/ABCJobs-Portal',
        images: [
            '/img/projects/Project6_1.png',
            '/img/projects/Project6_2.png',
            '/img/projects/Project6_3.png',
            '/img/projects/Project6_4.png',
            '/img/projects/Project6_5.png',
            '/img/projects/Project6_6.png'
        ],
        thumbnail: '/img/projects/Project6_5.png'
    }
];