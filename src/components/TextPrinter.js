import React, { useState, useEffect } from 'react';

function TextPrinter(props) {
  const [sentences, setSentences] = useState([]);
  const [randomIndex, setRandomIndex] = useState(-1);
  const [currentSentence, setCurrentSentence] = useState('');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const file = require(`../json/${props.jsonFileName}.json`);
    setSentences(file);
  }, [props.jsonFileName]);

  useEffect(() => {
    if (sentences.length > 0) {
      let randomIndexLocal = randomIndex;
      if (randomIndexLocal == -1) 
      {
        randomIndexLocal = Math.floor(Math.random() * sentences.length);
        setRandomIndex(randomIndexLocal);
      }
      let intervalDelay = props.delay;
      if(counter === sentences[randomIndexLocal].length) intervalDelay = props.sentenceDelay;

      const intervalId = setInterval(() => {
        if (counter < sentences[randomIndexLocal].length) {
            setCurrentSentence(sentences[randomIndexLocal].substring(0, counter + 1));
            setCounter(counter + 1);
          } else {
            setCurrentSentence('');
            setCounter(0);
            if (counter === sentences[randomIndexLocal].length) {
                setRandomIndex(Math.floor(Math.random() * sentences.length));
            }
          }
      }, intervalDelay);
      return () => clearInterval(intervalId);
    }
  }, [sentences, props.delay, counter, randomIndex]);

  return (
    <pre style={{ whiteSpace: 'pre-wrap', margin:'0px' }}> {currentSentence}</pre>
  );
}

export default TextPrinter;