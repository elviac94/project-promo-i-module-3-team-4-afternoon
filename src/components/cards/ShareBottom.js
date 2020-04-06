import React from 'react';
import ShareBottomBtnCard from './ShareBottomBtnCard';
import ShareBottomBtnTwitter from './ShareBottomBtnTwitter';

class ShareBottom extends React.Component {
    render() {
        return (

            <div className="share--bottom share--bottom--visible">
                <ShareBottomBtnCard />
                <div className="border--line"></div>
                <ShareBottomBtnTwitter />
            </div>
        )
    }
}

export default ShareBottom;