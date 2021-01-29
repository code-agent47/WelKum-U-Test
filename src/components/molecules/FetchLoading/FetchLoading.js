import React from 'react';
import FetchLoadingStyle from './FetchLoadingStyle';

const FetchLoading = () => {
    return(
        <FetchLoadingStyle>
            <div className={`container-full fetch__progress`}>
                <div className={`fetch__progress__bar`}>
                </div>
            </div>
        </FetchLoadingStyle>
    )
}

export default FetchLoading;