export interface IBook {
    title: string;
    subtitle: string;
    isbn13?: string | undefined;
    price: string;
    image: string;
    url?: string;
}

export interface IOpenedBook {
    title?: string;
    subtitle?: string;
    isbn10?: string | undefined;
    isbn13?: string;
    price?: string | undefined;
    language?: string,
    image?: string;
    url?: string;
    rating?: string;
    desc?: string;
    authors?: string;
    publisher?: string;
    pages?: string;
    year?: string;
    pdf?: string[];
}
