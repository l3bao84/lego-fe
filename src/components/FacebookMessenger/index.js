import { FacebookProvider, CustomChat } from 'react-facebook';

function FaceBookMsg() {
    return (
        <FacebookProvider appId="428853872884994" chatSupport>
            <CustomChat pageId="309005125632399" minimized="true" />
        </FacebookProvider>
    );
}

export default FaceBookMsg;
