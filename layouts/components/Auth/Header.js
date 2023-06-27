import Image from 'next/image';
import Link from 'next/link';

export default function Header({
    heading,
    paragraph,
    linkName,
    linkUrl="#"
}){
    return(
        <div className="mb-2">
            <div className="flex justify-center">
                <Image height={160} width={160}
                    alt=""
                    className=" h-40 w-40 "
                    src="/images/logo.png"/>
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                {heading}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 mt-5">
            {paragraph} {' '}
            <Link href={linkUrl} className="font-medium text-primary hover:text-purple-500">
                {linkName}
            </Link>
            </p>
        </div>
    )
}