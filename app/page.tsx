'use client';

import React, { useState, useEffect } from 'react';
import { Cloud, Users, Award, Calendar, MapPin, Coffee, Code, Network, Trophy, BookOpen, Zap, Heart, Target, Rocket, Linkedin, Twitter, Instagram, Mail, MessageCircle, ChevronDown, Clock, Shield, Server, Brain, DollarSign, Mic, Star, CheckCircle, Crown } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AWSCommunityDay() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Countdown timer
  useEffect(() => {
    const targetDate = new Date('2026-01-23T09:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Speakers will be revealed soon!
  const speakers: any[] = [];

  const schedule = {
    common: [
      { time: "8:00 AM", endTime: "9:00 AM", event: "Registration & Networking", icon: Users, color: "from-blue-500 to-cyan-500" },
      { time: "9:00 AM", endTime: "9:30 AM", event: "Opening Ceremony", icon: Rocket, color: "from-orange-500 to-red-500" },
      { time: "9:30 AM", endTime: "10:30 AM", event: "Keynote Presentation", icon: Zap, color: "from-yellow-500 to-orange-500" },
      { time: "10:30 AM", endTime: "10:45 AM", event: "Coffee Break", icon: Coffee, color: "from-amber-500 to-yellow-500" },
      { time: "12:30 PM", endTime: "1:30 PM", event: "Lunch & Networking", icon: Users, color: "from-green-500 to-teal-500" },
      { time: "4:30 PM", endTime: "5:00 PM", event: "Closing Ceremony", icon: Heart, color: "from-red-500 to-pink-500" }
    ],
    tracks: {
      "Gen-AI/Agentic AI": [
        { time: "10:45 AM", endTime: "11:30 AM", event: "Session 1", speaker: "" },
        { time: "11:30 AM", endTime: "12:15 PM", event: "Session 2", speaker: "" },
        { time: "12:30 PM", endTime: "1:30 PM", event: "Lunch & Networking", speaker: "" },
        { time: "1:30 PM", endTime: "2:15 PM", event: "Session 3", speaker: "" },
        { time: "2:15 PM", endTime: "3:00 PM", event: "Session 4", speaker: "" }
      ],
      "Serverless & Dev Tools": [
        { time: "10:45 AM", endTime: "11:30 AM", event: "Session 1", speaker: "" },
        { time: "11:30 AM", endTime: "12:15 PM", event: "Session 2", speaker: "" },
        { time: "12:30 PM", endTime: "1:30 PM", event: "Lunch & Networking", speaker: "" },
        { time: "1:30 PM", endTime: "2:15 PM", event: "Session 3", speaker: "" },
        { time: "2:15 PM", endTime: "3:00 PM", event: "Session 4", speaker: "" }
      ],
      "Security": [
        { time: "10:45 AM", endTime: "11:30 AM", event: "Session 1", speaker: "" },
        { time: "11:30 AM", endTime: "12:15 PM", event: "Session 2", speaker: "" },
        { time: "12:30 PM", endTime: "1:30 PM", event: "Lunch & Networking", speaker: "" },
        { time: "1:30 PM", endTime: "2:15 PM", event: "Session 3", speaker: "" },
        { time: "2:15 PM", endTime: "3:00 PM", event: "Session 4", speaker: "" }
      ]
    }
  };

  const registrationPlans = [
    {
      name: "Student Pass",
      price: "₹150",
      originalPrice: "₹299",
      features: [
        "Full day access to all sessions",
        "Lunch & refreshments included",
        "AWS swag & goodies",
        "E-certificate of participation",
        "Networking opportunities",
        "Access to all 3 tracks"
      ],
      popular: true,
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const whyJoinReasons = [
    {
      icon: Brain,
      title: "Learn Latest AWS Technologies",
      description: "Get hands-on experience with cutting-edge AWS services including AI/ML, serverless, and security tools",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Network with 500+ Professionals",
      description: "Connect with AWS experts, industry leaders, and fellow developers from across India",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Trophy,
      title: "Gain Industry Recognition",
      description: "Earn certificates, showcase your skills, and get recognized in the AWS community",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Rocket,
      title: "Accelerate Your Career",
      description: "Access exclusive job opportunities, mentorship, and career guidance from AWS professionals",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Code,
      title: "Hands-on Workshops",
      description: "Participate in interactive workshops and build real AWS projects during the event",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Award,
      title: "Exclusive AWS Swag",
      description: "Get premium AWS merchandise, goodies, and exclusive community day memorabilia",
      color: "from-pink-500 to-rose-500"
    }
  ];

  const sponsors = [
    { name: "Amazon Web Services", logo: "/img/aws_logo_smile.png", tier: "Title Sponsor", url: "https://aws.amazon.com" },
    { name: "Partner Company 1", logo: "/img/partner.png", tier: "Gold Sponsor", url: "#" },
    { name: "Partner Company 2", logo: "/img/community.png", tier: "Silver Sponsor", url: "#" }
  ];

  const organizers = [
    { name: "Labeeq ahmed", role: "AWS Cloud Captain", subtitle: "AWS Cloud Club Sathyabama Institute of Science and Technology", image: "L" },
    { name: "vishal", role: "AWS Cloud Captain", subtitle: "AWS Cloud Club Panimalar Engineering College", image: "V" },
    { name: "Pooja", role: "AWS Cloud Captain", subtitle: "AWS Cloud Club Chennai Institute of Technology", image: "P" },
    { name: "Parvathy", role: "AWS Cloud Captain", subtitle: "AWS Cloud Club Amrita Vishwa Vidyapeetham", image: "P" }
  ];

  const faqs = [
    {
      q: "Who can attend this event?",
      a: "The event is open to students, AWS enthusiasts, developers, cloud professionals, and anyone passionate about cloud computing and technology innovation."
    },
    {
      q: "What are the different registration categories?",
      a: "We offer Student Pass (₹299), Professional Pass (₹799), and Team/Group Pass (₹2499). Each includes different benefits and access levels."
    },
    {
      q: "Will certificates be provided?",
      a: "Yes! E-certificates will be provided to all attendees. Professional pass holders get enhanced certificates with additional credentials."
    },
    {
      q: "Is food included in the registration?",
      a: "Yes, all passes include lunch, snacks, and refreshments throughout the day. We've got you covered!"
    },
    {
      q: "Can I switch between different tracks?",
      a: "Yes! You can attend sessions from any of the 3 tracks - Gen-AI/Agentic AI, Serverless & Dev Tools, or Security based on your interests."
    },
    {
      q: "Are there networking opportunities?",
      a: "Absolutely! We have dedicated networking sessions, lunch breaks, and coffee breaks designed for attendees to connect with speakers and peers."
    },
    {
      q: "What should I bring to the event?",
      a: "Bring your laptop for hands-on workshops, business cards for networking, and enthusiasm to learn! We'll provide everything else."
    },
    {
      q: "Is there parking available?",
      a: "Yes, free parking is available at the venue. We'll share detailed venue and parking information with registered attendees."
    }
  ];

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Parallax Background Elements */}
      <div className="parallax-bg">
        {/* Chennai Cityscape Shadow */}
        <Image
          src="/img/chennai.png"
          alt=""
          width={1400}
          height={400}
          className="chennai-shadow"
          priority={false}
        />

        {/* Floating Clouds */}
        <Image
          src="/img/cloud.png"
          alt=""
          width={200}
          height={100}
          className="cloud-float cloud-1"
          priority={false}
        />
        <Image
          src="/img/cloud1.png"
          alt=""
          width={150}
          height={75}
          className="cloud-float cloud-2"
          priority={false}
        />
        <Image
          src="/img/cloud.png"
          alt=""
          width={180}
          height={90}
          className="cloud-float cloud-3"
          priority={false}
        />

        {/* Lighthouse Accent */}
        <Image
          src="/img/lighthouse.png"
          alt=""
          width={120}
          height={150}
          className="lighthouse-accent"
          priority={false}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-xl z-50 border-b border-purple-500/30 shadow-lg shadow-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-orange-500 to-purple-500 rounded-lg">
              <Cloud className="text-white" size={28} />
            </div>
            <div>
              <div className="text-white font-bold text-lg">AWS Student Community Day</div>
              <div className="text-purple-300 text-xs">Chennai 2026</div>
            </div>
          </div>
          <div className="hidden lg:flex gap-6 text-sm font-medium">
            <a href="#about" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">About</a>
            <a href="#countdown" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">Countdown</a>
            <a href="#registration" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">Registration</a>
            <a href="#speakers" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">Speakers</a>
            <a href="#schedule" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">Schedule</a>
            <a href="#sponsors" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">Sponsors</a>
            <a href="#faq" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">FAQ</a>
          </div>
          <button className="bg-gradient-to-r from-orange-500 to-purple-500 hover:from-orange-600 hover:to-purple-600 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50">
            Register Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent"></div>
        <motion.div
          className="max-w-7xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-orange-500/20 to-purple-500/20 border border-orange-500/30 rounded-full backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-orange-300 text-sm font-bold">📍 Chennai, India • January 24, 2026</span>
          </motion.div>
          <motion.h1
            className="text-6xl md:text-8xl font-extrabold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            AWS Student<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-purple-400 to-pink-400">
              Community Day
            </span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Join the largest gathering of AWS enthusiasts, developers, and cloud professionals in Chennai.
            Learn, network, and build the future together.
          </motion.p>
          <motion.p
            className="text-lg text-purple-300 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Experience 3 specialized tracks: Gen-AI/Agentic AI, Serverless & Dev Tools, and Security.
            Connect with 500+ professionals and accelerate your cloud journey.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <motion.button
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(249, 115, 22, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Rocket size={24} />
              Register Now
            </motion.button>
            <motion.button
              className="bg-transparent border-2 border-purple-500 hover:bg-purple-500/20 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Mic size={24} />
              Call for Speakers
            </motion.button>
          </motion.div>
        </motion.div>
      </div>


      {/* About Section */}
      <div id="about" className="py-24 px-4 bg-slate-800/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About AWS Student Community Day Chennai</h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
              AWS Student Community Day Chennai 2026 is a premier cloud computing conference bringing together students, professionals,
              and industry experts to explore the latest in AWS technologies. Join us for a day of learning, networking,
              and innovation in the heart of Chennai.
            </p>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div
              className="text-center p-8 bg-gradient-to-br from-slate-800/80 to-purple-900/30 border border-purple-500/20 rounded-2xl"
              variants={cardVariant}
              whileHover={{ y: -10, borderColor: "rgba(249, 115, 22, 0.5)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Users className="mx-auto mb-4 text-orange-400" size={48} />
              <h3 className="text-white font-bold text-xl mb-2">500+ Attendees</h3>
              <p className="text-gray-300">Students and professionals from across India</p>
            </motion.div>
            <motion.div
              className="text-center p-8 bg-gradient-to-br from-slate-800/80 to-purple-900/30 border border-purple-500/20 rounded-2xl"
              variants={cardVariant}
              whileHover={{ y: -10, borderColor: "rgba(168, 85, 247, 0.5)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Award className="mx-auto mb-4 text-purple-400" size={48} />
              <h3 className="text-white font-bold text-xl mb-2">15+ Speakers</h3>
              <p className="text-gray-300">Industry experts and AWS professionals</p>
            </motion.div>
            <motion.div
              className="text-center p-8 bg-gradient-to-br from-slate-800/80 to-purple-900/30 border border-purple-500/20 rounded-2xl"
              variants={cardVariant}
              whileHover={{ y: -10, borderColor: "rgba(236, 72, 153, 0.5)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Code className="mx-auto mb-4 text-pink-400" size={48} />
              <h3 className="text-white font-bold text-xl mb-2">3 Tracks</h3>
              <p className="text-gray-300">Specialized content for different interests</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Organizing Clubs Section */}
      <div className="py-24 px-4 bg-slate-800/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Organizing Clubs</h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              The AWS Student Community Day 2026 is proudly organized by passionate student communities from Sathyabama Institute of Science and Technology.
              These clubs represent a diverse range of interests — from AI and cloud computing to cybersecurity and data science — united under one goal:
              to empower students to build, learn, and innovate together.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center items-center gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Amritha */}
            <motion.div
              className="group w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center cursor-pointer"
              variants={cardVariant}
              whileHover={{ scale: 1.15, rotate: 12 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="/img/WhatsApp Image 2025-12-08 at 11.07.53 AM.jpeg"
                alt="Amrita Vishwa Vidyapeetham"
                className="w-20 h-20 object-contain rounded-full"
              />
            </motion.div>

            {/* CIT */}
            <motion.div
              className="group w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center cursor-pointer"
              variants={cardVariant}
              whileHover={{ scale: 1.15, rotate: 12 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="/img/WhatsApp Image 2025-12-08 at 11.07.53 AM (1).jpeg"
                alt="Chennai Institute of Technology"
                className="w-20 h-20 object-contain rounded-full"
              />
            </motion.div>

            {/* Panimalar */}
            <motion.div
              className="group w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center cursor-pointer"
              variants={cardVariant}
              whileHover={{ scale: 1.15, rotate: 12 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="/img/WhatsApp Image 2025-12-08 at 11.07.54 AM.jpeg"
                alt="Panimalar Engineering College"
                className="w-20 h-20 object-contain rounded-full"
              />
            </motion.div>

            {/* Sathyabama */}
            <motion.div
              className="group w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center cursor-pointer"
              variants={cardVariant}
              whileHover={{ scale: 1.15, rotate: 12 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="/img/WhatsApp Image 2025-12-08 at 11.07.54 AM (1).jpeg"
                alt="Sathyabama Institute of Science and Technology"
                className="w-20 h-20 object-contain rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Countdown Section */}
      <div id="countdown" className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Event Countdown</h2>
            <p className="text-gray-300 text-lg mb-12">Don't miss out! Register now and secure your spot.</p>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div
              className="p-6 bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-2xl"
              variants={cardVariant}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-4xl md:text-6xl font-bold text-orange-400 mb-2">{timeLeft.days}</div>
              <div className="text-gray-300 font-medium">Days</div>
            </motion.div>
            <motion.div
              className="p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl"
              variants={cardVariant}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-4xl md:text-6xl font-bold text-purple-400 mb-2">{timeLeft.hours}</div>
              <div className="text-gray-300 font-medium">Hours</div>
            </motion.div>
            <motion.div
              className="p-6 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-2xl"
              variants={cardVariant}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-4xl md:text-6xl font-bold text-blue-400 mb-2">{timeLeft.minutes}</div>
              <div className="text-gray-300 font-medium">Minutes</div>
            </motion.div>
            <motion.div
              className="p-6 bg-gradient-to-br from-green-500/20 to-teal-500/20 border border-green-500/30 rounded-2xl"
              variants={cardVariant}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-4xl md:text-6xl font-bold text-green-400 mb-2">{timeLeft.seconds}</div>
              <div className="text-gray-300 font-medium">Seconds</div>
            </motion.div>
          </motion.div>
          <button className="bg-gradient-to-r from-orange-500 to-purple-500 hover:from-orange-600 hover:to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105">
            Register Before It's Too Late!
          </button>
        </div>
      </div>

      {/* Registration Section */}
      <div id="registration" className="py-24 px-4 bg-slate-800/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Registration Plans</h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
              Choose the perfect pass for your AWS learning journey. Early bird pricing available for limited time!
            </p>
          </motion.div>
          <motion.div
            className="flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {registrationPlans.map((plan, idx) => (
              <motion.div
                key={idx}
                className={`relative p-8 bg-gradient-to-br from-slate-800/80 to-purple-900/30 border ${plan.popular ? 'border-orange-500/50 ring-2 ring-orange-500/30' : 'border-purple-500/20'} rounded-2xl`}
                variants={cardVariant}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-white font-bold text-2xl mb-2">{plan.name}</h3>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400">{plan.price}</span>
                    <span className="text-gray-400 line-through text-lg">{plan.originalPrice}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 ${plan.popular ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white' : 'bg-slate-700 hover:bg-slate-600 text-white'}`}>
                  Choose {plan.name}
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Why Join Us Section */}
      <div className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Join AWS Student Community Day?</h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
              Discover the compelling reasons to be part of Chennai's premier AWS community event
            </p>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {whyJoinReasons.map((reason, idx) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={idx}
                  className="group p-8 bg-slate-800/50 border border-purple-500/20 rounded-2xl cursor-pointer"
                  variants={cardVariant}
                  whileHover={{ y: -10, scale: 1.05, borderColor: "rgba(249, 115, 22, 0.5)", boxShadow: "0 20px 40px rgba(249, 115, 22, 0.2)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${reason.color} rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3 group-hover:text-orange-400 transition-colors duration-300">{reason.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{reason.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Featured Speakers Section */}
      <div id="speakers" className="py-24 px-4 bg-slate-800/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Speakers</h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
              Learn from industry experts and AWS professionals across three specialized tracks
            </p>
          </motion.div>
          <motion.div
            className="flex justify-center items-center min-h-[400px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <motion.div
              className="relative p-12 bg-gradient-to-br from-slate-800/90 to-purple-900/40 border-2 border-orange-500/50 rounded-3xl max-w-2xl text-center"
              initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.02, borderColor: "rgba(249, 115, 22, 0.8)" }}
            >
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-orange-500 to-purple-500 rounded-full blur-lg opacity-70 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-lg opacity-70 animate-pulse"></div>

              {/* Icon */}
              <motion.div
                className="mb-6 flex justify-center"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Star className="text-yellow-400 w-20 h-20" />
              </motion.div>

              {/* Main heading */}
              <h3 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-purple-400 mb-4">
                🎤 Coming Soon!
              </h3>

              {/* Subheading */}
              <p className="text-2xl text-white font-bold mb-4">
                Our Amazing Speaker Lineup
              </p>

              {/* Description */}
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                We're curating an incredible lineup of industry experts, AWS professionals, and thought leaders.
                Get ready to learn from the best in the cloud computing world!
              </p>

              {/* Mystery counter */}
              <div className="flex justify-center gap-4 mb-6">
                <div className="bg-slate-900/50 px-6 py-3 rounded-lg border border-purple-500/30">
                  <div className="text-3xl font-bold text-orange-400">15+</div>
                  <div className="text-xs text-gray-400">Speakers</div>
                </div>
                <div className="bg-slate-900/50 px-6 py-3 rounded-lg border border-purple-500/30">
                  <div className="text-3xl font-bold text-purple-400">3</div>
                  <div className="text-xs text-gray-400">Tracks</div>
                </div>
              </div>

              {/* Call to action */}
              <motion.div
                className="inline-block px-8 py-3 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full text-white font-bold"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(249, 115, 22, 0.5)",
                    "0 0 40px rgba(168, 85, 247, 0.5)",
                    "0 0 20px rgba(249, 115, 22, 0.5)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                ✨ Stay Tuned for the Big Reveal! ✨
              </motion.div>
            </motion.div>
          </motion.div>
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 mx-auto">
              <Mic size={24} />
              Become a Speaker
            </button>
          </div>
        </div>
      </div>

      {/* Schedule Section */}
      <div id="schedule" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Event Schedule</h2>
            <p className="text-gray-300 text-lg md:text-xl">
              A full day of learning - follow the timeline flow
            </p>
          </motion.div>

          {/* Flowchart Timeline */}
          <div className="max-w-6xl mx-auto">
            {/* Common Events - Vertical Flow */}
            <div className="flex flex-col items-center space-y-4 mb-8">
              {/* Registration */}
              <motion.div
                className="w-full max-w-md p-6 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-2 border-blue-500/50 rounded-2xl text-center relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <Users className="mx-auto mb-2 text-blue-400" size={32} />
                <div className="text-blue-300 font-bold text-sm mb-1">8:00 AM - 9:00 AM</div>
                <h4 className="text-white font-bold text-lg">Registration & Networking</h4>
              </motion.div>

              {/* Connector Line */}
              <div className="w-1 h-8 bg-gradient-to-b from-blue-500/50 to-orange-500/50"></div>

              {/* Opening Ceremony */}
              <motion.div
                className="w-full max-w-md p-6 bg-gradient-to-br from-orange-500/20 to-red-500/20 border-2 border-orange-500/50 rounded-2xl text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <Rocket className="mx-auto mb-2 text-orange-400" size={32} />
                <div className="text-orange-300 font-bold text-sm mb-1">9:00 AM - 9:30 AM</div>
                <h4 className="text-white font-bold text-lg">Opening Ceremony</h4>
              </motion.div>

              <div className="w-1 h-8 bg-gradient-to-b from-orange-500/50 to-yellow-500/50"></div>

              {/* Keynote */}
              <motion.div
                className="w-full max-w-md p-6 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-2 border-yellow-500/50 rounded-2xl text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <Zap className="mx-auto mb-2 text-yellow-400" size={32} />
                <div className="text-yellow-300 font-bold text-sm mb-1">9:30 AM - 10:30 AM</div>
                <h4 className="text-white font-bold text-lg">Keynote Presentation</h4>
              </motion.div>

              <div className="w-1 h-8 bg-gradient-to-b from-yellow-500/50 to-amber-500/50"></div>

              {/* Coffee Break */}
              <motion.div
                className="w-full max-w-md p-6 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 border-2 border-amber-500/50 rounded-2xl text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <Coffee className="mx-auto mb-2 text-amber-400" size={32} />
                <div className="text-amber-300 font-bold text-sm mb-1">10:30 AM - 10:45 AM</div>
                <h4 className="text-white font-bold text-lg">Coffee Break</h4>
              </motion.div>
            </div>

            {/* Branch Indicator */}
            <div className="flex justify-center mb-8">
              <div className="text-center">
                <div className="w-1 h-8 bg-gradient-to-b from-amber-500/50 to-purple-500/30 mx-auto"></div>
                <div className="text-purple-300 font-semibold text-sm my-2">Choose Your Track</div>
                <div className="flex justify-center gap-4">
                  <div className="w-32 h-1 bg-gradient-to-r from-purple-500/50 to-transparent"></div>
                  <div className="w-1 h-1 bg-purple-500/50"></div>
                  <div className="w-32 h-1 bg-gradient-to-l from-purple-500/50 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Three Parallel Tracks */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Gen-AI Track */}
              <motion.div
                className="bg-gradient-to-br from-purple-900/30 to-slate-800/80 border-2 border-purple-500/50 rounded-2xl p-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariant}
              >
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-purple-500/30">
                  <Brain className="text-purple-400" size={28} />
                  <h3 className="text-white font-bold text-lg">Gen-AI/Agentic AI</h3>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-slate-900/50 rounded-lg border border-purple-500/20">
                    <div className="text-purple-300 text-xs font-semibold mb-1">10:45 AM - 11:30 AM</div>
                    <div className="text-white text-sm font-medium">Session 1</div>
                  </div>
                  <div className="p-3 bg-slate-900/50 rounded-lg border border-purple-500/20">
                    <div className="text-purple-300 text-xs font-semibold mb-1">11:30 AM - 12:15 PM</div>
                    <div className="text-white text-sm font-medium">Session 2</div>
                  </div>

                  {/* Lunch Break */}
                  <div className="p-4 bg-gradient-to-br from-green-500/20 to-teal-500/20 border-2 border-green-500/50 rounded-lg text-center my-4">
                    <Users className="mx-auto mb-1 text-green-400" size={24} />
                    <div className="text-green-300 text-xs font-bold mb-1">12:30 PM - 1:30 PM</div>
                    <div className="text-white text-sm font-bold">Lunch & Networking</div>
                  </div>

                  <div className="p-3 bg-slate-900/50 rounded-lg border border-purple-500/20">
                    <div className="text-purple-300 text-xs font-semibold mb-1">1:30 PM - 2:15 PM</div>
                    <div className="text-white text-sm font-medium">Session 3</div>
                  </div>
                  <div className="p-3 bg-slate-900/50 rounded-lg border border-purple-500/20">
                    <div className="text-purple-300 text-xs font-semibold mb-1">2:15 PM - 3:00 PM</div>
                    <div className="text-white text-sm font-medium">Session 4</div>
                  </div>
                </div>
              </motion.div>

              {/* Serverless Track */}
              <motion.div
                className="bg-gradient-to-br from-blue-900/30 to-slate-800/80 border-2 border-blue-500/50 rounded-2xl p-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariant}
              >
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-blue-500/30">
                  <Server className="text-blue-400" size={28} />
                  <h3 className="text-white font-bold text-lg">Serverless & Dev Tools</h3>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-slate-900/50 rounded-lg border border-blue-500/20">
                    <div className="text-blue-300 text-xs font-semibold mb-1">10:45 AM - 11:30 AM</div>
                    <div className="text-white text-sm font-medium">Session 1</div>
                  </div>
                  <div className="p-3 bg-slate-900/50 rounded-lg border border-blue-500/20">
                    <div className="text-blue-300 text-xs font-semibold mb-1">11:30 AM - 12:15 PM</div>
                    <div className="text-white text-sm font-medium">Session 2</div>
                  </div>

                  {/* Lunch Break */}
                  <div className="p-4 bg-gradient-to-br from-green-500/20 to-teal-500/20 border-2 border-green-500/50 rounded-lg text-center my-4">
                    <Users className="mx-auto mb-1 text-green-400" size={24} />
                    <div className="text-green-300 text-xs font-bold mb-1">12:30 PM - 1:30 PM</div>
                    <div className="text-white text-sm font-bold">Lunch & Networking</div>
                  </div>

                  <div className="p-3 bg-slate-900/50 rounded-lg border border-blue-500/20">
                    <div className="text-blue-300 text-xs font-semibold mb-1">1:30 PM - 2:15 PM</div>
                    <div className="text-white text-sm font-medium">Session 3</div>
                  </div>
                  <div className="p-3 bg-slate-900/50 rounded-lg border border-blue-500/20">
                    <div className="text-blue-300 text-xs font-semibold mb-1">2:15 PM - 3:00 PM</div>
                    <div className="text-white text-sm font-medium">Session 4</div>
                  </div>
                </div>
              </motion.div>

              {/* Security Track */}
              <motion.div
                className="bg-gradient-to-br from-red-900/30 to-slate-800/80 border-2 border-red-500/50 rounded-2xl p-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariant}
              >
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-red-500/30">
                  <Shield className="text-red-400" size={28} />
                  <h3 className="text-white font-bold text-lg">Security</h3>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-slate-900/50 rounded-lg border border-red-500/20">
                    <div className="text-red-300 text-xs font-semibold mb-1">10:45 AM - 11:30 AM</div>
                    <div className="text-white text-sm font-medium">Session 1</div>
                  </div>
                  <div className="p-3 bg-slate-900/50 rounded-lg border border-red-500/20">
                    <div className="text-red-300 text-xs font-semibold mb-1">11:30 AM - 12:15 PM</div>
                    <div className="text-white text-sm font-medium">Session 2</div>
                  </div>

                  {/* Lunch Break */}
                  <div className="p-4 bg-gradient-to-br from-green-500/20 to-teal-500/20 border-2 border-green-500/50 rounded-lg text-center my-4">
                    <Users className="mx-auto mb-1 text-green-400" size={24} />
                    <div className="text-green-300 text-xs font-bold mb-1">12:30 PM - 1:30 PM</div>
                    <div className="text-white text-sm font-bold">Lunch & Networking</div>
                  </div>

                  <div className="p-3 bg-slate-900/50 rounded-lg border border-red-500/20">
                    <div className="text-red-300 text-xs font-semibold mb-1">1:30 PM - 2:15 PM</div>
                    <div className="text-white text-sm font-medium">Session 3</div>
                  </div>
                  <div className="p-3 bg-slate-900/50 rounded-lg border border-red-500/20">
                    <div className="text-red-300 text-xs font-semibold mb-1">2:15 PM - 3:00 PM</div>
                    <div className="text-white text-sm font-medium">Session 4</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Closing - Final Convergence */}
            <div className="flex flex-col items-center">
              <motion.div
                className="w-full max-w-md p-6 bg-gradient-to-br from-red-500/20 to-pink-500/20 border-2 border-red-500/50 rounded-2xl text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <Heart className="mx-auto mb-2 text-red-400" size={32} />
                <div className="text-red-300 font-bold text-sm mb-1">4:30 PM - 5:00 PM</div>
                <h4 className="text-white font-bold text-lg">Closing Ceremony</h4>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Call for Speakers */}
      <div className="py-24 px-4 bg-slate-800/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Call for Speakers</h2>
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Share your AWS expertise with the community! We're looking for passionate speakers to present
            on Gen-AI/Agentic AI, Serverless & Dev Tools, and Security topics.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl">
              <Brain className="mx-auto mb-4 text-purple-400" size={48} />
              <h3 className="text-white font-bold text-lg mb-2">Gen-AI/Agentic AI</h3>
              <p className="text-gray-300 text-sm">AI agents, machine learning, generative AI applications</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-2xl">
              <Server className="mx-auto mb-4 text-blue-400" size={48} />
              <h3 className="text-white font-bold text-lg mb-2">Serverless & Dev Tools</h3>
              <p className="text-gray-300 text-sm">Lambda, containers, CI/CD, development tools</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-2xl">
              <Shield className="mx-auto mb-4 text-red-400" size={48} />
              <h3 className="text-white font-bold text-lg mb-2">Security</h3>
              <p className="text-gray-300 text-sm">DevSecOps, cloud security, compliance, best practices</p>
            </div>
          </div>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 flex items-center justify-center gap-2 mx-auto">
            <Mic size={24} />
            Submit Your Proposal
          </button>
        </div>
      </div>

      {/* Call for Sponsors */}
      <div className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Call for Sponsors</h2>
          <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-3xl mx-auto">
            Partner with us to reach 500+ AWS enthusiasts and professionals. Multiple sponsorship tiers available
            with excellent brand visibility and networking opportunities.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-2xl">
              <Star className="mx-auto mb-4 text-yellow-400" size={48} />
              <h3 className="text-white font-bold text-lg mb-2">Title Sponsor</h3>
              <p className="text-gray-300 text-sm">Maximum brand visibility, keynote opportunity, premium booth</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-gray-400/20 to-gray-600/20 border border-gray-400/30 rounded-2xl">
              <Award className="mx-auto mb-4 text-gray-400" size={48} />
              <h3 className="text-white font-bold text-lg mb-2">Gold Sponsor</h3>
              <p className="text-gray-300 text-sm">Speaking slot, exhibition booth, logo placement</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-2xl">
              <Trophy className="mx-auto mb-4 text-orange-400" size={48} />
              <h3 className="text-white font-bold text-lg mb-2">Silver Sponsor</h3>
              <p className="text-gray-300 text-sm">Logo placement, networking opportunities, swag distribution</p>
            </div>
          </div>
          <button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-yellow-500/50 flex items-center justify-center gap-2 mx-auto">
            <DollarSign size={24} />
            Become a Sponsor
          </button>
        </div>
      </div>

      {/* Sponsors Section */}
      <div id="sponsors" className="py-24 px-4 bg-slate-800/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Sponsors</h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
              Thank you to our amazing sponsors who make this event possible
            </p>
          </motion.div>
          <motion.div
            className="flex justify-center items-center min-h-[400px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <motion.div
              className="relative p-12 bg-gradient-to-br from-slate-800/90 to-purple-900/40 border-2 border-yellow-500/50 rounded-3xl max-w-2xl text-center"
              initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.02, borderColor: "rgba(234, 179, 8, 0.8)" }}
            >
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full blur-lg opacity-70 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full blur-lg opacity-70 animate-pulse"></div>

              {/* Icon */}
              <motion.div
                className="mb-6 flex justify-center"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <DollarSign className="text-yellow-400 w-20 h-20" />
              </motion.div>

              {/* Main heading */}
              <h3 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 mb-4">
                🎉 Coming Soon!
              </h3>

              {/* Subheading */}
              <p className="text-2xl text-white font-bold mb-4">
                Our Amazing Sponsors
              </p>

              {/* Description */}
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                We're finalizing partnerships with industry-leading companies who share our passion for cloud innovation.
                Get ready to meet the sponsors who make AWS Community Day Chennai possible!
              </p>

              {/* Call to action */}
              <motion.div
                className="inline-block px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-white font-bold"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(234, 179, 8, 0.5)",
                    "0 0 40px rgba(249, 115, 22, 0.5)",
                    "0 0 20px rgba(234, 179, 8, 0.5)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                ✨ We'll Reveal Them Soon! ✨
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Organizers & Patrons */}
      <div className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Organizers & Patrons</h2>
            <p className="text-gray-300 text-lg">
              Meet the passionate AWS Community builders making this event possible
            </p>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {organizers.map((organizer, idx) => (
              <motion.div
                key={idx}
                className="p-8 bg-gradient-to-br from-slate-800/80 to-purple-900/30 border border-purple-500/20 rounded-2xl text-center cursor-pointer"
                variants={cardVariant}
                whileHover={{ y: -10, scale: 1.05, borderColor: "rgba(249, 115, 22, 0.5)", boxShadow: "0 20px 40px rgba(249, 115, 22, 0.2)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-3xl mx-auto mb-4">
                  {organizer.image}
                </div>
                <h3 className="text-white font-bold text-xl mb-2">{organizer.name}</h3>
                <p className="text-orange-400 text-sm font-semibold mb-2">{organizer.role}</p>
                <p className="text-gray-400 text-sm">{organizer.subtitle}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Venue Section */}
      <div className="py-24 px-4 bg-slate-800/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Sathyabama Institute of Science and Technology</h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-8">
              Sathyabama Institute of Science and Technology (Deemed to be University) is one of India's premier engineering institutions,
              located in Chennai, Tamil Nadu. With a legacy of excellence in education and innovation, Sathyabama has been at the forefront
              of nurturing future technologists and researchers.
            </p>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed mb-8">
              Spread across a lush green campus by the IT corridor, it provides world-class facilities, modern infrastructure,
              and a vibrant student community that actively drives innovation through clubs, hackathons, and research.
            </p>
            <p className="text-purple-300 text-lg max-w-4xl mx-auto leading-relaxed mb-12">
              As a hub for cloud computing, AI, and data innovation, Sathyabama is the perfect venue for AWS Student Community Day 2026,
              bringing together passionate learners, developers, and innovators to explore the future of cloud technology.
            </p>
            <div className="bg-slate-800/50 border border-purple-500/20 rounded-2xl p-8 max-w-2xl mx-auto">
              <MapPin className="mx-auto mb-4 text-orange-400" size={48} />
              <h3 className="text-white font-bold text-xl mb-4">Venue Location</h3>
              <p className="text-gray-300 leading-relaxed">
                Sathyabama Institute of Science and Technology,<br />
                Rajiv Gandhi Salai (OMR), Jeppiaar Nagar,<br />
                Chennai – 600119, Tamil Nadu, India
              </p>
            </div>
          </div>

          {/* Google Map Embed */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-purple-400 mb-6">Venue Location</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join us at Sathyabama Institute of Science and Technology, Chennai — a vibrant campus fostering innovation and collaboration in technology.
            </p>
            <div className="flex justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.3300984729644!2d80.22093127599108!3d12.872159487431873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525ad4b66a223b%3A0xd41cb4a3a19cb2e3!2sSathyabama%20Institute%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sin!4v1730012345678!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl shadow-lg w-11/12 md:w-3/4"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faq" className="py-24 px-4 bg-slate-800/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-300 text-lg">
              Got questions? We've got answers!
            </p>
          </motion.div>
          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                className="bg-gradient-to-br from-slate-800/80 to-purple-900/30 border border-purple-500/20 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-300"
                variants={cardVariant}
              >
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors duration-300"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className="text-white font-semibold text-lg">{faq.q}</span>
                  <ChevronDown
                    className={`text-orange-400 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}
                    size={24}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Contact / Footer */}
      <footer className="py-16 px-4 bg-slate-900/50 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-orange-500 to-purple-500 rounded-lg">
                  <Cloud className="text-white" size={32} />
                </div>
                <div>
                  <div className="text-white font-bold text-xl">AWS Student Community Day</div>
                  <div className="text-purple-300">Chennai 2026</div>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Join us for an incredible journey of learning, networking, and innovation in the world of AWS and cloud computing.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#about" className="hover:text-orange-400 transition-colors">About</a></li>
                <li><a href="#registration" className="hover:text-orange-400 transition-colors">Registration</a></li>
                <li><a href="#speakers" className="hover:text-orange-400 transition-colors">Speakers</a></li>
                <li><a href="#schedule" className="hover:text-orange-400 transition-colors">Schedule</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Get Involved</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Call for Speakers</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Become a Sponsor</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Volunteer</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Community</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail size={20} className="text-orange-400" />
                  <span>hello@awscommunityday.in</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin size={20} className="text-purple-400" />
                  <span>Chennai, India</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Calendar size={20} className="text-pink-400" />
                  <span>January 24, 2026</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-purple-500/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-gray-400 text-sm">
                <p>&copy; 2026 AWS Student Community Day Chennai. Made with ❤️ by the AWS Student Community.</p>
              </div>
              <div className="flex gap-6">
                <a href="#" className="p-3 bg-slate-800/50 border border-purple-500/20 rounded-lg hover:border-orange-500/50 transition-all duration-300 transform hover:scale-110">
                  <Twitter className="text-purple-400" size={24} />
                </a>
                <a href="#" className="p-3 bg-slate-800/50 border border-purple-500/20 rounded-lg hover:border-orange-500/50 transition-all duration-300 transform hover:scale-110">
                  <Linkedin className="text-purple-400" size={24} />
                </a>
                <a href="#" className="p-3 bg-slate-800/50 border border-purple-500/20 rounded-lg hover:border-orange-500/50 transition-all duration-300 transform hover:scale-110">
                  <Instagram className="text-purple-400" size={24} />
                </a>
                <a href="#" className="p-3 bg-slate-800/50 border border-purple-500/20 rounded-lg hover:border-orange-500/50 transition-all duration-300 transform hover:scale-110">
                  <Mail className="text-purple-400" size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div >
  );
}