import QuoteList from '../components/quotes/QuoteList';

const DUMMY_DATA = [
    {id: 'q1', author: 'John', text: 'Learning react is fun!'},
    {id: 'q2', author: 'Sam', text: 'Learning react is interesting!'}
]

const AllQuotes = () => {
    return <QuoteList quotes={DUMMY_DATA}/>
}

export default AllQuotes;