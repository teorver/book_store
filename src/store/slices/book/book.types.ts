export interface SingleBook {
    title: string;
    subtitle: string;
    value: string;
    price: string;
    image: string;
    isbn13: string;
}

const initialBook: SingleBook = {
    title: "",
    subtitle: "",
    value: "",
    price: "",
    image: "",
    isbn13: "",
}

export default initialBook;
