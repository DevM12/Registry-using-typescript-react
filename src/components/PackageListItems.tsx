import type { PackageSummary } from "../api/types/packageSummary";
import { Link } from "react-router-dom";


interface PackageListItemProps {
    pack: PackageSummary;
}


export default function PackageListItems({ pack }: PackageListItemProps) {
    const renderedKeywords = (pack.keywords || []).map((keyword) => {
        return <div key={keyword} className="border py-0.5 px-1 tex-xs bg-slate-200 rounded">
            {keyword}
        </div>
    })
    return (
        <div className="border p-4 rounded flex justify-between items-center">
            <div className="flex flex-colgap-2 ">
                <Link to={`/packages/${pack.name}`} className="text-xt font-bold">
                    <p className="text-sm text-gray-500">
                        {pack.description}
                    </p>
                    <div className="flex gap-1">
                        {renderedKeywords}
                    </div>
                </Link>
            </div>
            <div className="mr-6">
                <Link to={`/packages/${pack.name}`} className="py-2 px-3 rounded bg-black text-white text-lg">
                    View
                </Link>
            </div>
        </div>
    )
}