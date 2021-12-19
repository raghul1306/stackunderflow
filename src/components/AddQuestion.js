import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';

const AddQuestion = () => {

    const [title, setTitle] = useState('');
    const [tags, setTags] = useState('');
    const [username, setUserName] = useState('');
    const [body, setBody] = useState('');
    const [isPending, setIspending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const question = { title, body, tags, username };
        setIspending(true);

        fetch('http://localhost:8000/questions', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(question)
        }).then(() => {
            console.log('New Question Posted.');
            setIspending(false);
            history.push('/');
        })
    }

    return (
        <div className="create-question">
            <h2>Add Question!</h2>
            <form onSubmit={ handleSubmit }>
                <label>Title : </label>
                <input 
                    type="text"
                    required
                    value = { title }
                    onChange = {(e) => setTitle(e.target.value)}
                />
                <label>Tags : </label>
                <input 
                    type="text"
                    required
                    value = { tags }
                    onChange = {(e) => setTags(e.target.value)}
                />
                <label>Name : </label>
                <input 
                    type="text"
                    required
                    value = { username }
                    onChange = {(e) => setUserName(e.target.value)}
                />
                <label>Question : </label>
                <textarea 
                    type="text"
                    required
                    value = { body }
                    onChange = {(e) => setBody(e.target.value)}
                />
                { isPending && <div>Please wait while we add your Question.</div> }
                { !isPending && <button>Post Question</button> }
            </form>
        </div>
    );
}

export default AddQuestion;