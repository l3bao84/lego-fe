import { useEffect, useState } from 'react';

export const useSearchProducts = (keyword, page,sort) => {
    const [products, setProducts] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchSearchResult = () => {
            fetch(`http://localhost:8080/search?key=${keyword}&page=${page}&sort=${sort}`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((result) => {
                    setProducts(result.content)
                    setTotalPages(result.totalPages)
                })
                .catch((error) => {
                    console.error('Error fetching products:', error);
            });
        };

        fetchSearchResult()
    }, [keyword, page, sort]);

    return {products, totalPages}
}


export const useCategory = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = () => {
            fetch('http://localhost:8080/category')
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((result) => {
                    setCategories(result);
                })
                .catch((error) => {
                    console.error('Error fetching categories:', error);
                });
        };

        fetchCategories();
    }, []);

    return categories;
}