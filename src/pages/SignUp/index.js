import { useEffect } from "react";
import SignUpLayout from "~/components/SignUpLayout";

function SignUp() {

    useEffect(() => {

        document.title = "Nidas Sign Up"

    }, [])

    return (
        <SignUpLayout/>
    );
}

export default SignUp;