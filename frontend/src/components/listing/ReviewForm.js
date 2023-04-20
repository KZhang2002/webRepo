import { useState } from 'react'
import { SelectField, TextAreaField, TextField, Rating } from './'

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
        <div class="col">
            <div class="card mb-3 pb-3">
                <div class="card-header py-3 px-4" style={{ backgroundColor: "#868f96" }}>
                    <h5 class="m-0" style={{ color: "#ffffff", fontWeight: "600", fontSize: "1.3em", lineHeight:"1" }}>Add Review</h5>
                </div>
                <div class="card-body px-4 pt-3 pb-2">
                    <div class="row">
                        <div class="col col-8">
                            <TextField
                                label="Your Name"
                                value={ userName }
                                setValue={ setUserName }/>
                        </div>
                        <div class="col col-2">
                            <SelectField
                                label="Rating"
                                value={ rating }
                                setValue={ setRating }
                                options={ ratingOptions }
                                optionValueKey="value"
                                optionLabelKey="label" />
                        </div>
                        <div class="col col-auto pt-3 my-auto">
                            <Rating 
                                value={ rating }/>
                        </div>
                    </div>
                    <div class="row">
                        <TextAreaField 
                            label="Comment"
                            value={ comment }
                            setValue={ setComment } />
                    </div>
                    <button
                        onClick={ () => {
                            onReviewAdded({
                                userName, 
                                rating, 
                                comment, 
                                date: new Date().toLocaleDateString(
                                    'en-us', { year:"numeric", month:"short", day:"numeric"}) });
                            setUserName('');
                            setRating('');
                            setComment('');
                        }
                    } type="button" class="btn btn-primary" disabled={!userName || !rating || !comment}>Submit</button>
                </div>
            </div>
        </div>
    );
}