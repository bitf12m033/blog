// import { MDXRemote } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation"
import { getPost } from "@/lib/posts"
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
    console.log(error)
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