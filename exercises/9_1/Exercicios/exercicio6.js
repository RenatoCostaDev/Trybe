const messageDelay = () => Math.floor(Math.random() * 5000);
const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// CBK p/ erro
const handleError = (errorReason) => console.log(`Error getting temperature: ${errorReason}`);

const sendMarsTemperature = (onSuccess, onError) => {// passa de parametro CBKs de sucesso/erro
    const currentTemperature = getMarsTemperature();
    const messageSuccessfullySent = Math.random() <= 0.6;// randomicamente estipula se há sucesso
    setTimeout(() => {
        if(messageSuccessfullySent) onSuccess(currentTemperature)//true => <= 0.6 sucesso!
        else onError('Robot is busy');// Error
    }, messageDelay());
  }

sendMarsTemperature(temperatureInFahrenheit, handleError);
sendMarsTemperature(greet, handleError);