import { useRouteError } from "react-router-dom";

const ErrorComp = () => {
    const error = useRouteError()
    return (
        <>
            <h1> !kool </h1>
            <h2>Error details : {error.message || error.statusText}</h2>
        </>
    )
}

export default ErrorComp;