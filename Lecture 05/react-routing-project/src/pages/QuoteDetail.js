import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_DATA = [
    {id: 'q1', author: 'John', text: 'Learning react is fun!'},
    {id: 'q2', author: 'Sam', text: 'Learning react is interesting!'}
]


const QuoteDetail = () => {
    const params = useParams();

    const quote = DUMMY_DATA.find(quote => quote.id === params.quoteId);

    if(!quote){
        return <p>No quoute found!</p>
    }

    return <Fragment>
        <HighlightedQuote text={quote.text} author={quote.author} />
        <Route path={`/quotes/${params.quoteId}/comments`}>
            <Comments />
        </Route>
    </Fragment>
}

export default QuoteDetail;

// /quotes/:quoteId/comments