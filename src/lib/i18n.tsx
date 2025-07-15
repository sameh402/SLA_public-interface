import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export type Language = "en" | "ar";
export type Direction = "ltr" | "rtl";

interface I18nContextType {
  language: Language;
  direction: Direction;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.courses": "Courses",
    "nav.about": "About",
    "nav.contact": "Contact",

    // Home Page - Hero Section
    "home.hero.title": "Smart Learning Academy",
    "home.hero.subtitle": "Transform Your Future with Expert-Led Courses",
    "home.hero.description":
      "Join thousands of students in our world-class educational platform. Learn from industry experts.",
    "home.hero.cta": "Explore Courses",
    "home.hero.secondary": "Learn More",
    "home.hero.slide1.title": "Smart Learning Academy",
    "home.hero.slide1.subtitle":
      "Transform Your Future with Expert-Led Courses",
    "home.hero.slide1.description":
      "Join thousands of students in our world-class educational platform.",
    "home.hero.slide2.title": "Expert-Led Training",
    "home.hero.slide2.subtitle": "Learn from Industry Professionals",
    "home.hero.slide2.description":
      "Our courses are designed and taught by experts with real-world experience in their fields.",
    "home.hero.slide3.title": "Flexible Learning",
    "home.hero.slide3.subtitle": "Study at Your Own Pace",
    "home.hero.slide3.description":
      "Access courses anytime, anywhere. Our platform adapts to your schedule and learning style.",

    // Home Page - Stats
    "home.stats.title": "Our Impact",
    "home.stats.subtitle": "Trusted by thousands of learners worldwide",
    "home.stats.students": "Students Trained",
    "home.stats.courses": "Available Courses",
    "home.stats.instructors": "Expert Instructors",
    "home.stats.completion": "Success Rate",

    // Home Page - Featured Courses
    "home.categories.title": "Explore Course Categories",
    "home.categories.subtitle":
      "Discover diverse learning opportunities across various fields and industries",
    "home.categories.badge": "Course Categories",

    // Home Page - Success Stories
    "home.success.title": "Success Stories",
    "home.success.subtitle": "Real transformations from our learning community",
    "home.success.badge": "Student Success",

    // Home Page - FAQ
    "home.faq.title": "Frequently Asked Questions",
    "home.faq.subtitle":
      "Find answers to common questions about our platform and courses",
    "home.faq.badge": "FAQ",

    // Home Page - Payment Methods
    "home.payment.title": "Secure Payment Methods",
    "home.payment.subtitle":
      "We accept all major payment methods for your convenience",
    "home.payment.security":
      "All transactions are secured with military-grade encryption. Your payment information is never stored on our servers.",
    "home.payment.encryption": "256-bit SSL Encryption",

    // Home Page - CTA
    "home.cta.title": "Ready to Start Learning?",
    "home.cta.subtitle":
      "Join thousands of students who have transformed their careers with our expert-led courses.",
    "home.cta.button": "Browse Courses",
    "home.cta.contact": "Contact Us",
    "home.cta.final.title": "Ready to Start Learning?",
    "home.cta.final.subtitle":
      "Join students who have transformed their careers with our expert-led courses.",
    "home.cta.final.button": "Enroll Now",
    "home.cta.final.features.guarantee": "30-Day Money Back Guarantee",
    "home.cta.final.features.certificates": "Industry-Recognized Certificates",
    "home.cta.final.features.support": "24/7 Student Support",

    // Courses Page
    "courses.title": "All Courses",
    "courses.subtitle":
      "Discover our comprehensive collection of expert-led courses designed to advance your career and expand your knowledge.",
    "courses.search": "Search courses...",
    "courses.filter.category": "Category",
    "courses.filter.sort": "Sort by",
    "courses.found": "Found",
    "courses.results": "courses",
    "courses.viewMode.grid": "Grid View",
    "courses.viewMode.list": "List View",
    "courses.sort.popular": "Most Popular",
    "courses.sort.rating": "Highest Rated",
    "courses.sort.students": "Most Students",
    "courses.sort.priceLow": "Price: Low to High",
    "courses.sort.priceHigh": "Price: High to Low",
    "courses.category.all": "All",
    "courses.category.development": "Development",
    "courses.category.marketing": "Marketing",
    "courses.category.dataScience": "Data Science",
    "courses.category.design": "Design",
    "courses.category.business": "Business",
    "courses.level.all": "All Levels",
    "courses.level.beginner": "Beginner",
    "courses.level.intermediate": "Intermediate",
    "courses.level.advanced": "Advanced",
    "courses.instructor": "Instructor",
    "courses.duration": "Duration",
    "courses.students": "students",
    "courses.lessons": "lessons",
    "courses.certificate": "Certificate included",
    "courses.viewDetails": "View Details",
    "courses.noResults.title": "No courses found",
    "courses.noResults.description":
      "Try adjusting your search criteria or filters.",
    "courses.noResults.clear": "Clear Filters",
    "courses.cta.title": "Ready to Start Learning?",
    "courses.cta.subtitle":
      "Join thousands of students who have transformed their careers with our expert-led courses.",
    "courses.cta.button": "Get Started Today",

    // Course Details Page
    "courseDetails.badge.featured": "Featured Course",
    "courseDetails.instructor": "Instructor",
    "courseDetails.students": "students",
    "courseDetails.rating": "rating",
    "courseDetails.reviews": "reviews",
    "courseDetails.duration": "Duration",
    "courseDetails.language": "Language",
    "courseDetails.lastUpdated": "Last updated",
    "courseDetails.certificate": "Certificate",
    "courseDetails.price.original": "Original Price",
    "courseDetails.price.current": "Current Price",
    "courseDetails.price.discount": "OFF",
    "courseDetails.price.payment": "One-time payment",
    "courseDetails.price.access": "Lifetime access",
    "courseDetails.enroll": "Enroll Now",
    "courseDetails.enrolled": "Enrolled",
    "courseDetails.save": "Save",
    "courseDetails.saved": "Saved",
    "courseDetails.share": "Share",
    "courseDetails.preview": "Preview",
    "courseDetails.includes": "This course includes:",
    "courseDetails.guarantee": "30-day money-back guarantee",
    "courseDetails.features.video": "hours of HD video content",
    "courseDetails.features.resources": "Downloadable resources",
    "courseDetails.features.mobile": "Mobile and TV access",
    "courseDetails.features.certificate": "Certificate of completion",
    "courseDetails.features.lifetime": "Lifetime access",
    "courseDetails.features.support": "24/7 student support",
    "courseDetails.tabs.overview": "Overview",
    "courseDetails.tabs.curriculum": "Curriculum",
    "courseDetails.tabs.instructor": "Instructor",
    "courseDetails.tabs.reviews": "Reviews",
    "courseDetails.learn.title": "What You'll Learn",
    "courseDetails.requirements.title": "Requirements",
    "courseDetails.description.title": "Course Description",
    "courseDetails.curriculum.title": "Course Curriculum",
    "courseDetails.curriculum.lessons": "lessons",
    "courseDetails.curriculum.hours": "hours total",
    "courseDetails.instructor.about": "About the Instructor",
    "courseDetails.instructor.expertise": "Expertise",
    "courseDetails.instructor.students": "Students",
    "courseDetails.instructor.courses": "Courses",
    "courseDetails.instructor.rating": "Rating",
    "courseDetails.reviews.title": "Student Reviews",
    "courseDetails.cta.title": "Ready to Start Learning?",
    "courseDetails.cta.subtitle":
      "Join thousands of students who have transformed their careers with this course.",

    // About Page
    "about.title": "About Us",
    "about.subtitle":
      "Learn about our leadership, mission, and the passionate team behind Smart Learning Academy.",
    "about.badge": "About Us",
    "about.leadership.title": "Meet Our Leadership",
    "about.leadership.subtitle":
      "Leading with vision, expertise, and unwavering commitment to excellence.",
    "about.leadership.name": "Dr. Sally Abo Elsaad",
    "about.leadership.title.position":
      "Chief Executive Officer / CEO of Smart Learning Academy",
    "about.leadership.bio":
      "Dr. Sally is a visionary leader with a passion for transforming healthcare and education. Her unique combination of medical expertise and business acumen has positioned Smart Learning Academy as a leading educational institution in the region.",
    "about.leadership.contact.email": "sally.ceo@smartlearning.academy",
    "about.leadership.contact.phone": "+966 50 123 4567",
    "about.leadership.contact.office": "Riyadh, Saudi Arabia",
    "about.leadership.about": "About Dr. Sally",
    "about.leadership.experience": "Experience",
    "about.leadership.previousRole": "Previous Role",
    "about.leadership.qualifications": "Qualifications & Certifications",
    "about.leadership.achievements": "Key Achievements",
    "about.stats.experience": "Years of Experience",
    "about.stats.trained": "Students Trained",
    "about.stats.papers": "Research Papers",
    "about.stats.success": "Success Rate",
    "about.values.title": "Our Foundation",
    "about.values.subtitle":
      "The core principles that guide our mission and drive our success.",
    "about.values.mission.title": "Our Mission",
    "about.values.mission.description":
      "To provide world-class education that empowers individuals to achieve their full potential and contribute meaningfully to society.",
    "about.values.vision.title": "Our Vision",
    "about.values.vision.description":
      "To be the leading educational platform in the Middle East, known for innovation, excellence, and transformative learning experiences.",
    "about.values.values.title": "Our Values",
    "about.values.values.description":
      "Excellence, Innovation, Integrity, Inclusivity, and Student-Centricity guide everything we do.",
    "about.timeline.title": "Our Journey",
    "about.timeline.subtitle":
      "Key milestones in Dr. Sally's remarkable career and the evolution of Smart Learning Academy.",
    "about.cta.title": "Ready to Learn with Us?",
    "about.cta.subtitle":
      "Join our community of learners and be part of the Smart Learning Academy family.",
    "about.cta.button": "Start Your Journey",

    // Contact Page
    "contact.title": "Contact Us",
    "contact.subtitle":
      "If you have any inquiries, please contact us. We're here to help you start your learning journey.",
    "contact.badge": "Get in Touch",
    "contact.info.email.title": "Email Us",
    "contact.info.email.value": "info@smartlearning.academy",
    "contact.info.email.description": "Send us an email anytime",
    "contact.info.phone.title": "Call Us",
    "contact.info.phone.value": "+966 50 123 4567",
    "contact.info.phone.description": "Mon-Fri from 8am to 5pm",
    "contact.info.location.title": "Visit Us",
    "contact.info.location.value": "Riyadh, Saudi Arabia",
    "contact.info.location.description": "Main campus location",
    "contact.info.support.title": "Support",
    "contact.info.support.value": "24/7 Available",
    "contact.info.support.description": "We're here to help",
    "contact.form.title": "Send Us a Message",
    "contact.form.subtitle":
      "Fill out the form below and we'll get back to you as soon as possible.",
    "contact.form.contactForm": "Contact Form",
    "contact.form.firstName": "First Name",
    "contact.form.firstName.placeholder": "Enter your first name",
    "contact.form.lastName": "Last Name",
    "contact.form.lastName.placeholder": "Enter your last name",
    "contact.form.nationality": "Nationality",
    "contact.form.nationality.placeholder": "Select your nationality",
    "contact.form.email": "Email Address",
    "contact.form.email.placeholder": "Enter your email address",
    "contact.form.phone": "Phone Number",
    "contact.form.phone.placeholder": "Enter your phone number",
    "contact.form.course": "Course Interest",
    "contact.form.course.placeholder": "Select a course (optional)",
    "contact.form.message": "Message",
    "contact.form.message.placeholder": "Tell us more about your inquiry...",
    "contact.form.submit": "Let's Talk",
    "contact.form.sending": "Sending...",
    "contact.form.success.title": "Message Sent Successfully! 🎉",
    "contact.form.success.description":
      "Thank you for contacting us. We'll get back to you within 24 hours.",
    "contact.whatsapp.title": "WhatsApp",
    "contact.whatsapp.description":
      "Prefer instant messaging? Connect with us on WhatsApp for quick responses.",
    "contact.whatsapp.number": "+966547232354",
    "contact.response.title": "Response Time",
    "contact.response.email": "Email: Within 24 hours",
    "contact.response.whatsapp": "WhatsApp: Within 2 hours",
    "contact.response.phone": "Phone: Immediate",
    "contact.hours.title": "Office Hours",
    "contact.hours.weekdays": "Sunday - Thursday",
    "contact.hours.weekdays.time": "8:00 AM - 5:00 PM",
    "contact.hours.friday": "Friday",
    "contact.hours.friday.time": "8:00 AM - 2:00 PM",
    "contact.hours.saturday": "Saturday",
    "contact.hours.saturday.time": "Closed",
    "contact.help.title": "Need Immediate Help?",
    "contact.help.subtitle":
      "Check out our FAQ section or reach out to our support team for instant assistance.",
    "contact.help.support": "Support Center",
    "contact.help.faq": "FAQ",

    // Common Terms
    "common.loading": "Loading...",
    "common.comingSoon": "Coming Soon",
    "common.pageDescription":
      "This page is being developed and will be available soon.",
    "common.readMore": "Read More",
    "common.showLess": "Show Less",
    "common.viewAll": "View All",
    "common.learnMore": "Learn More",
    "common.getStarted": "Get Started",
    "common.browse": "Browse",
    "common.explore": "Explore",
    "common.discover": "Discover",
    "common.or": "or",
    "common.and": "and",
    "common.of": "of",
    "common.in": "in",
    "common.at": "at",
    "common.by": "by",
    "common.with": "with",
    "common.for": "for",
    "common.from": "from",
    "common.to": "to",
    "common.all": "All",
    "common.none": "None",
    "common.yes": "Yes",
    "common.no": "No",
    "common.save": "Save",
    "common.cancel": "Cancel",
    "common.confirm": "Confirm",
    "common.delete": "Delete",
    "common.edit": "Edit",
    "common.update": "Update",
    "common.create": "Create",
    "common.add": "Add",
    "common.remove": "Remove",
    "common.close": "Close",
    "common.open": "Open",
    "common.next": "Next",
    "common.previous": "Previous",
    "common.back": "Back",
    "common.continue": "Continue",
    "common.finish": "Finish",
    "common.complete": "Complete",
    "common.start": "Start",
    "common.stop": "Stop",
    "common.pause": "Pause",
    "common.play": "Play",
    "common.share": "Share",
    "common.copy": "Copy",
    "common.download": "Download",
    "common.upload": "Upload",
    "common.search": "Search",
    "common.filter": "Filter",
    "common.sort": "Sort",
    "common.clear": "Clear",
    "common.reset": "Reset",
    "common.apply": "Apply",
    "common.submit": "Submit",
    "common.send": "Send",
    "common.email": "Email",
    "common.phone": "Phone",
    "common.address": "Address",
    "common.name": "Name",
    "common.price": "Price",
    "common.free": "Free",

    // Footer
    "footer.description":
      "Empowering minds through innovative online education. Join thousands of learners transforming their careers with expert-led courses.",
    "footer.contact.title": "Contact Information",
    "footer.contact.email.label": "Email",
    "footer.contact.phone.label": "Phone",
    "footer.contact.address.label": "Address",
    "footer.social.title": "Follow Us",
    "footer.location.title": "Find Us",
    "footer.quickLinks.title": "Quick Links",
    "footer.categories.title": "Course Categories",
    "footer.categories.languages": "Global Languages",
    "footer.categories.technology": "Programming & Technology",
    "footer.categories.design": "Design & Creative Arts",
    "footer.categories.business": "Business & Professional",
    "footer.support.title": "Support",
    "footer.support.help": "Help Center",
    "footer.support.faq": "FAQ",
    "footer.support.community": "Community",
    "footer.support.technical": "Technical Support",
    "footer.legal.title": "Legal",
    "footer.legal.privacy": "Privacy Policy",
    "footer.legal.terms": "Terms of Service",
    "footer.legal.cookies": "Cookie Policy",
    "footer.legal.refund": "Refund Policy",
    "common.paid": "Paid",
    "common.premium": "Premium",
    "common.basic": "Basic",
    "common.standard": "Standard",
    "common.advanced": "Advanced",
    "common.beginner": "Beginner",
    "common.intermediate": "Intermediate",
    "common.expert": "Expert",
    "common.new": "New",
    "common.popular": "Popular",
    "common.trending": "Trending",
    "common.featured": "Featured",
    "common.recommended": "Recommended",
    "common.bestseller": "Bestseller",
    "common.online": "Online",
    "common.offline": "Offline",
    "common.live": "Live",
    "common.recorded": "Recorded",
    "common.upcoming": "Upcoming",
    "common.completed": "Completed",
    "common.inProgress": "In Progress",
    "common.notStarted": "Not Started",
    "common.available": "Available",
    "common.unavailable": "Unavailable",
    "common.enabled": "Enabled",
    "common.disabled": "Disabled",
    "common.active": "Active",
    "common.inactive": "Inactive",
    "common.public": "Public",
    "common.private": "Private",
    "common.draft": "Draft",
    "common.published": "Published",
    "common.archived": "Archived",

    // Error Messages
    "error.general": "Something went wrong. Please try again.",
    "error.network": "Network error. Please check your connection.",
    "error.notFound": "Page not found.",
    "error.unauthorized": "You are not authorized to access this page.",
    "error.forbidden": "Access denied.",
    "error.validation": "Please check your input and try again.",
    "error.required": "This field is required.",
    "error.email": "Please enter a valid email address.",
    "error.phone": "Please enter a valid phone number.",
    "error.password": "Password must be at least 8 characters long.",
    "error.passwordMatch": "Passwords do not match.",

    // Success Messages
    "success.general": "Operation completed successfully!",
    "success.saved": "Changes saved successfully!",
    "success.created": "Created successfully!",
    "success.updated": "Updated successfully!",
    "success.deleted": "Deleted successfully!",
    "success.sent": "Message sent successfully!",
    "success.subscribed": "Successfully subscribed!",
    "success.unsubscribed": "Successfully unsubscribed!",

    // 404 Page
    "notFound.title": "Page Not Found",
    "notFound.description":
      "Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.",
    "notFound.home": "Go Home",
    "notFound.back": "Go Back",

    LogIntitle: "Welcome back",
    LogInsubtitle: "Enter your credentials to access your account",
    LogInemail: "Email",
    LogInemail_placeholder: "your@email.com",
    LogInpassword: "Password",
    LogInpassword_placeholder: "••••••••",
    LogInforgot_password: "Forgot password?",
    LogInsubmit: "Sign in",
    LogInor_continue_with: "Or continue with",
    LogInno_account: "Don't have an account?",
    LogInsign_up: "Sign up",
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسي��",
    "nav.courses": "الدورات",
    "nav.about": "من نحن",
    "nav.contact": "اتصل بنا",

    // Home Page - Hero Section
    "home.hero.title": "أكاديمية التعلم الذكي",
    "home.hero.subtitle": "اصنع مستقبلك مع دورات يقودها خبراء",
    "home.hero.description":
      "انضم لآلاف الطلاب في منصتنا التعليمية عالمية المستوى. تعلم من خبراء الصناعة وطور مسيرتك المهنية مع دوراتنا الشاملة.",
    "home.hero.cta": "استكشف الدورات",
    "home.hero.secondary": "اعرف المزيد",
    "home.hero.slide1.title": "أكاديمية التعلم الذكي",
    "home.hero.slide1.subtitle": "اصنع مستقبلك مع دورات يقودها خبراء",
    "home.hero.slide1.description":
      "انضم لآلاف الطلاب في منصتنا التعليمية ع��لمية المستوى. تعلم من خبراء ال��ناعة وطور مسيرتك المهنية مع دوراتنا الشاملة.",
    "home.hero.slide2.title": "تدريب يقوده خبراء",
    "home.hero.slide2.subtitle": "تعلم من محترفي الصناعة",
    "home.hero.slide2.description":
      "دوراتنا مصممة ومُدرَّسة من قبل خبراء لديهم خبرة عملية حقيقية في مجالاتهم.",
    "home.hero.slide3.title": "تعلم مرن",
    "home.hero.slide3.subtitle": "ادرس بالسرعة التي تناسبك",
    "home.hero.slide3.description":
      "اصل للدورات في أي وقت ومن أي مكان. منصتنا تتكيف مع جدولك الزمني وأسلوب تعلمك.",

    // Home Page - Stats
    "home.stats.title": "تأثيرنا",
    "home.stats.subtitle": "موثوق من آلاف المتعلمين حول العالم",
    "home.stats.students": "طالب نشط",
    "home.stats.courses": "دورة متاحة",
    "home.stats.instructors": "مدرب خبير",
    "home.stats.completion": "معدل الإنجاز",

    // Home Page - Featured Courses
    "home.categories.title": "استكشف فئات الدورات",
    "home.categories.subtitle":
      "اكتشف فرص التعلم المتنوعة عبر مختلف المجالات والصناعات",
    "home.categories.badge": "فئات الدورات",

    // Home Page - Success Stories
    "home.success.title": "قصص النجاح",
    "home.success.subtitle": "تحولات حقيقية من مجتمع التعلم لدينا",
    "home.success.badge": "نجاح الطلاب",

    // Home Page - FAQ
    "home.faq.title": "الأسئلة الشائعة",
    "home.faq.subtitle": "اعثر على إجابات للأسئلة الشائعة حول منصتنا ودوراتنا",
    "home.faq.badge": "الأسئلة الشائعة",

    // Home Page - Payment Methods
    "home.payment.title": "طرق دفع آمنة",
    "home.payment.subtitle": "نقبل جميع طرق الدفع الرئيسية لراحتك",
    "home.payment.security":
      "جميع المعاملات محمية بتشفير عسكري. معلومات الدفع الخاصة بك لا يتم تخزينها أبداً على خوادمنا.",
    "home.payment.encryption": "تشفير SSL بـ 256 بت",

    // Home Page - CTA
    "home.cta.title": "جاهز لبدء التعلم؟",
    "home.cta.subtitle":
      "انضم لآلاف ال��لاب الذين حولوا مسيراتهم المهنية مع دوراتنا التي يقودها خبراء.",
    "home.cta.button": "تصفح الدورات",
    "home.cta.contact": "اتصل بنا",
    "home.cta.final.title": "جاهز لبدء التعلم؟",
    "home.cta.final.subtitle":
      "ان��م للطلاب الذين حولوا مسيراتهم المهنية مع دوراتنا.",
    "home.cta.final.button": "سجل الآن",
    "home.cta.final.features.guarantee": "ضمان استرداد المال لمدة 30 يوم",
    "home.cta.final.features.certificates": "شهادات معترف بها في الصناعة",
    "home.cta.final.features.support": "دعم الطلاب 24/7",

    // Courses Page
    "courses.title": "جميع الدورات",
    "courses.subtitle":
      "اكتشف مجموعتنا الشاملة من الدورات التي يقودها خبراء مصممة لتطوير مسيرتك المهنية وتوسيع معرفتك.",
    "courses.search": "البحث في الدورات...",
    "courses.filter.category": "الفئة",
    "courses.filter.sort": "ترتيب حسب",
    "courses.found": "تم العثور على",
    "courses.results": "دورة",
    "courses.viewMode.grid": "عرض الشبكة",
    "courses.viewMode.list": "عرض ا��قائمة",
    "courses.sort.popular": "الأكثر شعبية",
    "courses.sort.rating": "الأعلى تقييماً",
    "courses.sort.students": "الأكثر طلاباً",
    "courses.sort.priceLow": "السعر: من الأقل ��لأعلى",
    "courses.sort.priceHigh": "السعر: من الأعلى للأقل",
    "courses.category.all": "الكل",
    "courses.category.development": "البرمجة",
    "courses.category.marketing": "التسويق",
    "courses.category.dataScience": "علوم البيانات",
    "courses.category.design": "التصميم",
    "courses.category.business": "الأعمال",
    "courses.level.all": "جميع المستويات",
    "courses.level.beginner": "مبتدئ",
    "courses.level.intermediate": "متوسط",
    "courses.level.advanced": "متقدم",
    "courses.instructor": "المدرب",
    "courses.duration": "المدة",
    "courses.students": "طالب",
    "courses.lessons": "درس",
    "courses.certificate": "شهادة مضمنة",
    "courses.viewDetails": "عرض التفاصيل",
    "courses.noResults.title": "لم يتم العثور على دورات",
    "courses.noResults.description": "حاول تعديل معايير البحث أو المرشحات.",
    "courses.noResults.clear": "مسح المرشحات",
    "courses.cta.title": "جاهز لبدء التعلم؟",
    "courses.cta.subtitle":
      "انضم لآلاف الطلاب الذين حول��ا مسي��اتهم المهنية مع دوراتنا التي يقودها خبراء.",
    "courses.cta.button": "ابدأ اليوم",

    // Course Details Page
    "courseDetails.badge.featured": "دورة مميزة",
    "courseDetails.instructor": "المدرب",
    "courseDetails.students": "طالب",
    "courseDetails.rating": "التقييم",
    "courseDetails.reviews": "مراجعة",
    "courseDetails.duration": "المدة",
    "courseDetails.language": "اللغة",
    "courseDetails.lastUpdated": "آخر تحديث",
    "courseDetails.certificate": "الشهادة",
    "courseDetails.price.original": "السعر الأصلي",
    "courseDetails.price.current": "السعر الحالي",
    "courseDetails.price.discount": "خصم",
    "courseDetails.price.payment": "دفعة واحدة",
    "courseDetails.price.access": "وصول مدى الحياة",
    "courseDetails.enroll": "سجل الآن",
    "courseDetails.enrolled": "مسجل",
    "courseDetails.save": "حفظ",
    "courseDetails.saved": "محفوظ",
    "courseDetails.share": "مشاركة",
    "courseDetails.preview": "معاينة",
    "courseDetails.includes": "تتضمن هذه الدورة:",
    "courseDetails.guarantee": "ضمان استرداد المال لمدة 30 يوم",
    "courseDetails.features.video": "ساعة من محتوى الفيديو عالي الدقة",
    "courseDetails.features.resources": "موارد قابلة للتحميل",
    "courseDetails.features.mobile": "وصول من الجوال والتلفزيون",
    "courseDetails.features.certificate": "شهادة إتمام",
    "courseDetails.features.lifetime": "وصول مدى الحياة",
    "courseDetails.features.support": "دعم الطلاب 24/7",
    "courseDetails.tabs.overview": "نظرة عامة",
    "courseDetails.tabs.curriculum": "المنهج",
    "courseDetails.tabs.instructor": "المدرب",
    "courseDetails.tabs.reviews": "التقييمات",
    "courseDetails.learn.title": "ما ستتعلمه",
    "courseDetails.requirements.title": "المتطلبات",
    "courseDetails.description.title": "وصف الدورة",
    "courseDetails.curriculum.title": "منهج الدورة",
    "courseDetails.curriculum.lessons": "دروس",
    "courseDetails.curriculum.hours": "ساعة إجمالي",
    "courseDetails.instructor.about": "عن المدرب",
    "courseDetails.instructor.expertise": "الخبرة",
    "courseDetails.instructor.students": "الطلاب",
    "courseDetails.instructor.courses": "الدورات",
    "courseDetails.instructor.rating": "التقييم",
    "courseDetails.reviews.title": "تقييمات الطلاب",
    "courseDetails.cta.title": "جاهز لبدء التعلم؟",
    "courseDetails.cta.subtitle":
      "انضم لآلاف الطلاب الذين حولوا مسيراتهم المهنية مع هذه الدورة.",

    // About Page
    "about.title": "من نحن",
    "about.subtitle":
      "تعرف على قيادتنا ومهمتنا والفريق المتحمس وراء أكاديمية التعلم الذكي.",
    "about.badge": "من نحن",
    "about.leadership.title": "تعرف على قيادتنا",
    "about.leadership.subtitle":
      "نقود بالرؤية والخبرة والالتزام الثابت بالتميز.",
    "about.leadership.name": "د. سالي ��بو السعد",
    "about.leadership.title.position":
      "الرئيس ا��تنفيذي / رئيس أكاديمية التعلم الذكي",
    "about.leadership.bio":
      "د. سالي قائدة ذات رؤية لديها شغف لتحويل ��لرعاية الصحية والتعليم. مزيجها الفريد من الخبرة ال��بية والمهارات التجارية وضع أكاديمية التعلم الذكي كمؤسسة تعليمية رائدة في المنطقة.",
    "about.leadership.contact.email": "sally.ceo@smartlearning.academy",
    "about.leadership.contact.phone": "+966 50 123 4567",
    "about.leadership.contact.office": "الرياض، المملكة العربية السعودية",
    "about.leadership.about": "عن د. سالي",
    "about.leadership.experience": "الخبرة",
    "about.leadership.previousRole": "المنصب السابق",
    "about.leadership.qualifications": "المؤهلات والشهادات",
    "about.leadership.achievements": "الإنجازات الرئيسية",
    "about.stats.experience": "سنوا�� الخبرة",
    "about.stats.trained": "طالب مدرب",
    "about.stats.papers": "بحث علمي",
    "about.stats.success": "معدل النجاح",
    "about.values.title": "أسسنا",
    "about.values.subtitle": "المبادئ الأساسية التي توجه مهمتنا وتقود نجاحنا.",
    "about.values.mission.title": "مهمت��ا",
    "about.values.mission.description":
      "توفير تعليم عالمي المستوى يمكن الأفراد من تحقيق إمكاناتهم الكاملة والمساهمة بشكل هادف في المجتمع.",
    "about.values.vision.title": "رؤيتنا",
    "about.values.vision.description":
      "أن نكون المنصة التعليمية الرائدة في الشرق الأوسط، المعروفة بالابتكار والتميز وتجارب التعلم التحويلية.",
    "about.values.values.title": "قيمنا",
    "about.values.values.description":
      "التميز والابتكار والنزاهة والشمولية والتركيز على الطالب توجه كل ما نفعله.",
    "about.timeline.title": "رحلتنا",
    "about.timeline.subtitle":
      "المعالم الرئيسية في مسيرة د. سالي الرائعة وتطور أكاديمية التعلم الذكي.",
    "about.cta.title": "جاهز للتعلم معنا؟",
    "about.cta.subtitle":
      "انضم لمجتمع المتعلمين وكن جزءاً من عائلة أكاديمية التعلم الذكي.",
    "about.cta.button": "ابدأ رحلتك",

    // Contact Page
    "contact.title": "اتصل بنا",
    "contact.subtitle":
      "إذا كان لديك أي استفسارات، يرجى الاتصال بنا. نحن هنا لمساعدتك في بدء رحلة التعلم.",
    "contact.badge": "تواصل معنا",
    "contact.info.email.title": "راسلنا",
    "contact.info.email.value": "info@smartlearning.academy",
    "contact.info.email.description": "أرسل لنا إيميل في أي وقت",
    "contact.info.phone.title": "اتصل بنا",
    "contact.info.phone.value": "+966 50 123 4567",
    "contact.info.phone.description": "الأحد-الخميس من 8 صباحاً إلى 5 مساءً",
    "contact.info.location.title": "زرنا",
    "contact.info.location.value": "الرياض، المملكة العربية السعودية",
    "contact.info.location.description": "موقع الحرم الجامعي الرئيسي",
    "contact.info.support.title": "الدعم",
    "contact.info.support.value": "متاح 24/7",
    "contact.info.support.description": "نحن هنا للمساعدة",
    "contact.form.title": "أرسل لنا رسالة",
    "contact.form.subtitle":
      "املأ النموذج أدناه وسنعاود الاتصال بك في أقرب وقت ممكن.",
    "contact.form.contactForm": "نموذج الاتصال",
    "contact.form.firstName": "الاسم الأول",
    "contact.form.firstName.placeholder": "أدخل اسمك الأول",
    "contact.form.lastName": "اسم العائلة",
    "contact.form.lastName.placeholder": "أدخل اسم العائلة",
    "contact.form.nationality": "الجنسية",
    "contact.form.nationality.placeholder": "اختر جنسيتك",
    "contact.form.email": "عنوان البريد الإلكتروني",
    "contact.form.email.placeholder": "أدخل عنوان بريدك الإلكتروني",
    "contact.form.phone": "رقم الهاتف",
    "contact.form.phone.placeholder": "أدخل رقم هاتفك",
    "contact.form.course": "الدورة المهتم بها",
    "contact.form.course.placeholder": "اختر دورة (اختياري)",
    "contact.form.message": "الر��الة",
    "contact.form.message.placeholder": "أخبرنا المزيد عن استفسارك...",
    "contact.form.submit": "لنتحدث",
    "contact.form.sending": "جاري الإرسال...",
    "contact.form.success.title": "تم إرسال الرسالة بنجاح! 🎉",
    "contact.form.success.description":
      "شكراً لك للتواصل معنا. سنعاود الاتصال بك خلال 24 ساعة.",
    "contact.whatsapp.title": "واتساب",
    "contact.whatsapp.description":
      "تفضل الرسائل الفورية؟ تواصل معنا على واتساب للحصول على ردود سريعة.",
    "contact.whatsapp.number": "+966547232354",
    "contact.response.title": "وقت ال��ستجابة",
    "contact.response.email": "البريد الإلكتروني: خلال 24 ساعة",
    "contact.response.whatsapp": "واتساب: خلال ساعتين",
    "contact.response.phone": "الهاتف: فوري",
    "contact.hours.title": "ساعات العمل",
    "contact.hours.weekdays": "الأحد - الخميس",
    "contact.hours.weekdays.time": "8:00 صباحاً - 5:00 مساءً",
    "contact.hours.friday": "الجمعة",
    "contact.hours.friday.time": "8:00 صباحاً - 2:00 ظهراً",
    "contact.hours.saturday": "السبت",
    "contact.hours.saturday.time": "مغلق",
    "contact.help.title": "تحتاج مساعدة فورية؟",
    "contact.help.subtitle":
      "تحقق من قسم الأسئلة الشائعة أو تواصل مع فريق الدعم للحصول على مساعدة فورية.",
    "contact.help.support": "مركز الدعم",
    "contact.help.faq": "الأسئلة الشائعة",

    // Common Terms
    "common.loading": "جاري التحميل...",
    "common.comingSoon": "قريباً",
    "common.pageDescription": "هذه الصفحة قيد التطوير وستكون متاحة قريباً.",
    "common.readMore": "اقرأ المزيد",
    "common.showLess": "عرض أقل",
    "common.viewAll": "عرض الكل",
    "common.learnMore": "اعرف المزيد",
    "common.getStarted": "ابدأ",
    "common.browse": "تصفح",
    "common.explore": "استكشف",
    "common.discover": "اكتشف",
    "common.or": "أو",
    "common.and": "و",
    "common.of": "من",
    "common.in": "في",
    "common.at": "في",
    "common.by": "بواسطة",
    "common.with": "مع",
    "common.for": "لـ",
    "common.from": "من",
    "common.to": "إلى",
    "common.all": "الكل",
    "common.none": "لا شيء",
    "common.yes": "نعم",
    "common.no": "لا",
    "common.save": "حفظ",
    "common.cancel": "إلغاء",
    "common.confirm": "تأكيد",
    "common.delete": "حذف",
    "common.edit": "تعديل",
    "common.update": "تحديث",
    "common.create": "إنشاء",
    "common.add": "إضافة",
    "common.remove": "إزالة",
    "common.close": "إغلاق",
    "common.open": "فتح",
    "common.next": "التالي",
    "common.previous": "السابق",
    "common.back": "رجوع",
    "common.continue": "متابعة",
    "common.finish": "إنهاء",
    "common.complete": "إكمال",
    "common.start": "بدء",
    "common.stop": "توقف",
    "common.pause": "إيقاف مؤقت",
    "common.play": "تشغيل",
    "common.share": "مشاركة",
    "common.copy": "نسخ",
    "common.download": "تحميل",
    "common.upload": "رفع",
    "common.search": "بحث",
    "common.filter": "تصفية",
    "common.sort": "ترتيب",
    "common.clear": "مسح",
    "common.reset": "إعادة تعيين",
    "common.apply": "تطبيق",
    "common.submit": "إرسال",
    "common.send": "إرسال",
    "common.email": "بريد إلكتروني",
    "common.phone": "هاتف",
    "common.address": "عنوان",
    "common.name": "الاسم",
    "common.price": "السعر",
    "common.free": "مجاني",

    // Footer
    "footer.description":
      "تمكين العقول من خلال التعليم الإلكتروني المبتكر. انضم لآلاف المتعلمين الذين يحولون مسيراتهم المهنية مع دوراتنا.",
    "footer.contact.title": "معلومات الاتصال",
    "footer.contact.email.label": "البريد الإلكتروني",
    "footer.contact.phone.label": "الهاتف",
    "footer.contact.address.label": "العنوان",
    "footer.social.title": "تابعنا",
    "footer.location.title": "موقعنا",
    "footer.quickLinks.title": "روابط سريعة",
    "footer.categories.title": "فئات الدورات",
    "footer.categories.languages": "اللغات العالمية",
    "footer.categories.technology": "البرمجة والتكنولوجيا",
    "footer.categories.design": "التصميم والفنون الإبداعية",
    "footer.categories.business": "الأعمال والتطوير المهني",
    "footer.support.title": "الدعم",
    "footer.support.help": "مركز المساعدة",
    "footer.support.faq": "الأسئلة الشائعة",
    "footer.support.community": "المجتمع",
    "footer.support.technical": "الدعم التقني",
    "footer.legal.title": "قانوني",
    "footer.legal.privacy": "سياسة الخصوصية",
    "footer.legal.terms": "شروط الخدمة",
    "footer.legal.cookies": "سياسة ملفات تعريف الارتباط",
    "footer.legal.refund": "سياسة الاسترداد",
    "common.paid": "مدفوع",
    "common.premium": "متميز",
    "common.basic": "أساسي",
    "common.standard": "قياسي",
    "common.advanced": "متقدم",
    "common.beginner": "مبتدئ",
    "common.intermediate": "متوسط",
    "common.expert": "خبير",
    "common.new": "جديد",
    "common.popular": "شائع",
    "common.trending": "رائج",
    "common.featured": "مميز",
    "common.recommended": "موصى به",
    "common.bestseller": "الأكثر مبيعا��",
    "common.online": "أونلاين",
    "common.offline": "أوفلاين",
    "common.live": "مباشر",
    "common.recorded": "مسجل",
    "common.upcoming": "ق��دم",
    "common.completed": "مكتمل",
    "common.inProgress": "قيد التقدم",
    "common.notStarted": "لم يبدأ",
    "common.available": "متاح",
    "common.unavailable": "غير متاح",
    "common.enabled": "مفعل",
    "common.disabled": "معطل",
    "common.active": "نشط",
    "common.inactive": "غير نشط",
    "common.public": "عام",
    "common.private": "خاص",
    "common.draft": "مسودة",
    "common.published": "منشور",
    "common.archived": "مؤرشف",

    // Error Messages
    "error.general": "حدث خطأ ما. يرجى المحا��لة مرة أخرى.",
    "error.network": "خطأ في الشبكة. يرجى التحقق من اتصالك.",
    "error.notFound": "الصفحة غير موجودة.",
    "error.unauthorized": "غير ��خول للوصول إلى هذه الصفحة.",
    "error.forbidden": "تم رفض الوصول.",
    "error.validation": "يرجى التحقق من المدخلات والمحاولة مرة أخرى.",
    "error.required": "هذا الحقل مطلوب.",
    "error.email": "يرجى إدخال عنوان بريد إلكتروني صحيح.",
    "error.phone": "يرجى إدخال ر��م هاتف صحيح.",
    "error.password": "كلمة المرور يجب أن تكون على الأقل 8 أحرف.",
    "error.passwordMatch": "كلمات ��لمرور غير متطابقة.",

    // Success Messages
    "success.general": "تمت العملية بنجاح!",
    "success.saved": "تم حفظ التغييرات بنجاح!",
    "success.created": "تم الإنشاء بنجاح!",
    "success.updated": "تم التحديث بنجاح!",
    "success.deleted": "تم الحذف بنجاح!",
    "success.sent": "تم إرسال الرسالة بنجاح!",
    "success.subscribed": "تم الاشتراك بنج��ح!",
    "success.unsubscribed": "تم إلغاء الاشتراك بنجاح!",

    // 404 Page
    "notFound.title": "الصفحة غير موجودة",
    "notFound.description":
      "عذراً، لم نتمكن من الع��ور على الصفحة التي تبحث عنها. ربما تم نقلها أو حذفها.",
    "notFound.home": "الذهاب للرئيسية",
    "notFound.back": "العودة للخلف",
  },
};

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const direction: Direction = language === "ar" ? "rtl" : "ltr";

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  };

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ar")) {
      setLanguage(savedLanguage);
    }
  }, []);

  return (
    <I18nContext.Provider value={{ language, direction, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
