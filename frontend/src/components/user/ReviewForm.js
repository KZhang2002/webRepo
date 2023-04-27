import { useState } from 'react'
export const ReviewForm = ({ onReviewAdded }) => {
    const [ userName, setUserName ] = useState('');
    const [ rating, setRating ] = useState('');
    const [ comment, setComment ] = useState('');
    const ratingOptions = [
        { value: 1, label: '1 stars' },
        { value: 2, label: '2 stars' },
        { value: 3, label: '3 stars' },
        { value: 4, label: '4 stars' },
        { value: 5, label: '5 stars' }
   ]

    return (
        <div className="col">
         
        </div>
    );
}