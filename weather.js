const button = document.getElementById('weatherButton').addEventListener('click', function () {
    const apiKey = 'ec2659584c0033d12f2697655d7d358b';
    const city = document.getElementById('weatherInput').value.trim();

    if (!location) {
        alert('Please enter your location!');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(response => {
        if (!response.ok) {
           throw new Error('Not found location');
        }
        return response.json();
    })
    .then(data => {
        const result = document.getElementById('weatherResult');
        const weather = data.weather[0].description;
        const temperature = data.main.temp;
        const country = data.sys.country;
        const icon = data.weather[0].icon;

        result.innerHTML = `
        <h2>${city}, ${country}</h2>
        <p>Temperature: ${temperature} °C</p>
        <p>Weather: ${weather}</p>
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="icon">
        `
    })
    .catch(error => {
        document.getElementById('weatherResult').innerHTML = `<p style='color: red;>Error: ${error.message}</p>`
    })
})