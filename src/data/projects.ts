import PhoenixIcon from '../assets/logos/Phoenix-logo.svg?raw';
import N8nIcon from '../assets/logos/N8n-logo.svg?raw';
import SupabaseIcon from '../assets/logos/Supabase-logo.svg?raw';
import PosthogIcon from '../assets/logos/posthog-logo.svg?raw';
import PythonIcon from '../assets/logos/Python-logo.svg?raw';
import TailwindIcon from '../assets/logos/Tailwind-logo.svg?raw';


export const projects = [
	{
		title: "Barcode-scanning Attendance Tracker",
		techStack: "OpenCV • Python • Pandas • Openpyxl",
		description: [
			"A lightweight Python program using OpenCV, pandas, and openpyxl to decode student IDs and record attendance in Excel.",
			"Automates formatting of date, time, and meeting in Excel; generates weekly and seasonal total hours per member.",
			"Adopted by a 40-member robotics club to streamline attendance and accurately determine active members."
		],
		ctaText: "View Repo →",
		ctaLink: "https://github.com/Pepps233/2204-Attendance-",
		icon: PythonIcon
	},
	{
		title: "Real-time American Sign Language (ASL) Alphabet Translator",
		techStack: "OpenCV • TensorFlow • MediaPipe • pyttsx3",
        description: [
            "Built a camera-based ASL translator using TensorFlow, MediaPipe, and 5,500+ self-created training samples.",
            "Integrated text-to-speech (pyttsx3) to vocalize translated signs, enhancing accessibility for communication.",
        ],
		ctaText: "View Repo →",
		ctaLink: "https://github.com/Pepps233/Sign-Language-Translator",
		icon: PythonIcon
	},
	{
		title: "Employee Management API (Backend)",
		techStack: "Spring Boot • Java • Spring Data JPA • Docker • PostgreSQL",
        description: [
            "Developed a RESTful backend service using Java, Spring Boot, and PostgreSQL to manage employee data with CRUD functions.",
            "Implemented a layered architecture (Controller → Service → Repository) and DTO mapping to ensure clean, maintainable code.",
            "Containerized the database with Docker, enabling consistent deployment and simplified setup."
        ],
		ctaText: "View Repo →",
		ctaLink: "https://github.com/Pepps233/Employee-Management-System",
		icon: N8nIcon
	},
];