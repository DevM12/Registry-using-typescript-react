
import type { packageDetails } from "../../api/types/packageDetails";
import type { Params } from "react-router-dom"
import { getPackages } from "../../api/queries/getPackage"

interface loaderArgs {
    params: Params;
}

export interface DetailsLoaderResult {
    details: packageDetails;
}


export async function detailsLoader({ params }: loaderArgs):Promise<DetailsLoaderResult> {
    const { name } = params;
    if (!name) {
        throw new Error('name must be provided');
    }

    const details = await getPackages(name);



    return {
        details
    }

}