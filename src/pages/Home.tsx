import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Users,
  BookOpen,
  Award,
  Clock,
  Star,
  CheckCircle,
  CreditCard,
  Smartphone,
  Building2,
  Globe,
  Sparkles,
  TrendingUp,
  Zap,
  User,
  HelpCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  AnimatedSection,
  StaggeredList,
  CountUp,
  FloatingElement,
  MagneticButton,
  GlitchText,
} from "@/components/AnimatedElements";
import { useParallax } from "@/hooks/useScrollAnimation";
import { useStore } from "@/store/useStore";

export default function Home() {
  const { t, direction } = useI18n();
  const [currentSlide, setCurrentSlide] = useState(0);
  const parallaxOffset = useParallax(0.3);
  const isEgyptUser = useStore((state) => state.isEgyptUser);

  const heroSlides = [
    {
      title: t("home.hero.slide1.title"),
      subtitle: t("home.hero.slide1.subtitle"),
      description: t("home.hero.slide1.description"),
      image: "bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800",
    },
    {
      title: t("home.hero.slide2.title"),
      subtitle: t("home.hero.slide2.subtitle"),
      description: t("home.hero.slide2.description"),
      image: "bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-800",
    },
    {
      title: t("home.hero.slide3.title"),
      subtitle: t("home.hero.slide3.subtitle"),
      description: t("home.hero.slide3.description"),
      image: "bg-gradient-to-br from-orange-600 via-red-600 to-orange-800",
    },
  ];

  const courseCategories = [
    {
      id: 1,
      title: "Global Languages",
      description:
        "Master new languages with native speakers and advanced learning techniques.",
      icon: "🌍",
      gradient: "bg-gradient-to-br from-blue-500 to-cyan-600",
      courseCount: 24,
      category: "languages",
    },
    {
      id: 2,
      title: "Programming & Technology",
      description:
        "Learn cutting-edge programming languages and modern development frameworks.",
      icon: "💻",
      gradient: "bg-gradient-to-br from-purple-500 to-indigo-600",
      courseCount: 32,
      category: "development",
    },
    {
      id: 3,
      title: "Design & Creative Arts",
      description:
        "Unleash your creativity with design tools and artistic techniques.",
      icon: "🎨",
      gradient: "bg-gradient-to-br from-pink-500 to-rose-600",
      courseCount: 18,
      category: "design",
    },
    {
      id: 4,
      title: "Healthcare & Medical Training",
      description:
        "Advanced medical training and healthcare professional development.",
      icon: "🏥",
      gradient: "bg-gradient-to-br from-green-500 to-emerald-600",
      courseCount: 15,
      category: "healthcare",
    },
    {
      id: 5,
      title: "Business & Professional Development",
      description:
        "Enhance your business skills and professional growth opportunities.",
      icon: "📊",
      gradient: "bg-gradient-to-br from-orange-500 to-amber-600",
      courseCount: 28,
      category: "business",
    },
    {
      id: 6,
      title: "Math & Logic",
      description:
        "Strengthen analytical thinking with mathematics and logical reasoning.",
      icon: "🧮",
      gradient: "bg-gradient-to-br from-slate-500 to-gray-600",
      courseCount: 12,
      category: "math",
    },
  ];

  const stats = [
    { label: t("home.stats.students"), value: "25,000+", icon: Users },
    { label: t("home.stats.courses"), value: "500+", icon: BookOpen },
    { label: t("home.stats.instructors"), value: "150+", icon: Award },
    { label: t("home.stats.completion"), value: "94%", icon: CheckCircle },
  ];

  const paymentMethods = [
    { name: "InstaPay", icon: CreditCard, color: "text-blue-600" },
    { name: "Debit Card", icon: CreditCard, color: "text-red-600" },
    { name: "Credit", icon: Smartphone, color: "text-green-600" },
    { name: "Apple Pay", icon: Smartphone, color: "text-gray-800" },
    { name: "PayPal", icon: Globe, color: "text-blue-500" },
    { name: "Bank Transfer", icon: Building2, color: "text-purple-600" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
    );
  };

  return (
    <Layout>
      {/* Hero Slider Section */}
      <section className="relative h-[90vh] overflow-hidden hero-slider">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <FloatingElement
            className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full"
            duration={8000}
          />
          <FloatingElement
            className="absolute bottom-40 left-10 w-24 h-24 bg-primary/10 rounded-full"
            duration={12000}
          />
          <FloatingElement
            className="absolute top-1/2 right-1/3 w-16 h-16 bg-secondary/10 rounded-full"
            duration={10000}
          />
        </div>
        <div className="relative h-full">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={cn(
                "absolute inset-0 transition-all duration-1500 ease-out",
                index === currentSlide
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105",
                slide.image,
              )}
              style={{
                transform: `translateY(${parallaxOffset}px) scale(${index === currentSlide ? 1 : 1.05})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/60" />

              {/* Animated overlay patterns */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 opacity-50" />

              <div className="relative h-full flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-4xl text-white">
                    <div className="overflow-hidden">
                      <h1 className="text-hero md:text-hero-lg font-bold mb-5 hero-text tracking-tight">
                        <GlitchText text={slide.title} />
                      </h1>
                    </div>

                    <div className="overflow-hidden">
                      <h2 className="text-2xl md:text-3xl mb-5 opacity-95 hero-text-delay-1 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                        {slide.subtitle}
                      </h2>
                    </div>

                    <div className="overflow-hidden">
                      <p className="text-lg md:text-xl mb-6 opacity-85 hero-text-delay-2 leading-relaxed">
                        {slide.description}
                      </p>
                    </div>

                    <div className="hero-text-delay-3 flex flex-col sm:flex-row gap-6 relative z-30">
                      <Link to="/contact" />{" "}
                      <Button
                        size="lg"
                        className="btn-professional bg-white text-primary hover:bg-white/90 px-6 py-3 text-base shadow-2xl font-semibold hover-scale-102"
                      >
                        <Play className="mr-3 h-6 w-6" />
                        {t("home.hero.cta")}
                        <Sparkles className="ml-3 h-5 w-5" />
                      </Button>
                      <link />
                      <Button
                        size="lg"
                        variant="outline"
                        className="btn-professional border-2 border-white text-white hover:bg-white hover:text-primary px-6 py-3 text-base backdrop-blur-sm font-semibold hover-scale-102"
                      >
                        {t("home.hero.secondary")}
                        <TrendingUp className="ml-3 h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        (/* Enhanced Slide Indicators */)
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2 z-40">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={cn(
                "relative overflow-hidden rounded-full transition-all duration-500 cursor-pointer",
                index === currentSlide
                  ? "w-12 h-4 bg-white shadow-lg"
                  : "w-4 h-4 bg-white/40 hover:bg-white/60 hover-scale-105",
              )}
            >
              {index === currentSlide && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-80 rounded-full" />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary/95 to-primary text-primary-foreground relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent" />
          <FloatingElement className="absolute top-10 right-20 w-20 h-20 bg-white/10 rounded-full" />
          <FloatingElement
            className="absolute bottom-10 left-20 w-16 h-16 bg-white/5 rounded-full"
            duration={8000}
          />
        </div>

        <div className="container mx-auto px-4 relative">
          <AnimatedSection animation="fade-up" className="mb-12">
            <div className="text-center">
              <h2 className="text-section-title font-bold mb-4 text-white">
                {t("home.stats.title")}
              </h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                {t("home.stats.subtitle")}
              </p>
            </div>
          </AnimatedSection>

          <StaggeredList
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            itemClassName="text-center group"
            delay={150}
          >
            {[
              {
                icon: Users,
                value: 108,
                suffix: "+",
                label: t("home.stats.students"),
              },
              {
                icon: BookOpen,
                value: 32,
                suffix: "+",
                label: t("home.stats.courses"),
              },
              {
                icon: Award,
                value: 20,
                suffix: "+",
                label: t("home.stats.instructors"),
              },
              {
                icon: CheckCircle,
                value: 99,
                suffix: "%",
                label: t("home.stats.completion"),
              },
            ].map((stat, index) => (
              <div key={index} className="relative">
                <FloatingElement>
                  <stat.icon className="h-12 w-12 mx-auto mb-4 opacity-80 group-hover:opacity-100 transition-all duration-300 hover-scale-105 group-hover:text-yellow-300" />
                </FloatingElement>

                <div className="text-3xl md:text-4xl font-bold mb-3 hover-scale-105 transition-transform duration-300">
                  <CountUp
                    end={stat.value}
                    duration={2500}
                    suffix={stat.suffix}
                    className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
                  />
                </div>

                <div className="text-base opacity-80 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                  {stat.label}
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
              </div>
            ))}
          </StaggeredList>
        </div>
      </section>

      {/* Enhanced Course Categories Section */}
      <section className="py-24 bg-gradient-to-br from-secondary/30 via-background to-secondary/20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative">
          <AnimatedSection animation="fade-up" className="text-center mb-20">
            <Badge className="mb-5 px-4 py-1.5 text-base bg-primary/10 text-primary border-primary/20 animate-pulse-slow">
              <Sparkles className="mr-2 h-4 w-4" />
              {t("home.categories.badge")}
            </Badge>
            <h2 className="text-section-title font-bold mb-5 gradient-text">
              {t("home.categories.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t("home.categories.subtitle")}
            </p>
          </AnimatedSection>

          <StaggeredList
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            itemClassName="group"
            delay={200}
          >
            {courseCategories.map((category) => (
              <MagneticButton key={category.id} intensity={10}>
                <Link to={`/courses?category=${category.category}`}>
                  <Card className="category-card card-hover bg-card/80 backdrop-blur-sm border-2 border-transparent hover:border-primary/20 overflow-hidden h-full group transition-all duration-300 cursor-pointer">
                    <div
                      className={cn(
                        "h-32 relative overflow-hidden",
                        category.gradient,
                      )}
                    >
                      {/* Category Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {category.icon}
                        </div>
                      </div>

                      {/* Gradient overlay with animation */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent group-hover:from-black/60 transition-all duration-700" />

                      {/* Course count badge */}
                      <FloatingElement className="absolute top-4 right-4 z-10">
                        <Badge className="bg-white/95 text-gray-800 shadow-lg backdrop-blur-sm px-3 py-1">
                          <BookOpen className="mr-1 h-3 w-3" />
                          {category.courseCount} courses
                        </Badge>
                      </FloatingElement>

                      {/* Animated geometric shapes */}
                      <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full transform -translate-x-8 translate-y-8 group-hover:-translate-x-4 group-hover:translate-y-4 transition-transform duration-700" />
                      <div className="absolute top-0 right-0 w-12 h-12 bg-white/5 rounded-full transform translate-x-6 -translate-y-6 group-hover:translate-x-3 group-hover:-translate-y-3 transition-transform duration-700" />

                      {/* Hover overlay effect */}
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    <CardHeader className="pb-4 relative">
                      <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300 text-reveal">
                        {category.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4 flex-1 flex flex-col">
                      <p className="text-muted-foreground leading-relaxed flex-1 text-sm">
                        {category.description}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-border/50">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                          <BookOpen className="h-4 w-4" />
                          <span className="font-medium">
                            {category.courseCount} Courses
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-primary group-hover:translate-x-1 transition-transform duration-300">
                          <span className="text-sm font-medium">Explore</span>
                          <Play className="h-4 w-4 fill-current" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </MagneticButton>
            ))}
          </StaggeredList>

          <AnimatedSection
            animation="scale-in"
            delay={600}
            className="text-center mt-16"
          >
            <MagneticButton>
              <Link to="/courses">
                <Button
                  size="lg"
                  variant="outline"
                  className="btn-professional px-6 py-3 text-base border-2 hover-scale-102"
                >
                  <BookOpen className="mr-3 h-5 w-5" />
                  {t("common.viewAll")} {t("nav.courses")}
                  <TrendingUp className="ml-3 h-5 w-5" />
                </Button>
              </Link>
            </MagneticButton>
          </AnimatedSection>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative">
          <AnimatedSection animation="fade-up" className="text-center mb-20">
            <Badge className="mb-5 px-4 py-1.5 text-base bg-primary/10 text-primary border-primary/20 animate-pulse-slow">
              <Sparkles className="mr-2 h-4 w-4" />
              {t("home.success.badge")}
            </Badge>
            <h2 className="text-section-title font-bold mb-5 gradient-text">
              {t("home.success.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t("home.success.subtitle")}
            </p>
          </AnimatedSection>

          {/* Animated Success Stories Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-left gap-8 hover:pause-animation">
              {/* First set of cards */}
              {[
                {
                  id: 1,
                  name: "Sarah Johnson",
                  age: 28,
                  avatar:
                    "https://images.unsplash.com/photo-1494790108755-2616b612b788?w=150&h=150&fit=crop&crop=face",
                  feedback:
                    "The web development course transformed my career completely.\nI landed my dream job just 3 months after completing it!",
                },
                {
                  id: 2,
                  name: "Ahmed Hassan",
                  age: 32,
                  avatar:
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
                  feedback:
                    "French language course was amazing with native speakers.\nNow I'm working in Paris with my new language skills!",
                },
                {
                  id: 3,
                  name: "Maria Rodriguez",
                  age: 25,
                  avatar:
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
                  feedback:
                    "Digital marketing strategies helped me grow my business 10x.\nThe practical approach made all the difference!",
                },
                {
                  id: 4,
                  name: "David Chen",
                  age: 29,
                  avatar:
                    "https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=150&h=150&fit=crop&crop=face",
                  feedback:
                    "Data analysis course opened new opportunities for me.\nI became a data scientist at a leading tech company!",
                },
                {
                  id: 5,
                  name: "Emily Watson",
                  age: 26,
                  avatar:
                    "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
                  feedback:
                    "Graphic design course unleashed my creative potential.\nI now run my own successful design agency!",
                },
                {
                  id: 6,
                  name: "Michael Kim",
                  age: 34,
                  avatar:
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
                  feedback:
                    "Project management certification changed my career path.\nI'm now leading major projects at Fortune 500 company!",
                },
              ]
                .concat([
                  // Duplicate for seamless loop
                  {
                    id: 7,
                    name: "Sarah Johnson",
                    age: 28,
                    avatar:
                      "https://images.unsplash.com/photo-1494790108755-2616b612b788?w=150&h=150&fit=crop&crop=face",
                    feedback:
                      "The web development course transformed my career completely.\nI landed my dream job just 3 months after completing it!",
                  },
                  {
                    id: 8,
                    name: "Ahmed Hassan",
                    age: 32,
                    avatar:
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
                    feedback:
                      "French language course was amazing with native speakers.\nNow I'm working in Paris with my new language skills!",
                  },
                  {
                    id: 9,
                    name: "Maria Rodriguez",
                    age: 25,
                    avatar:
                      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
                    feedback:
                      "Digital marketing strategies helped me grow my business 10x.\nThe practical approach made all the difference!",
                  },
                  {
                    id: 10,
                    name: "David Chen",
                    age: 29,
                    avatar:
                      "https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=150&h=150&fit=crop&crop=face",
                    feedback:
                      "Data analysis course opened new opportunities for me.\nI became a data scientist at a leading tech company!",
                  },
                  {
                    id: 11,
                    name: "Emily Watson",
                    age: 26,
                    avatar:
                      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
                    feedback:
                      "Graphic design course unleashed my creative potential.\nI now run my own successful design agency!",
                  },
                  {
                    id: 12,
                    name: "Michael Kim",
                    age: 34,
                    avatar:
                      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
                    feedback:
                      "Project management certification changed my career path.\nI'm now leading major projects at Fortune 500 company!",
                  },
                ])
                .map((story) => (
                  <div
                    key={story.id}
                    className="flex-shrink-0 w-80 bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <Avatar className="w-16 h-16 border-2 border-primary/20">
                        <AvatarImage src={story.avatar} alt={story.name} />
                        <AvatarFallback>
                          <User className="h-8 w-8" />
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-lg">{story.name}</h3>
                        <p className="text-muted-foreground">
                          Age: {story.age}
                        </p>
                      </div>
                    </div>
                    <blockquote className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      "{story.feedback}"
                    </blockquote>
                    <div className="flex justify-end mt-4">
                      <div className="flex text-yellow-400">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-secondary/20 via-background to-primary/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative">
          <AnimatedSection animation="fade-up" className="text-center mb-20">
            <Badge className="mb-5 px-4 py-1.5 text-base bg-primary/10 text-primary border-primary/20 animate-pulse-slow">
              <HelpCircle className="mr-2 h-4 w-4" />
              {t("home.faq.badge")}
            </Badge>
            <h2 className="text-section-title font-bold mb-5 gradient-text">
              {t("home.faq.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t("home.faq.subtitle")}
            </p>
          </AnimatedSection>

          <AnimatedSection
            animation="slide-up"
            delay={200}
            className="max-w-4xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="item-1"
                className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left py-6 hover:no-underline">
                  <span className="font-semibold text-lg">
                    What makes your courses different from others online?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                  Our courses are designed with real-world projects, expert
                  instructors, and clear learning outcomes. Whether you're a
                  beginner or advanced, you'll gain practical skills you can
                  apply immediately.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left py-6 hover:no-underline">
                  <span className="font-semibold text-lg">
                    Do I need prior experience before enrolling in courses on
                    the Smart Learning Academy platform?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                  No prior experience is required for most courses. They are
                  designed to be beginner-friendly, with clear guidance provided
                  at every step. Any specific prerequisites are mentioned on
                  each course page.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left py-6 hover:no-underline">
                  <span className="font-semibold text-lg">
                    How can I pay, and is it safe?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                  We accept secure online payments through Visa, Mastercard, and
                  other trusted gateways. Your data is encrypted and protected
                  at all times.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left py-6 hover:no-underline">
                  <span className="font-semibold text-lg">
                    Are the courses updated regularly?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                  Yes, we continuously update our course content to reflect the
                  latest industry trends, tools, and best practices.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left py-6 hover:no-underline">
                  <span className="font-semibold text-lg">
                    Will I have lifetime access to the course material?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                  Yes, once you enroll in a course, you'll have lifetime access
                  to all lessons, resources, and future updates.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left py-6 hover:no-underline">
                  <span className="font-semibold text-lg">
                    What if I need help during the course?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                  You'll have access to support from instructors, a student
                  community, and our dedicated support team for technical or
                  learning questions.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      {/* Enhanced Payment Methods Section */}
      <section className="py-24 bg-gradient-to-br from-muted/30 to-background relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative">
          <AnimatedSection animation="fade-up" className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-700 px-4 py-2 rounded-full mb-4 text-base font-medium">
              <CheckCircle className="h-4 w-4" />
              {t("home.payment.encryption")}
            </div>
            <h2 className="text-section-title font-bold mb-5">
              {t("home.payment.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t("home.payment.subtitle")}
            </p>
          </AnimatedSection>

          <StaggeredList
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto"
            itemClassName="group"
            delay={100}
          >
            {paymentMethods.map((method, index) => (
              <MagneticButton key={index} intensity={5}>
                <Card className="card-hover bg-card/80 backdrop-blur-sm border-2 border-transparent hover:border-primary/20 group-hover:bg-white group-hover:shadow-2xl">
                  <CardContent className="p-8 text-center">
                    <FloatingElement duration={4000 + index * 500}>
                      <method.icon
                        className={cn(
                          "h-12 w-12 mx-auto mb-3 transition-all duration-500 hover-scale-105",
                          method.color,
                        )}
                      />
                    </FloatingElement>
                    <div className="font-medium text-sm group-hover:text-primary transition-colors duration-300">
                      {method.name}
                    </div>

                    {/* Animated glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                  </CardContent>
                </Card>
              </MagneticButton>
            ))}
          </StaggeredList>

          <AnimatedSection
            animation="scale-in"
            delay={800}
            className="text-center mt-16"
          >
            <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <span className="text-base font-medium text-green-700 dark:text-green-400">
                  {t("home.payment.encryption")}
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {t("home.payment.security")}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-28 bg-gradient-to-br from-primary via-blue-600 to-purple-700 text-primary-foreground relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <FloatingElement
            className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full"
            duration={15000}
          />
          <FloatingElement
            className="absolute bottom-20 right-20 w-24 h-24 bg-white/5 rounded-full"
            duration={12000}
          />
          <FloatingElement
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/5 rounded-full"
            duration={20000}
          />

          {/* Gradient overlay animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-30 animate-pulse-slow" />
        </div>

        <div className="container mx-auto px-4 text-center relative">
          <AnimatedSection animation="scale-in" className="mb-12">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-4 mb-8">
              <Sparkles className="h-6 w-6 animate-pulse" />
              <span className="text-base font-medium">
                {t("home.hero.subtitle")}
              </span>
              <Sparkles className="h-6 w-6 animate-pulse" />
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <h2 className="text-section-title font-bold mb-6 leading-tight">
              <GlitchText text={t("home.cta.final.title")} />
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={400}>
            <p className="text-lg mb-8 opacity-95 max-w-4xl mx-auto leading-relaxed font-light">
              {t("home.cta.final.subtitle")}
            </p>
          </AnimatedSection>

          <AnimatedSection animation="bounce-in" delay={600}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-lg mx-auto">
              <MagneticButton intensity={12}>
                <Link to="/courses">
                  <Button
                    size="lg"
                    className="btn-professional bg-white text-primary hover:bg-white/90 px-6 py-3 text-base font-semibold shadow-2xl hover:shadow-white/25 hover-scale-102"
                  >
                    <Play className="mr-3 h-6 w-6" />
                    {t("home.cta.final.button")}
                    <Sparkles className="ml-3 h-6 w-6" />
                  </Button>
                </Link>
              </MagneticButton>

              <MagneticButton intensity={12}>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="btn-professional border-2 border-white/80 text-white hover:bg-white/20 px-6 py-3 text-base backdrop-blur-sm font-semibold hover-scale-102"
                  >
                    <Users className="mr-3 h-6 w-6" />
                    {t("home.cta.contact")}
                  </Button>
                </Link>
              </MagneticButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
