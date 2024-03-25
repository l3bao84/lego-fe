import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';

export const useDetailProduct = () => {
    const [product, setProduct] = useState();
    const {id} = useParams()

    useEffect(() => {
        const fetchProduct = () => {
            fetch(`http://localhost:8080/product/${id}`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((result) => {
                    setProduct(result)
                })
                .catch((error) => {
                    console.error('Error fetching products:', error);
            });
        };

        fetchProduct()
    }, [id]);

    return product
}

export const useCategory = (id) => {
    const [category, setCategory] = useState();
    
    useEffect(() => {

        if (id === undefined) {
            return;
        }

        const fetchCategory = () => {
            fetch(`http://localhost:8080/category/${id}`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((result) => {
                    setCategory(result)
                })
                .catch((error) => {
                    console.error('Error fetching category:', error);
            });
        };

        fetchCategory()
    }, [id]);

    return category
}

export const calculateReviewCounts = (reviews) => {
    const reviewCounts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  
    reviews.forEach(review => {
      if (review.rating >= 1 && review.rating <= 5) {
        reviewCounts[review.rating]++;
      }
    });
  
    return reviewCounts;
  }

export const useProductReviews = (page) => {

    const [reviews, setReviews] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const {id} = useParams()
    useEffect(() => {
        const fetchReviews = () => {
            fetch(`http://localhost:8080/reviews/${id}?page=${page}`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((result) => {
                    setReviews(result.content)
                    setTotalPages(result.totalPages)
                })
                .catch((error) => {
                    console.error('Error fetching products:', error);
            });
        };

        fetchReviews()
    }, [id,page]);

    return {reviews, totalPages}
}  