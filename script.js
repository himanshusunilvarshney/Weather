async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = 'cd848e8c3e0341fba12140813252908';
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('City not found');

    const data = await response.json();

    document.getElementById('location').innerText = `${data.location.name}, ${data.location.country}`;
    document.getElementById('temp').innerText = data.current.temp_c;
    document.getElementById('condition').innerText = data.current.condition.text;
    document.getElementById('humidity').innerText = data.current.humidity;
    document.getElementById('wind').innerText = data.current.wind_kph;
    document.getElementById('icon').src = `https:${data.current.condition.icon}`;
    document.getElementById('pm25').innerText = data.current.air_quality.pm2_5.toFixed(2);

    document.getElementById('weatherResult').style.display = 'block';
  } catch (error) {
    alert('Could not retrieve weather data. Please check the city name.');
    console.error(error);
  }
}
