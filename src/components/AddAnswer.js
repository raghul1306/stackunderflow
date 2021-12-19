import React from 'react';
import { useState } from 'react';

const AddAnswer = (props) => {

    const title = props.question.title;
    const questionId = props.question.id;
    const [comment, setComment] = useState('');
    const [by, setBy] = useState('');
    const [addAnswerTab, setAddAnswerTab] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const answer = { title, questionId, comment, by};

        fetch('http://localhost:8000/answers',{
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(answer)
        }).then(() => {
            console.log('New Answer added');
        })

        setComment('');
        setBy('');
        setAddAnswerTab(!addAnswerTab);
        window.location.reload();
    }

    return (
        <div className="answer-question">
            <button onClick={ () => setAddAnswerTab(!addAnswerTab) }>Add Your Comment</button>
            {addAnswerTab && (
                <div className="add-answer">
                    <h2>Add Your Answer</h2>
                    <form onSubmit={ handleSubmit }>
                        <label>For Question : </label>
                        <input 
                            type="text"
                            required
                            value= { title }
                            readOnly
                        />
                        <label>For Question id : </label>
                        <input
                            type="number"
                            required
                            value={ questionId }
                            readOnly
                        />
                        <label>Your Comments : </label>
                        <textarea 
                            type="text"
                            required
                            value = { comment }
                            onChange = {(e) => setComment(e.target.value)}
                        />
                        <label>Commented by : </label>
                        <input 
                            type="text"
                            required
                            value = { by }
                            onChange = {(e) => setBy(e.target.value)} 
                        />
                        <button className="answer-submit-button">Post Comment</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default AddAnswer;