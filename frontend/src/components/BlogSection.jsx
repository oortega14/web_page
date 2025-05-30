import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const BlogSection = () => {
  const { t } = useTranslation();

  const posts = [
    {
      title: t('blog.posts.rails.title'),
      excerpt: t('blog.posts.rails.excerpt'),
      date: '2024-03-15',
      readTime: t('blog.posts.rails.readTime'),
      tags: [t('blog.tags.rails'), t('blog.tags.api'), t('blog.tags.backend')]
    },
    {
      title: t('blog.posts.react19.title'),
      excerpt: t('blog.posts.react19.excerpt'),
      date: '2024-03-10',
      readTime: t('blog.posts.react19.readTime'),
      tags: [t('blog.tags.react'), t('blog.tags.javascript'), t('blog.tags.frontend')]
    },
    {
      title: t('blog.posts.ts.title'),
      excerpt: t('blog.posts.ts.excerpt'),
      date: '2024-03-05',
      readTime: t('blog.posts.ts.readTime'),
      tags: [t('blog.tags.typescript'), t('blog.tags.javascript'), t('blog.tags.bestpractices')]
    },
    {
      title: t('blog.posts.reactperf.title'),
      excerpt: t('blog.posts.reactperf.excerpt'),
      date: '2024-02-28',
      readTime: t('blog.posts.reactperf.readTime'),
      tags: [t('blog.tags.react'), t('blog.tags.performance'), t('blog.tags.frontend')]
    },
    {
      title: t('blog.posts.docker.title'),
      excerpt: t('blog.posts.docker.excerpt'),
      date: '2024-02-20',
      readTime: t('blog.posts.docker.readTime'),
      tags: [t('blog.tags.devops'), t('blog.tags.docker'), t('blog.tags.cicd')]
    },
    {
      title: t('blog.posts.accessibility.title'),
      excerpt: t('blog.posts.accessibility.excerpt'),
      date: '2024-02-10',
      readTime: t('blog.posts.accessibility.readTime'),
      tags: [t('blog.tags.accessibility'), t('blog.tags.webdesign'), t('blog.tags.bestpractices')]
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
            {t('blog.title')}
          </h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            {t('blog.subtitle')}
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
                <span>{t('blog.readMore')}</span>
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
            {t('blog.viewAll')}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;