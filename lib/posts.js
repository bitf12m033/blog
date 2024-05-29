import fs from "fs"
import path from "path"
import {compileMDX} from 'next-mdx-remote/rsc'

const loadPost  = (slug) => {
    return fs.readFileSync(path.join(process.cwd(), `/content/${slug}.mdx`))
}

export const getPost = async (slug) => {
    const source = loadPost(slug)
   return  await compileMDX({source, options:{parseFrontmatter: true}})
  
}