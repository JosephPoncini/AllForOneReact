// https://poncinijallforoneapis.azurewebsites.net/

const SayHello = async (userName) => {
    const promise = await fetch(`https://poncinijallforoneapis.azurewebsites.net/SayHello/${userName}`);
    const response = await promise.text();
    return response;
}

const AddTwoNum = async (num1, num2) => {
    const promise = await fetch(`https://poncinijallforoneapis.azurewebsites.net/Summation/WhatIsTheSumOf/${num1}/and/${num2}`);
    const response = await promise.text();
    return response;
}

const AskQuestions = async (namex, time) => {
    const promise = await fetch(`https://poncinijallforoneapis.azurewebsites.net/WakeUpTime/WhatIsYourName/${namex}/WhenDidYouWakeUp/${time}`);
    const response = await promise.text();
    return response;
}

const GreaterOrLess = async (num1, num2) => {
    const promise = await fetch(`https://poncinijallforoneapis.azurewebsites.net/GreaterThanOrLessThan/WhichNumberIsGreater/${num1}/Or/${num2}`);
    const response = await promise.text();
    return response;
}

const MadLib = async (namex, noun, past_tense_verb, adjective, mood) => {
    const promise = await fetch(`https://poncinijallforoneapis.azurewebsites.net/MadLib/MadLibGen/${namex}/${noun}/${past_tense_verb}/${adjective}/${mood}`);
    const response = await promise.text();
    return response;
}

const MagicEight = async (question) => {
    const promise = await fetch(`https://poncinijallforoneapis.azurewebsites.net/MagicEightBall/Question/${question}`);
    const response = await promise.text();
    return response;
}

const OddOrEven = async (num) => {
    const promise = await fetch(`https://poncinijallforoneapis.azurewebsites.net/OddOrEven/InputInteger/${num}`);
    const response = await promise.text();
    return response;
}

const RestaurantPicker = async (category) => {
    const promise = await fetch(`https://poncinijallforoneapis.azurewebsites.net/RestarauntPicker/Pick_American_Mexican_Or_Asian/${category}`);
    const response = await promise.text();
    return response;
}

const ReverseItAlpha = async (numstring) => {
    const promise = await fetch(`https://poncinijallforoneapis.azurewebsites.net/ReverseItAlpha/AphaNumerical/${numstring}`);
    const response = await promise.text();
    return response;
}

const ReverseItNum = async (num) => {
    const promise = await fetch(`https://poncinijallforoneapis.azurewebsites.net/ReverseItNumeric/Numerical/${num}`);
    const response = await promise.text();
    return response;
}

export { SayHello, AddTwoNum, AskQuestions, GreaterOrLess, MadLib, MagicEight, OddOrEven, RestaurantPicker, ReverseItAlpha, ReverseItNum }