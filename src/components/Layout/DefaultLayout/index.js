import Header from './Header';
import Footer from './Footer';

function DefaultLayout({ props }) {

    return (
        <div className="App">
            <Header></Header>
            {props != null && Object.entries(props).map(([key, Component]) => (
                <section key={key}>
                    {Component}
                </section>
            ))}
            <Footer></Footer>
        </div>
    );
}

export default DefaultLayout;
