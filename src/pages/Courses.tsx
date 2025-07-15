import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { useI18n } from "@/lib/i18n";
import { useStore } from "@/store/useStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BookOpen,
  Clock,
  Users,
  Star,
  Search,
  Filter,
  Play,
  Award,
  TrendingUp,
  Sparkles,
  ChevronDown,
  Grid3X3,
  List,
  User,
  Calendar,
} from "lucide-react";
import {
  MagneticButton,
  AnimatedSection,
  StaggeredList,
  FloatingElement,
} from "@/components/AnimatedElements";

export default function Courses() {
  const { t } = useI18n();
  const isEgyptUser = useStore((state) => state.isEgyptUser);
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popular");
  const [filterBy, setFilterBy] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Handle category filtering from URL parameters
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      // Map URL category parameters to filter values
      const categoryMap: { [key: string]: string } = {
        languages: "languages",
        development: "development",
        design: "design",
        healthcare: "healthcare",
        business: "business",
        math: "math",
      };

      if (categoryMap[categoryParam]) {
        setFilterBy(categoryMap[categoryParam]);
      }
    }
  }, [searchParams]);

  const courses = [
    // Global Languages (24 Courses)
    {
      id: 1,
      title: "French Course",
      description:
        "Comprehensive French language course from beginner to intermediate level with native speakers.",
      image: "bg-gradient-to-br from-blue-500 to-indigo-600",
      price: { usd: "$299", egp: "4,800EGP" },
      originalPrice: { usd: "$399", egp: "6,400EGP" },
      rating: 4.9,
      students: 1820,
      duration: "16 weeks",
      level: "Beginner",
      category: "Global Languages",
      instructor: {
        name: "Marie Dubois",
        title: "French Language Specialist",
        experience: "8 years",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616b612b788?w=150&h=150&fit=crop&crop=face",
      },
      lessons: 64,
      certificate: true,
      featured: true,
    },
    {
      id: 2,
      title: "French Advanced",
      description:
        "Advanced French language course focusing on business communication and cultural nuances.",
      image: "bg-gradient-to-br from-purple-500 to-blue-600",
      price: { usd: "$399", egp: "6,400EGP" },
      originalPrice: { usd: "$499", egp: "8,000EGP" },
      rating: 4.8,
      students: 1240,
      duration: "20 weeks",
      level: "Advanced",
      category: "Global Languages",
      instructor: {
        name: "Pierre Laurent",
        title: "Senior French Instructor",
        experience: "12 years",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      },
      lessons: 80,
      certificate: true,
      featured: false,
    },
    {
      id: 3,
      title: "German Course",
      description:
        "Learn German from basics with emphasis on practical conversation and grammar.",
      image: "bg-gradient-to-br from-red-500 to-orange-600",
      price: { usd: "$329", egp: "5,300EGP" },
      originalPrice: { usd: "$429", egp: "6,900EGP" },
      rating: 4.7,
      students: 1560,
      duration: "18 weeks",
      level: "Beginner",
      category: "Global Languages",
      instructor: {
        name: "Hans Mueller",
        title: "German Language Expert",
        experience: "10 years",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      },
      lessons: 72,
      certificate: true,
      featured: true,
    },
    {
      id: 4,
      title: "German Advanced",
      description:
        "Advanced German course for business and academic purposes with cultural insights.",
      image: "bg-gradient-to-br from-yellow-500 to-red-600",
      price: { usd: "$429", egp: "6,900EGP" },
      originalPrice: { usd: "$529", egp: "8,500EGP" },
      rating: 4.8,
      students: 890,
      duration: "22 weeks",
      level: "Advanced",
      category: "Global Languages",
      instructor: {
        name: "Ingrid Weber",
        title: "Advanced German Specialist",
        experience: "15 years",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      },
      lessons: 88,
      certificate: true,
      featured: false,
    },
    {
      id: 5,
      title: "Chinese – Beginner",
      description:
        "Introduction to Mandarin Chinese with focus on speaking, writing, and cultural understanding.",
      image: "bg-gradient-to-br from-red-600 to-yellow-500",
      price: { usd: "$349", egp: "5,600EGP" },
      originalPrice: { usd: "$449", egp: "7,200EGP" },
      rating: 4.9,
      students: 2140,
      duration: "20 weeks",
      level: "Beginner",
      category: "Global Languages",
      instructor: {
        name: "Li Wei",
        title: "Mandarin Language Teacher",
        experience: "9 years",
        avatar:
          "https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=150&h=150&fit=crop&crop=face",
      },
      lessons: 80,
      certificate: true,
      featured: true,
    },
    {
      id: 6,
      title: "Chinese – Advanced",
      description:
        "Advanced Mandarin Chinese for business and professional communication.",
      image: "bg-gradient-to-br from-orange-500 to-red-600",
      price: { usd: "$449", egp: "7,200EGP" },
      originalPrice: { usd: "$549", egp: "8,800EGP" },
      rating: 4.8,
      students: 1320,
      duration: "24 weeks",
      level: "Advanced",
      category: "Global Languages",
      instructor: {
        name: "Zhang Min",
        title: "Advanced Chinese Instructor",
        experience: "13 years",
        avatar:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      },
      lessons: 96,
      certificate: true,
      featured: false,
    },
    {
      id: 7,
      title: "English Summer Course",
      description:
        "Intensive English language summer program for rapid improvement in all skills.",
      image: "bg-gradient-to-br from-blue-500 to-cyan-600",
      price: { usd: "$199", egp: "3,200EGP" },
      originalPrice: { usd: "$299", egp: "4,800EGP" },
      rating: 4.9,
      students: 3420,
      duration: "8 weeks",
      level: "All Levels",
      category: "Global Languages",
      instructor: {
        name: "Sarah Thompson",
        title: "English Language Coordinator",
        experience: "11 years",
        avatar:
          "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
      },
      lessons: 40,
      certificate: true,
      featured: true,
    },
    {
      id: 8,
      title: "Quran Kareem",
      description:
        "Learn proper Quran recitation with Tajweed rules and Arabic language fundamentals.",
      image: "bg-gradient-to-br from-green-600 to-emerald-700",
      price: { usd: "$149", egp: "2,400EGP" },
      originalPrice: { usd: "$229", egp: "3,700EGP" },
      rating: 4.9,
      students: 2800,
      duration: "24 weeks",
      level: "All Levels",
      category: "Global Languages",
      instructor: {
        name: "Sheikh Ahmad Hassan",
        title: "Quran & Tajweed Specialist",
        experience: "20 years",
        avatar:
          "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face",
      },
      lessons: 96,
      certificate: true,
      featured: true,
    },

    // Programming & Technology (32 Courses)
    {
      id: 9,
      title: "Web Design – Front-End",
      description:
        "Master modern front-end web development with HTML5, CSS3, JavaScript, and React.",
      image: "bg-gradient-to-br from-blue-500 to-purple-600",
      price: { usd: "$399", egp: "6,400EGP" },
      originalPrice: { usd: "$499", egp: "8,000EGP" },
      rating: 4.9,
      students: 2431,
      duration: "16 weeks",
      level: "Intermediate",
      category: "Programming & Technology",
      instructor: {
        name: "Alex Rodriguez",
        title: "Senior Front-End Developer",
        experience: "8 years",
        avatar:
          "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
      },
      lessons: 64,
      certificate: true,
      featured: true,
    },
    {
      id: 10,
      title: "FullStack – Python",
      description:
        "Complete full-stack development with Python, Django, and modern web technologies.",
      image: "bg-gradient-to-br from-yellow-500 to-orange-600",
      price: { usd: "$499", egp: "8,000EGP" },
      originalPrice: { usd: "$599", egp: "9,600EGP" },
      rating: 4.8,
      students: 1876,
      duration: "24 weeks",
      level: "Advanced",
      category: "Programming & Technology",
      instructor: {
        name: "Dr. Emily Chen",
        title: "Python Full-Stack Expert",
        experience: "12 years",
        avatar:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      },
      lessons: 96,
      certificate: true,
      featured: true,
    },
    {
      id: 11,
      title: "Back-end – Python",
      description:
        "Advanced Python backend development with APIs, databases, and cloud deployment.",
      image: "bg-gradient-to-br from-green-500 to-blue-600",
      price: { usd: "$399", egp: "6,400EGP" },
      originalPrice: { usd: "$499", egp: "8,000EGP" },
      rating: 4.7,
      students: 1654,
      duration: "18 weeks",
      level: "Advanced",
      category: "Programming & Technology",
      instructor: {
        name: "Michael Kumar",
        title: "Backend Systems Architect",
        experience: "10 years",
        avatar:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      },
      lessons: 72,
      certificate: true,
      featured: false,
    },
    {
      id: 12,
      title: "Fullstack – PHP",
      description:
        "Complete web development with PHP, Laravel, MySQL, and modern frontend frameworks.",
      image: "bg-gradient-to-br from-purple-500 to-indigo-600",
      price: { usd: "$449", egp: "7,200EGP" },
      originalPrice: { usd: "$549", egp: "8,800EGP" },
      rating: 4.6,
      students: 1432,
      duration: "22 weeks",
      level: "Intermediate",
      category: "Programming & Technology",
      instructor: {
        name: "James Wilson",
        title: "PHP & Laravel Specialist",
        experience: "9 years",
        avatar:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
      },
      lessons: 88,
      certificate: true,
      featured: false,
    },
    {
      id: 13,
      title: "Back-end – PHP",
      description:
        "Advanced PHP backend development with APIs, security, and performance optimization.",
      image: "bg-gradient-to-br from-indigo-500 to-purple-600",
      price: { usd: "$379", egp: "6,100EGP" },
      originalPrice: { usd: "$479", egp: "7,700EGP" },
      rating: 4.7,
      students: 1234,
      duration: "16 weeks",
      level: "Advanced",
      category: "Programming & Technology",
      instructor: {
        name: "David Thompson",
        title: "Senior PHP Developer",
        experience: "11 years",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      },
      lessons: 64,
      certificate: true,
      featured: false,
    },
    {
      id: 14,
      title: "Python Basics",
      description:
        "Introduction to Python programming for beginners with hands-on projects.",
      image: "bg-gradient-to-br from-green-400 to-blue-500",
      price: { usd: "$249", egp: "4,000EGP" },
      originalPrice: { usd: "$349", egp: "5,600EGP" },
      rating: 4.8,
      students: 3245,
      duration: "12 weeks",
      level: "Beginner",
      category: "Programming & Technology",
      instructor: {
        name: "Lisa Park",
        title: "Python Programming Instructor",
        experience: "7 years",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616b612b788?w=150&h=150&fit=crop&crop=face",
      },
      lessons: 48,
      certificate: true,
      featured: true,
    },
    {
      id: 15,
      title: "Data Analysis Course",
      description:
        "Comprehensive data analysis with Python, Pandas, NumPy, and data visualization.",
      image: "bg-gradient-to-br from-purple-500 to-pink-600",
      price: { usd: "$429", egp: "6,900EGP" },
      originalPrice: { usd: "$529", egp: "8,500EGP" },
      rating: 4.9,
      students: 2156,
      duration: "20 weeks",
      level: "Intermediate",
      category: "Programming & Technology",
      instructor: {
        name: "Dr. Maria Garcia",
        title: "Data Science Specialist",
        experience: "14 years",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      },
      lessons: 80,
      certificate: true,
      featured: true,
    },
    {
      id: 16,
      title: "Digital Transformation",
      description:
        "Learn how to lead digital transformation initiatives in modern organizations.",
      image: "bg-gradient-to-br from-cyan-500 to-blue-600",
      price: { usd: "$379", egp: "6,100EGP" },
      originalPrice: { usd: "$479", egp: "7,700EGP" },
      rating: 4.7,
      students: 1567,
      duration: "14 weeks",
      level: "Advanced",
      category: "Programming & Technology",
      instructor: {
        name: "Robert Kim",
        title: "Digital Transformation Consultant",
        experience: "13 years",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      },
      lessons: 56,
      certificate: true,
      featured: false,
    },
    {
      id: 17,
      title: "Digital Marketing Course",
      description:
        "Complete digital marketing strategy including SEO, social media, and analytics.",
      image: "bg-gradient-to-br from-pink-500 to-rose-600",
      price: { usd: "$329", egp: "5,300EGP" },
      originalPrice: { usd: "$429", egp: "6,900EGP" },
      rating: 4.8,
      students: 2890,
      duration: "16 weeks",
      level: "Intermediate",
      category: "Programming & Technology",
      instructor: {
        name: "Sarah Johnson",
        title: "Digital Marketing Strategist",
        experience: "9 years",
        avatar:
          "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
      },
      lessons: 64,
      certificate: true,
      featured: true,
    },

    // Design & Creative Arts (18 Courses)
    {
      id: 18,
      title: "Arabic Calligraphy Course – From Basics to Art",
      description:
        "Master the art of Arabic calligraphy from traditional scripts to modern artistic expressions.",
      image: "bg-gradient-to-br from-amber-500 to-orange-600",
      price: { usd: "$299", egp: "4,800EGP" },
      originalPrice: { usd: "$399", egp: "6,400EGP" },
      rating: 4.9,
      students: 1456,
      duration: "18 weeks",
      level: "All Levels",
      category: "Design & Creative Arts",
      instructor: {
        name: "Ustaz Mahmoud Al-Khattat",
        title: "Master Calligrapher",
        experience: "25 years",
        avatar:
          "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face",
      },
      lessons: 72,
      certificate: true,
      featured: true,
    },
    {
      id: 19,
      title: "Art Course",
      description:
        "Comprehensive art course covering drawing, painting, and creative expression techniques.",
      image: "bg-gradient-to-br from-purple-500 to-pink-600",
      price: { usd: "$349", egp: "5,600EGP" },
      originalPrice: { usd: "$449", egp: "7,200EGP" },
      rating: 4.8,
      students: 1789,
      duration: "20 weeks",
      level: "Beginner",
      category: "Design & Creative Arts",
      instructor: {
        name: "Isabella Romano",
        title: "Fine Arts Instructor",
        experience: "16 years",
        avatar:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      },
      lessons: 80,
      certificate: true,
      featured: true,
    },
    {
      id: 20,
      title: "Digital Art",
      description:
        "Create stunning digital artwork using modern software and digital painting techniques.",
      image: "bg-gradient-to-br from-blue-500 to-purple-600",
      price: { usd: "$379", egp: "6,100EGP" },
      originalPrice: { usd: "$479", egp: "7,700EGP" },
      rating: 4.7,
      students: 2134,
      duration: "16 weeks",
      level: "Intermediate",
      category: "Design & Creative Arts",
      instructor: {
        name: "Alex Chen",
        title: "Digital Art Specialist",
        experience: "8 years",
        avatar:
          "https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=150&h=150&fit=crop&crop=face",
      },
      lessons: 64,
      certificate: true,
      featured: false,
    },
    {
      id: 21,
      title: "Graphic Design",
      description:
        "Professional graphic design course covering branding, layout, and visual communication.",
      image: "bg-gradient-to-br from-green-500 to-teal-600",
      price: { usd: "$429", egp: "6,900EGP" },
      originalPrice: { usd: "$529", egp: "8,500EGP" },
      rating: 4.8,
      students: 2567,
      duration: "18 weeks",
      level: "Intermediate",
      category: "Design & Creative Arts",
      instructor: {
        name: "Jessica Taylor",
        title: "Senior Graphic Designer",
        experience: "11 years",
        avatar:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      },
      lessons: 72,
      certificate: true,
      featured: true,
    },
    {
      id: 22,
      title: "Motion Graphic Design",
      description:
        "Create engaging motion graphics and animations for digital media and marketing.",
      image: "bg-gradient-to-br from-orange-500 to-red-600",
      price: { usd: "$459", egp: "7,400EGP" },
      originalPrice: { usd: "$559", egp: "8,900EGP" },
      rating: 4.9,
      students: 1432,
      duration: "20 weeks",
      level: "Advanced",
      category: "Design & Creative Arts",
      instructor: {
        name: "Marco Antonelli",
        title: "Motion Graphics Expert",
        experience: "9 years",
        avatar:
          "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
      },
      lessons: 80,
      certificate: true,
      featured: true,
    },
    {
      id: 23,
      title: "Kids Craft Art Course",
      description:
        "Fun and creative art course designed specifically for children aged 6-14.",
      image: "bg-gradient-to-br from-yellow-400 to-pink-500",
      price: { usd: "$149", egp: "2,400EGP" },
      originalPrice: { usd: "$199", egp: "3,200EGP" },
      rating: 4.9,
      students: 3456,
      duration: "12 weeks",
      level: "Beginner",
      category: "Design & Creative Arts",
      instructor: {
        name: "Emma Collins",
        title: "Children's Art Instructor",
        experience: "6 years",
        avatar:
          "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
      },
      lessons: 48,
      certificate: true,
      featured: true,
    },

    // Healthcare & Medical Training (15 Courses)
    {
      id: 24,
      title: "Hospital Management",
      description:
        "Comprehensive hospital management covering operations, administration, and healthcare systems.",
      image: "bg-gradient-to-br from-green-500 to-emerald-600",
      price: { usd: "$549", egp: "8,800EGP" },
      originalPrice: { usd: "$649", egp: "10,400EGP" },
      rating: 4.8,
      students: 876,
      duration: "24 weeks",
      level: "Advanced",
      category: "Healthcare & Medical Training",
      instructor: {
        name: "Dr. Sarah Mitchell",
        title: "Healthcare Administration Director",
        experience: "18 years",
        avatar:
          "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      },
      lessons: 96,
      certificate: true,
      featured: true,
    },
    {
      id: 25,
      title: "Hospital Quality Management",
      description:
        "Quality management systems and patient safety protocols in healthcare settings.",
      image: "bg-gradient-to-br from-blue-500 to-green-600",
      price: { usd: "$479", egp: "7,700EGP" },
      originalPrice: { usd: "$579", egp: "9,300EGP" },
      rating: 4.7,
      students: 654,
      duration: "18 weeks",
      level: "Advanced",
      category: "Healthcare & Medical Training",
      instructor: {
        name: "Dr. Michael Roberts",
        title: "Quality Management Specialist",
        experience: "15 years",
        avatar:
          "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
      },
      lessons: 72,
      certificate: true,
      featured: false,
    },
    {
      id: 26,
      title: "Child First Aid",
      description:
        "Essential first aid training specifically designed for pediatric emergencies and child safety.",
      image: "bg-gradient-to-br from-pink-500 to-red-600",
      price: { usd: "$199", egp: "3,200EGP" },
      originalPrice: { usd: "$279", egp: "4,500EGP" },
      rating: 4.9,
      students: 2134,
      duration: "6 weeks",
      level: "Beginner",
      category: "Healthcare & Medical Training",
      instructor: {
        name: "RN Jennifer Adams",
        title: "Pediatric Emergency Specialist",
        experience: "12 years",
        avatar:
          "https://images.unsplash.com/photo-1594824475314-d1eb65b39e16?w=150&h=150&fit=crop&crop=face",
      },
      lessons: 24,
      certificate: true,
      featured: true,
    },
    {
      id: 27,
      title: "Child Nutrition",
      description:
        "Complete guide to child nutrition, meal planning, and healthy eating habits for children.",
      image: "bg-gradient-to-br from-orange-400 to-yellow-500",
      price: { usd: "$249", egp: "4,000EGP" },
      originalPrice: { usd: "$329", egp: "5,300EGP" },
      rating: 4.8,
      students: 1789,
      duration: "10 weeks",
      level: "Intermediate",
      category: "Healthcare & Medical Training",
      instructor: {
        name: "Dr. Lisa Wong",
        title: "Pediatric Nutritionist",
        experience: "10 years",
        avatar:
          "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face",
      },
      lessons: 40,
      certificate: true,
      featured: true,
    },
    {
      id: 28,
      title: "Patient Experience Improvement",
      description:
        "Strategies for improving patient satisfaction and healthcare service quality.",
      image: "bg-gradient-to-br from-teal-500 to-blue-600",
      price: { usd: "$399", egp: "6,400EGP" },
      originalPrice: { usd: "$499", egp: "8,000EGP" },
      rating: 4.7,
      students: 1245,
      duration: "14 weeks",
      level: "Intermediate",
      category: "Healthcare & Medical Training",
      instructor: {
        name: "Dr. Amanda Foster",
        title: "Patient Experience Consultant",
        experience: "13 years",
        avatar:
          "https://images.unsplash.com/photo-1551601651-bc60c8e5bf00?w=150&h=150&fit=crop&crop=face",
      },
      lessons: 56,
      certificate: true,
      featured: false,
    },
    {
      id: 29,
      title: "Hospital Financial Management",
      description:
        "Financial management and budgeting strategies specific to healthcare organizations.",
      image: "bg-gradient-to-br from-purple-500 to-indigo-600",
      price: { usd: "$529", egp: "8,500EGP" },
      originalPrice: { usd: "$629", egp: "10,100EGP" },
      rating: 4.6,
      students: 567,
      duration: "20 weeks",
      level: "Advanced",
      category: "Healthcare & Medical Training",
      instructor: {
        name: "Dr. Thomas Brown",
        title: "Healthcare Finance Director",
        experience: "16 years",
        avatar:
          "https://images.unsplash.com/photo-1556157382-065d0fae8ff1?w=150&h=150&fit=crop&crop=face",
      },
      lessons: 80,
      certificate: true,
      featured: false,
    },
    {
      id: 30,
      title: "Healthcare Project Management – From Planning to Execution",
      description:
        "Complete project management methodology specifically designed for healthcare environments.",
      image: "bg-gradient-to-br from-cyan-500 to-teal-600",
      price: { usd: "$459", egp: "7,400EGP" },
      originalPrice: { usd: "$559", egp: "8,900EGP" },
      rating: 4.8,
      students: 934,
      duration: "18 weeks",
      level: "Advanced",
      category: "Healthcare & Medical Training",
      instructor: {
        name: "Dr. Patricia Wilson",
        title: "Healthcare Project Management Expert",
        experience: "14 years",
        avatar:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      },
      lessons: 72,
      certificate: true,
      featured: true,
    },

    // Business & Professional Development (28 Courses)
    {
      id: 31,
      title: "ToT (Training of Trainers)",
      description:
        "Comprehensive trainer development program covering adult learning and training methodologies.",
      image: "bg-gradient-to-br from-blue-600 to-purple-700",
      price: { usd: "$599", egp: "9,600EGP" },
      originalPrice: { usd: "$699", egp: "11,200EGP" },
      rating: 4.9,
      students: 1234,
      duration: "20 weeks",
      level: "Advanced",
      category: "Business & Professional Development",
      instructor: {
        name: "Dr. Richard Stevens",
        title: "Senior Training Consultant",
        experience: "22 years",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      },
      lessons: 80,
      certificate: true,
      featured: true,
    },
    {
      id: 32,
      title: "Project Management Course – PMP Exam Preparation",
      description:
        "Comprehensive PMP certification preparation with practical project management skills.",
      image: "bg-gradient-to-br from-green-600 to-blue-700",
      price: { usd: "$649", egp: "10,400EGP" },
      originalPrice: { usd: "$749", egp: "12,000EGP" },
      rating: 4.8,
      students: 1876,
      duration: "24 weeks",
      level: "Advanced",
      category: "Business & Professional Development",
      instructor: {
        name: "Dr. Lisa Wang",
        title: "PMP Certified Project Manager",
        experience: "17 years",
        avatar:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      },
      lessons: 96,
      certificate: true,
      featured: true,
    },
    {
      id: 33,
      title: "Leading Digital Change – From Vision to Execution",
      description:
        "Strategic leadership course for managing digital transformation and organizational change.",
      image: "bg-gradient-to-br from-purple-600 to-pink-700",
      price: { usd: "$579", egp: "9,300EGP" },
      originalPrice: { usd: "$679", egp: "10,900EGP" },
      rating: 4.7,
      students: 987,
      duration: "18 weeks",
      level: "Advanced",
      category: "Business & Professional Development",
      instructor: {
        name: "Dr. James Anderson",
        title: "Digital Transformation Leader",
        experience: "19 years",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      },
      lessons: 72,
      certificate: true,
      featured: false,
    },
    {
      id: 34,
      title: "International Marketing – Strategies for Global Market Expansion",
      description:
        "Advanced international marketing strategies for global business expansion and market entry.",
      image: "bg-gradient-to-br from-orange-600 to-red-700",
      price: { usd: "$529", egp: "8,500EGP" },
      originalPrice: { usd: "$629", egp: "10,100EGP" },
      rating: 4.8,
      students: 1345,
      duration: "16 weeks",
      level: "Advanced",
      category: "Business & Professional Development",
      instructor: {
        name: "Dr. Maria Rodriguez",
        title: "International Marketing Director",
        experience: "15 years",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      },
      lessons: 64,
      certificate: true,
      featured: true,
    },
    {
      id: 35,
      title:
        "International Crisis Management in Business – Prepare, Respond, Recover",
      description:
        "Comprehensive crisis management strategies for international business operations.",
      image: "bg-gradient-to-br from-red-600 to-orange-700",
      price: { usd: "$559", egp: "8,900EGP" },
      originalPrice: { usd: "$659", egp: "10,500EGP" },
      rating: 4.7,
      students: 765,
      duration: "14 weeks",
      level: "Advanced",
      category: "Business & Professional Development",
      instructor: {
        name: "Dr. Kevin Murphy",
        title: "Crisis Management Specialist",
        experience: "16 years",
        avatar:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      },
      lessons: 56,
      certificate: true,
      featured: false,
    },
    {
      id: 36,
      title: "Workshop: How to Professionally Manage a Personality",
      description:
        "Professional development workshop on personality management and interpersonal skills.",
      image: "bg-gradient-to-br from-teal-600 to-cyan-700",
      price: { usd: "$349", egp: "5,600EGP" },
      originalPrice: { usd: "$449", egp: "7,200EGP" },
      rating: 4.9,
      students: 2156,
      duration: "8 weeks",
      level: "Intermediate",
      category: "Business & Professional Development",
      instructor: {
        name: "Dr. Rebecca Taylor",
        title: "Organizational Psychology Expert",
        experience: "12 years",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616b612b788?w=150&h=150&fit=crop&crop=face",
      },
      lessons: 32,
      certificate: true,
      featured: true,
    },

    // Math & Logic (12 Courses)
    {
      id: 37,
      title: "UC Math Course for Kids – Mental Math & Brain Development",
      description:
        "Fun and engaging mathematics course designed to develop mental math skills and cognitive abilities in children.",
      image: "bg-gradient-to-br from-indigo-600 to-purple-700",
      price: { usd: "$199", egp: "3,200EGP" },
      originalPrice: { usd: "$279", egp: "4,500EGP" },
      rating: 4.9,
      students: 2890,
      duration: "16 weeks",
      level: "Beginner",
      category: "Math & Logic",
      instructor: {
        name: "Prof. Sarah Kim",
        title: "Children's Mathematics Specialist",
        experience: "11 years",
        avatar:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      },
      lessons: 64,
      certificate: true,
      featured: true,
    },
    {
      id: 38,
      title: "Vedic Math for Kids – Fast Mental Calculation Skills",
      description:
        "Ancient Vedic mathematics techniques for rapid mental calculations and mathematical problem-solving.",
      image: "bg-gradient-to-br from-yellow-600 to-orange-700",
      price: { usd: "$229", egp: "3,700EGP" },
      originalPrice: { usd: "$309", egp: "4,900EGP" },
      rating: 4.8,
      students: 2345,
      duration: "12 weeks",
      level: "Intermediate",
      category: "Math & Logic",
      instructor: {
        name: "Prof. Rajesh Sharma",
        title: "Vedic Mathematics Expert",
        experience: "14 years",
        avatar:
          "https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=150&h=150&fit=crop&crop=face",
      },
      lessons: 48,
      certificate: true,
      featured: true,
    },
  ];

  const categories = [
    "All",
    "Global Languages",
    "Programming & Technology",
    "Design & Creative Arts",
    "Healthcare & Medical Training",
    "Business & Professional Development",
    "Math & Logic",
  ];
  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());

    let matchesFilter = true;
    if (filterBy !== "all") {
      // Map filter values to actual category names
      const categoryMap: { [key: string]: string } = {
        languages: "Global Languages",
        development: "Programming & Technology",
        design: "Design & Creative Arts",
        healthcare: "Healthcare & Medical Training",
        business: "Business & Professional Development",
        math: "Math & Logic",
      };

      const targetCategory = categoryMap[filterBy];
      matchesFilter = targetCategory
        ? course.category === targetCategory
        : true;
    }

    return matchesSearch && matchesFilter;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return (
          parseInt(a.price.usd.replace("$", "")) -
          parseInt(b.price.usd.replace("$", ""))
        );
      case "price-high":
        return (
          parseInt(b.price.usd.replace("$", "")) -
          parseInt(a.price.usd.replace("$", ""))
        );
      case "rating":
        return b.rating - a.rating;
      case "students":
        return b.students - a.students;
      default:
        return b.featured ? 1 : -1;
    }
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <FloatingElement className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <FloatingElement
            className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"
            duration={8000}
          />
        </div>

        <div className="container mx-auto px-4 text-center relative">
          <AnimatedSection animation="fade-up" className="mb-12">
            <Badge className="mb-4 px-4 py-2 text-sm bg-primary/10 text-primary border-primary/20">
              <BookOpen className="mr-2 h-4 w-4" />
              {t("courses.badge")}
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              {t("courses.title")}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t("courses.subtitle")}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Search and Filter Section */}
          <AnimatedSection
            animation="slide-up"
            delay={200}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="relative md:col-span-2">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder={t("courses.search")}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12 bg-background/50 border-border/50 focus:border-primary/50 transition-all duration-300"
                  />
                </div>

                <Select value={filterBy} onValueChange={setFilterBy}>
                  <SelectTrigger className="h-12 bg-background/50 border-border/50">
                    <Filter className="mr-2 h-4 w-4" />
                    <SelectValue placeholder={t("courses.filter.category")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">
                      {t("courses.category.all")}
                    </SelectItem>
                    <SelectItem value="languages">Global Languages</SelectItem>
                    <SelectItem value="development">
                      Programming & Technology
                    </SelectItem>
                    <SelectItem value="design">
                      Design & Creative Arts
                    </SelectItem>
                    <SelectItem value="healthcare">
                      Healthcare & Medical Training
                    </SelectItem>
                    <SelectItem value="business">
                      Business & Professional Development
                    </SelectItem>
                    <SelectItem value="math">Math & Logic</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="h-12 bg-background/50 border-border/50">
                    <TrendingUp className="mr-2 h-4 w-4" />
                    <SelectValue placeholder={t("courses.sort.title")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">
                      {t("courses.sort.popular")}
                    </SelectItem>
                    <SelectItem value="rating">
                      {t("courses.sort.rating")}
                    </SelectItem>
                    <SelectItem value="students">
                      {t("courses.sort.students")}
                    </SelectItem>
                    <SelectItem value="price-low">
                      {t("courses.sort.priceLow")}
                    </SelectItem>
                    <SelectItem value="price-high">
                      {t("courses.sort.priceHigh")}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  {t("courses.results", { count: sortedCourses.length })}
                </p>
                <div className="flex items-center gap-2">
                  <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Courses Grid */}
          <AnimatedSection animation="fade-up" delay={400} className="mt-16">
            <StaggeredList
              className={`grid gap-8 ${
                viewMode === "grid"
                  ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1"
              }`}
              itemClassName="group"
              delay={100}
            >
              {sortedCourses.map((course) => (
                <MagneticButton key={course.id} intensity={8}>
                  <Card
                    className={`course-card card-hover bg-card/80 backdrop-blur-sm border-2 border-transparent hover:border-primary/20 overflow-hidden group transition-all duration-300 ${
                      viewMode === "list" ? "flex flex-row" : "h-full"
                    }`}
                  >
                    <div
                      className={`relative overflow-hidden ${
                        viewMode === "list" ? "w-80 h-48 flex-shrink-0" : "h-48"
                      } ${course.image}`}
                    >
                      {/* Featured Badge */}
                      {course.featured && (
                        <FloatingElement className="absolute top-4 left-4 z-10">
                          <Badge className="bg-yellow-500 text-yellow-900 shadow-lg">
                            <Sparkles className="mr-1 h-3 w-3" />
                            Featured
                          </Badge>
                        </FloatingElement>
                      )}

                      {/* Level Badge */}
                      <FloatingElement className="absolute top-4 right-4 z-10">
                        <Badge className="bg-white/95 text-gray-800 shadow-lg backdrop-blur-sm">
                          {course.level}
                        </Badge>
                      </FloatingElement>

                      {/* Category Badge */}
                      <div className="absolute bottom-4 left-4 z-10">
                        <Badge className="bg-primary text-primary-foreground">
                          {course.category}
                        </Badge>
                      </div>

                      {/* Price */}
                      <div className="absolute bottom-4 right-4 z-10">
                        <div className="text-white font-bold text-lg bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                          <span className="text-lg font-bold">
                            {isEgyptUser === true
                              ? course.price.egp
                              : course.price.usd}
                          </span>
                          <span className="text-sm line-through opacity-60 ml-2">
                            {isEgyptUser === true
                              ? course.originalPrice.egp
                              : course.originalPrice.usd}
                          </span>
                        </div>
                      </div>

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500" />
                    </div>

                    <div
                      className={`${
                        viewMode === "list" ? "flex-1" : ""
                      } flex flex-col`}
                    >
                      <CardHeader className="pb-4">
                        <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                          {course.title}
                        </CardTitle>
                        <p className="text-muted-foreground text-sm line-clamp-2">
                          {course.description}
                        </p>
                      </CardHeader>

                      <CardContent className="space-y-4 flex-1 flex flex-col">
                        {/* Instructor Information */}
                        <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                          <Avatar className="w-10 h-10">
                            <AvatarImage
                              src={course.instructor.avatar}
                              alt={course.instructor.name}
                            />
                            <AvatarFallback>
                              <User className="h-5 w-5" />
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm truncate">
                              {course.instructor.name}
                            </p>
                            <p className="text-xs text-muted-foreground truncate">
                              {course.instructor.title}
                            </p>
                            <p className="text-xs text-primary font-medium">
                              <Calendar className="inline h-3 w-3 mr-1" />
                              {course.instructor.experience} experience
                            </p>
                          </div>
                        </div>

                        {/* Course Stats */}
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-medium">{course.rating}</span>
                          </div>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Users className="h-4 w-4" />
                            <span className="font-medium">
                              {course.students.toLocaleString()}
                            </span>
                          </div>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span className="font-medium">
                              {course.duration}
                            </span>
                          </div>
                        </div>

                        {/* Course Details */}
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span>{course.lessons} lessons</span>
                          {course.certificate && (
                            <div className="flex items-center gap-1">
                              <Award className="h-4 w-4" />
                              <span>Certificate</span>
                            </div>
                          )}
                        </div>

                        {/* Action Button */}
                        <Link to="/course-details" className="mt-auto">
                          <Button className="w-full bg-primary hover:bg-primary/90 shadow-lg group-hover:shadow-xl transition-all duration-300">
                            <span>{t("courses.viewDetails")}</span>
                            <Play className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </CardContent>
                    </div>
                  </Card>
                </MagneticButton>
              ))}
            </StaggeredList>
          </AnimatedSection>

          {/* Load More Button */}
          {sortedCourses.length > 6 && (
            <AnimatedSection
              animation="fade-up"
              delay={600}
              className="text-center mt-16"
            >
              <MagneticButton>
                <Button size="lg" variant="outline" className="px-8">
                  {t("courses.loadMore")}
                  <ChevronDown className="ml-2 h-5 w-5" />
                </Button>
              </MagneticButton>
            </AnimatedSection>
          )}
        </div>
      </section>
    </Layout>
  );
}
