import React from "react";
import { Layout } from "@/components/Layout";
import { useI18n } from "@/lib/i18n";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  UserCircle,
  Award,
  Building2,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Users,
  TrendingUp,
  Heart,
  Target,
  Eye,
  Sparkles,
  GraduationCap,
  Star,
  Globe,
  Briefcase,
  BookOpen,
  CheckCircle,
  Lightbulb,
  User,
} from "lucide-react";
import {
  AnimatedSection,
  StaggeredList,
  MagneticButton,
  FloatingElement,
  CountUp,
} from "@/components/AnimatedElements";

export default function About() {
  const { t } = useI18n();

  const leadership = {
    name: "Dr. Sally Abo Elsaad",
    title: "Chief Executive Officer / CEO of Smart Learning Academy",
    avatar:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
    qualifications: [
      {
        degree: "Bachelor of Medicine and Surgery (MBBS)",
        year: "2005",
        icon: GraduationCap,
      },
      {
        degree: "Master's in Pediatrics from Tanta University",
        year: "2008",
        icon: Award,
      },
      {
        degree: "MBA in Hospital Management from Switzerland",
        year: "2012",
        icon: Briefcase,
      },
      {
        degree: "DBA in Digital Transformation from Switzerland",
        year: "2018",
        icon: TrendingUp,
      },
      {
        degree: "DBA in International Business from Switzerland",
        year: "2020",
        icon: Globe,
      },
      {
        degree: "Certified Training Of Trainers (TOT) from IBS",
        year: "2015",
        icon: Users,
      },
      {
        degree: "Certified Director from CMI in the UK",
        year: "2019",
        icon: Star,
      },
    ],
    experience:
      "15+ years experience in major hospitals in Egypt and Saudi Arabia",
    previousRole: "Former Medical Director of Tanta El-kher NICU",
    bio: "Dr. Sally is a visionary leader with a passion for transforming healthcare and education. Her unique combination of medical expertise and business acumen has positioned Smart Learning Academy as a leading educational institution in the region.",
    achievements: [
      "Led digital transformation initiatives at 5 major hospitals",
      "Published 25+ research papers in international journals",
      "Trained over 1,000 healthcare professionals",
      "Recipient of Excellence in Leadership Award 2022",
    ],
    contact: {
      email: "sally.ceo@smartlearning.academy",
      phone: "+966 50 123 4567",
      office: "Riyadh, Saudi Arabia",
    },
  };

  const instructors = [
    {
      id: 1,
      name: "Dr. Ahmed Hassan",
      title: "Senior Web Development Instructor",
      experience: "12 years",
      satisfaction: "98%",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      title: "Digital Marketing Specialist",
      experience: "8 years",
      satisfaction: "96%",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b788?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Prof. Maria Garcia",
      title: "Data Science Expert",
      experience: "15 years",
      satisfaction: "99%",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "David Chen",
      title: "UX/UI Design Instructor",
      experience: "10 years",
      satisfaction: "97%",
      avatar:
        "https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 5,
      name: "Emily Watson",
      title: "Language Learning Coordinator",
      experience: "9 years",
      satisfaction: "95%",
      avatar:
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 6,
      name: "Michael Rodriguez",
      title: "Business Strategy Mentor",
      experience: "14 years",
      satisfaction: "98%",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
  ];

  return (
    <Layout>
      {/* Who We Are Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
        <div className="absolute inset-0">
          <FloatingElement className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full" />
          <FloatingElement className="absolute bottom-20 left-20 w-24 h-24 bg-secondary/10 rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative">
          <AnimatedSection animation="fade-up" className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-8">
                <Badge className="mb-5 px-4 py-1.5 text-base bg-primary/10 text-primary border-primary/20">
                  <Users className="mr-2 h-4 w-4" />
                  Who We Are
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  <span className="text-primary">Smart Learning Academy</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Smart Learning Academy</strong> is an online education
                  platform offering a wide range of{" "}
                  <strong>courses and training programs</strong> for learners of
                  all ages. We provide{" "}
                  <strong>flexible, high-quality learning experiences</strong>{" "}
                  designed to build real-world skills through expert-led
                  content.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <span className="font-medium">Expert-Led Courses</span>
                  </div>
                  <div className="flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span className="font-medium">Flexible Learning</span>
                  </div>
                  <div className="flex items-center gap-2 bg-green-500/10 px-4 py-2 rounded-full">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                    <span className="font-medium">Real-World Skills</span>
                  </div>
                </div>
              </div>

              {/* Logo */}
              <div className="flex justify-center lg:justify-end">
                <FloatingElement>
                  <div className="relative">
                    <div className="w-80 h-80 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2Fa164944bee134be1a2cef2e9ba25d9c5%2F057515f7d7894190a36e58d772c9721d?format=webp&width=800"
                        alt="Smart Learning Academy Logo"
                        className="w-full h-full object-contain p-4"
                      />
                    </div>
                    <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-3 rounded-full shadow-lg animate-pulse">
                      <Sparkles className="h-6 w-6" />
                    </div>
                  </div>
                </FloatingElement>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Hero Section - About Us */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <FloatingElement className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full" />
          <FloatingElement className="absolute bottom-20 left-20 w-24 h-24 bg-secondary/10 rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative">
          <AnimatedSection animation="fade-up" className="text-center mb-20">
            <Badge className="mb-5 px-4 py-1.5 text-base bg-primary/10 text-primary border-primary/20">
              <Users className="mr-2 h-4 w-4" />
              {t("about.badge")}
            </Badge>
            <h1 className="text-section-title font-bold mb-5 gradient-text">
              {t("about.title")}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t("about.subtitle")}
            </p>
          </AnimatedSection>

          {/* Stats Section */}
          <StaggeredList
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            itemClassName="text-center"
            delay={150}
          >
            {[
              {
                icon: Calendar,
                value: 15,
                suffix: "+",
                label: t("about.stats.experience"),
              },
              {
                icon: Users,
                value: 25000,
                suffix: "+",
                label: t("about.stats.trained"),
              },
              {
                icon: Award,
                value: 25,
                suffix: "+",
                label: t("about.stats.papers"),
              },
              {
                icon: TrendingUp,
                value: 98,
                suffix: "%",
                label: t("about.stats.success"),
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6"
              >
                <FloatingElement>
                  <stat.icon className="h-10 w-10 mx-auto mb-3 text-primary" />
                </FloatingElement>
                <div className="text-2xl font-bold mb-2 text-primary">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </StaggeredList>
        </div>
      </section>

      {/* Our Mission & Vision Section */}
      <section className="py-24 bg-gradient-to-br from-secondary/20 via-background to-primary/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative">
          <AnimatedSection animation="fade-up" className="text-center mb-20">
            <Badge className="mb-5 px-4 py-1.5 text-base bg-primary/10 text-primary border-primary/20">
              <Target className="mr-2 h-4 w-4" />
              Our Mission & Vision
            </Badge>
            <h2 className="text-section-title font-bold mb-5 gradient-text">
              Guiding Our Purpose
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our mission, vision, and core beliefs that drive everything we do
              at Smart Learning Academy.
            </p>
          </AnimatedSection>

          <div className="max-w-6xl mx-auto space-y-16">
            {/* Mission */}
            <AnimatedSection animation="slide-up" delay={200}>
              <Card className="overflow-hidden bg-card/80 backdrop-blur-sm border-2 border-transparent">
                <div className="md:flex items-center">
                  <div className="md:w-1/3 bg-gradient-to-br from-blue-500/10 to-purple-600/10 p-8 flex items-center justify-center">
                    <div className="text-center">
                      <Target className="h-12 w-12 mx-auto mb-4 text-primary" />
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        Our Mission
                      </h3>
                    </div>
                  </div>
                  <CardContent className="md:w-2/3 p-8">
                    <p className="text-lg text-muted-foreground leading-loose">
                      We aim to make online learning{" "}
                      <strong>accessible, engaging, and impactful</strong> for
                      all age groups. Our courses focus on{" "}
                      <strong>real-world skills</strong> and{" "}
                      <strong>lifelong growth</strong>.
                    </p>
                  </CardContent>
                </div>
              </Card>
            </AnimatedSection>

            {/* Vision */}
            <AnimatedSection animation="slide-up" delay={400}>
              <Card className="overflow-hidden bg-card/80 backdrop-blur-sm border-2 border-transparent">
                <div className="md:flex items-center">
                  <div className="md:w-1/3 bg-gradient-to-br from-green-500/10 to-emerald-600/10 p-8 flex items-center justify-center md:order-2">
                    <div className="text-center">
                      <Eye className="h-12 w-12 mx-auto mb-4 text-primary" />
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        Our Vision
                      </h3>
                    </div>
                  </div>
                  <CardContent className="md:w-2/3 p-8 md:order-1">
                    <p className="text-lg text-muted-foreground leading-loose">
                      To be a <strong>trusted platform</strong> that transforms
                      education through <strong>innovation</strong>. We envision
                      a world where everyone can learn{" "}
                      <strong>anytime, anywhere</strong>.
                    </p>
                  </CardContent>
                </div>
              </Card>
            </AnimatedSection>

            {/* Why We Exist */}
            <AnimatedSection animation="slide-up" delay={600}>
              <Card className="overflow-hidden bg-card/80 backdrop-blur-sm border-2 border-transparent">
                <div className="md:flex items-center">
                  <div className="md:w-1/3 bg-gradient-to-br from-orange-500/10 to-red-600/10 p-8 flex items-center justify-center">
                    <div className="text-center">
                      <Heart className="h-12 w-12 mx-auto mb-4 text-primary" />
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        Why We Exist
                      </h3>
                    </div>
                  </div>
                  <CardContent className="md:w-2/3 p-8">
                    <p className="text-lg text-muted-foreground leading-loose">
                      We believe in the{" "}
                      <strong>power of education to change lives</strong>.
                      That's why we design
                      <strong> flexible, expert-led programs</strong> for
                      learners at <strong>every stage</strong>.
                    </p>
                  </CardContent>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Instructors Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative">
          <AnimatedSection animation="fade-up" className="text-center mb-20">
            <Badge className="mb-5 px-4 py-1.5 text-base bg-primary/10 text-primary border-primary/20">
              <Users className="mr-2 h-4 w-4" />
              Our Instructors
            </Badge>
            <h2 className="text-section-title font-bold mb-5 gradient-text">
              Expert Educators
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Meet our talented team of instructors who bring years of
              experience and passion to every course.
            </p>
          </AnimatedSection>

          {/* Animated Instructors Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-left gap-8">
              {/* First set of cards */}
              {instructors.concat(instructors).map((instructor, index) => (
                <div
                  key={`${instructor.id}-${index}`}
                  className="flex-shrink-0 w-80 bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-6 shadow-lg"
                >
                  <div className="text-center space-y-4">
                    <Avatar className="w-20 h-20 mx-auto border-2 border-primary/20">
                      <AvatarImage
                        src={instructor.avatar}
                        alt={instructor.name}
                      />
                      <AvatarFallback>
                        <User className="h-10 w-10" />
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {instructor.name}
                      </h3>
                      <p className="text-primary font-medium">
                        {instructor.title}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-primary/10 px-3 py-2 rounded-lg">
                        <p className="font-medium text-foreground">
                          Experience
                        </p>
                        <p className="text-muted-foreground">
                          {instructor.experience}
                        </p>
                      </div>
                      <div className="bg-green-500/10 px-3 py-2 rounded-lg">
                        <p className="font-medium text-foreground">
                          Satisfaction
                        </p>
                        <p className="text-green-600 font-bold">
                          {instructor.satisfaction}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Profile */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-section-title font-bold mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Leading with vision, expertise, and unwavering commitment to
              excellence in education and healthcare.
            </p>
          </AnimatedSection>

          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="scale-in" delay={200}>
              <Card className="overflow-hidden bg-card/80 backdrop-blur-sm border-2 border-transparent">
                <div className="lg:flex">
                  {/* Profile Image and Basic Info */}
                  <div className="lg:w-2/5 bg-gradient-to-br from-primary/10 to-secondary/10 p-12 flex flex-col items-center justify-center relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
                    <div className="text-center relative z-10">
                      <FloatingElement>
                        <div className="relative mb-8">
                          <div className="w-48 h-48 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full p-1">
                            <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
                              <UserCircle className="h-32 w-32 text-primary" />
                            </div>
                          </div>
                          <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-3 rounded-full shadow-lg">
                            <Award className="h-6 w-6" />
                          </div>
                        </div>
                      </FloatingElement>
                      <h2 className="text-2xl font-bold mb-3 gradient-text">
                        Dr. Sally Abo Elsaad
                      </h2>
                      <p className="text-primary font-medium text-base mb-5">
                        Chief Executive Officer / CEO of Smart Learning Academy
                      </p>

                      {/* Contact Info */}
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-3 justify-center">
                          <Mail className="h-4 w-4 text-primary" />
                          <span>sally.ceo@smartlearning.academy</span>
                        </div>
                        <div className="flex items-center gap-3 justify-center">
                          <Phone className="h-4 w-4 text-primary" />
                          <span>+966 50 123 4567</span>
                        </div>
                        <div className="flex items-center gap-3 justify-center">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span>Riyadh, Saudi Arabia</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Detailed Information */}
                  <CardContent className="lg:w-3/5 p-12">
                    <div className="space-y-8">
                      {/* Bio */}
                      <div>
                        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                          <Sparkles className="h-5 w-5 text-primary" />
                          <span>About Dr. Sally</span>
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-base mb-4">
                          Dr. Sally is a visionary leader with a passion for
                          transforming healthcare and education. Her unique
                          combination of medical expertise and business acumen
                          has positioned Smart Learning Academy as a leading
                          educational institution in the region.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div className="bg-primary/5 p-4 rounded-lg">
                            <Building2 className="h-5 w-5 text-primary mb-2" />
                            <p className="font-medium mb-1">Experience</p>
                            <p className="text-muted-foreground">
                              15+ years experience in major hospitals in Egypt
                              and Saudi Arabia
                            </p>
                          </div>
                          <div className="bg-secondary/5 p-4 rounded-lg">
                            <Award className="h-5 w-5 text-primary mb-2" />
                            <p className="font-medium mb-1">Previous Role</p>
                            <p className="text-muted-foreground">
                              Former Medical Director of Tanta El-kher NICU
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Qualifications */}
                      <div>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                          <Award className="h-5 w-5 text-primary" />
                          <span>Qualifications & Certifications</span>
                        </h3>
                        <div className="grid gap-3">
                          {leadership.qualifications.map(
                            (qualification, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-4 bg-background/50 p-4 rounded-lg border border-border/50"
                              >
                                <div className="bg-primary/10 p-2 rounded-full">
                                  <qualification.icon className="h-5 w-5 text-primary" />
                                </div>
                                <div className="flex-1">
                                  <p className="font-medium">
                                    {qualification.degree}
                                  </p>
                                  <p className="text-sm text-muted-foreground">
                                    {qualification.year}
                                  </p>
                                </div>
                              </div>
                            ),
                          )}
                        </div>
                      </div>

                      {/* Key Achievements */}
                      <div>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                          <Star className="h-5 w-5 text-primary" />
                          <span>Key Achievements</span>
                        </h3>
                        <div className="grid gap-3">
                          {leadership.achievements.map((achievement, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <div className="bg-green-500/10 p-1 rounded-full mt-1">
                                <div className="w-2 h-2 bg-green-500 rounded-full" />
                              </div>
                              <p className="text-muted-foreground">
                                {achievement}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
        <FloatingElement className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full" />
        <FloatingElement className="absolute bottom-20 right-20 w-24 h-24 bg-white/5 rounded-full" />

        <div className="container mx-auto px-4 text-center relative">
          <AnimatedSection animation="scale-in">
            <h2 className="text-section-title font-bold mb-5">
              {t("about.cta.title")}
            </h2>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              {t("about.cta.subtitle")}
            </p>
            <Link to="/courses">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 px-6 py-3 text-base font-semibold shadow-lg hover:shadow-xl hover-scale-102 transition-all duration-300"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                {t("about.cta.button")}
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
