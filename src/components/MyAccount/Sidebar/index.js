import styles from '../MyAccountLayout.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LatestOrder from '../LatestOrder';
import AccountOverview from '../AccountOverview';
import MyAddresses from '../MyAddresses';

const cx = classNames.bind(styles);

const menuItems = [
    {
        id: 'overview',
        root: "Home",
        label: 'Account Overview',
        title: "My Account",
        content: [<AccountOverview/>, <LatestOrder/>],
        iconUrl: 'https://assets.lego.com/icons/legacy/v0.27.0/home-o.svg',
    },
    { 
        id: 'orders', 
        root: "Account Overview",
        label: 'My Orders', 
        title: "My Orders",
        content: [<LatestOrder/>],
        iconUrl: 'https://assets.lego.com/icons/v5.2.0/truck.svg' },
    {
        id: 'addresses',
        root: "Account Overview",
        label: 'Personal & Address Details',
        title: "My Addresses",
        content: [<MyAddresses/>],
        iconUrl: 'https://assets.lego.com/icons/v5.2.0/address-card.svg',
    },
    {
        id: 'logout',
        label: 'Logout',
        iconUrl: 'https://assets.lego.com/icons/v5.2.0/arrow-right-to-bracket-solid.svg',
    },
];

function Sidebar({ onDataChange }) {

    const [selected, setSelected] = useState(menuItems[0]);
    const navigate = useNavigate()

    const handleClick = (item) => {
        if(item.id === 'logout') {
            localStorage.clear()
            navigate("/")
        }else {
            setSelected(item);
            onDataChange(
                {
                    root: item.root,
                    current: item.label,
                    title: item.title,
                    content: item.content
                }
            )
        }
    }

    return (
        <aside className={cx('side_bar')}>
            <nav>
                <ul>
                    {menuItems.map((item) => (
                        <li
                            key={item.id}
                            className={cx('menu_item')}
                            onClick={() => handleClick(item)}
                        >
                            <a 
                                className={cx('side_bar-link')}
                                style={{backgroundColor: selected.id === item.id ? '#005ad2' : '#fff',
                                        color: selected.id === item.id ? '#fff' : '#141414'}}
                            >
                                <div
                                    style={{
                                        mask: `url(${item.iconUrl}) no-repeat`,
                                        backgroundColor: selected.id === item.id ? '#fff' : '#141414'
                                    }}
                                    className={cx('icon_wrapper')}
                                ></div>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;
