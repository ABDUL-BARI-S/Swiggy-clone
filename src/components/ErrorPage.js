import { useRouteError } from "react-router-dom";


export const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="error-page" style={{padding: "200px", fontSize:"20px"}}>
            <h1>Oops!</h1>
            <pre>Sorry, an error occurred 🤬</pre>
           <p>{(error.status)} - {error.statusText}</p>
        </div>
    )
}
