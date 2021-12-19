import { useParams } from 'react-router';
import useFetch from './useFetch';
import { useHistory } from 'react-router';
import AddAnswer from './AddAnswer';
import DisplayAnswers from './DisplayAnswers';

const QuestionDetails = () => {

    const { id } = useParams();
    const { data: question, isPending, error } = useFetch('http://localhost:8000/questions/' + id);
    const history = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:8000/questions/' + question.id, {
            method: 'DELETE'
        }).then(() => {
            console.log(`Question of title '${question.title}' Deleted Successfully.`);
            history.push('/');
        });
    }

    return (
        <div className="question-details">
            { isPending && <div>Loading...</div> }
            { error && <div> { error } </div> }
            {question && (
                <div className="question-with-id">
                    <h2>{ question.title }</h2>
                    <h3>Tags : { question.tags }</h3>
                    <h3>Question by : { question.username }</h3>
                    <p>{ question.body }</p>
                    <button onClick={ handleDelete }>Delete</button>
                </div>
            )}
            {question && <DisplayAnswers question={question}/>}
            {question && <AddAnswer question={question}/>}
        </div>
    );
}

export default QuestionDetails;