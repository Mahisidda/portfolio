import React from 'react'

export default function Resume() {
  return (
    <div className="w-full h-screen p-8 bg-gray-50">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">My Resume</h1>
        
        {/* PDF Display Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe 
            src="resume.pdf" // Replace with your PDF path
            className="w-full h-screen min-h-[800px]"
            frameBorder="0"
            title="Resume PDF Viewer"
          >
            <p className="text-gray-600 p-4">
              Your browser does not support PDFs. 
              <a 
                href="/Users/mahisidda/Downloads/Projects/Portfolio/public/resume.pdf" 
                className="text-blue-600 hover:underline ml-1"
              >
                Download the resume PDF
              </a>
            </p>
          </iframe>
        </div>

        {/* Download Button */}
        <div className="mt-6 text-center">
          <a
            href="/Users/mahisidda/Downloads/Projects/Portfolio/public/resume.pdf"
            download
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Download PDF
          </a>
        </div>
      </div>
    </div>
  )
}