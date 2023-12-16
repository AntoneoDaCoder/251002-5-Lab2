import React from 'react';
import '../App.css'
import { useTranslation } from 'react-i18next';
export default function About() {
    const { t, i18n } = useTranslation();
    return (
        <>
            <div className="aboutWrap">
                <p className="headerText">{t('team')}</p>
                <div id="about">
                    <div className="aboutImgWrap"><img className="aboutImg2" src='/Images/alina.jpg' alt="alina.jpg" /><p className="headerText">{t('alina')}</p></div>
                    <div className="aboutImgWrap"><img className="aboutImg2" src='/Images/rita.jpg' alt="rita.jpg" /><p className="headerText">{t('rita')}</p></div>
                    <div className="aboutImgWrap"><img className="aboutImg2" src='/Images/artem.jpg' alt="artem.jpg" /><p className="headerText">{t('artem')}</p></div>
                    <div className="aboutImgWrap"><img className="aboutImg1" src='/Images/lenin.jpg' alt="lenin.jpg" /><p className="headerText">{t('anton')}</p></div>
                </div>
            </div>
        </>
    );
}