import React from 'react';
import Link from 'next/link';
import { blogs } from './blogsData'; // Assuming blogsData is an array of blog objects

export default function BlogsPage() {
  if (!blogs?.length) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Posts</h1>
          <p className="text-gray-600">No blog posts available at the moment.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          My Thoughts & Writings
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div 
              key={blog.id}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
              role="article"
              aria-labelledby={`blog-title-${blog.id}`}
            >
              <div>
                <h3 
                  id={`blog-title-${blog.id}`}
                  className="text-2xl font-bold text-gray-900 mb-3"
                >
                  {blog.title}
                </h3>
                <div className="text-gray-700 mb-6 text-sm leading-relaxed">
                  <p className="font-medium text-gray-600">{blog.date}</p>
                  <p className="text-xs text-gray-500">{blog.readTime}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <Link
                  href={`/blogs/${blog.id}`}
                  className="inline-flex items-center justify-center bg-black text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors w-full text-center"
                  aria-label={`Read more about ${blog.title}`}
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 