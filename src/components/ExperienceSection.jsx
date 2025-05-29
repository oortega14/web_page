import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'TechCorp Inc.',
      period: '2022 - Present',
      location: 'San Francisco, CA',
      description: 'Lead development of scalable web applications using Ruby on Rails and React. Mentor junior developers and architect system solutions.',
      achievements: [
        'Reduced application load time by 40% through optimization',
        'Led team of 5 developers on major product redesign',
        'Implemented CI/CD pipeline reducing deployment time by 60%'
      ]
    },
    {
      title: 'Full-Stack Developer',
      company: 'StartupXYZ',
      period: '2020 - 2022',
      location: 'Austin, TX',
      description: 'Developed and maintained multiple client applications using modern web technologies. Collaborated with design and product teams.',
      achievements: [
        'Built 3 production applications from scratch',
        'Integrated payment systems and third-party APIs',
        'Improved test coverage from 30% to 95%'
      ]
    },
    {
      title: 'Junior Developer',
      company: 'WebDev Solutions',
      period: '2019 - 2020',
      location: 'Remote',
      description: 'Started career building responsive websites and learning full-stack development. Gained experience in agile methodologies.',
      achievements: [
        'Completed 20+ client projects successfully',
        'Learned React, Node.js, and modern development practices',
        'Contributed to open-source projects'
      ]
    },
    {
      title: 'Intern Developer',
      company: 'CodeLab',
      period: '2018 - 2019',
      location: 'New York, NY',
      description: 'Assisted in developing internal tools and automation scripts. Participated in code reviews and team meetings.',
      achievements: [
        'Automated data entry tasks saving 10+ hours/week',
        'Wrote documentation for internal APIs',
        'Presented at company tech talks'
      ]
    },
    {
      title: 'Freelance Web Developer',
      company: 'Self-Employed',
      period: '2017 - 2018',
      location: 'Remote',
      description: 'Worked with small businesses to create and maintain their web presence. Delivered custom solutions based on client needs.',
      achievements: [
        'Launched 5+ business websites',
        'Provided ongoing support and SEO optimization',
        'Built custom WordPress themes'
      ]
    },
    {
      title: 'Teaching Assistant',
      company: 'University of Example',
      period: '2016 - 2017',
      location: 'Boston, MA',
      description: 'Supported students in introductory programming courses. Helped design assignments and grade projects.',
      achievements: [
        'Tutored 100+ students in programming fundamentals',
        'Created interactive coding exercises',
        'Received recognition for student support'
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
            Experience
          </h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            My professional journey in software development, building amazing 
            products and growing as a developer.
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