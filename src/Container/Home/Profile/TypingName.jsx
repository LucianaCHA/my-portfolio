import React from 'react';
import ReactTypingEffect from 'react-typing-effect';


export const TypingName = () => {
  return (
    <>
      <ReactTypingEffect
      
        text={['Curious Dev 💙','Full Stack 💻', 'PERN Stack','React Dev' ]}
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h1>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span                     
                    key={key}
                    style={i%2 === 0 ? { color: 'violet'} : {}}
                  >{char}</span>
                );
              })}
            </h1>
          );
        }}        
      />
    </>
  );
};

