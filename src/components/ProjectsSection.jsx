import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution built with Rails API and React frontend. Features include user authentication, payment processing, and admin dashboard.',
      tech: ['Ruby on Rails', 'React', 'PostgreSQL', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates. Built with TypeScript and featuring drag-and-drop functionality.',
      tech: ['TypeScript', 'React', 'Node.js', 'Socket.io'],
      image: 'https://images.pexels.com/photos/5475750/pexels-photo-5475750.jpeg',
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for data visualization with charts, filters, and real-time data updates. Optimized for performance and user experience.',
      tech: ['React', 'D3.js', 'Node.js', 'MongoDB'],
      image: 'https://images.pexels.com/photos/16053029/pexels-photo-16053029.jpeg',
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website built with Next.js and Tailwind CSS. Fully responsive and SEO optimized.',
      tech: ['Next.js', 'Tailwind CSS', 'Vercel'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'Chat Application',
      description: 'Real-time chat application with private rooms and emoji support. Built using React and Firebase.',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'Blog Platform',
      description: 'Multi-user blog platform with markdown support and comments. Built with Django and React.',
      tech: ['Django', 'React', 'SQLite'],
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      github: 'https://github.com',
      demo: 'https://demo.com'
    }
  ];

  return (
    <section className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title - Always visible at top */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 pt-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Here are some of my recent projects that showcase my skills in 
            full-stack development and modern web technologies.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800 rounded-xl overflow-hidden hover:bg-slate-750 transition-colors group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-slate-400 hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </motion.a>
                  
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-slate-400 hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;