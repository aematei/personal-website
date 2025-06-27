import { GetStaticProps } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/components/Layout'
import { getSortedPostsData, BlogPostPreview } from '@/lib/blog'

interface HomeProps {
  allPostsData: BlogPostPreview[]
}

export default function Home({ allPostsData }: HomeProps) {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-6">
        <section className="md:pt-40">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-col items-center mb-12">
              <div className="mb-6 relative group cursor-pointer opacity-0 animate-fade-in-up active:scale-110 active:-translate-y-2 transition-transform duration-300" style={{animationDelay: '0.2s'}}>
                <Image
                  src="/AlexAboutAvatar3.png"
                  alt="Alex Matei"
                  width={250}
                  height={250}
                  className="rounded-full w-72 h-72 md:w-72 md:h-72 object-cover transition-all duration-150 ease-in-out group-active:shadow-2xl"
                />
                <Image
                  src="/AlexAboutAvatar3Wink.png"
                  alt="Alex Matei winking"
                  width={250}
                  height={250}
                  className="rounded-full w-72 h-72 md:w-72 md:h-72 object-cover absolute inset-0 opacity-0 transition-all duration-150 ease-in-out group-hover:opacity-100 group-active:shadow-2xl"
                />
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight opacity-0 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                Alex Matei
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#2D2D2D]/80 font-light italic leading-relaxed opacity-0 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                Full-Stack Developer
              </h2>
              
              <div className="flex justify-center gap-4 mt-6 opacity-0 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
                <a
                  href="https://linkedin.com/in/aematei"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/60 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:border-[#6C63FF]/60 hover:bg-white/80 transition-all duration-200 hover:scale-110"
                >
                  <svg className="w-6 h-6 text-[#2D2D2D]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                
                <a
                  href="https://github.com/aematei"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/60 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:border-[#6C63FF]/60 hover:bg-white/80 transition-all duration-200 hover:scale-110"
                >
                  <svg className="w-6 h-6 text-[#2D2D2D]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          
            <div className="text-lg md:text-xl text-[#2D2D2D]/90 my-24 leading-relaxed space-y-4 max-w-4xl mx-auto text-left opacity-0 animate-fade-in-up" style={{animationDelay: '1.0s'}}>
              <p>I'm a full-stack developer with a love for fast-paced collaboration, thoughtful design, and creative tooling. I thrive when building fresh, meaningful things with smart, passionate people.</p>
              <p>Recently graduated and diving into what excites me most — prototyping ideas, designing intelligent agents, and exploring ethical, emergent tech. I bring startup energy, big-picture vision, and a drive to make tools that feel human.</p>
              <p>Let's build something good together.</p>
            </div>
            
            <div className="mb-16 opacity-0 animate-fade-in-up" style={{animationDelay: '1.2s'}}>
              <h3 className="text-3xl font-bold mb-8 text-[#2D2D2D]">Technical Arsenal</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <div className="rounded-xl p-6 shadow-sm border border-white/30 hover:border-white/50 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fade-in-up" style={{animationDelay: '0.1s', backgroundColor: 'rgba(255, 255, 255, 0.6)', backdropFilter: 'blur(8px)'}}>
                  <h4 className="text-lg font-semibold text-[#2D2D2D] mb-3">🧠 AI & ML Tools</h4>
                  <div className="space-y-2">
                    <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-md text-sm font-medium mr-2 mb-2">LangChain</span>
                    <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-md text-sm font-medium mr-2 mb-2">LangGraph</span>
                    <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-md text-sm font-medium mr-2 mb-2">OpenAI API</span>
                    <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-md text-sm font-medium mr-2 mb-2">Claude API</span>
                    <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-md text-sm font-medium mr-2 mb-2">CLIP</span>
                    <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-md text-sm font-medium mr-2 mb-2">Prompt Engineering</span>
                  </div>
                </div>
                
                <div className="rounded-xl p-6 shadow-sm border border-white/30 hover:border-white/50 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fade-in-up" style={{animationDelay: '0.2s', backgroundColor: 'rgba(255, 255, 255, 0.6)', backdropFilter: 'blur(8px)'}}>
                  <h4 className="text-lg font-semibold text-[#2D2D2D] mb-3">💻 Modern Web Stack</h4>
                  <div className="space-y-2">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-md text-sm font-medium mr-2 mb-2">React</span>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-md text-sm font-medium mr-2 mb-2">Next.js</span>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-md text-sm font-medium mr-2 mb-2">TypeScript</span>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-md text-sm font-medium mr-2 mb-2">Tailwind CSS</span>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-md text-sm font-medium mr-2 mb-2">Vite</span>
                  </div>
                </div>
                
                <div className="rounded-xl p-6 shadow-sm border border-white/30 hover:border-white/50 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fade-in-up" style={{animationDelay: '0.3s', backgroundColor: 'rgba(255, 255, 255, 0.6)', backdropFilter: 'blur(8px)'}}>
                  <h4 className="text-lg font-semibold text-[#2D2D2D] mb-3">🔧 Backend & APIs</h4>
                  <div className="space-y-2">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-md text-sm font-medium mr-2 mb-2">Node.js</span>
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-md text-sm font-medium mr-2 mb-2">Python</span>
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-md text-sm font-medium mr-2 mb-2">FastAPI</span>
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-md text-sm font-medium mr-2 mb-2">Express.js</span>
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-md text-sm font-medium mr-2 mb-2">RESTful Design</span>
                  </div>
                </div>
                
                <div className="rounded-xl p-6 shadow-sm border border-white/30 hover:border-white/50 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fade-in-up" style={{animationDelay: '0.4s', backgroundColor: 'rgba(255, 255, 255, 0.6)', backdropFilter: 'blur(8px)'}}>
                  <h4 className="text-lg font-semibold text-[#2D2D2D] mb-3">☁️ Infrastructure & Automation</h4>
                  <div className="space-y-2">
                    <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-md text-sm font-medium mr-2 mb-2">PostgreSQL</span>
                    <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-md text-sm font-medium mr-2 mb-2">Supabase</span>
                    <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-md text-sm font-medium mr-2 mb-2">Vercel</span>
                    <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-md text-sm font-medium mr-2 mb-2">AWS</span>
                    <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-md text-sm font-medium mr-2 mb-2">GitHub Actions</span>
                    <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-md text-sm font-medium mr-2 mb-2">CI/CD</span>
                  </div>
                </div>
                
                <div className="rounded-xl p-6 shadow-sm border border-white/30 hover:border-white/50 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fade-in-up" style={{animationDelay: '0.5s', backgroundColor: 'rgba(255, 255, 255, 0.6)', backdropFilter: 'blur(8px)'}}>
                  <h4 className="text-lg font-semibold text-[#2D2D2D] mb-3">🧩 Integration & Developer Experience</h4>
                  <div className="space-y-2">
                    <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-md text-sm font-medium mr-2 mb-2">API Orchestration</span>
                    <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-md text-sm font-medium mr-2 mb-2">Docker</span>
                    <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-md text-sm font-medium mr-2 mb-2">Git & GitHub</span>
                    <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-md text-sm font-medium mr-2 mb-2">VSCode</span>
                    <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-md text-sm font-medium mr-2 mb-2">Jupyter Notebook</span>
                  </div>
                </div>
                
                <div className="rounded-xl p-6 shadow-sm border border-white/30 hover:border-white/50 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fade-in-up" style={{animationDelay: '0.6s', backgroundColor: 'rgba(255, 255, 255, 0.6)', backdropFilter: 'blur(8px)'}}>
                  <h4 className="text-lg font-semibold text-[#2D2D2D] mb-3">🚀 Project & Team Workflow</h4>
                  <div className="space-y-2">
                    <span className="inline-block px-3 py-1 bg-teal-100 text-teal-800 rounded-md text-sm font-medium mr-2 mb-2">Agile / SCRUM</span>
                    <span className="inline-block px-3 py-1 bg-teal-100 text-teal-800 rounded-md text-sm font-medium mr-2 mb-2">Jira</span>
                    <span className="inline-block px-3 py-1 bg-teal-100 text-teal-800 rounded-md text-sm font-medium mr-2 mb-2">Confluence</span>
                    <span className="inline-block px-3 py-1 bg-teal-100 text-teal-800 rounded-md text-sm font-medium mr-2 mb-2">GitHub Projects</span>
                    <span className="inline-block px-3 py-1 bg-teal-100 text-teal-800 rounded-md text-sm font-medium mr-2 mb-2">Peer Code Reviews</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {allPostsData.length > 0 && (
          <section className="py-20 mt-8">
            <div className="border-t border-gray-200 pt-20">
              <div className="space-y-8">
                {allPostsData.map(({ slug, title, date, excerpt }) => (
                  <article key={slug} className="group">
                    <Link href={`/blog/${slug}`} className="block rounded-xl p-10 shadow-sm border border-white/30 hover:border-white/50 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 cursor-pointer relative overflow-hidden" style={{minHeight: '200px', backgroundColor: 'rgba(255, 255, 255, 0.6)', backdropFilter: 'blur(8px)'}}>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#6C63FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl md:text-3xl font-semibold group-hover:text-[#6C63FF] transition-colors leading-tight flex-1">
                          {title}
                        </h3>
                        <div className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <svg className="w-6 h-6 text-[#6C63FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                      <time className="text-[#2D2D2D]/60 text-sm mb-4 block font-medium uppercase tracking-wide">
                        {new Date(date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                        {excerpt && (
                          <p className="text-base md:text-lg text-[#2D2D2D]/80 leading-relaxed">
                            {excerpt}
                          </p>
                        )}
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}