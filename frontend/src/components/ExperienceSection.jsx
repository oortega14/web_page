import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ExperienceSection = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      title: t('experience.senior.title'),
      company: t('experience.senior.company'),
      period: t('experience.senior.period'),
      location: t('experience.senior.location'),
      description: t('experience.senior.description'),
      achievements: [
        t('experience.senior.achievements.0'),
        t('experience.senior.achievements.1'),
        t('experience.senior.achievements.2')
      ]
    },
    {
      title: t('experience.fullstack.title'),
      company: t('experience.fullstack.company'),
      period: t('experience.fullstack.period'),
      location: t('experience.fullstack.location'),
      description: t('experience.fullstack.description'),
      achievements: [
        t('experience.fullstack.achievements.0'),
        t('experience.fullstack.achievements.1'),
        t('experience.fullstack.achievements.2')
      ]
    },
    {
      title: t('experience.junior.title'),
      company: t('experience.junior.company'),
      period: t('experience.junior.period'),
      location: t('experience.junior.location'),
      description: t('experience.junior.description'),
      achievements: [
        t('experience.junior.achievements.0'),
        t('experience.junior.achievements.1'),
        t('experience.junior.achievements.2')
      ]
    },
    {
      title: t('experience.intern.title'),
      company: t('experience.intern.company'),
      period: t('experience.intern.period'),
      location: t('experience.intern.location'),
      description: t('experience.intern.description'),
      achievements: [
        t('experience.intern.achievements.0'),
        t('experience.intern.achievements.1'),
        t('experience.intern.achievements.2')
      ]
    },
    {
      title: t('experience.freelance.title'),
      company: t('experience.freelance.company'),
      period: t('experience.freelance.period'),
      location: t('experience.freelance.location'),
      description: t('experience.freelance.description'),
      achievements: [
        t('experience.freelance.achievements.0'),
        t('experience.freelance.achievements.1'),
        t('experience.freelance.achievements.2')
      ]
    },
    {
      title: t('experience.ta.title'),
      company: t('experience.ta.company'),
      period: t('experience.ta.period'),
      location: t('experience.ta.location'),
      description: t('experience.ta.description'),
      achievements: [
        t('experience.ta.achievements.0'),
        t('experience.ta.achievements.1'),
        t('experience.ta.achievements.2')
      ]
    }
  ];

  return (
    <section className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Title - Always visible at top */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 pt-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('experience.title')}
          </h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            {t('experience.subtitle')}
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-500/30 hidden md:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative mb-12 md:ml-16"
            >
              {/* Timeline dot */}
              <div className="absolute -left-20 top-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 hidden md:block" />

              <div className="bg-slate-800 rounded-xl p-6 hover:bg-slate-750 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <p className="text-blue-400 font-semibold">{exp.company}</p>
                  </div>
                  <div className="text-slate-400 text-sm mt-2 sm:mt-0 sm:text-right">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-1 mt-1">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-300 mb-4">{exp.description}</p>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start space-x-2 text-slate-300">
                      <span className="text-blue-400 mt-2">•</span>
                      <span className="text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;