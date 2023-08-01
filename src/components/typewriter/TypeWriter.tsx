import TypewriterComponent from "typewriter-effect";

interface TypeWriterProps {
  text: string[];
}

const TypeWriter = ({ text }: TypeWriterProps) => {
  return (
    <TypewriterComponent
      options={{
        autoStart: true,
        loop: true,
        strings: text,
        cursor: "",
        delay: 40,
        deleteSpeed: 20
      }}
    />
  );
};

export default TypeWriter;
