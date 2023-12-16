import React from 'react';
import { useTranslation } from 'react-i18next';
export default function MainPart() {
    const scrollToAbout = () => {
        window.scrollTo({
            top: document.getElementById('about').offsetTop,
            behavior: 'smooth',
        });
    };
    const {t, i18n } = useTranslation();
    return (
        <>
            <div className="mainWrapStyle">
                <img src='/Images/main.png' className="mainImgStyle" alt="img" />
                <div className="mainSeriesWrap">
                    <p className="mainHeader">{t('main.1')}</p>
                    <p className="mainColumn">{t('main.2')}</p>
                    <div className="mainButtonWrap"><button className="mainButton" onClick={scrollToAbout}>{t('main.3')}</button></div>
                </div>
            </div>
        </>
    );
}