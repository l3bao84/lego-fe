import styles from './MyAccountLayout.module.scss'
import classNames from 'classnames/bind';
import { useState } from 'react';
import Sidebar from './Sidebar';
import InnerContentContainer from './InnerContentContainer';

const cx = classNames.bind(styles);

function MyAccountLayout() {

    const [data, setData] = useState(null);

    const handleDataChange = (newData) => {
        setData(newData);
    }

    return (    
        <main className={cx("min-height-content")}>
            <div className={cx("max-width-container")}>
                <div className={cx("content-container")}>
                    <Sidebar onDataChange={handleDataChange}></Sidebar>
                    <InnerContentContainer data={data}></InnerContentContainer>
                </div>
            </div>      
        </main>
    )
}

export default MyAccountLayout