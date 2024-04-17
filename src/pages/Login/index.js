import LoginLayout from "~/components/LoginLayout";
import { useEffect } from "react";

function Login() {

    useEffect(() => {

        document.title = "Nidas Sign In"

    }, [])  

    return (
        <div>
            <LoginLayout/>
        </div>
    );
}

export default Login;