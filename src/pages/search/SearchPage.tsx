import type { SearchLoaderResult } from "./searchLoader";
import { useLoaderData } from "react-router-dom"
import PackageListItems from "../../components/PackageListItems";


export default function SearchPage() {
    const { searchResults } = useLoaderData() as SearchLoaderResult;

    const renderedResults = searchResults.map((result) => {
        return <PackageListItems pack={result} key={result.name} />
    });
    return (<div>
        <h1 className="text-2xl font-bold my-6">SearchPage</h1>
        <div className="space-y-4 mt-4">
            {renderedResults}
        </div>
    </div>
    )
}