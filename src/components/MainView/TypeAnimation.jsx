import { TypeAnimation } from 'react-type-animation';

export const ExampleComponent = () => {
  return (
        <div >

            <TypeAnimation
                sequence={[
                    'Software Developer...', // Types 'One'
                    1000, // Waits 1s
                    'Computer Science Student...', // Deletes 'One' and types 'Two'
                    2000, // Waits 2s
                    'Computer Science TA & Tutor...', // Types 'Three' without deleting 'Two'
                    2000,
                    '   I do Fullstack...',
                    2000,
                    '   I do Backend...',
                    2000,
                    '   I do Embedded...',
                    3000,
                    'I am open to opportunities.',
                    4000,

                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                
            />
        </div>
      );

};