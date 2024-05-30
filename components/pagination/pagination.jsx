'use client'
import Link from "next/link"
import { useSearchParams, usePathname } from "next/navigation"

const Pagination = ({pageCount}) => {
    
    const searchParams = useSearchParams()
    const path = usePathname()
    const currentPage = searchParams.get('page') || 1
    const pages = []

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    return (
        <ul className="flex justify-center space-x-4 font-mono text-lg">
            {
                pages.map(page => {
                    const params = new URLSearchParams(searchParams);
                    params.set('page', page.toString());
                    
                    return (<li key={page}>
                        <Link href={`${path}?${params.toString()}`} className={` ${page != currentPage ? 'decoration-gray-400 underline-offset-4 decoration-4':''}underline cursor `}>
                            {page}
                        </Link>
                    </li>)
                })
            }
        </ul>
    )
}

export default Pagination