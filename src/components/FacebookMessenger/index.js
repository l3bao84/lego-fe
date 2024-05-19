import { FacebookProvider, CustomChat } from 'react-facebook';
import { useEffect } from 'react';

function FaceBookMsg() {
    useEffect(() => {
        window.fbAsyncInit = function () {
            FB.init({
                xfbml: true,
                version: 'v12.0',
            });
        };

        (function (d, s, id) {
            var js,
                fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'facebook-jssdk');
    }, []);

    return (
        <FacebookProvider appId="937785827910171" chatSupport xfbml>
            <CustomChat pageId="309005125632399" minimized="true" />
        </FacebookProvider>
    );
}

export default FaceBookMsg;
