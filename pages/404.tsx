import Link from 'next/link'
import Layout from '@/components/Layout'

export default function Custom404() {
  return (
    <Layout title="Page Not Found | Alex Matei">
      <div className="max-w-5xl mx-auto px-6">
        <div className="py-24 md:py-40 text-center">
          <h1 className="text-8xl md:text-9xl font-bold mb-8 text-gray-200">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            The page you're looking for doesn't exist, but you can always return to explore my work and thoughts.
          </p>
          <Link 
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#FF5722] text-white font-semibold text-lg rounded-lg hover:bg-[#FF5722]/90 transition-colors shadow-lg"
          >
            Return to Alex Matei
          </Link>
        </div>
      </div>
    </Layout>
  )
}