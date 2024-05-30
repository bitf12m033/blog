import fs from "fs"
import path from "path"
import {compileMDX} from 'next-mdx-remote/rsc'

const loadPost  = (slug) => {
    const filename = slug.endsWith('.mdx')? slug : `${slug}.mdx`;
    return fs.readFileSync(path.join(process.cwd(), `/content/${filename}`))
}

export const getPost = async (slug) => {
    const source = loadPost(slug)
   return  await compileMDX({source, options:{parseFrontmatter: true}})
  
}

export const getPosts = async () => {
    const files = fs.readdirSync(path.join(process.cwd(), 'content'))

    const posts = await Promise.all(
        files.map(async file => {
            const {frontmatter} = await getPost(file);
            
            return {
                frontmatter,
                slug:file.replace('.mdx', '')
            }
        })
    )

    return posts;
}