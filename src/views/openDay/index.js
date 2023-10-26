import React, { useState, useEffect } from 'react';

import axios from 'axios';
import './index.css';
import { styled } from '@mui/material/styles';
import beehiveData from './beehiveData';
import Beehive from './Beehive';
import { Link } from 'react-router-dom';

const PreviewIframe = styled('iframe')(() => ({
    border: 'none',
    height: '100vh',
    width: '100%',
    margin: '0'
}));


const OpenDay = () => {
    const [playModeFlag, setPlayModeFlag] = useState(false);
    const [currentPlayUrl, setCurrentplayUrl] = useState('');
    
    useEffect(()=>{
        console.log(playModeFlag, currentPlayUrl)
    },[playModeFlag, currentPlayUrl])

    window.addEventListener('message', function(event) {
        setPlayModeFlag(false);
        console.log('Received message from iframe:', event.data);
        // Check the origin of the message to ensure it's from the expected domain
        // if (event.origin === 'https://play.grwth.hk') {
        //   // Log the received message
        //   console.log('Received message from iframe:', event.data);

        //   window.location.href = 'https://grwthx.grwth.hk/calfss/openday';
        //   // Do something with the received message
        //   // ...
        // }
        // if (event.data.channel === 'play.grwth.hk') {
        //   // Log the received message
        //   console.log('Received message from iframe:', event.data);

        //   window.location.href = 'https://grwthx.grwth.hk/calfss/openday';
        //   // Do something with the received message
        //   // ...
        // }
    });
    const handleClickBigroom = (url) =>{
        setCurrentplayUrl(url);
        setPlayModeFlag(true);
        console.log("new big room");
        //https://play.grwth.hk/play/?roomId=n5lAJDJJQ1RXrycvL3bjT9t2ab2MKU&userId=27cb7a613d99e87f4ce6922ad4dc7a52&assignmentId=undefined
    }
    return (
        <>
        {
            playModeFlag?
            (
                <PreviewIframe src={currentPlayUrl} same-origin-allow />
            )
            :(
                <div className="hero-image">
                    <div className="hero-text">
                        <div className='hero-content'>
                            <span onClick={(e) => handleClickBigroom("https://play.grwth.hk/play/?roomId=n5lAJDJJQ1RXrycvL3bjT9t2ab2MKU&userId=27cb7a613d99e87f4ce6922ad4dc7a52&assignmentId=undefined")}><img src="../images/big1.png" className="big_room" /></span>
                            <div className='hero-beehives'>
                                {
                                    beehiveData.map((beehive, key)=>
                                        <Beehive key = {key} imgUrl = {beehive.imgUrl} playUrl = {beehive.playUrl} setPlayModeFlag = {setPlayModeFlag} setCurrentplayUrl = {setCurrentplayUrl} />
                                    )
                                }
                            </div>
                            <span onClick={(e) => handleClickBigroom("https://play.grwth.hk/play/?roomId=U5XFVECxPhNn509auVoVAWHm6Dzmko&userId=27cb7a613d99e87f998183af8de6c415&assignmentId=undefined")}><img src="../images/big2.png" className="big_room" /></span>
                        </div>

                        <p> 四十周年校慶「愛禮信羊羊造型設計計劃」</p>
                        <p>
                        聖經常把耶穌比喻為牧羊人，而我們是祂深愛的羊。神又給予每個人有不同的特質及能力，可以榮耀祂。我們希望通過是項計劃，讓學生一起探索、發現及發揮自己的潛質，在主裏共同成長。是次計劃包括學生和教師的創作，也有小學創作比賽，合共有450隻羊羊製成品。
                        </p>
                        <p>
                        是次展覽以元宇宙形式進行，一共展出兩隻大羊及49隻小羊，學生的創作內容圍繞著不同的主題，包括追求夢想、追求進步、關愛他人、真情流露、感恩善良、愛護大自然等。當你欣賞作品時，不妨閱讀每隻小羊的簡介，以了解每位學生背後的構思及其獨特性。
                        </p>
                    </div>
                    <div className='hero-footer'>
                        <img src="../images/mark.png" />
                        <img src="../images/school.png" />
                    </div>
                </div>
            )
        }
        </>
    )
}


export default OpenDay;