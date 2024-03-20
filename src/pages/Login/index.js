import LoginLayout from "~/components/LoginLayout";
import { useEffect } from "react";

function Login() {

    useEffect(() => {

        document.title = "LEGO Sign In"

    }, [])  

    return (
        <div>
            <LoginLayout/>
        </div>
    );
}

export default Login;