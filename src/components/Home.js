import QuestionsList from './QuestionsList';
import useFetch from './useFetch';

const Home = () => {

    const {data: questions, isPending, error} = useFetch('http://localhost:8000/questions');

    return (
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { questions && <QuestionsList questions={ questions } title="All Questions!"/> }
        </div>
    );
}

export default Home;