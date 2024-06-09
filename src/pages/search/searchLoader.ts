import { searchPackages } from "../../api/queries/searchPackages";



export async function searchLoader({ request }: { request: Request }) {

    const { searchParams } = new URL(request.url);
    const term = searchParams.get('term')

    if (!term) {
        throw new Error('Search element must be present');
    }


    const results = await searchPackages(term);
    return {
        searchResults:results
    }
}