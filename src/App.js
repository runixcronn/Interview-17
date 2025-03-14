import React, { useState } from "react";

/*

İki prop alabilen bir fonksiyonel bileşen yazın: biri 4 haneli bir kombinasyonu, diğeri ise bir React bileşenini içermelidir.
Bileşen, kullanıcının 4 haneli kombinasyonu girmesine izin veren ve girilen kombinasyonu klavyenin üstünde görüntüleyen bir tuş takımını göstermelidir.
Kombinasyon doğru girilirse, bileşene prop olarak verilen bileşeni görüntülemeli (ve tuş takımını kaldırmalıdır).
Bileşenin başlangıç durumu public'teki interview17.png şekildedir.

Kullanıcı dört sayısna tıkladıktan sonra, eğer girilen kombinasyon birinci prop olarak iletilen kombinasyon eşleşmiyorsa,
publicteki gibi bir uyarı verin ve tuş takımını sıfırlayın. interview17-1.png

*/
const CombinationLock = ({ combination, NextScreen }) => {
  const [input, setInput] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  const handleButtonClick = (num) => {
    if (input.length < 4) {
      setInput(input + num);
    }
    if (input.length === 3) {
      setTimeout(() => {
        if (input + num === combination.join("")) {
          setUnlocked(true);
        } else {
          alert("Yanlış kombinasyon");
          setInput("");
        }
      }, 100);
    }
  };

  return (
    <div className="flex flex-col items-center mx-auto mt-10 bg-amber-100 w-96 p-4 rounded-lg border-2 border-amber-600">
      {!unlocked ? (
        <div>
          <div className="text-3xl font-bold  p-4 text-center bg-amber-400 rounded-lg mb-2 border border-amber-600">
            {input || ""}
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
              <button
                key={num}
                onClick={() => handleButtonClick(num)}
                className=" p-4 text-xl bg-amber-400 hover:bg-amber-600 hover:transition-colors border border-amber-600 rounded-lg w-16 h-16"
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <NextScreen />
      )}
    </div>
  );
};

const App = () => {
  const unlockedScreen = () => (
    <div style={{ textAlign: "center" }}>Login oldunuz.</div>
  );

  return (
    <CombinationLock combination={[1, 2, 3, 4]} NextScreen={unlockedScreen} />
  );
};

export default App;
