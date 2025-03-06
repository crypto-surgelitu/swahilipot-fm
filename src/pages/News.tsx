
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Search, Tag } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const News = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  // Filter articles based on search and category
  const filteredArticles = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !activeCategory || article.category === activeCategory;
    return matchesSearch && matchesCategory;
  });
  
  // Get unique categories
  const categories = Array.from(new Set(newsArticles.map(article => article.category)));
  
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 mb-10">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Latest News</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay up to date with the latest events, interviews, and announcements from Swahilipot FM.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Search bar */}
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10 border-gray-200"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            {/* Articles grid */}
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredArticles.map((article, index) => (
                  <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <Card className="overflow-hidden border-gray-200 h-full flex flex-col transition-all duration-300 hover:shadow-md">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img 
                          src={article.image} 
                          alt={article.title} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="chip bg-gray-100">{article.category}</div>
                          <span className="text-xs text-gray-500">{article.date}</span>
                        </div>
                        <h2 className="text-xl font-bold mb-3">{article.title}</h2>
                        <p className="text-gray-600 text-sm mb-4 flex-1">{article.excerpt}</p>
                        <Link 
                          to={`/news/${article.id}`} 
                          className="inline-flex items-center text-sm font-medium mt-auto"
                        >
                          Read more <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <p className="text-gray-500">No articles found matching your search criteria.</p>
                <Button 
                  variant="link" 
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory(null);
                  }}
                >
                  Clear filters
                </Button>
              </div>
            )}
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-80">
            <div className="sticky top-24">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-4">Categories</h3>
                <div className="space-y-2">
                  <Button
                    variant={activeCategory === null ? "default" : "ghost"}
                    className={`w-full justify-start ${activeCategory === null ? 'bg-[#271d73] hover:bg-[#2295e2] text-white' : ''}`}
                    onClick={() => setActiveCategory(null)}
                  >
                    <Tag className="mr-2 h-4 w-4" /> All Categories
                  </Button>
                  {categories.map((category, index) => (
                    <Button
                      key={index}
                      variant={activeCategory === category ? "default" : "ghost"}
                      className={`w-full justify-start ${activeCategory === category ? 'bg-[#271d73] hover:bg-[#2295e2] text-white' : ''}`}
                      onClick={() => setActiveCategory(category)}
                    >
                      <Tag className="mr-2 h-4 w-4" /> {category}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-4">Featured Article</h3>
                <div className="aspect-video mb-3 rounded-md overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=500&auto=format&fit=crop" 
                    alt="Featured" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-bold mb-2">Behind the Scenes: A Day in the Life of a Radio Host</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Ever wondered what goes on behind the microphone? We follow our morning host for a day...
                </p>
                <Link 
                  to="/news/featured" 
                  className="inline-flex items-center text-sm font-medium"
                >
                  Read the feature <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Mock data for news articles
const newsArticles = [
  {
    id: "1",
    title: "Exclusive Interview with Grammy Winner Coming This Weekend",
    excerpt: "Tune in for our exclusive interview with this year's breakout Grammy winner discussing their journey and upcoming projects.",
    category: "Interviews",
    date: "June 15, 2023",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "2",
    title: "New Summer Concert Series Announced",
    excerpt: "Swahilipot FM partners with the city to bring an exciting summer concert series to the downtown amphitheater.",
    category: "Events",
    date: "June 10, 2023",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "3",
    title: "Studio Upgrades Complete: Enhanced Listening Experience",
    excerpt: "We've completed our state-of-the-art studio renovation, bringing even better sound quality to our listeners.",
    category: "Announcements",
    date: "June 5, 2023",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "4",
    title: "Swahilipot FM Wins Best Local Radio Station Award",
    excerpt: "We're honored to announce that Swahilipot FM has been named Best Local Radio Station for the third consecutive year.",
    category: "Awards",
    date: "May 28, 2023",
    image: "https://images.unsplash.com/photo-1498429089284-41f8cf3ffd39?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "5",
    title: "New Podcast Series Launching Next Month",
    excerpt: "Get ready for our new podcast series featuring deep dives into local music scenes across the country.",
    category: "Announcements",
    date: "May 20, 2023",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "6",
    title: "Interview with Rising Indie Band 'The Echoes'",
    excerpt: "We sat down with indie sensation 'The Echoes' to discuss their breakthrough album and upcoming tour.",
    category: "Interviews",
    date: "May 15, 2023",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "7",
    title: "Annual Music Festival Lineup Revealed",
    excerpt: "The wait is over! Check out the full lineup for this year's Downtown Music Festival, sponsored by Swahilipot FM.",
    category: "Events",
    date: "May 8, 2023",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "8",
    title: "Swahilipot FM Radio App Gets Major Update",
    excerpt: "Our mobile app just got even better with new features including offline listening and enhanced playlists.",
    category: "Technology",
    date: "May 1, 2023",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop"
  }
];

export default News;
