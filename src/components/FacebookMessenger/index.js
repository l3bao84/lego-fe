import { FacebookProvider, CustomChat } from 'react-facebook';

function FaceBookMsg() {
    return (
        <FacebookProvider appId="937785827910171" chatSupport>
            <CustomChat pageId="61559712751649" minimized="true" />
        </FacebookProvider>
    );
}

export default FaceBookMsg;
