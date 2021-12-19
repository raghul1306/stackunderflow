import React from 'react';
import { Link } from 'react-router-dom';

const QuestionsList = (props) => {
    return (
        <div className="question-list">
            <h1>{ props.title }</h1>
            {props.questions.map((question) => (
                <Link to={ `/questions/${ question.id }`} key={question.id}>
                    <div className="question-preview">
                        <h2>{ question.title }</h2>
                        <p>Tags : { question.tags }</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default QuestionsList;