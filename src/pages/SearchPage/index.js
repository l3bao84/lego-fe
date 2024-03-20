import DefaultLayout from "~/components/Layout/DefaultLayout";
import { useEffect} from "react";
import SearchWrapper from "~/components/Searching/SearchWrapper";

function Search() {

    useEffect(() => {
        document.title = 'Search results | LEGO Shop';
    }, []);

    const contentProps = {
        SearchWrapper: <SearchWrapper></SearchWrapper>,
    }

    return (
        <div className="App">
            <DefaultLayout 
                    props={contentProps}
                >
            </DefaultLayout>
        </div>
    );
}

export default Search;
