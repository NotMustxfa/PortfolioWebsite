import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import {
  ArrowDownIcon,
  CodeBracketIcon,
  CommandLineIcon,
  CpuChipIcon,
  RocketLaunchIcon,
  ArrowUpRightIcon,
  ChartBarIcon,
  SparklesIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  CheckBadgeIcon,
  EnvelopeIcon,
  ArrowTopRightOnSquareIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  UserIcon,
  LightBulbIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
  DevicePhoneMobileIcon,
  ServerIcon,
  StarIcon,
  FireIcon,
  BoltIcon,
} from '@heroicons/react/24/outline';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/personal';
import projects from '../data/projects';
import { RevealText } from '../components/TextAnimations';
import { HolographicText } from '../components/HolographicText';
import { ProjectModal } from '../components/ProjectModal';
import { MagneticButton } from '../components/MagneticButton';
import { EnhancedProjectCard } from '../components/EnhancedProjectCard';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { GlassPanel, CountUp } from '../components/UIEnhancements';
import { InteractiveSkillGrid } from '../components/InteractiveSkillGrid';
import { AnimatedStatGrid } from '../components/AnimatedStatGrid';
import { GlitchText } from '../components/GlitchText';
import { ParallaxScroll, ScrollScale } from '../components/ParallaxScroll';
import { AdvancedGlassPanel, FloatingGlassCard } from '../components/AdvancedGlassPanel';
import { FloatingBlob } from '../components/FloatingElements';
import * as AdvancedAnimations from '../utils/advancedAnimations';

// ============================================
// ENHANCED ANIMATION VARIANTS WITH ADVANCED EFFECTS
// ============================================

const fadeInUp = AdvancedAnimations.fadeInUp;
const fadeInLeft = AdvancedAnimations.fadeInLeft;
const fadeInRight = AdvancedAnimations.fadeInRight;
const scaleInBounce = AdvancedAnimations.scaleInBounce;
const zoomInRotate = AdvancedAnimations.zoomInRotate;
const scrollFadeInUp = AdvancedAnimations.scrollFadeInUp;
const scrollScaleIn = AdvancedAnimations.scrollScaleIn;
const cardHoverAnimation = AdvancedAnimations.cardHoverAnimation;
const buttonPressAnimation = AdvancedAnimations.buttonPressAnimation;

const staggerContainer = AdvancedAnimations.staggerContainer;
const staggerContainerFast = AdvancedAnimations.staggerContainerFast;
const staggerItem = AdvancedAnimations.staggerItem;

const floatingVariants = AdvancedAnimations.floatingVariant;
const floatingVariantSlow = AdvancedAnimations.floatingVariantSlow;
const pulseVariant = AdvancedAnimations.pulseVariant;
const glowPulse = AdvancedAnimations.glowPulse;

// Enhanced gradient animation
const gradientVariants = {
  animate: {
    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
  },
  transition: {
    duration: 8,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

// ============================================
// SECTION 1: HERO - ENHANCED WITH ANIMATIONS
// ============================================

const HeroSection = ({ config, heroRef, mode }) => {
  return (
    <motion.section
      ref={heroRef}
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="relative min-h-screen flex items-center justify-center overflow-visible pt-20 pb-12 w-full"
    >
        {/* Subtle animated gradient backdrop - extends beyond hero using fixed positioning */}
        <div
          className="fixed inset-0 pointer-events-none"
          style={{
            opacity: mode === 'creative' ? 0.15 : 0,
            background: `radial-gradient(ellipse 100% 80% at 50% 50%, ${config.primary}20 0%, transparent 60%)`,
            zIndex: -5,
            top: 0,
            left: 0,
          }}
        />
        
        <div
          className="fixed inset-0 pointer-events-none"
          style={{
            opacity: mode === 'creative' ? 0.1 : 0,
            background: `radial-gradient(ellipse 120% 100% at 50% -10%, ${config.secondary}15 0%, transparent 70%)`,
            zIndex: -5,
            top: 0,
            left: 0,
          }}
        />

        {/* Animated gradient overlay - extends beyond hero using fixed positioning */}
        <motion.div
          key={`gradient-${mode}`}
          className="fixed inset-0 pointer-events-none"
          style={{ zIndex: -5, top: 0, left: 0 }}
          animate={{
            background: [
              `radial-gradient(at 0% 0%, ${config.primary}15 0%, transparent 50%)`,
              `radial-gradient(at 100% 100%, ${config.primary}15 0%, transparent 50%)`,
              `radial-gradient(at 0% 0%, ${config.primary}15 0%, transparent 50%)`,
            ],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />

        {/* Animated background elements - use fixed positioning to extend across full viewport */}
        <motion.div
          className="fixed top-1/3 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{
            background: config.primary,
            opacity: mode === 'creative' ? 0.05 : 0,
            zIndex: -4,
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="fixed top-2/3 left-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
          style={{
            background: config.secondary,
            opacity: mode === 'creative' ? 0.05 : 0,
            zIndex: -4,
          }}
          animate={{
            scale: [1, 1.15, 1],
            x: [0, -40, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: -5 }}
        />

        {/* Floating animated dots - adds motion without being distracting */}
        <motion.div
          className="absolute top-1/4 left-1/3 w-2 h-2 rounded-full pointer-events-none"
          style={{
            background: `${config.primary}30`,
            boxShadow: `0 0 10px ${config.primary}40`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full pointer-events-none"
          style={{
            background: `${config.secondary}30`,
            boxShadow: `0 0 10px ${config.secondary}40`,
          }}
          animate={{
            y: [0, 25, 0],
            x: [0, -25, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />

        <motion.div
          className="absolute top-1/2 right-1/3 w-1.5 h-1.5 rounded-full pointer-events-none"
          style={{
            background: `${config.primary}25`,
            boxShadow: `0 0 8px ${config.primary}35`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div className="max-w-3xl" variants={fadeInUp}>
            {/* Animated badge with enhanced effects */}
            <motion.div 
              className="mb-8 inline-block" 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              whileHover={{ scale: 1.08 }}
            >
              <motion.span
                style={{
                  display: 'inline-block',
                  padding: '0.875rem 1.75rem',
                  backgroundColor: `${config.primary}12`,
                  borderRadius: config.borderRadius,
                  color: config.primary,
                  fontSize: config.fontSize.sm,
                  fontWeight: '600',
                  border: `1.5px solid ${config.primary}40`,
                  cursor: 'pointer',
                  boxShadow: `0 0 20px ${config.primary}15, inset 0 0 15px ${config.primary}05`,
                  letterSpacing: '0.3px',
                }}
                animate={{ 
                  scale: [1, 1.05, 1],
                  boxShadow: [`0 0 20px ${config.primary}15`, `0 0 40px ${config.primary}30`, `0 0 20px ${config.primary}15`],
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                ✨ Welcome to my journey
              </motion.span>
            </motion.div>

            {/* Main heading with enhanced animation and typography */}
            <motion.h1
              style={{
                fontSize: '3.75rem',
                fontWeight: 'bold',
                color: config.primary,
                fontFamily: config.headingFamily,
                lineHeight: '1.2',
                marginBottom: '1.5rem',
                letterSpacing: '-0.02em',
              }}
              className="text-4xl md:text-5xl lg:text-6xl"
              variants={fadeInUp}
            >
              <RevealText>{personalInfo.name}</RevealText>
            </motion.h1>

            {/* Subtitle with enhanced animation and typography */}
            <motion.h2
              style={{
                fontSize: config.fontSize['2xl'],
                color: config.textSecondary,
                fontFamily: config.fontFamily,
                marginBottom: '2rem',
                fontWeight: '500',
                letterSpacing: '0.3px',
                lineHeight: '1.5',
              }}
              className="text-xl md:text-2xl"
              variants={fadeInUp}
              whileInView={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {personalInfo.title}
            </motion.h2>

            {/* Description with improved typography */}
            <motion.p
              style={{
                fontSize: config.fontSize.lg,
                color: config.textSecondary,
                lineHeight: '1.9',
                marginBottom: '2rem',
                maxWidth: '600px',
                letterSpacing: '0.2px',
              }}
              variants={fadeInUp}
            >
              From building robust systems to leading product vision. I bridge technical excellence with business acumen, crafting solutions
              that matter. Let's create something extraordinary together.
            </motion.p>

            {/* CTA Buttons with enhanced magnetic effect and glow */}
            <motion.div 
              className="flex flex-wrap gap-6 mb-16" 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
            >
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                className="relative"
              >
                {/* Animated glow backdrop for primary button */}
                <motion.div
                  className="absolute -inset-2 rounded-lg blur-xl opacity-0 group-hover:opacity-100 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${config.primary}80, ${config.secondary}80)`,
                  }}
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <MagneticButton
                  href={personalInfo.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  className="button-glow-effect shadow-lg relative z-10 group"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${config.primary}, ${config.secondary})`,
                    boxShadow: `0 0 30px ${config.primary}60, 0 0 60px ${config.primary}30, inset 0 0 20px ${config.primary}20`,
                  }}
                >
                  <span className="font-semibold">Get in touch</span>
                  <ArrowUpRightIcon className="h-5 w-5" />
                </MagneticButton>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
              >
                <MagneticButton
                  href={personalInfo.links.github}
                  target="_blank"
                  variant="outline"
                  className="hover:shadow-lg relative group"
                  style={{
                    borderColor: config.primary,
                    borderWidth: '2px',
                    backgroundColor: `${config.primary}08`,
                  }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-30 pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, ${config.primary}40, ${config.secondary}20)`,
                    }}
                    animate={{
                      opacity: [0, 0.3, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                  <span className="font-semibold relative z-10">Explore my work</span>
                  <ArrowUpRightIcon className="h-5 w-5 relative z-10" />
                </MagneticButton>
              </motion.div>
            </motion.div>

            {/* Scroll indicator with enhanced animation */}
            <motion.div 
              variants={floatingVariants} 
              className="flex items-center gap-2 text-sm"
              initial="initial"
              animate="animate"
            >
              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <ArrowDownIcon 
                  style={{ color: config.primary }} 
                  className="h-5 w-5"
                />
              </motion.div>
              <span style={{ color: config.textSecondary }}>Scroll to explore</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
  );
};

// ============================================
// SECTION 1.5: REMOVED - FAKE ACHIEVEMENTS
// ============================================
// Removed: AchievementsSection with made-up stats
// Real achievements are showcased through:
// - Featured Projects (with real metrics)
// - Experience Timeline (real work history)
// - Skills Section (real technical abilities)

// ============================================
// SECTION 2: ABOUT + JOURNEY (COMBINED)
// ============================================

const AboutJourneySection = ({ config, aboutRef }) => {
  const timelineEvents = [
    {
      year: '2020-2021',
      title: 'Software Development Genesis',
      description: 'Started as a software developer building web and mobile applications.',
      icon: CodeBracketIcon,
    },
    {
      year: '2022',
      title: 'The Turning Point',
      description: 'Discovered interest in business problems beyond coding. Started analyzing product impact.',
      icon: RocketLaunchIcon,
    },
    {
      year: '2023',
      title: 'Business Analysis Transition',
      description: 'Transitioned to product-oriented work, focusing on requirements gathering and strategy.',
      icon: ChartBarIcon,
    },
    {
      year: '2024-2025',
      title: 'PM Aspirant & Full Stack Thinker',
      description: 'Combined technical foundation with business acumen for comprehensive product thinking.',
      icon: CpuChipIcon,
    },
    {
      year: '2026+',
      title: 'Product Manager - The Vision',
      description: 'Ready for PM roles, leveraging technical expertise and systems thinking.',
      icon: RocketLaunchIcon,
    },
  ];

  return (
    <motion.section ref={aboutRef} className="relative py-24 overflow-visible w-full">
      {/* Floating animated background blobs */}
      <FloatingBlob className="absolute top-0 left-1/4" color={config.primary} size={300} />
      <FloatingBlob className="absolute bottom-1/3 right-0" color={config.secondary} size={250} />
      
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 rounded-full blur-[150px] pointer-events-none animate-morph-blob"
        style={{ backgroundColor: `${config.primary}02` }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* About Intro with enhanced typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-50px' }}
          className="mb-20"
        >
          <h2
            style={{
              fontSize: config.fontSize['3xl'],
              fontWeight: 'bold',
              color: config.text,
              fontFamily: config.headingFamily,
              marginBottom: '1.2rem',
              letterSpacing: '-0.01em',
            }}
            className="text-3xl md:text-4xl"
          >
            About the Journey
          </h2>
          <p style={{ color: config.textSecondary, fontSize: config.fontSize.lg, maxWidth: '600px', lineHeight: '1.75', letterSpacing: '0.3px' }}>
            A unique career path from developer to product thinker. I leverage technical credibility to understand both business needs
            and system constraints.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ margin: '-50px' }} className="grid gap-8 md:gap-6">
          {timelineEvents.map((event, idx) => {
            const Icon = event.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ margin: '-50px' }}
                transition={{ delay: idx * 0.1 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr',
                  gap: '1.5rem',
                  position: 'relative',
                }}
              >
                {/* Timeline dot and line */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative',
                    width: '60px',
                  }}
                >
                  <motion.div
                    style={{
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      backgroundColor: config.primary,
                      border: `2px solid ${config.bg}`,
                      boxShadow: `0 0 10px ${config.primary}80`,
                    }}
                    whileHover={{ scale: 1.3 }}
                  />
                  {idx < timelineEvents.length - 1 && (
                    <motion.div
                      style={{
                        width: '2px',
                        height: '120px',
                        backgroundColor: `${config.primary}30`,
                        marginTop: '0.5rem',
                      }}
                    />
                  )}
                </div>

                {/* Content */}
                <motion.div
                  style={{
                    backgroundColor: config.bgSecondary,
                    borderColor: config.primary,
                    borderWidth: config.borderWidth,
                    borderRadius: config.borderRadius,
                    padding: config.spacing.md,
                  }}
                  whileHover={{ y: -8 }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <Icon style={{ color: config.primary }} className="h-5 w-5 mt-1 flex-shrink-0" />
                    <div>
                      <div style={{ color: config.primary, fontWeight: '600', fontSize: config.fontSize.sm }}>{event.year}</div>
                      <h3 style={{ color: config.text, fontWeight: '700', fontSize: config.fontSize.lg, marginTop: '0.25rem' }}>
                        {event.title}
                      </h3>
                    </div>
                  </div>
                  <p style={{ color: config.textSecondary, fontSize: config.fontSize.base, lineHeight: '1.6' }}>
                    {event.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

// ============================================
// SECTION 2B: AREAS OF INTEREST & EXPERTISE
// ============================================

const InterestsSection = ({ config }) => {
  const interests = [
    { 
      icon: ChartBarIcon,
      title: 'Business Analytics', 
      description: 'Transforming data into actionable business insights and strategic recommendations that drive growth',
    },
    { 
      icon: LightBulbIcon, 
      title: 'Product Thinking', 
      description: 'Understanding user needs, designing solutions with business impact, and solving real-world problems',
    },
    { 
      icon: UserGroupIcon, 
      title: 'Cross-functional Collaboration', 
      description: 'Bridging business and engineering teams, translating requirements, and enabling better decisions',
    },
    {
      icon: CpuChipIcon,
      title: 'Technical Foundation',
      description: 'Strong software development background that enables deeper understanding of technical feasibility and system design',
    },
    {
      icon: RocketLaunchIcon,
      title: 'Process Optimization', 
      description: 'Identifying bottlenecks, automating workflows, and improving operational efficiency',
    },
    {
      icon: WrenchScrewdriverIcon, 
      title: 'Requirements & Analysis', 
      description: 'Gathering requirements, documenting specifications, and translating business needs into actionable solutions',
    }
  ];

  return (
    <motion.section className="relative py-24 overflow-visible w-full">
      <FloatingBlob className="absolute top-1/4 right-0" color={config.secondary} size={350} />
      <FloatingBlob className="absolute bottom-0 left-1/3" color={config.primary} size={300} />
      
      <motion.div
        className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-[150px] pointer-events-none"
        style={{ backgroundColor: `${config.secondary}02` }}
        animate={{ x: [0, -50, 30, 0], y: [0, 50, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: '-50px' }} className="mb-20">
          <h2
            style={{
              fontSize: config.fontSize['3xl'],
              fontWeight: 'bold',
              color: config.text,
              fontFamily: config.headingFamily,
              marginBottom: '1.2rem',
              letterSpacing: '-0.01em',
            }}
            className="text-3xl md:text-4xl"
          >
            Areas of Expertise
          </h2>
          <p style={{ color: config.textSecondary, fontSize: config.fontSize.lg, maxWidth: '600px', lineHeight: '1.75', letterSpacing: '0.3px' }}>
            Key competencies that define my professional approach and deliver value
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ margin: '-50px' }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 grid-animate-container">
          {interests.map((interest, idx) => {
            const Icon = interest.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ margin: '-50px' }}
                transition={{
                  delay: idx * 0.08,
                  type: 'spring',
                  stiffness: 100,
                  damping: 15,
                }}
              >
                <motion.div
                  style={{
                    backgroundColor: config.bgSecondary,
                    borderColor: config.primary,
                    borderWidth: config.borderWidth,
                    borderRadius: config.borderRadius,
                    padding: config.spacing.lg,
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  whileHover={{
                    y: -12,
                    boxShadow: `0 30px 60px ${config.primary}25`,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                  }}
                  className="flex flex-col group cursor-pointer"
                >
                  {/* Animated background glow on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-40 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${config.primary}40, transparent 70%)`,
                    }}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.3 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                    initial={{ opacity: 0, x: '-100%' }}
                    whileHover={{ opacity: [0, 0.5, 0], x: '100%' }}
                    transition={{ duration: 1.2 }}
                    style={{
                      background: `linear-gradient(90deg, transparent, ${config.primary}40, transparent)`,
                    }}
                  />

                  {/* Icon with enhanced animation */}
                  <motion.div
                    className="mb-4 p-3 rounded-lg w-fit relative z-10"
                    style={{
                      backgroundColor: `${config.primary}15`,
                    }}
                    whileHover={{
                      scale: 1.2,
                      rotate: 15,
                      backgroundColor: `${config.primary}30`,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 25,
                    }}
                  >
                    <motion.div
                      animate={{ y: [0, -3, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      <Icon style={{ color: config.primary }} className="h-6 w-6" />
                    </motion.div>
                  </motion.div>

                  {/* Title with color transition */}
                  <motion.h3
                    style={{
                      color: config.text,
                      fontWeight: '700',
                      fontSize: config.fontSize.lg,
                      marginBottom: '0.5rem',
                      fontFamily: config.headingFamily,
                    }}
                    whileHover={{ color: config.primary }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10"
                  >
                    {interest.title}
                  </motion.h3>

                  {/* Description with improved readability */}
                  <motion.p
                    style={{
                      color: config.textSecondary,
                      fontSize: config.fontSize.sm,
                      lineHeight: '1.6',
                      fontFamily: config.fontFamily,
                    }}
                    whileHover={{ color: config.textSecondary }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 flex-grow"
                  >
                    {interest.description}
                  </motion.p>

                  {/* Hover indicator line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 relative z-10"
                    style={{
                      backgroundImage: `linear-gradient(90deg, ${config.primary}, ${config.secondary})`,
                    }}
                    initial={{ width: '0%' }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

// ============================================
// SECTION 3: SKILLS & COMPETENCIES (ENHANCED)
// ============================================

const SkillsSection = ({ config, skillsRef }) => {
  const skillJourneyMilestones = [
    {
      year: 'Foundation',
      title: 'Product Strategy & Vision',
      description: 'Starting with fundamental market analysis and competitive positioning',
      icon: LightBulbIcon,
      color: '#FF6B6B',
    },
    {
      year: 'Growth',
      title: 'Requirements & Stakeholder Mgmt',
      description: 'Building consensus across diverse teams and managing expectations',
      icon: UserGroupIcon,
      color: '#4ECDC4',
    },
    {
      year: 'Mastery',
      title: 'Data Analytics & Insights',
      description: 'Leveraging data to drive strategic decisions and measure impact',
      icon: ChartBarIcon,
      color: '#FFA502',
    },
    {
      year: 'Excellence',
      title: 'Technical System Design',
      description: 'Architecting scalable solutions with deep technical expertise',
      icon: ServerIcon,
      color: '#9C27B0',
    },
  ];

  const applications = [
    {
      skill: 'Product Strategy',
      color: '#FF6B6B',
      applications: ['5 production systems deployed', 'AI sales intelligence pipeline', 'Fee management system', '300+ users served'],
      icon: LightBulbIcon
    },
    {
      skill: 'Data Analytics',
      color: '#FFA502',
      applications: ['100+ sales call analysis', '20+ field structured outputs', 'Performance dashboards', 'Trend analysis & insights'],
      icon: ChartBarIcon
    },
    {
      skill: 'Stakeholder Management',
      color: '#45B7D1',
      applications: ['3+ stakeholder groups aligned', 'Cross-functional team coordination', 'Requirements elicitation', 'User-centered design'],
      icon: UserGroupIcon
    },
    {
      skill: 'System Design',
      color: '#9C27B0',
      applications: ['Concurrent-safe architecture', 'Database optimization', 'API integration design', 'Scalable infrastructure'],
      icon: ServerIcon
    },
    {
      skill: 'Requirements Gathering',
      color: '#4ECDC4',
      applications: ['Workflow mapping', 'Use case documentation', 'Acceptance criteria definition', 'Scope management'],
      icon: CommandLineIcon
    },
    {
      skill: 'Automation & Scripting',
      color: '#34A853',
      applications: ['Google Apps Script mastery', '500+ automated messages/week', '3-phase automation pipelines', 'Webhook integration'],
      icon: BoltIcon
    },
  ];

  return (
    <motion.section ref={skillsRef} className="relative py-24 overflow-visible w-full">
      <FloatingBlob className="absolute top-1/3 right-0" color={config.primary} size={400} />
      <FloatingBlob className="absolute bottom-0 left-1/4" color={config.secondary} size={350} />
      
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-[150px] pointer-events-none animate-morph-blob"
        style={{ backgroundColor: `${config.secondary}02` }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Skill Journey Timeline */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: '-50px' }} className="mb-28">
          <HolographicText
            color={config.primary}
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: config.headingFamily, letterSpacing: '-0.01em' }}
          >
            Your Skill Journey
          </HolographicText>
          <p style={{ color: config.textSecondary, fontFamily: config.fontFamily, marginBottom: '3rem', fontSize: config.fontSize.lg, lineHeight: '1.75', letterSpacing: '0.3px' }}>
            Evolution from foundation to technical excellence
          </p>

          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2" style={{ background: `linear-gradient(180deg, ${config.primary}40 0%, ${config.primary}10 100%)` }} />

              <div className="space-y-12">
                {skillJourneyMilestones.map((milestone, idx) => {
                  const Icon = milestone.icon;
                  const isLeft = idx % 2 === 0;

                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ margin: '-50px' }}
                      transition={{ delay: idx * 0.1 }}
                      className={`flex items-center gap-8 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
                    >
                      {/* Content */}
                      <div className={`flex-1 ${isLeft ? 'text-right' : 'text-left'}`}>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="p-6 rounded-xl overflow-hidden relative group"
                          style={{
                            backgroundColor: config.bgSecondary,
                            border: `2px solid ${milestone.color}40`,
                            boxShadow: `0 0 20px ${milestone.color}20`,
                          }}
                        >
                          <div className="relative z-10">
                            <motion.span
                              className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-2"
                              style={{
                                backgroundColor: `${milestone.color}20`,
                                color: milestone.color,
                              }}
                            >
                              {milestone.year}
                            </motion.span>

                            <h3 className="text-lg font-bold mb-2" style={{ color: config.text, fontFamily: config.headingFamily }}>
                              {milestone.title}
                            </h3>
                            <p style={{ color: config.textSecondary, fontFamily: config.fontFamily }} className="text-sm">
                              {milestone.description}
                            </p>
                          </div>
                        </motion.div>
                      </div>

                      {/* Timeline dot */}
                      <motion.div
                        className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center relative z-20"
                        style={{
                          background: `radial-gradient(circle, ${milestone.color}, ${milestone.color}80)`,
                          boxShadow: `0 0 30px ${milestone.color}60`,
                        }}
                        animate={{
                          scale: [1, 1.2, 1],
                          boxShadow: [`0 0 30px ${milestone.color}60`, `0 0 50px ${milestone.color}80`, `0 0 30px ${milestone.color}60`],
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: idx * 0.5 }}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-8">
            {skillJourneyMilestones.map((milestone, idx) => {
              const Icon = milestone.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ margin: '-50px' }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <motion.div
                    className="p-6 rounded-xl overflow-hidden relative group"
                    style={{
                      backgroundColor: config.bgSecondary,
                      border: `2px solid ${milestone.color}40`,
                      boxShadow: `0 0 20px ${milestone.color}20`,
                    }}
                  >
                    <div className="relative z-10 flex items-start gap-4">
                      <motion.div
                        className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ background: `radial-gradient(circle, ${milestone.color}, ${milestone.color}80)` }}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </motion.div>

                      <div className="flex-1">
                        <span
                          className="inline-block px-2 py-1 rounded-full text-xs font-bold mb-2"
                          style={{
                            backgroundColor: `${milestone.color}20`,
                            color: milestone.color,
                          }}
                        >
                          {milestone.year}
                        </span>
                        <h3 className="text-base font-bold mb-1" style={{ color: config.text, fontFamily: config.headingFamily }}>
                          {milestone.title}
                        </h3>
                        <p style={{ color: config.textSecondary, fontFamily: config.fontFamily }} className="text-sm">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Real-World Application Showcase */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: '-50px' }}>
          <HolographicText
            color={config.primary}
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: config.headingFamily, letterSpacing: '-0.01em' }}
          >
            Real-World Application
          </HolographicText>
          <p style={{ color: config.textSecondary, fontFamily: config.fontFamily, marginBottom: '3rem', fontSize: config.fontSize.lg, lineHeight: '1.75', letterSpacing: '0.3px' }}>
            Proven skills demonstrated through actual projects and tangible impact
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, idx) => {
              const Icon = app.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ margin: '-50px' }}
                  transition={{ delay: idx * 0.05 }}
                  className="group"
                >
                  <motion.div
                    className="h-full p-6 rounded-xl overflow-hidden relative"
                    style={{
                      backgroundColor: config.bgSecondary,
                      border: `2px solid ${app.color}40`,
                      boxShadow: `0 0 15px ${app.color}15`,
                    }}
                    whileHover={{
                      boxShadow: `0 0 30px ${app.color}40`,
                      y: -5
                    }}
                  >
                    <div className="relative z-10">
                      {/* Icon */}
                      <motion.div
                        className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                        style={{
                          backgroundColor: `${app.color}20`,
                          border: `2px solid ${app.color}`,
                        }}
                        whileHover={{ rotate: 12, scale: 1.1 }}
                      >
                        <Icon className="w-5 h-5" style={{ color: app.color }} />
                      </motion.div>

                      {/* Skill Name */}
                      <h3 className="text-base font-bold mb-3" style={{ color: config.text, fontFamily: config.headingFamily }}>
                        {app.skill}
                      </h3>

                      {/* Real Applications */}
                      <div className="space-y-2">
                        {app.applications.map((application, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ margin: '-50px' }}
                            transition={{ delay: idx * 0.05 + i * 0.02 }}
                            className="flex items-start gap-2"
                          >
                            <span className="text-xs mt-0.5" style={{ color: app.color }}>✓</span>
                            <span className="text-xs" style={{ color: config.textSecondary, fontFamily: config.fontFamily }}>
                              {application}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

// ============================================
// SECTION 4: FEATURED PROJECTS (COMPACT)
// ============================================

const ProjectsSection = ({ config, projectsRef }) => {
  const featuredProjects = projects.filter((p) => p.featured);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <motion.section ref={projectsRef} className="relative py-24 overflow-visible w-full" style={{ backgroundColor: 'transparent' }}>
      <FloatingBlob className="absolute top-0 right-1/4" color={config.primary} size={350} />
      <FloatingBlob className="absolute bottom-1/3 left-0" color={config.secondary} size={300} />
      
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 rounded-full blur-[150px] pointer-events-none animate-morph-blob"
        style={{ backgroundColor: `${config.primary}02` }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: '-50px' }} className="mb-20">
          <HolographicText
            color={config.primary}
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: config.headingFamily, letterSpacing: '-0.01em' }}
          >
            Featured Projects
          </HolographicText>
          <p style={{ color: config.textSecondary, fontSize: config.fontSize.lg, maxWidth: '600px', lineHeight: '1.75', letterSpacing: '0.3px' }}>
            Production-grade systems that demonstrate product thinking, technical execution, and business impact.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ margin: '-50px' }} className="grid md:grid-cols-3 gap-6 grid-animate-container">
          {featuredProjects.map((project, idx) => (
            <EnhancedProjectCard
              key={idx}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
              icon={project.icon}
              metrics={project.metrics}
              onClick={() => setSelectedProject(project)}
            />
))}
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </motion.section>
  );
};

// ============================================
// SECTION 5: EXPERIENCE TIMELINE
// ============================================

const ExperienceSection = ({ config, experienceRef }) => {
  const experience = [
    {
      date: 'Jan 2026 – May 2026',
      title: 'Product Development Intern',
      company: 'Acumen360 / Acumen GATE Academy',
      description: 'Designed and deployed 5 production automation systems used daily across sales, accounts, and academic operations.',
      highlights: [
        'Built WhatsApp CRM Automation System handling 300+ users',
        'Delivered QR-Code Attendance Tracking with concurrent-safe backend',
        'Created AI Sales Intelligence pipeline with structured analysis',
        'Automated complete student fee lifecycle with automated reminders',
      ],
      technologies: ['Google Apps Script', 'Google Sheets', 'GPT-4', 'WhatsApp API', 'JavaScript'],
    },
    {
      date: 'Aug 2024 – Dec 2025',
      title: 'Business Analyst Intern',
      company: 'Acumen360 / Acumen GATE Academy',
      description: 'Managed data systems and built insights dashboards to track student progress and lead performance.',
      highlights: [
        'Built dashboards tracking student progress and incentive metrics',
        'Developed automated WhatsApp messaging workflow',
        'Created prototype tools for call transcription and summarization',
        'Collaborated with sales and academic teams on process improvements',
      ],
      technologies: ['Business Analysis', 'Google Sheets', 'Power BI', 'Whisper AI'],
    },
    {
      date: 'June 2025 – June 2025',
      title: 'Software Developer Intern',
      company: 'Travzi World Travel & Tourism LLC',
      description: 'Helped build API-based features for travel and booking systems with focus on product thinking.',
      highlights: [
        'Developed frontend components using React.js',
        'Built and integrated API-based features',
        'Worked alongside product and engineering teams',
        'Gained understanding of real-world product flows',
      ],
      technologies: ['React.js', 'JavaScript', 'APIs', 'Product Design'],
    },
    {
      date: 'Dec 2023 – Jan 2024',
      title: 'Frontend Developer Intern',
      company: 'Weboin Digital Marketing Agency',
      description: 'Built UI components and gained foundation in frontend development and problem-solving.',
      highlights: [
        'Developed responsive UI components using Flutter',
        'Supported requirement gathering and testing',
        'Participated in UI/UX discussions for enhancements',
        'Built solid foundation in software development',
      ],
      technologies: ['Flutter', 'Dart', 'REST APIs', 'Firebase'],
    },
  ];

  return (
    <motion.section ref={experienceRef} className="relative py-24 overflow-visible w-full" style={{ backgroundColor: 'transparent' }}>
      <FloatingBlob className="absolute top-1/4 left-0" color={config.secondary} size={350} />
      <FloatingBlob className="absolute bottom-0 right-1/3" color={config.primary} size={300} />
      
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-[150px] pointer-events-none animate-morph-blob"
        style={{ backgroundColor: `${config.secondary}02` }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: '-50px' }} className="mb-20">
          <HolographicText
            color={config.primary}
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: config.headingFamily, letterSpacing: '-0.01em' }}
          >
            Professional Experience
          </HolographicText>
          <p style={{ color: config.textSecondary, fontSize: config.fontSize.lg, maxWidth: '600px', lineHeight: '1.75', letterSpacing: '0.3px' }}>
            4+ internships progressing from developer to product manager roles across fintech, education, and tourism sectors.
          </p>
        </motion.div>

        <ExperienceTimeline items={experience} />
      </div>
    </motion.section>
  );
};

// ============================================
// SECTION 6: EDUCATION & ACHIEVEMENTS
// ============================================

const EducationSection = ({ config, educationRef }) => {
  return (
    <motion.section ref={educationRef} className="relative py-24 overflow-visible w-full" style={{ backgroundColor: 'transparent' }}>
      <FloatingBlob className="absolute top-0 right-0" color={config.primary} size={350} />
      <FloatingBlob className="absolute bottom-1/3 left-1/4" color={config.secondary} size={300} />
      
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 rounded-full blur-[150px] pointer-events-none animate-morph-blob"
        style={{ backgroundColor: `${config.primary}02` }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: '-50px' }} className="mb-20">
          <h2
            style={{
              fontSize: config.fontSize['3xl'],
              fontWeight: 'bold',
              color: config.text,
              fontFamily: config.headingFamily,
              marginBottom: '1.2rem',
              letterSpacing: '-0.01em',
            }}
            className="text-3xl md:text-4xl"
          >
            Education & Certifications
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ margin: '-50px' }} className="grid md:grid-cols-2 gap-8 grid-animate-container">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: '-50px' }}
            style={{
              backgroundColor: config.bgSecondary,
              borderColor: config.primary,
              borderWidth: config.borderWidth,
              borderRadius: config.borderRadius,
              padding: config.spacing.lg,
            }}
            whileHover={{ y: -8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                style={{
                  backgroundColor: `${config.primary}15`,
                  borderRadius: config.borderRadius,
                  padding: config.spacing.md,
                }}
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                <AcademicCapIcon style={{ color: config.primary }} className="h-6 w-6" />
              </motion.div>
              <h3 style={{ color: config.text, fontWeight: '700', fontSize: config.fontSize.lg }}>Bachelor of Computer Applications</h3>
            </div>
            <p style={{ color: config.primary, fontWeight: '600', fontSize: config.fontSize.sm, marginBottom: '0.5rem' }}>
              Navrachna University
            </p>
            <p style={{ color: config.textSecondary, fontSize: config.fontSize.sm }}>Vadodara, Gujarat • 2023-2026 (Expected)</p>
          </motion.div>

          {/* Certification */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: '-50px' }}
            transition={{ delay: 0.1 }}
            style={{
              backgroundColor: config.bgSecondary,
              borderColor: config.primary,
              borderWidth: config.borderWidth,
              borderRadius: config.borderRadius,
              padding: config.spacing.lg,
            }}
            whileHover={{ y: -8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                style={{
                  backgroundColor: `${config.primary}15`,
                  borderRadius: config.borderRadius,
                  padding: config.spacing.md,
                }}
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                <CheckBadgeIcon style={{ color: config.primary }} className="h-6 w-6" />
              </motion.div>
              <h3 style={{ color: config.text, fontWeight: '700', fontSize: config.fontSize.lg }}>Android App Development</h3>
            </div>
            <p style={{ color: config.primary, fontWeight: '600', fontSize: config.fontSize.sm, marginBottom: '0.5rem' }}>
              Technolook
            </p>
            <p style={{ color: config.textSecondary, fontSize: config.fontSize.sm }}>2023</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

// ============================================
// SECTION 7: CONTACT CTA
// ============================================

const ContactSection = ({ config, contactRef }) => {
  return (
    <motion.section
      ref={contactRef}
      className="relative py-24 overflow-visible w-full"
      style={{ backgroundColor: 'transparent' }}
      initial="initial"
      whileInView="animate"
      viewport={{ margin: '-50px' }}
      variants={staggerContainer}
    >
      <FloatingBlob className="absolute top-0 left-1/4" color={config.primary} size={400} />
      <FloatingBlob className="absolute bottom-0 right-0" color={config.secondary} size={350} />
      
      <motion.div
        className="absolute inset-0 w-full h-full rounded-full blur-[150px] pointer-events-none animate-morph-blob"
        style={{ backgroundColor: `${config.primary}02` }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div className="max-w-2xl mx-auto text-center" variants={staggerContainer}>
          <motion.h2
            style={{
              fontSize: config.fontSize['3xl'],
              fontWeight: 'bold',
              color: config.text,
              fontFamily: config.headingFamily,
              marginBottom: '1.5rem',
              letterSpacing: '-0.01em',
            }}
            className="text-3xl md:text-4xl"
            variants={fadeInUp}
          >
            Let's Build Something Great
          </motion.h2>

          <motion.p
            style={{
              color: config.textSecondary,
              fontSize: config.fontSize.lg,
              marginBottom: '2rem',
              lineHeight: '1.8',
              letterSpacing: '0.3px',
            }}
            variants={fadeInUp}
          >
            I'm always interested in discussing product vision, system design, and how technology can solve real problems. Let's connect!
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={staggerContainer}>
            <motion.a
              href={personalInfo.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="button-animate"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '1rem 2rem',
                borderColor: config.primary,
                borderWidth: config.borderWidth,
                color: config.text,
                borderRadius: config.borderRadius,
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: config.fontSize.base,
              }}
              variants={fadeInUp}
            >
              <ArrowTopRightOnSquareIcon className="h-5 w-5" />
              Connect on LinkedIn
            </motion.a>
          </motion.div>

          <motion.p style={{ color: config.textSecondary, fontSize: config.fontSize.sm, marginTop: '2rem' }} variants={fadeInUp}>
            {personalInfo.email} • {personalInfo.phone}
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

// ============================================
// MAIN COMPONENT
// ============================================

export default function HomeUnified() {
  const { mode, config } = useTheme();

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  // Export refs to parent for scroll navigation
  React.useEffect(() => {
    window.scrollRefs = {
      hero: heroRef,
      about: aboutRef,
      skills: skillsRef,
      projects: projectsRef,
      experience: experienceRef,
      education: educationRef,
      contact: contactRef,
    };
  }, []);

  return (
    <div className="w-full overflow-visible" style={{ backgroundColor: 'transparent', color: config.text, transition: `all ${config.transitionDuration}` }}>
      <HeroSection config={config} heroRef={heroRef} mode={mode} />
      <AboutJourneySection config={config} aboutRef={aboutRef} />
      <InterestsSection config={config} />
      <SkillsSection config={config} skillsRef={skillsRef} />
      <ProjectsSection config={config} projectsRef={projectsRef} />
      <ExperienceSection config={config} experienceRef={experienceRef} />
      <EducationSection config={config} educationRef={educationRef} />
      <ContactSection config={config} contactRef={contactRef} />
    </div>
  );
}
