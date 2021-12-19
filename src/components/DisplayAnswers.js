import React from 'react';
import useFetch from './useFetch';

const DisplayAnswers = (props) => {

    const { data: answers, isPending, error } = useFetch('http://localhost:8000/answers');

    const handleDelete = (answer) => {
        fetch('http://localhost:8000/answers/' + answer.id, {
            method: 'DELETE'
        }).then(() => {
            console.log('Answer deleted.');
            window.location.reload();
        })
    }

    return (
        <div className="display-answer">
            <h2>Comments Received</h2>
            { isPending && <div>Loading...</div> }
            { error && <div> { error } </div> }
            { answers && ( answers.filter(answer => (answer.questionId === props.question.id)).map(answer => (
                <div className="answer-content" key={answer.id}>
                    <p className="answer-body">{ answer.comment }</p>
                    <p>by { answer.by }</p>
                    <button className="delete-answer" onClick= {() => handleDelete(answer) }>Remove</button>
                </div>
            )) 
            )}
        </div>
    );
}

export default DisplayAnswers;