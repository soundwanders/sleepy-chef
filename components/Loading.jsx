import { useState, useEffect } from 'react';

export const Loading = () => {
  const [isCracked, setIsCracked] = useState(false);

  useEffect(() => {
    const egg = document.querySelector('.egg');
    egg.addEventListener('animationend', (event) => {
      if (event.animationName === 'eggCrack') {
        setIsCracked(true);
      }
    });
  }, []);

  return (
    <div className="flex items-center justify-center w-screen">
      <div className="relative h-38 w-32 rounded-full bg-white">
        <div className="relative">
          <div className="egg">
            <div className="crack"></div>
          </div>
          {isCracked ? (
            <div className="chick">
              <div className="face">
                <div className="eye"></div>
                <div className="eye"></div>
                <div className="beak"></div>
              </div>
              <div className="body">
                <div className="wing"></div>
                <div className="wing"></div>
                <div className="tail"></div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
