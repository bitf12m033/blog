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

export const getPosts = async ({newest = true , page =1 , limit = 3, tags} = {}) => {
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
    let filteredPosts = posts

    if (tags) {
      filteredPosts = filteredPosts.filter(
        post => post?.frontmatter?.tags?.some(
          tag => tags.includes(tag)
        )
      )
    }
  
    // Sorting
    if(newest) {
        filteredPosts = filteredPosts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
    }
    else {
        
        filteredPosts = filteredPosts.sort((a, b) => new Date(a.frontmatter.date) - new Date(b.frontmatter.date))
    }
    // Pagination
    const startIndex = (page - 1) * limit
    const endIndex = page * limit
    return filteredPosts.slice(startIndex, endIndex)

}