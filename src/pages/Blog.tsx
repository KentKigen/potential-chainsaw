import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';

export function BlogPage() {
  const featuredPost = {
    title: 'Nairobi Real Estate Market Trends 2026: What Buyers Need to Know',
    excerpt: 'The Nairobi property market is showing strong growth in key areas like Ongata Rongai and Karen. Here\'s what you need to know before making your next investment.',
    image: 'https://images.unsplash.com/photo-1741991110666-88115e724741?w=1200',
    author: 'Grace Wanjiku',
    date: 'April 10, 2026',
    category: 'Market Insights'
  };

  const posts = [
    {
      id: '1',
      title: 'First-Time Homebuyer Guide: Navigating the Kenyan Property Market',
      excerpt: 'Essential tips and insights for first-time buyers looking to purchase property in Nairobi and surrounding areas.',
      image: 'https://images.unsplash.com/photo-1658218635253-64728f6234be?w=600',
      author: 'David Omondi',
      date: 'April 8, 2026',
      category: 'Buyer Guides'
    },
    {
      id: '2',
      title: 'Ongata Rongai: Why This Neighborhood is Nairobi\'s Rising Star',
      excerpt: 'Discover why Ongata Rongai has become one of the most sought-after residential areas for families and young professionals.',
      image: 'https://images.unsplash.com/photo-1658218729615-167c32d70537?w=600',
      author: 'Sarah Njeri',
      date: 'April 5, 2026',
      category: 'Neighborhoods'
    },
    {
      id: '3',
      title: 'Investment Property 101: Maximizing Returns in Nairobi',
      excerpt: 'Learn how to identify high-potential investment properties and maximize your rental yields in the Nairobi market.',
      image: 'https://images.unsplash.com/photo-1694465990855-e78110c345af?w=600',
      author: 'Grace Wanjiku',
      date: 'April 2, 2026',
      category: 'Investment'
    },
    {
      id: '4',
      title: 'Understanding Property Title Deeds in Kenya',
      excerpt: 'A comprehensive guide to understanding different types of title deeds and what to look for when purchasing property.',
      image: 'https://images.unsplash.com/photo-1639220814863-7f1408750b57?w=600',
      author: 'David Omondi',
      date: 'March 28, 2026',
      category: 'Legal'
    },
    {
      id: '5',
      title: 'Home Staging Tips to Sell Your Property Faster',
      excerpt: 'Simple yet effective staging strategies to make your property stand out and attract serious buyers quickly.',
      image: 'https://images.unsplash.com/photo-1658218635253-64728f6234be?w=600',
      author: 'Sarah Njeri',
      date: 'March 25, 2026',
      category: 'Seller Tips'
    },
    {
      id: '6',
      title: 'Rental Market Update: Current Rates Across Nairobi',
      excerpt: 'An in-depth look at current rental rates across different Nairobi neighborhoods and what they mean for landlords and tenants.',
      image: 'https://images.unsplash.com/photo-1694465990855-e78110c345af?w=600',
      author: 'Grace Wanjiku',
      date: 'March 20, 2026',
      category: 'Market Insights'
    }
  ];

  const categories = [
    'All Posts',
    'Market Insights',
    'Buyer Guides',
    'Seller Tips',
    'Investment',
    'Neighborhoods',
    'Legal'
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#0B2545] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Market Insights & News</h1>
          <p className="text-xl text-white/80">
            Expert perspectives on Nairobi's real estate market
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-[#F6E9D7] rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="h-[400px]">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="inline-block mb-4">
                <span className="bg-[#C75A3A] text-white px-3 py-1 rounded-full text-sm font-medium">
                  {featuredPost.category}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-[#0B2545] mb-4">
                {featuredPost.title}
              </h2>
              <p className="text-[#6B7280] mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-[#6B7280] mb-6">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>{featuredPost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{featuredPost.date}</span>
                </div>
              </div>
              <Button variant="primary">
                Read Article <ArrowRight className="inline ml-2" size={18} />
              </Button>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full transition-colors ${
                category === 'All Posts'
                  ? 'bg-[#C75A3A] text-white'
                  : 'bg-[#F6E9D7] text-[#0B2545] hover:bg-[#EDD9C1]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-200">
                <div className="h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="bg-[#F6E9D7] text-[#0B2545] px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0B2545] mb-3 group-hover:text-[#C75A3A] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[#6B7280] mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-[#6B7280] pt-4 border-t border-[#F6E9D7]">
                    <div className="flex items-center gap-2">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline">Load More Articles</Button>
        </div>
      </div>

      {/* Newsletter */}
      <section className="py-20 bg-[#0B2545]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-xl text-white/80 mb-8">
            Get the latest market insights and property listings delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C75A3A]"
            />
            <Button variant="primary">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
