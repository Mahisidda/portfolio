import React from 'react';
import { blogs } from '../blogsData';

export default async function BlogPage({ params }) {
  // Since we're using [...id], params.id is an array, so we need to get the first element
  const blogId = Array.isArray(params.id) ? params.id[0] : params.id;
  const blog = blogs.find(blog => blog.id === blogId);

  if (!blog) {
    return (
      <div className="max-w-4xl font-mono mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold">Blog not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl font-mono mx-auto px-5 py-8">
      <h1 className="text-3xl font-mono font-bold mb-4">{blog.title}</h1>
      <div className="flex items-center  text-sm text-gray-900 mb-6">
        <span>{blog.date}</span>
        <span className="mx-2">•</span>
        <span>{blog.readTime}</span>
      </div>
      <div 
        className="prose max-w-none text-justify text-black-600" 
        dangerouslySetInnerHTML={{ __html: blog.description }}
      />
    </div>
  );
}