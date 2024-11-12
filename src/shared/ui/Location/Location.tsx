import { Location as LocationIcon } from '@shared/assets';
import React, { useEffect, useState } from 'react';

import { City, SLocation } from './location.styles';

export const Location = () => {
  const [city, setCity] = useState('');
  const [error, setError] = useState('');

  const fetchLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(
              `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=dd29a10cbe6e4edbb76af4ebec592a39`
            );
            const data = await response.json();
            if (data.results && data.results[0]) {
              const cityName = data.results[0].components.city || data.results[0].components.town;
              setCity(cityName);
            } else {
              setError('Невозможно определить город');
            }
          } catch (err) {
            setError('Ошибка при получении данных о местоположении');
          }
        },
        (error) => {
          setError(`Не удалось получить местоположение: ${error.message}`);
        }
      );
    } else {
      setError('Геолокация не поддерживается вашим браузером');
    }
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  return (
    <SLocation>
      <LocationIcon />
      <City>{city || error || 'Определяется...'}</City>
    </SLocation>
  );
};
