import React from 'react';
import ShareBottomBtnCard from './ShareBottomBtnCard';
import ShareBottomBtnTwitter from './ShareBottomBtnTwitter';

const Share = (props) => {
        return (
            <div className="form__share">
                  <div className="share--bottom share--bottom--visible">
                    <ShareBottomBtnCard
                      errorMessage={props.errorMessage}
                      sendData={props.sendData}
                    />
                    <ShareBottomBtnTwitter 
                      cardContainer={props.cardContainer}
                      createdCard={props.createdCard}
                      cardURL={props.cardURL}
                    />
                  </div>
                </div>
        )
}

export default Share;