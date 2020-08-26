const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};
//CBK => onSuccess(currentTemperature)
//constroi a frase usando currentTemperature/toFahrenheit
const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
//constroi saudação usando currentTemperature
const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const sendMarsTemperature = (onSuccess) => {
    const currentTemperature = getMarsTemperature();
    setTimeout(() => onSuccess(currentTemperature), messageDelay());
};

sendMarsTemperature(temperatureInFahrenheit);
sendMarsTemperature(greet);