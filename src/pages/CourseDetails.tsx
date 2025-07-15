import React, { useState } from "react";
import { Layout } from "@/components/Layout";
import { useI18n } from "@/lib/i18n";
import { useStore } from "@/store/useStore";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Clock,
  Users,
  Star,
  Calendar,
  User,
  Award,
  Play,
  Download,
  BookOpen,
  CheckCircle,
  Trophy,
  Globe,
  Smartphone,
  Monitor,
  Headphones,
  MessageCircle,
  Heart,
  Share2,
  Bookmark,
  Sparkles,
  TrendingUp,
  Shield,
  Zap,
  Target,
  Code,
  Database,
  Server,
  Layers,
} from "lucide-react";
import {
  AnimatedSection,
  StaggeredList,
  MagneticButton,
  FloatingElement,
  CountUp,
} from "@/components/AnimatedElements";
import { useToast } from "@/hooks/use-toast";

export default function CourseDetails() {
  const { t } = useI18n();
  const isEgyptUser = useStore((state) => state.isEgyptUser);
  const { toast } = useToast();
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  const course = {
    id: 1,
    title: "Advanced Web Development",
    subtitle:
      "Master modern web development with React, Node.js, and industry best practices",
    description:
      "This comprehensive course takes you from intermediate to advanced web development skills. You'll learn to build scalable, production-ready applications using modern technologies and best practices used by top tech companies.",
    image: "bg-gradient-to-br from-blue-500 to-purple-600",
    price: { usd: "$299", egp: "5,000EGP" },
    originalPrice: { usd: "$399", egp: "6,500EGP" },
    discount: 25,
    rating: 4.9,
    reviewCount: 892,
    students: 2431,
    duration: "12 weeks",
    level: "Advanced",
    category: "Development",
    language: "English",
    subtitles: ["English", "Arabic"],
    lastUpdated: "November 2024",
    certificate: true,
    featured: true,
    startDate: "January 15, 2025",
    instructor: {
      name: "Dr. Sarah Ahmed",
      title: "Senior Software Engineer",
      company: "Google",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b332c1fe?w=100&h=100&fit=crop&crop=face",
      bio: "Dr. Sarah is a senior software engineer with 10+ years of experience building scalable web applications. She has worked at top tech companies and taught thousands of students worldwide.",
      students: 15420,
      courses: 8,
      rating: 4.9,
    },
    skills: [
      "Modern React development with hooks and context",
      "Building RESTful APIs with Node.js and Express",
      "Database design and implementation with MongoDB",
      "Authentication and authorization best practices",
      "Deployment strategies and DevOps fundamentals",
      "Testing strategies for full-stack applications",
      "Performance optimization techniques",
      "Security best practices",
      "Advanced JavaScript concepts",
      "Code organization and architecture patterns",
    ],
    modules: [
      {
        title: "Introduction to Modern Web Development",
        lessons: 5,
        duration: "2 hours",
        icon: Code,
        topics: [
          "Course overview",
          "Development environment setup",
          "Modern JavaScript features",
          "Git and version control",
          "Project structure",
        ],
      },
      {
        title: "React Fundamentals and Advanced Patterns",
        lessons: 8,
        duration: "4 hours",
        icon: Layers,
        topics: [
          "Components and JSX",
          "State and props",
          "Hooks",
          "Context API",
          "Performance optimization",
          "Advanced patterns",
        ],
      },
      {
        title: "Backend Development with Node.js",
        lessons: 6,
        duration: "3 hours",
        icon: Server,
        topics: [
          "Express.js setup",
          "Middleware",
          "Routing",
          "Error handling",
          "File uploads",
          "Security",
        ],
      },
      {
        title: "Database Design and Integration",
        lessons: 4,
        duration: "2.5 hours",
        icon: Database,
        topics: [
          "MongoDB setup",
          "Mongoose ODM",
          "Schema design",
          "Relationships",
          "Aggregation",
        ],
      },
      {
        title: "Authentication and Security",
        lessons: 3,
        duration: "2 hours",
        icon: Shield,
        topics: [
          "JWT tokens",
          "Password hashing",
          "OAuth",
          "Security best practices",
        ],
      },
      {
        title: "Deployment and Production",
        lessons: 2,
        duration: "1.5 hours",
        icon: Globe,
        topics: [
          "Cloud deployment",
          "Environment variables",
          "Monitoring",
          "Performance",
        ],
      },
    ],
    requirements: [
      "Basic knowledge of HTML, CSS, and JavaScript",
      "Understanding of programming fundamentals",
      "Familiarity with command line/terminal",
      "Computer with internet connection",
    ],
    features: [
      { icon: Monitor, text: "12 hours of HD video content" },
      { icon: Download, text: "Downloadable resources" },
      { icon: Smartphone, text: "Mobile and TV access" },
      { icon: Trophy, text: "Certificate of completion" },
      { icon: Globe, text: "Lifetime access" },
      { icon: Headphones, text: "24/7 student support" },
    ],
    reviews: [
      {
        id: 1,
        name: "Ahmed Hassan",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
        rating: 5,
        comment:
          "Excellent course! The instructor explains everything clearly and the projects are very practical.",
        date: "2 weeks ago",
      },
      {
        id: 2,
        name: "Fatima Al-Zahra",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616b332c1fe?w=50&h=50&fit=crop&crop=face",
        rating: 5,
        comment:
          "This course transformed my career. I got a job as a full-stack developer after completing it!",
        date: "1 month ago",
      },
      {
        id: 3,
        name: "Mohammed Ali",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
        rating: 4,
        comment:
          "Great content and well-structured. Would recommend to anyone serious about web development.",
        date: "3 weeks ago",
      },
    ],
  };

  const handleEnroll = () => {
    setIsEnrolled(true);
    toast({
      title: "Successfully Enrolled! 🎉",
      description:
        "Welcome to the course! You can now access all course materials.",
    });
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    toast({
      title: isBookmarked ? "Removed from bookmarks" : "Added to bookmarks",
      description: isBookmarked
        ? "Course removed from your saved list"
        : "Course saved to your bookmarks",
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: course.title,
        text: course.subtitle,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "Course link copied to clipboard",
      });
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <FloatingElement className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full" />
          <FloatingElement className="absolute bottom-20 left-20 w-24 h-24 bg-secondary/10 rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Course Info */}
              <div className="lg:col-span-2">
                <AnimatedSection animation="fade-up">
                  <div className="flex items-center gap-4 mb-6">
                    <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2">
                      <Sparkles className="mr-2 h-4 w-4" />
                      {t("courseDetails.badge.featured")}
                    </Badge>
                    <Badge variant="outline" className="px-4 py-2">
                      {t("courses.level.advanced")}
                    </Badge>
                    <Badge variant="outline" className="px-4 py-2">
                      {t("courses.category.development")}
                    </Badge>
                  </div>

                  <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                    {course.title}
                  </h1>

                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    {course.subtitle}
                  </p>

                  {/* Course Stats */}
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{course.rating}</span>
                      <span className="text-muted-foreground">
                        ({course.reviewCount.toLocaleString()}{" "}
                        {t("courseDetails.reviews")})
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span className="font-semibold">
                        {course.students.toLocaleString()}
                      </span>
                      <span className="text-muted-foreground">
                        {t("courseDetails.students")}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <span className="font-semibold">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="h-5 w-5 text-primary" />
                      <span className="font-semibold">{course.language}</span>
                    </div>
                  </div>

                  {/* Instructor */}
                  <div className="flex items-center gap-4 p-6 bg-card/80 backdrop-blur-sm rounded-xl border border-border/50">
                    <Avatar className="h-16 w-16">
                      <AvatarImage
                        src={course.instructor.avatar}
                        alt={course.instructor.name}
                      />
                      <AvatarFallback>
                        {course.instructor.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {t("courseDetails.instructor")}
                      </p>
                      <h3 className="text-lg font-semibold">
                        {course.instructor.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {course.instructor.title} {t("common.at")}{" "}
                        {course.instructor.company}
                      </p>
                      <div className="flex items-center gap-4 mt-2 text-sm">
                        <span>
                          {course.instructor.students.toLocaleString()}{" "}
                          {t("courseDetails.students")}
                        </span>
                        <span>
                          {course.instructor.courses} {t("nav.courses")}
                        </span>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>{course.instructor.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              {/* Course Video & Enrollment */}
              <div className="lg:col-span-1">
                <AnimatedSection animation="slide-right" delay={200}>
                  <div className="sticky top-24">
                    <Card className="overflow-hidden bg-card/80 backdrop-blur-sm border-2 border-transparent hover:border-primary/20 transition-all duration-500">
                      {/* Video Preview */}
                      <div
                        className={`aspect-video ${course.image} relative cursor-pointer group`}
                      >
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <MagneticButton>
                            <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl group-hover:bg-white transition-colors duration-300">
                              <Play className="h-8 w-8 text-primary ml-1" />
                            </div>
                          </MagneticButton>
                        </div>
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-black/50 text-white">
                            Preview
                          </Badge>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        {/* Pricing */}
                        <div className="text-center mb-6">
                          <div className="flex items-center justify-center gap-3 mb-2">
                            <span className="text-4xl font-bold">
                              {isEgyptUser === true
                                ? course.price.egp
                                : course.price.usd}
                            </span>
                            <span className="text-xl line-through text-muted-foreground">
                              {isEgyptUser === true
                                ? course.originalPrice.egp
                                : course.originalPrice.usd}
                            </span>
                            <Badge className="bg-red-500 text-white">
                              {course.discount}%{" "}
                              {t("courseDetails.price.discount")}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {t("courseDetails.price.payment")} •{" "}
                            {t("courseDetails.price.access")}
                          </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-3 mb-6">
                          <MagneticButton>
                            <Button
                              className="w-full h-12 btn-professional text-lg"
                              onClick={handleEnroll}
                              disabled={isEnrolled}
                            >
                              {isEnrolled ? (
                                <>
                                  <CheckCircle className="mr-2 h-5 w-5" />
                                  {t("courseDetails.enrolled")}
                                </>
                              ) : (
                                <>
                                  <Zap className="mr-2 h-5 w-5" />
                                  {t("courseDetails.enroll")}
                                </>
                              )}
                            </Button>
                          </MagneticButton>

                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              className="flex-1"
                              onClick={handleBookmark}
                            >
                              <Bookmark
                                className={`mr-2 h-4 w-4 ${isBookmarked ? "fill-current" : ""}`}
                              />
                              {isBookmarked
                                ? t("courseDetails.saved")
                                : t("courseDetails.save")}
                            </Button>
                            <Button variant="outline" onClick={handleShare}>
                              <Share2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        {/* Course Features */}
                        <div className="space-y-3">
                          <h4 className="font-semibold">
                            {t("courseDetails.includes")}
                          </h4>
                          <div className="flex items-center gap-3 text-sm">
                            <Monitor className="h-4 w-4 text-primary" />
                            <span>12 {t("courseDetails.features.video")}</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <Download className="h-4 w-4 text-primary" />
                            <span>{t("courseDetails.features.resources")}</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <Smartphone className="h-4 w-4 text-primary" />
                            <span>{t("courseDetails.features.mobile")}</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <Trophy className="h-4 w-4 text-primary" />
                            <span>
                              {t("courseDetails.features.certificate")}
                            </span>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <Globe className="h-4 w-4 text-primary" />
                            <span>{t("courseDetails.features.lifetime")}</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <Headphones className="h-4 w-4 text-primary" />
                            <span>{t("courseDetails.features.support")}</span>
                          </div>
                        </div>

                        {/* Guarantee */}
                        <div className="mt-6 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                          <div className="flex items-center gap-2 text-green-700 dark:text-green-400">
                            <Shield className="h-4 w-4" />
                            <span className="text-sm font-medium">
                              {t("courseDetails.guarantee")}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-4 mb-12">
                <TabsTrigger value="overview">
                  {t("courseDetails.tabs.overview")}
                </TabsTrigger>
                <TabsTrigger value="curriculum">
                  {t("courseDetails.tabs.curriculum")}
                </TabsTrigger>
                <TabsTrigger value="instructor">
                  {t("courseDetails.tabs.instructor")}
                </TabsTrigger>
                <TabsTrigger value="reviews">
                  {t("courseDetails.tabs.reviews")}
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-12">
                {/* What You'll Learn */}
                <AnimatedSection animation="fade-up">
                  <Card className="bg-card/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-2xl flex items-center gap-2">
                        <Target className="h-6 w-6 text-primary" />
                        {t("courseDetails.learn.title")}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <StaggeredList
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                        itemClassName="group"
                        delay={100}
                      >
                        {course.skills.map((skill, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-3 group"
                          >
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="group-hover:text-primary transition-colors duration-300">
                              {skill}
                            </span>
                          </div>
                        ))}
                      </StaggeredList>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                {/* Requirements */}
                <AnimatedSection animation="fade-up" delay={200}>
                  <Card className="bg-card/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-2xl flex items-center gap-2">
                        <BookOpen className="h-6 w-6 text-primary" />
                        {t("courseDetails.requirements.title")}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {course.requirements.map((requirement, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                {/* Course Description */}
                <AnimatedSection animation="fade-up" delay={400}>
                  <Card className="bg-card/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-2xl">
                        {t("courseDetails.description.title")}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {course.description}
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </TabsContent>

              <TabsContent value="curriculum" className="space-y-8">
                <AnimatedSection animation="fade-up">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">
                      {t("courseDetails.curriculum.title")}
                    </h2>
                    <p className="text-xl text-muted-foreground">
                      <CountUp
                        end={course.modules.reduce(
                          (acc, module) => acc + module.lessons,
                          0,
                        )}
                      />{" "}
                      {t("courseDetails.curriculum.lessons")} •{" "}
                      <CountUp end={15} /> {t("courseDetails.curriculum.hours")}
                    </p>
                  </div>

                  <Card className="bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-0">
                      <Accordion type="single" collapsible className="w-full">
                        {course.modules.map((module, index) => (
                          <AccordionItem
                            key={index}
                            value={`module-${index}`}
                            className="border-border/50"
                          >
                            <AccordionTrigger className="px-6 py-4 hover:bg-accent/20 transition-colors duration-300">
                              <div className="flex items-center gap-4 w-full">
                                <div className="bg-primary/10 p-2 rounded-lg">
                                  <module.icon className="h-5 w-5 text-primary" />
                                </div>
                                <div className="flex-1 text-left">
                                  <h3 className="font-semibold">
                                    {module.title}
                                  </h3>
                                  <p className="text-sm text-muted-foreground">
                                    {module.lessons} lessons • {module.duration}
                                  </p>
                                </div>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-4">
                              <div className="space-y-3">
                                {module.topics.map((topic, topicIndex) => (
                                  <div
                                    key={topicIndex}
                                    className="flex items-center gap-3 p-3 bg-accent/10 rounded-lg"
                                  >
                                    <Play className="h-4 w-4 text-primary" />
                                    <span className="flex-1">{topic}</span>
                                    <span className="text-sm text-muted-foreground">
                                      5 min
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </TabsContent>

              <TabsContent value="instructor" className="space-y-8">
                <AnimatedSection animation="fade-up">
                  <Card className="bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row gap-8">
                        <div className="text-center md:text-left">
                          <FloatingElement>
                            <Avatar className="h-32 w-32 mx-auto md:mx-0 mb-6">
                              <AvatarImage
                                src={course.instructor.avatar}
                                alt={course.instructor.name}
                              />
                              <AvatarFallback className="text-2xl">
                                {course.instructor.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                          </FloatingElement>
                          <h2 className="text-2xl font-bold mb-2">
                            {course.instructor.name}
                          </h2>
                          <p className="text-lg text-primary mb-4">
                            {course.instructor.title}
                          </p>
                          <p className="text-muted-foreground mb-6">
                            {course.instructor.company}
                          </p>

                          <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                              <div className="text-2xl font-bold text-primary">
                                <CountUp
                                  end={course.instructor.students}
                                  suffix="+"
                                />
                              </div>
                              <p className="text-sm text-muted-foreground">
                                Students
                              </p>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-primary">
                                <CountUp end={course.instructor.courses} />
                              </div>
                              <p className="text-sm text-muted-foreground">
                                Courses
                              </p>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-primary">
                                {course.instructor.rating}
                              </div>
                              <p className="text-sm text-muted-foreground">
                                Rating
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-4">
                            About the Instructor
                          </h3>
                          <p className="text-muted-foreground leading-relaxed mb-6">
                            {course.instructor.bio}
                          </p>

                          <div className="space-y-4">
                            <h4 className="font-semibold">Expertise</h4>
                            <div className="flex flex-wrap gap-2">
                              {[
                                "React",
                                "Node.js",
                                "MongoDB",
                                "JavaScript",
                                "Python",
                                "AWS",
                              ].map((skill) => (
                                <Badge
                                  key={skill}
                                  variant="secondary"
                                  className="px-3 py-1"
                                >
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-8">
                <AnimatedSection animation="fade-up">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Student Reviews</h2>
                    <div className="flex items-center justify-center gap-4 mb-6">
                      <div className="text-4xl font-bold">{course.rating}</div>
                      <div>
                        <div className="flex items-center gap-1 mb-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className="h-5 w-5 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                        <p className="text-muted-foreground">
                          {course.reviewCount} reviews
                        </p>
                      </div>
                    </div>
                  </div>

                  <StaggeredList
                    className="space-y-6"
                    itemClassName="group"
                    delay={150}
                  >
                    {course.reviews.map((review) => (
                      <Card
                        key={review.id}
                        className="bg-card/80 backdrop-blur-sm hover:bg-card transition-colors duration-300"
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <Avatar>
                              <AvatarImage
                                src={review.avatar}
                                alt={review.name}
                              />
                              <AvatarFallback>
                                {review.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h4 className="font-semibold">{review.name}</h4>
                                <div className="flex items-center gap-1">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                      key={star}
                                      className={`h-4 w-4 ${
                                        star <= review.rating
                                          ? "fill-yellow-400 text-yellow-400"
                                          : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="text-sm text-muted-foreground">
                                  {review.date}
                                </span>
                              </div>
                              <p className="text-muted-foreground leading-relaxed">
                                {review.comment}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </StaggeredList>
                </AnimatedSection>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
        <FloatingElement className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full" />
        <FloatingElement className="absolute bottom-20 right-20 w-24 h-24 bg-white/5 rounded-full" />

        <div className="container mx-auto px-4 text-center relative">
          <AnimatedSection animation="scale-in">
            <h2 className="text-4xl font-bold mb-6">
              {t("courseDetails.cta.title")}
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              {t("courseDetails.cta.subtitle")}
            </p>
            <MagneticButton>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg"
                onClick={handleEnroll}
              >
                <Sparkles className="mr-2 h-5 w-5" />
                {t("courseDetails.enroll")} -{" "}
                {isEgyptUser === true ? course.price.egp : course.price.usd}
              </Button>
            </MagneticButton>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
