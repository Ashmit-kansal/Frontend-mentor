import { useState, useEffect } from "react";

import logo from "./assets/images/logo.svg";
import dollar from "./assets/images/icon-dollar.svg";
import person from "./assets/images/icon-person.svg";

function App() {
  const [bill, setBill] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [numberOfPeopleTouched, setNumberOfPeopleTouched] = useState(false);

  // Calculate tip amount and total amount per person
  const calculateAmounts = () => {
    if (bill > 0 && numberOfPeople > 0) {
      const tipAmountPerPerson =
        (bill * (tipPercentage / 100)) / numberOfPeople;
      const totalAmountPerPerson =
        (bill + bill * (tipPercentage / 100)) / numberOfPeople;

      setTipAmount(tipAmountPerPerson);
      setTotalAmount(totalAmountPerPerson);
    } else {
      setTipAmount(0);
      setTotalAmount(0);
    }
  };

  // Effect to calculate amounts whenever bill, tipPercentage, or numberOfPeople changes
  useEffect(() => {
    calculateAmounts();
  }, [bill, tipPercentage, numberOfPeople]);

  return (
    <>
      <main>
        {/* container */}
        <div className="h-screen bg-grey-200 flex flex-col items-center gap-10">
          {/* logo */}
          <div className="mt-10 lg:mt-20">
            <img src={logo} alt="logo-splitter" />
          </div>
          {/* calculator container */}
          <div className="bg-white w-full rounded-2xl p-6 md:max-w-xl md:px-14 md:py-8 lg:grid lg:max-w-4xl lg:grid-cols-2 lg:gap-8">
            {/* calculator */}
            <div>
              <p className="text-preset5 text-grey-500 my-2">Bill</p>
              {/* Bill amount */}
              <div className="relative bg-grey-50 rounded-lg">
                <img
                  className="absolute left-3 top-1/2 -translate-y-1/2"
                  src={dollar}
                  alt="dollar"
                />
                <input
                  className="text-preset3 text-green-900 text-right p-2 pr-4 w-full focus:outline-green-400 hover:cursor-pointer"
                  type="number"
                  placeholder="0"
                  min="1"
                  step="0.01"
                  onChange={(e) => setBill(parseFloat(e.target.value))}
                  value={bill > 0 ? bill : ""}
                />
              </div>
              <p className="text-preset5 text-grey-500 mt-8 mb-2">
                Select Tip %
              </p>
              {/* Tip percentage grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                <button
                  className={`rounded-lg p-1 text-preset3 hover:cursor-pointer hover:bg-green-200 hover:text-green-900 ${tipPercentage === 5 ? 'bg-green-400 text-green-900' : 'bg-green-900 text-white'}`}
                  onClick={() => setTipPercentage(5)}
                >
                  5%
                </button>
                <button
                  className={`rounded-lg p-1 text-preset3 hover:cursor-pointer hover:bg-green-200 hover:text-green-900 ${tipPercentage === 10 ? 'bg-green-400 text-green-900' : 'bg-green-900 text-white'}`}
                  onClick={() => setTipPercentage(10)}
                >
                  10%
                </button>
                <button
                  className={`rounded-lg p-1 text-preset3 hover:cursor-pointer hover:bg-green-200 hover:text-green-900 ${tipPercentage === 15 ? 'bg-green-400 text-green-900' : 'bg-green-900 text-white'}`}
                  onClick={() => setTipPercentage(15)}
                >
                  15%
                </button>
                <button
                  className={`rounded-lg p-1 text-preset3 hover:cursor-pointer hover:bg-green-200 hover:text-green-900 ${tipPercentage === 25 ? 'bg-green-400 text-green-900' : 'bg-green-900 text-white'}`}
                  onClick={() => setTipPercentage(25)}
                >
                  25%
                </button>
                <button
                  className={`rounded-lg p-1 text-preset3 hover:cursor-pointer hover:bg-green-200 hover:text-green-900 ${tipPercentage === 50 ? 'bg-green-400 text-green-900' : 'bg-green-900 text-white'}`}
                  onClick={() => setTipPercentage(50)}
                >
                  50%
                </button>
                <input
                  type="number"
                  placeholder="Custom"
                  className="bg-grey-50 text-grey-550 text-center rounded-lg p-1 text-preset3 focus:outline-green-400"
                  min="1"
                  step="0.01"
                  onChange={(e) =>
                    setTipPercentage(parseFloat(e.target.value)/bill * 100)
                  }
                  value={tipPercentage > 0 ? tipPercentage*bill / 100 : ""}
                />
              </div>
              <div className="flex items-end justify-between">
                <p className="text-preset5 text-grey-500 my-2">
                  Number of People
                </p>
                {numberOfPeople <= 0 && numberOfPeopleTouched && (
                  <p className="text-preset6 text-orange-400 mb-2">
                    Can't be zero
                  </p>
                )}
              </div>
              {/* Number of people input */}
              <div className="relative bg-grey-50 rounded-lg">
                <img
                  className="absolute left-3 top-1/2 -translate-y-1/2"
                  src={person}
                  alt="person"
                />
                <input
                  className={`text-preset3 text-green-900 text-right p-2 pr-4 w-full focus:outline-green-400 ${numberOfPeople <= 0 && numberOfPeopleTouched ? 'focus:outline-orange-400 border border-orange-400' : ''}  hover:cursor-pointer`}
                  type="number"
                  placeholder="0"
                  min="0"
                  onChange={(e) => setNumberOfPeople(e.target.value)}
                  onBlur={() => setNumberOfPeopleTouched(true)}
                  value={numberOfPeople > 0 ? numberOfPeople : ""}
                />
              </div>
            </div>
            {/* results */}
            <div className="bg-green-900 rounded-xl p-5 mt-8 md:p-10 lg:flex lg:flex-col">
              {/* tip amount per person */}
              <div className="flex justify-between">
                <div>
                  <p className="text-preset5 text-white">Tip Amount</p>
                  <p className="text-preset6 text-grey-400">/ person</p>
                </div>
                <div className="flex items-center text-preset2 md:text-preset1 text-green-400">
                  <svg
                    width="11"
                    height="17"
                    viewBox="0 0 11 17"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.016 16.328v-1.464c1.232-.08 2.22-.444 2.964-1.092.744-.648 1.116-1.508 1.116-2.58v-.144c0-.992-.348-1.772-1.044-2.34-.696-.568-1.708-.932-3.036-1.092V4.184c.56.144 1.012.4 1.356.768.344.368.516.816.516 1.344v.288h1.824v-.432c0-.448-.088-.876-.264-1.284a3.783 3.783 0 00-.744-1.116A4.251 4.251 0 007.54 2.9a5.324 5.324 0 00-1.524-.492V.872H4.288V2.36a5.532 5.532 0 00-1.416.324c-.448.168-.84.392-1.176.672-.336.28-.604.616-.804 1.008-.2.392-.3.844-.3 1.356v.144c0 .96.316 1.708.948 2.244.632.536 1.548.884 2.748 1.044v3.912c-.704-.16-1.248-.472-1.632-.936-.384-.464-.576-1.08-.576-1.848v-.288H.256v.576c0 .464.08.924.24 1.38.16.456.404.88.732 1.272.328.392.744.728 1.248 1.008s1.108.476 1.812.588v1.512h1.728zM4.288 7.424c-.688-.128-1.164-.332-1.428-.612-.264-.28-.396-.644-.396-1.092 0-.464.176-.832.528-1.104.352-.272.784-.448 1.296-.528v3.336zm1.728 5.712V9.344c.768.128 1.328.328 1.68.6.352.272.528.688.528 1.248 0 .544-.196.984-.588 1.32-.392.336-.932.544-1.62.624z" />
                  </svg>
                  <p>{tipAmount.toFixed(2)}</p>
                </div>
              </div>
              {/* total amount per person */}
              <div className="flex justify-between my-4">
                <div>
                  <p className="text-preset5 text-white">Total</p>
                  <p className="text-preset6 text-grey-400">/ person</p>
                </div>
                <div className="flex items-center text-preset2 text-green-400">
                  <svg
                    width="11"
                    height="17"
                    viewBox="0 0 11 17"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.016 16.328v-1.464c1.232-.08 2.22-.444 2.964-1.092.744-.648 1.116-1.508 1.116-2.58v-.144c0-.992-.348-1.772-1.044-2.34-.696-.568-1.708-.932-3.036-1.092V4.184c.56.144 1.012.4 1.356.768.344.368.516.816.516 1.344v.288h1.824v-.432c0-.448-.088-.876-.264-1.284a3.783 3.783 0 00-.744-1.116A4.251 4.251 0 007.54 2.9a5.324 5.324 0 00-1.524-.492V.872H4.288V2.36a5.532 5.532 0 00-1.416.324c-.448.168-.84.392-1.176.672-.336.28-.604.616-.804 1.008-.2.392-.3.844-.3 1.356v.144c0 .96.316 1.708.948 2.244.632.536 1.548.884 2.748 1.044v3.912c-.704-.16-1.248-.472-1.632-.936-.384-.464-.576-1.08-.576-1.848v-.288H.256v.576c0 .464.08.924.24 1.38.16.456.404.88.732 1.272.328.392.744.728 1.248 1.008s1.108.476 1.812.588v1.512h1.728zM4.288 7.424c-.688-.128-1.164-.332-1.428-.612-.264-.28-.396-.644-.396-1.092 0-.464.176-.832.528-1.104.352-.272.784-.448 1.296-.528v3.336zm1.728 5.712V9.344c.768.128 1.328.328 1.68.6.352.272.528.688.528 1.248 0 .544-.196.984-.588 1.32-.392.336-.932.544-1.62.624z" />
                  </svg>
                  <p>{totalAmount.toFixed(2)}</p>
                </div>
              </div>
              {/* reset button */}
              <button className={`bg-green-400 text-green-900 w-full p-2 rounded-lg text-preset4 lg:mt-auto ${tipAmount === 0 && totalAmount === 0 ? 'bg-green-750 disabled' : ' hover:cursor-pointer hover:bg-green-200'}`} onClick={() => {
                setBill(0);
                setTipPercentage(0);
                setNumberOfPeople(0);
                setTipAmount(0);
                setTotalAmount(0);
                setNumberOfPeopleTouched(false);
              }}>
                RESET
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
