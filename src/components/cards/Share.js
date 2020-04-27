import React from 'react';
import ShareBottomBtnCard from './ShareBottomBtnCard';
import ShareBottomBtnTwitter from './ShareBottomBtnTwitter';

const Share = (props) => {
  const {errorMessage, sendData, cardContainer, createdCard, cardURL} = props;
        return (
            <div className="form__share">
                  <div className="share--bottom share--bottom--visible">
                    <ShareBottomBtnCard
                      errorMessage={errorMessage}
                      sendData={sendData}
                    />
                    <ShareBottomBtnTwitter 
                      cardContainer={cardContainer}
                      createdCard={createdCard}
                      cardURL={cardURL}
                    />
                  </div>
                </div>
        )
}

export default Share;