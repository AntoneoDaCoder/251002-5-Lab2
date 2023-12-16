import { useNavigate } from 'react-router-dom';
import "../App.css"
import { useTranslation } from 'react-i18next';
export default function SeriesContainer() {
  const navg = useNavigate();
  const { t, i18n } = useTranslation();
  let currentSerialIndex = 0;
  let serials = [
    {
      id: 1,
      title: 'Симпсоны',
      age: 1989,
      image: './Images/simpsons.png',
    },
    {
      id: 2,
      title: 'Доктор Кто',
      age: 1963,
      image: './Images/doctor.png',
    },
    {
      id: 3,
      title: 'Главная больница',
      age: 1963,
      image: './Images/general.jpg',
    },
    {
      id: 4,
      title: 'Улица Коронации',
      age: 1960,
      image: './Images/street.png',
    },
    {
      id: 5,
      title: 'Закон и порядок',
      age: 1990,
      image: './Images/law.png',
    },
  ];

  const initIndex = () => {
    let today = new Date().getDay();
    if (today >= serials.length - 1) {
      return 0;
    }
    return today - 1;
  }
  currentSerialIndex = initIndex();
  let currentSerial = serials[currentSerialIndex];
  let image = currentSerial.image;
  let age = currentSerial.age;
  return (
    <>
      <img className="containerSerialImage" src={image} alt="img" />
      <p className="containerTitle">{t('day.2.' + currentSerialIndex)}</p>
      <p className="containerYear">{age}</p>
      <p className="containerDescription">{t('day.3.' + currentSerialIndex)}</p>
      <button className="containerButton" onClick={() => navg("/series/" + currentSerialIndex)}>{t('day.4')}</button>
    </>
  );

}