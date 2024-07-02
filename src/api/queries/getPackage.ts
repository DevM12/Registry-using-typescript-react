import type { packageDetails } from "../types/packageDetails";



export async function getPackages(name: string): Promise<packageDetails> {
    const res = await fetch(`http://registry.npmjs.org/${name}`);
    const data = await res.json();
    return data as packageDetails;


}
