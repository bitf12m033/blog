// import { MDXRemote } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation"
import { getPost as getPostNotCached } from "@/lib/posts"
import { cache } from "react"
import Link from "next/link"

const getPost = cache(async (slug) => await getPostNotCached(slug))

export async function generateMetadata({params}) {
  
  try {
    const {frontmatter} = await getPost(params.slug)
    return frontmatter
  } catch (error) {
    
  }
  
}
const BlogPage = async ({params}) => {

  let post;
  try {
    post = await getPost(params.slug)
    
  } catch (error) {
    notFound()
  }

  return (
    <div className='prose dark:prose-invert'>{params.slug}
    <article className="prose dark:prose-invert">
      <div className="flex space-x-2 mb-8">
        {
          post?.frontmatter?.tags?.map(tag => (
            <Link key={tag} href={`/blog?tags=${tag}`} className="dark:text-gray-400 text-gray-500">
              #{tag}
            </Link>
          ))
        }
      </div>
    </article>
      {post.content}
      {/* <MDXRemote source={markdown} /> */}
    </div>
  )
}

export default BlogPage