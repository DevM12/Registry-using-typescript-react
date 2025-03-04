import { useLoaderData,Link } from "react-router-dom"
import type { HomeLoaderResult } from "./homeLoader"

export default function HomePage(){
const {featuredPackages}=useLoaderData() as HomeLoaderResult
const renderedPackages=featuredPackages.map((p)=>{
    return <div className="flex flex-col justify-betweengap-3 border rounded shadow p-4" key={p.name}>
        <div className="flex flex-col gap-1 border-bottom border-gray-400">
            <div className="font-bold text-center"> {p.name}</div>
            <div className="text-sm text-gray-500">{p.description}</div>
            
        </div>
        <Link to={`/packages/${p.name}`} className='border rounded border-gray-900 text-center'>
        View
        </Link>
    </div>
})
    return (
        <div className="container py-12 space-y-8">
            <div className="space-y-6 text-center">
                <h1 className="text-6xl font-bold">THE NPM REGISTRY</h1>
                <p className="mx-auto max-w-[600px] text-gray-500">
                    The package manager for javascript. Search and view packages.
                </p>
            </div>
            <div className="mx-auto grid grid-cols-4 max-w-[900px] items-stretch gap-4">
                {renderedPackages}
            </div>
            
        </div>
    )
}