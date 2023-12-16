import React from 'react'
import SeriesContainer from '../Components/SeriesContainer';
import { useTranslation } from 'react-i18next';
export default function DaySeries() {
    const {t, i18n } = useTranslation();
    return (
        <>
            <div id="daySerial">
                <p className="headerText">{t('day.1')}</p>
                <SeriesContainer />
            </div>
        </>
    );
}