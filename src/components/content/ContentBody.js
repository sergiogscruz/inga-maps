import { useLocation } from 'react-router-dom'

function ContentBody () {
    const location = useLocation();

    return <h2>{location.pathname}</h2>;
}

export default ContentBody;