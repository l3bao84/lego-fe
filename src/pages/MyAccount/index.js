import DefaultLayout from "~/components/Layout/DefaultLayout";
import { useEffect } from "react";
import MyAccountLayout from "~/components/MyAccount";

function MyAccount() {

    useEffect(() => {
        document.title = 'My Account | Nidas Shop';
      }, []);

    const contentProps = {
        MyAccountLayout: <MyAccountLayout></MyAccountLayout>
    }

    return (
        <DefaultLayout 
            props={contentProps}
        >
        </DefaultLayout>
    );
}

export default MyAccount;
