import React from "react"
import Search from "./Search.js";
import { useTranslation } from 'react-i18next';
export default function SeriesList() {
  const { t, i18n } = useTranslation();
  let serials = [
    {
      id: 1,
      title: 'Симпсоны',
      image: '/Images/simpsons.png'
    },
    {
      id: 2,
      title: 'Доктор Кто',
      image: '/Images/doctor.png',
    },
    {
      id: 3,
      title: 'Главная больница',
      image: '/Images/general.jpg',
    },
    {
      id: 4,
      title: 'Улица Коронации',
      image: '/Images/street.png',
    },
    {
      id: 5,
      title: 'Закон и порядок',
      image: '/Images/law.png',
    },
  ]
  const TranslatedSeries = serials.map(serial => {
    return {
      ...serial,
      title: t('day.2.' + (serial.id - 1))
    }
  })
  return (
    <Search shows={TranslatedSeries} />
  );
}