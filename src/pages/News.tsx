import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Search, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const News = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Filter articles based on search and category
  const filteredArticles = newsArticles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      !activeCategory || article.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Get unique categories
  const categories = Array.from(
    new Set(newsArticles.map((article) => article.category))
  );

  return (
    <div className='container mx-auto px-4 md:px-6 py-12 md:py-16 mb-10'>
      <div className='max-w-7xl mx-auto'>
        {/* Page Header */}
        <div className='text-center mb-12 md:mb-16'>
          <h1 className='font-display text-4xl md:text-5xl font-bold mb-4'>
            Latest News
          </h1>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Stay up to date with the latest events, interviews, and
            announcements from Swahilipot FM.
          </p>
        </div>

        <div className='flex flex-col lg:flex-row gap-8'>
          {/* Main Content */}
          <div className='flex-1'>
            {/* Search bar */}
            <div className='relative mb-8'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400' />
              <Input
                type='text'
                placeholder='Search articles...'
                className='pl-10 border-gray-200'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Articles grid */}
            {filteredArticles.length > 0 ? (
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {filteredArticles.map((article, index) => (
                  <div
                    key={index}
                    className='animate-fade-in'
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Card className='overflow-hidden border-gray-200 h-full flex flex-col transition-all duration-300 hover:shadow-md'>
                      <div className='relative aspect-[4/3] overflow-hidden'>
                        <img
                          src={article.image}
                          alt={article.title}
                          className='w-full h-full object-cover transition-transform duration-500 hover:scale-105'
                        />
                      </div>
                      <div className='p-6 flex-1 flex flex-col'>
                        <div className='flex items-center space-x-2 mb-3'>
                          <div className='chip bg-gray-100'>
                            {article.category}
                          </div>
                          <span className='text-xs text-gray-500'>
                            {article.date}
                          </span>
                        </div>
                        <h2 className='text-xl font-bold mb-3'>
                          {article.title}
                        </h2>
                        <p className='text-gray-600 text-sm mb-4 flex-1'>
                          {article.excerpt}
                        </p>
                        <Link
                          to={`/news/${article.id}`}
                          className='inline-flex items-center text-sm font-medium mt-auto'
                        >
                          Read more <ChevronRight className='ml-1 h-4 w-4' />
                        </Link>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            ) : (
              <div className='text-center py-12 bg-gray-50 rounded-lg'>
                <p className='text-gray-500'>
                  We are working to bring you the latest news...
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className='lg:w-80'>
            <div className='sticky top-24'>
              {/* Categories */}
              <div className='bg-gray-50 rounded-xl p-6'>
                <h3 className='font-bold text-lg mb-4'>Categories</h3>
                {categories.length > 0 ? (
                  <div className='space-y-2'>
                    <Button
                      variant={activeCategory === null ? 'default' : 'ghost'}
                      className={`w-full justify-start ${activeCategory === null ? 'bg-[#271d73] hover:bg-[#2295e2] text-white' : ''}`}
                      onClick={() => setActiveCategory(null)}
                    >
                      <Tag className='mr-2 h-4 w-4' /> All Categories
                    </Button>
                    {categories.map((category, index) => (
                      <Button
                        key={index}
                        variant={
                          activeCategory === category ? 'default' : 'ghost'
                        }
                        className={`w-full justify-start ${activeCategory === category ? 'bg-[#271d73] hover:bg-[#2295e2] text-white' : ''}`}
                        onClick={() => setActiveCategory(category)}
                      >
                        <Tag className='mr-2 h-4 w-4' /> {category}
                      </Button>
                    ))}
                  </div>
                ) : (
                  <p className='text-gray-500'>No categories at the moment</p>
                )}
              </div>

              {/* Featured Article */}
              <div className='mt-8 bg-gray-50 rounded-xl p-6'>
                <h3 className='font-bold text-lg mb-4'>Featured Article</h3>
                <p className='text-gray-500'>
                  Stay tuned for the latest news...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Mock data for news articles
const newsArticles = [];

export default News;
