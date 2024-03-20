import { useEffect } from "react";
import SignUpLayout from "~/components/SignUpLayout";

function SignUp() {

    useEffect(() => {

        document.title = "LEGO Sign Up"

    }, [])

    return (
        <SignUpLayout/>
    );
}

export default SignUp;