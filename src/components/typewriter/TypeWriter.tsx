import { useState, useEffect } from "react";

interface TypeWriterProps {
  text: string;
}

const TypeWriter = ({ text }: TypeWriterProps) => {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);

  //here are the constants to delay the start of erasing the characters 
  //and starting the typewrite
  const deleteCharactersDelay = index === currentText.length ? 2000 : 50;
  const initTypeWriterDelay = index === 0 ? 500 : 100;

  useEffect(() => {
    //here starts the typewrite in a constant and then we return a clearTimeout
    const currentTextId: any =
      index < text.length &&
      setTimeout(() => {
        setCurrentText((value) => value + text.charAt(index));
        setIndex((i) => i + 1);
      }, initTypeWriterDelay);

    //here checks if the condition is false and returns a true to erase the characters
    !(index < text.length) &&
      setTimeout(() => {
        setCurrentText((value) => value.substring(0, value.length - 1));
        index >= text.length && currentText.length <= 0 && setIndex(0);
      }, deleteCharactersDelay);

    return () => {
      clearTimeout(currentTextId);
    };
  }, [currentText, index]);

  return <p>{currentText}</p>;
};

export default TypeWriter;
