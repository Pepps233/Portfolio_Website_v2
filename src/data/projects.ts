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
		description: "A lightweight Python program built using OpenCV, pandas, and openpyxl to decode student ID and record attendance in Excel\n" +
            "Automated formatting of date, time, and meeting in Excel, generating weekly and seasonal total hours for each member\n" +
            "Used by a 40-member robotics club to streamline attendance tracking and accurately determine active members.",
		ctaText: "View Repo →",
		ctaLink: "https://github.com/Pepps233/2204-Attendance-",
		icon: PythonIcon
	},
	{
		title: "Real-time American Sign Language (ASL) Alphabet Translator",
		techStack: "OpenCV • TensorFlow • MediaPipe • pyttsx3",
		description: "todo",
		ctaText: "View Repo →",
		ctaLink: "https://github.com/Pepps233/Sign-Language-Translator",
		icon: PythonIcon
	},
	{
		title: "Employee Management API (Backend)",
		techStack: "Spring Boot • Java • Spring Data JPA • Docker • PostgreSQL",
		description: "todo",
		ctaText: "View Repo →",
		ctaLink: "https://github.com/Pepps233/Employee-Management-System",
		icon: N8nIcon
	},
];