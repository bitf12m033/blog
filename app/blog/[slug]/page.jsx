import { MDXRemote } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation"
import fs from "fs"
import path from "path"

const BlogPage = ({params}) => {

  const markdown = fs.readFileSync(path.join(process.cwd(), `/content/${params.slug}.mdx`))

  return (
    <div className='prose dark:prose-invert'>{params.slug}
      <MDXRemote source={markdown} />
    </div>
  )
}

export default BlogPage