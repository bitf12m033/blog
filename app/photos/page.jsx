import Image from "next/image"

import dog1 from '@/public/dogs/dog1.png'
import dog2 from '@/public/dogs/dog2.png'
import dog3 from '@/public/dogs/dog3.png'
import dog4 from '@/public/dogs/dog4.png'
import H1 from "@/components/h1"
const PhotosPage = () => {
  return (
    <div>
        <H1> My Photos</H1>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

            <div className="relative h-60 overflow-hidden">
                <Image quality={100} priority={true} fill sizes="(max-width:786px 100vw ,50vw" alt="picture"  src={dog1} className="object-cover w-full h-full" />
            </div>
            <div className="relative h-60 overflow-hidden">
                <Image quality={50} placeholder="blur" fill sizes="(max-width:786px 100vw ,50vw" alt="picture"  src={dog2} className="object-cover w-full h-full" />
            </div>
            <div className="relative h-60 overflow-hidden">
                <Image quality={50} placeholder="blur" fill sizes="(max-width:786px 100vw ,50vw"  alt="picture" src={dog3} className="object-cover w-full h-full" />
            </div>
            <div className="relative h-60 overflow-hidden">
                <Image quality={50} placeholder="blur" fill sizes="(max-width:786px 100vw ,50vw" alt="picture" src={dog4} className="object-cover w-full h-full" />
            </div>

        </div>
    </div>
  )
}

export default PhotosPage