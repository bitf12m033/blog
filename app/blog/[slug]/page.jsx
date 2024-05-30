// import { MDXRemote } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation"
import { getPost as getPostNotCached } from "@/lib/posts"
import { cache } from "react"

const getPost = cache(async (slug) => await getPostNotCached(slug))

export async function generateMetadata({params}, parent) {
  
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
      {post.content}
      {/* <MDXRemote source={markdown} /> */}
    </div>
  )
}

export default BlogPage