import PhoenixIcon from '../assets/logos/Phoenix-logo.svg?raw';
import N8nIcon from '../assets/logos/N8n-logo.svg?raw';
import SupabaseIcon from '../assets/logos/Supabase-logo.svg?raw';
import PosthogIcon from '../assets/logos/posthog-logo.svg?raw';
import PythonIcon from '../assets/logos/Python-logo.svg?raw';
import TailwindIcon from '../assets/logos/Tailwind-logo.svg?raw';


export const projects = [
	{
		title: "Barcode scanning Attendance Tracker",
		date: "2024 August",
		techStack: "OpenCV • Python • Pandas • Openpyxl",
		description: [
            "Designed and developed a barcode scanning sign-in/out system using Python, OpenCV, and Pyzbar to track attendance for a 35–40 member robotics team.",
            "Automated attendance logging into Excel spreadsheets with Pandas and OpenPyXL, including sign-in, sign-out, and hours calculation per student.",
            "Built a time-tracking module to calculate session durations and accumulated hours per student.",
            "Implemented real-time performance monitoring (CPU/memory usage) with psutil for system reliability during continuous use.",
            "Enhanced user experience with audio feedback on successful or failed scans and real-time webcam display of scanned results.",
            "Delivered a low-cost, efficient alternative to manual attendance tracking, reducing errors and improving student accountability.",
		],
		ctaText: "View Repo →",
		ctaLink: "https://github.com/Pepps233/2204-Attendance-",
		icon: PythonIcon
	},
	{
		title: "Real-time American Sign Language (ASL) Alphabet Translator",
		date: "2024 December",
		techStack: "OpenCV • TensorFlow • MediaPipe • pyttsx3",
        description: [
            "Built a real-time ASL translation system using Python, OpenCV, and cvzone to detect hand gestures and classify them into ASL letters.",
            "Integrated a Keras deep learning model to achieve accurate classification of alphabet signs from live webcam input.",
            "Implemented image preprocessing techniques (cropping, resizing, normalization) to improve model performance under varying lighting and angles.",
            "Added text-to-speech functionality (pyttsx3) to convert recognized signs into spoken language for seamless communication.",
        ],
		ctaText: "View Repo →",
		ctaLink: "https://github.com/Pepps233/Sign-Language-Translator",
		icon: PythonIcon
	},
	{
		title: "Employee-Management API (Backend)",
		date: "2025 August",
		techStack: "Spring Boot • Java • Spring Data JPA • Docker • PostgreSQL",
        description: [
            "Developed a RESTful backend service using Java, Spring Boot, and PostgreSQL to manage employee data with CRUD functions.",
            "Containerized the PostgreSQL database with Docker, simplifying setup and improving deployment consistency.",
            "Integrated Spring Data JPA/Hibernate for seamless persistence, automatic schema updates, and efficient query handling.",
            "Addressed the challenge of unreliable manual employee record management by providing a scalable, automated solution with reliable database-backed APIs.",
            "Implemented a layered architecture (Controller → Service → Repository) with DTO mapping to ensure clean separation of concerns and maintainable code.",
        ],
		ctaText: "View Repo →",
		ctaLink: "https://github.com/Pepps233/Employee-Management-System",
		icon: N8nIcon
	},
];