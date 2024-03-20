import DefaultLayout from "~/components/Layout/DefaultLayout";
import RecommendedProducts from "~/components/RecommendedProducts";
import QuickLinks from "~/components/QuickLinks";
import TopPickSlides from "~/components/TopPickSlides";
import { useEffect } from "react";

function Home() {

    useEffect(() => {
        document.title = 'Home | LEGO Shop';
      }, []);

    const contentProps = {
        TopPickSlides: <TopPickSlides></TopPickSlides>,
        QuickLinks: <QuickLinks></QuickLinks>,
        RecommendedProducts: <RecommendedProducts></RecommendedProducts>
    }

    return (
        <DefaultLayout 
            props={contentProps}
        >
        </DefaultLayout>
    );
}

export default Home;
