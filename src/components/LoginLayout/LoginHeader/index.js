import styles from './LoginHeader.module.scss'
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';


const cx = classNames.bind(styles);

function LoginHeader() {

    const navigate = useNavigate();
    

    return (
        <div>
            
            <div className={cx('application-header')}>
                <div className={cx('application-header-content')}>
                    <div className={cx('application-header-start')}></div>
                    <div className={cx('application-header-center')}>
                        <button onClick={() => navigate('/')} className={cx('button-base')}>
                            <span className={cx('button-text-base')}>
                                <img
                                    src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTgwIDE4MCIgZmlsbD0iY3VycmVudENvbG9yIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGQ9Ik0xLjIyMyAxLjIwNFYxNzguOEgxNzguODJsLS4wMDEtMTc3LjU5NkgxLjIyM1oiIGZpbGw9IiNmZmYiLz4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEuMjIzIDE3OC44VjEuMjA0aDE3Ny41OTVsLjAwMSAxNzcuNTk2SDEuMjIzWm0xNjIuMTcxLTg2Ljc0M2MxLjU1NS00LjYwNiAzLjMxNi0xMS41IDMuNjA2LTE3LjAzMy4yMjEtNC4xNzQtLjM0MS0xMC4wMi00LjI3OC0xNC4xNzQtMy4xNDEtMy4zMTktNy45NC00Ljk5NC0xNC4yNjQtNC45OTQtNy45ODkgMC0xNC40MjYgMi44Mi0xOS4xMzYgOC4zOTdsLTEuMjQzIDEuNDY2LS44MjYtMS43MzRjLS42NzQtMS40MTMtMS4xNTYtMS45OTItMS44OS0yLjgyLTMuMjE5LTMuNjQyLTguNjE3LTUuNDg4LTE2LjA0NC01LjQ4Ny02LjgwNCAwLTEyLjk1IDIuMDM5LTE3LjMwOCA1Ljc0MmwtMS4xMDMuOTM3LS43Ni0xLjIzN2MtMi4wNTgtMy4zNDUtNy4xODgtNS41MS0xMy4wNjUtNS41MS04LjQ1Ni4wMDItMTYuOTg4IDEuMTUtMjIuMTM1IDkuNDQ3bC0yLjEzMyAzLjQyNC0uMTY3LTQuMDMzYy0uMTMtMy4xMi0uNDE1LTQuNDE2LTEuODY2LTUuOTUyLTEuNTk2LTEuNjkzLTQuMjgyLTIuNTE2LTguMjEtMi41MTMtNS43NjggMC0xMC4xMDMgMi41MTUtMTMuMjU2IDcuNjk0LTQuODUzIDcuNzUyLTE2LjU4MyAzMy4yNS0xNi4zMjQgNDUuMzY5LjE3IDcuODY1IDUuNDE4IDEyLjY3OSAxNC4wNDMgMTIuODc4IDcuMTA4LjE3MiAxMi43NTgtMS42NTIgMTYuMzQ3LTUuMjc0bC45MTYtLjkyNi44OC45NTJjMy4yMjYgMy41MDIgOC4xMyA1LjQzMiAxMy44MTEgNS40MzIgNy4yMzQgMCAxMy40Mi0yLjI0OCAxNi45NzMtNi4xNzFsLjk3LTEuMDY5LjkxMiAxLjEyMWMzLjMyNiA0LjA4NiA4LjQ2NiA2LjIyOCAxNC44NjMgNi4yMDIgOC4zNDMtLjAzNyAxNi4xMzUtMy44NzEgMjEuMzc2LTEwLjUxMmwxLjM3NC0xLjc0MS43NjcgMi4wODNjMy4yMyA4Ljc4MyAxMS45ODQgMTAuMDkyIDE2LjkyMSAxMC4wOTUgMTYuNzY1IDAgMjQuMDA1LTExLjUwMyAzMC4yNDktMzAuMDU5WiIgZmlsbD0iI0ZGRUQwMCIvPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMS4yMjMgMTc4LjhWMS4yMDRoMTc3LjU5NWwuMDAxIDE3Ny41OTZIMS4yMjNabTE2My4yODMtNzMuNzQyYzIuMzIxLTQuNzg0IDYuNjg4LTE2Ljc1NyA3LjQ5NS0yMy4yMjJsLjAwOS0uMDcxYy45ODQtNy44OTIgMS45MTUtMTUuMzYtMy40MS0yMi43ODEtMy43ODYtNS4yNzQtMTAuMjM3LTguODEzLTIwLjA1Mi04LjgxNC03LjQxOSAwLTE0LjA0NSAyLjAxLTE5LjM0MyA2LjQxNi00LjUzNy00LjQ5LTExLjA0NC02LjUyOC0xOS44MDItNi41MjYtNi44NTMgMC0xMi42MDUgMS41NjctMTcuNjE0IDQuNTc0LTMuNjM2LTIuODg5LTcuOTA0LTQuNjk0LTE0LjcwNC00LjY5NC02LjE2NC0uMDAxLTE0LjgxOC4zMi0yMS4zNDcgNS44NjMtMS41MDktMy4wNzktNC41NzctNS40OTctMTMuMDQtNS40OTctNy43OTYgMC0xNC4xNTYgMy42ODgtMTguMzI3IDEwLjUzNS01LjU2OSA4Ljg5NS0xNy4zOSAzNC41ODItMTcuMDg4IDQ4LjYxNC4yMjUgMTAuNTYzIDguMTQ2IDE3Ljg0IDE5LjYyIDE4LjExMyA2Ljg5NS4xNjEgMTIuNzY3LTEuMzE1IDE3LjI0OC00LjI4OSA0LjA1MiAyLjkyIDkuMjMgNC40OTcgMTQuOTg0IDQuNDk3IDYuODg2LjAwMSAxMy4wOTgtMS44MDcgMTcuNzA0LTUuMDUzIDQuMTczIDMuMzA4IDkuNjQ4IDUuMDk2IDE1Ljg0MiA1LjA5NiA4LjAzNi4wMDMgMTUuNTAzLTIuNzcyIDIxLjUzNS04LjA1MSA0LjExNCA1LjI0NiAxMS4xNjIgNy45NzMgMTkuNzIxIDcuOTc0IDE2LjAyMy4wMDEgMjQuMzQ2LTkuODU0IDMwLjU2OS0yMi42ODRaIiBmaWxsPSIjRTMwMDBCIi8+CiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDE4MFYwaDE4MGwtLjAwMyAxNzkuOTk3TDAgMTgwWm0xNzcuNTItMi40NzkuMDAyLTE3NS4wNDNIMi40NzZMMi40OCAxNzcuNTJoMTc1LjA0WiIvPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTY3LjYxNSA1NC4zMDFhNC4zMDUgNC4zMDUgMCAwIDEgNC4zMDktNC4zMTMgNC4zMDcgNC4zMDcgMCAwIDEgNC4zMTUgNC4zMTMgNC4zMDQgNC4zMDQgMCAwIDEtNC4zMTUgNC4zMTIgNC4zMDIgNC4zMDIgMCAwIDEtNC4zMDktNC4zMTJabTQuMzExLTMuNDU3YzEuOTE4LjAwMSAzLjQ3NyAxLjU0NSAzLjQ3MiAzLjQ2My4wMDUgMS45MTgtMS41NiAzLjQ2Ny0zLjQ3MiAzLjQ2N2EzLjQ1OCAzLjQ1OCAwIDAgMS0zLjQ1My0zLjQ2NyAzLjQ0OCAzLjQ0OCAwIDAgMSAzLjQ1My0zLjQ2M1ptMS42NzkgNC44MS41MTUuOS0xLjExNy4wMDctLjM1Ny0uNzNhMy42NDMgMy42NDMgMCAwIDAtLjYwOS0uODc0Yy0uMTc2LS4xODMtLjMzNy0uMjI5LS43MzQtLjIyOWwtLjE2NC4wMDEtLjAwMiAxLjgzaC0uOTIxdi00LjQ2N2gyLjIyNWMuOTU5IDAgMS40MDkuNTM1IDEuNDA5IDEuMjQzLjAwMi42NzUtLjQ1NCAxLjE2LTEuMjA4IDEuMjVsLjAwMi4wMjVjLjM4My4xMzMuNTEuMjU4Ljk2MSAxLjA0NFptLTIuNDY5LTIuODY4djEuMjI3aC45MzNjLjYyNCAwIC44My0uMzA0LjgyMS0uNjIgMC0uMzk0LS4zMTMtLjYxLS45MjEtLjYxbC0uODMzLjAwM1ptLTQyLjc3IDEwLjY2NGM0LjM0OC01LjE1IDEwLjc4Mi04LjgzOSAyMC4wODYtOC44MzkgMTYuMTA1IDAgMjAuMzE4IDEwLjUzIDE5Ljc5IDIwLjQ4LS4zMTMgNS45OC0yLjIzMiAxMy4xMDQtMy42NjYgMTcuMzY1LTYuMzcgMTguOTMxLTE0LjAyIDMwLjkwMi0zMS40MyAzMC45LTcuOTQ1LjAwMi0xNS4yMTYtMy4wOTgtMTguMDgxLTEwLjkwOC01LjIzMyA2LjYyMi0xMy4yMzEgMTAuOTQ0LTIyLjM1IDEwLjk4OS02Ljk3LjAzNC0xMi4zOS0yLjQyOS0xNS44MzUtNi42Ni00LjA5IDQuNTE0LTExLjAxMSA2LjU4MS0xNy44OSA2LjU4My02LjE4LS4wMDQtMTEuMzQtMi4xNTctMTQuNzI3LTUuODM1LTMuNzc0IDMuODA2LTkuNzA0IDUuODI2LTE3LjI1NyA1LjY0OS05LjY3NS0uMjMyLTE1LjA4LTYuMDM3LTE1LjI1OC0xNC4wOTUtLjI2Ni0xMi40NzQgMTEuNjE0LTM4LjIyNiAxNi41MTEtNDYuMDQ1IDMuMzgtNS41NDcgOC4wNzUtOC4yNyAxNC4zMS04LjI3MyAzLjQyMy4wMDMgNi45MzguNTk4IDkuMTExIDIuOSAxLjc4NyAxLjg5IDIuMDc0IDMuNTcgMi4yMDYgNi43NSA1LjQ4LTguODMgMTQuNzE2LTEwLjAzIDIzLjE5LTEwLjAyOCA2LjQ4NCAwIDExLjg2NiAyLjQyNyAxNC4xMjQgNi4wOTYgNC4zNDYtMy42OTQgMTAuNjA1LTYuMDM4IDE4LjExMy02LjAzOCA3LjY4NS4wMDEgMTMuNDEgMS44NzYgMTYuOTc0IDUuOTA4Ljc4Ni44ODUgMS4zNDUgMS41NjIgMi4wNzkgMy4xMDJaTTQzLjU5IDEwNi45MTVjLjI4Ni0zLjAxNi0xLjk3My02LjI3My0xMC45ODYtNC43MDkuODk1LTIuMDA1IDIuMjI2LTQuNzUzIDMuNzM3LTcuODczdi0uMDAxQzQxLjE4MyA4NC4zMzQgNDcuODc0IDcwLjUxOSA0OCA2NS4xMTRjLjA2OC0yLjY2NS0xLjAwNi00Ljg4Ny01LjMyOC00Ljg4NS00LjU2Ni0uMDAyLTcuNDMgMS45MDgtOS43NzYgNS43NjItNS4wODggOC4xMjUtMTUuODkzIDMyLjYzNS0xNS42NjYgNDMuMjI5LjEyOCA2LjA1NiA0LjgyMyA4LjQ0NiAxMC4wNCA4LjU2OCA3LjE5LjE2NyAxNS40NzItMS44NTIgMTYuMzIxLTEwLjg3NFptMTguMzUtMTMuMDNjLS42IDEuNjE0LTEuNzI4IDQuOTk0LTIuNjM5IDguNTcxIDIuOTU4LS43MzggNS4xNzMtMS4yNDkgOC45Ny0xLjE2MSA0LjMyOS4xMDYgNy4wOTkgMS44OTggNy4wOTcgNS40OCAwIDguNjc0LTkuNTkzIDExLjIyMi0xNi4yNCAxMS4yMjQtNy4zMDYgMC0xMy43MjQtNC4xNTUtMTMuNzI0LTEyLjE0NCAwLTkuMzY2IDUuMDc2LTIzLjU2OCA5Ljg0LTMzLjAyMyA1Ljg0OC0xMS42MTYgMTEuODI3LTEzLjE1OSAyMi4xMi0xMy4xNTkgNC41MjYgMCA5LjczNiAxLjkzMiA5LjczNiA2LjIwNCAwIDUuOTIyLTUuMDA4IDguMTgtOS45ODMgOC40NjYtMi4xMjcuMTIyLTUuMzk0LjIzOS03LjM0OC4wOTkgMCAwLTEuNjYxIDIuNTI1LTMuNDE2IDcuMDE1IDkuMjA4LTEuMjk2IDEzLjExNi43OTUgMTEuNTYyIDYuMTItMi4xMDQgNy4xOTktOC4zNDIgNy42NzQtMTUuOTc2IDYuMzA3Wm0zOS45NjQtMTkuMTE0YzEuMjE1LTEuNzAzIDIuODQtMy4yOCA1LjMzMy0zLjI4IDMuMDU1IDAgMi43NTkgMS42MTYgMi4wMzQgMy42ODEtMi4wNTkgNS44OCA0LjE1OSA2LjAzNSA1LjY3NyA1LjkxNSA1LjQyOC0uNDIzIDguNDE5LTMuOTMgOS4xNTUtOS45MDQgMS4wMDgtOC4xMzQtNS44NDUtMTEuMjU3LTE0LjUzMi0xMS4yNTctMTQuNDggMC0yMC4xNjQgOC44NTYtMjUuNTg2IDIxLjUxNi0yLjU0NyA1Ljk0Ny01Ljc1NSAxNi4xMS01Ljc1NCAyMi41ODItLjAwMSA5LjA5IDUuNTMgMTQuMDE5IDE0LjQ0NCAxNC4wMTkgMTMuMDE3IDAgMjIuMjE1LTEwLjM4IDI0Ljg0My0yMy4zMTMuODA5LTMuOTggMS44MDYtMTEuNDQ5LTguMzA0LTExLjAzMy01LjEzMi4yMTItOC4yMjggMS4zNDQtOS44NiA2LjU4OC0xLjY4IDUuNDAyIDQuNDEzIDUuNTQ5IDQuNDEzIDUuNTQ5LTEuMjI2IDUuNTg1LTQuODE1IDguOTcxLTguMDEzIDguOTc0LTEuOTk2IDAtMy44MTItLjg2Ni0zLjIwNC01LjA5LjkwMy02LjE3NiA2LjY4Ny0yMS4xOTggOS4zNTQtMjQuOTQ3Wm02MC4wMTcgNy40MDdjLTEuNTM2IDcuNjItNC45NzYgMTYuNjQtOC43MTQgMjMuMzYxLTYuMSAxMC45NjQtMTMuNDk5IDEyLjUtMTkuOTY4IDEyLjQxOC02LjQ2NS0uMDc3LTEzLjc1NC0yLjQ2MS0xMy44MDktMTIuNDM5LS4wMzktNy4xNiAzLjA0OC0xNy4yNzIgNS42NzEtMjMuODkzIDQuNTc1LTEyLjAxIDkuMjQxLTIxLjgwNSAyNC4wMS0yMS42MyAxNy4yMTguMjAxIDE0LjE0NyAxNS41MTYgMTIuODEgMjIuMTgzWm0tMjEuNTk4IDE5LjUzN2MyLjM5NC00LjA1NSA5LjEzMy0yMi40NDggOS4zMTctMjcuMDQ3LjA1NC0xLjM0LS4xNjctMi45LTIuMzI3LTIuOTI1LTEuNDgxLS4wMjEtMi43NjkuMjY2LTMuOTI3IDIuMDU1LTIuNjAyIDMuMzgyLTEwLjIxOSAyNC4xODUtMTAuMDkgMjguMzM1LjA0NyAxLjQ5Mi44OCAyLjc5NSAyLjcxMiAyLjc5NSAyLjExLjAwMiAzLjI3OS0xLjQ1IDQuMzE1LTMuMjEzWiIvPgo8L3N2Zz4="
                                    alt=""
                                />
                            </span>
                        </button>
                    </div>
                    <div className={cx('application-header-end')}>
                        <button className={cx('button-base')} onClick={() => navigate('/')}>
                            {/* back-to-home */}
                            <span className={cx('button-text-base')}>
                                <span className={cx('icon')}>
                                    <svg
                                        width="32"
                                        height="32"
                                        viewBox="0 0 32 32"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <line
                                            x1="6.40039"
                                            y1="25.9068"
                                            x2="26.9065"
                                            y2="5.40066"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="6.32152"
                                            y1="5.62769"
                                            x2="26.8276"
                                            y2="26.1338"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                        ></line>
                                    </svg>
                                </span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginHeader