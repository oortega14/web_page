import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const BlogSection = () => {
  const posts = [
    {
      title: 'Building Scalable Rails APIs',
      excerpt: 'Best practices for creating robust and scalable API endpoints with Ruby on Rails, including authentication, serialization, and performance optimization.',
      date: '2024-03-15',
      readTime: '8 min read',
      tags: ['Ruby on Rails', 'API', 'Backend']
    },
    {
      title: 'React 19 New Features Deep Dive',
      excerpt: 'Exploring the latest features in React 19, including the new compiler, concurrent features, and how they improve developer experience.',
      date: '2024-03-10',
      readTime: '12 min read',
      tags: ['React', 'JavaScript', 'Frontend']
    },
    {
      title: 'TypeScript Tips for Better Code',
      excerpt: 'Advanced TypeScript techniques that will make your code more type-safe, maintainable, and enjoyable to work with.',
      date: '2024-03-05',
      readTime: '6 min read',
      tags: ['TypeScript', 'JavaScript', 'Best Practices']
    },
    {
      title: 'Optimizing React Performance',
      excerpt: 'How to profile and optimize React apps for speed, including memoization, lazy loading, and avoiding unnecessary renders.',
      date: '2024-02-28',
      readTime: '10 min read',
      tags: ['React', 'Performance', 'Frontend']
    },
    {
      title: 'Deploying with Docker and GitHub Actions',
      excerpt: 'A step-by-step guide to containerizing your app and setting up CI/CD pipelines using Docker and GitHub Actions.',
      date: '2024-02-20',
      readTime: '9 min read',
      tags: ['DevOps', 'Docker', 'CI/CD']
    },
    {
      title: 'Accessible Web Design Essentials',
      excerpt: 'Key principles and tools for making your web applications accessible to everyone, including ARIA roles and keyboard navigation.',
      date: '2024-02-10',
      readTime: '7 min read',
      tags: ['Accessibility', 'Web Design', 'Best Practices']
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
            Latest Blog Posts
          </h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Thoughts on web development, tutorials, and insights from my 
            experience building modern applications.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800 rounded-xl p-6 hover:bg-slate-750 transition-colors cursor-pointer group"
            >
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm text-slate-400 mb-3">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded border border-blue-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <motion.div
                className="flex items-center text-blue-400 text-sm font-semibold"
                whileHover={{ x: 5 }}
              >
                <span>Read more</span>
                <ExternalLink size={14} className="ml-1" />
              </motion.div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.button
            className="px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Posts
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;