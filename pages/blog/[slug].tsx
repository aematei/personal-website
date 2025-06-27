import { GetStaticProps, GetStaticPaths } from 'next'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { getAllPostSlugs, getPostData, BlogPost } from '@/lib/blog'

interface BlogPostPageProps {
  postData: BlogPost
}

export default function BlogPostPage({ postData }: BlogPostPageProps) {
  return (
    <Layout
      title={`${postData.title} | Alex Matei`}
      description={postData.excerpt}
    >
      <div className="max-w-4xl mx-auto px-6">
        <article className="py-20">
          <div className="mb-20">
            <Link 
              href="/" 
              className="text-[#6C63FF] hover:underline inline-flex items-center mb-16 text-lg font-medium transition-colors"
            >
              ← Back to Alex Matei
            </Link>
            
            <header className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-[#2D2D2D]">
                {postData.title}
              </h1>
              <time className="text-[#2D2D2D]/60 text-sm uppercase tracking-wide font-medium">
                {new Date(postData.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </header>
          </div>

          <div 
            className="rounded-2xl border border-white/30 shadow-sm relative"
            style={{backgroundColor: 'rgba(255, 255, 255, 0.6)', backdropFilter: 'blur(8px)'}}
          >
            <div className="max-w-4xl mx-auto px-12 py-16 md:px-16 md:py-20">
              <div className="prose prose-lg max-w-none">
                <div 
                  className="text-lg leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: postData.content }} 
                />
              </div>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostSlugs()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.slug as string)
  return {
    props: {
      postData,
    },
  }
}