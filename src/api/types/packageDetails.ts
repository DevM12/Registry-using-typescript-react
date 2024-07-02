export interface packageDetails {
    name: string;
    description: string;
    readme: string;
    author: {
        email: string;
        name: string;
    };
    mentainers: {
        email: string;
        name: string;
    }[];
    license: string;
}