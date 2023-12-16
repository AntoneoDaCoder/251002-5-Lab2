import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../App.css'
const Search = ({ shows }) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const navg = useNavigate();
    const handleSearch = () => {
        const results = shows.filter(show =>
            show.title.toString().toLowerCase().includes(searchTerm.toString().toLowerCase())
        );
        setSearchResults(results);
    };
    const { t, i18n } = useTranslation();
    return (
        <div className="seriesStyle">
            <p className="headerText">{t('search.1')}</p>
            <div className="searchInputWrap">
                <input
                    type="text"
                    placeholder={t('search.2')}
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <button className="listButton" onClick={handleSearch}>{t('search.3')}</button>
            </div>
            {searchResults.length > 0 ? (
                <div className="listStyle">
                    {searchResults.map(show => (
                        <div key={show.id} className="listElementStyle">
                            <img className="listImgStyle" onClick={() => navg("series/" + (show.id - 1))} src={show.image} alt={show.title} />
                            <p className="listSeriesCaption">{show.title}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="listStyle">
                    {shows.map(show => (
                        <div key={show.id} className="listElementStyle">
                            <img className="listImgStyle" onClick={() => navg("series/" + (show.id - 1))} src={show.image} alt={show.title} />
                            <p className="listSeriesCaption">{show.title}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
export default Search;
