import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
}

interface LatestNewsSectionProps {
  latestNews: NewsArticle[];
}

const LatestNewsSection: React.FC<LatestNewsSectionProps> = ({
  latestNews,
}) => {
  return (
    <section className='container mx-auto px-4 md:px-6'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex items-center justify-between mb-12'>
          <h2 className='font-display text-3xl md:text-4xl font-bold'>
            Latest News
          </h2>
          <Link to='/news' className='flex items-center text-sm font-medium'>
            View all news <ArrowRight className='ml-2 h-4 w-4' />
          </Link>
        </div>

        {latestNews.length < 0 ? (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {latestNews.map((article, index) => (
              <div
                key={index}
                className='scroll-animation'
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card className='overflow-hidden border-gray-200 h-full flex flex-col transition-all duration-300 hover:shadow-md'>
                  <div className='relative aspect-[4/3] overflow-hidden'>
                    <img
                      src={article.image}
                      alt={article.title}
                      className='w-full h-full object-cover transition-transform duration-500 hover:scale-105'
                    />
                  </div>
                  <div className='p-5 flex-1 flex flex-col'>
                    <div className='chip mb-3'>{article.category}</div>
                    <h3 className='text-xl font-bold mb-2'>{article.title}</h3>
                    <p className='text-gray-600 text-sm mb-4 flex-1'>
                      {article.excerpt}
                    </p>
                    <div className='flex items-center justify-between mt-auto pt-4 border-t border-gray-100'>
                      <span className='text-xs text-gray-500'>
                        {article.date}
                      </span>
                      <Link
                        to={`/news/${article.id}`}
                        className='text-sm font-medium flex items-center'
                      >
                        Read more <ArrowRight className='ml-1 h-3 w-3' />
                      </Link>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        ) : (
          <p className='py-10 text-center text-gray-500 text-lg'>
            We are working to bring you the latest news...
          </p>
        )}
      </div>
    </section>
  );
};

export default LatestNewsSection;
