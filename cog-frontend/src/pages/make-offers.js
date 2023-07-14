import React, { useReducer } from "react";
import Dashboard from "../../components/Layout/Dashboard";
import Image from "next/image";

const MakeOffers = () => {
  const initState = {
    pagination: 0,
    stepForm: [
      { title: "Property details", complete: false },
      { title: "Client details", complete: false },
      { title: "Amount", complete: false },
      { title: "Due date", complete: false },
      { title: "Summary", complete: false },
    ],
  };

  const reducerFunc = (state, action) => {
    switch (action.type) {
      case "INCREMENT": {
        return {
          ...state,
          pagination: action.pagination,
          stepForm: [
            ...state.stepForm.slice(0, action.pagination - 1),
            {
              ...state.stepForm[action.pagination - 1],
              complete: action.complete,
            },
            ...state.stepForm.slice(action.pagination),
          ],
        };
      }
      case "DECREMENT": {
        return {
          ...state,
          pagination: action.pagination,
        };
      }
    }
  };

  const [state, dispatch] = useReducer(reducerFunc, initState);

  const decrementHandler = () => {
    dispatch({ type: "DECREMENT", pagination: state.pagination - 1 });
  };

  const components = [
    <PropertyDetails dispatch={dispatch} />,
    <ClientDetails dispatch={dispatch} decrementHandler={decrementHandler} />,
    <Amount dispatch={dispatch} decrementHandler={decrementHandler} />,
    <DueDate dispatch={dispatch} decrementHandler={decrementHandler} />,
    <Summary dispatch={dispatch} decrementHandler={decrementHandler} />,
  ];

  return (
    <Dashboard>
      <main className="p-10 flex-1">
        <nav className="flex justify-between">
          <div>
            <h1 className="text-[#4B4B4B] text-[38px] font-bold">Offers</h1>
          </div>
          <div>
            <div className="flex items-center gap-x-12 mb-2">
              <figure>
                <Image
                  src="/assets/images/notification.svg"
                  alt="Notification"
                  width={24}
                  height={24}
                />
              </figure>
              <div className="h-[58px] w-[58px] rounded-[50%] bg-[#E0CA04] grid place-items-center">
                <span className="font-bold text-[20px]">PA</span>
              </div>
            </div>
            <p className="text-[#4B4B4B] text-[14px] text-right">
              User ID: 12345678
            </p>
          </div>
        </nav>
        <h2 className="text-[#B1B1B4] text-[22px]">Set terms</h2>

        <section className="border-[1px] border-[#62909F] py-16 px-5 ml-5 mt-10 flex gap-x-20">
          <div>
            {state.stepForm.map((step, i) => (
              <div className="flex gap-x-4" key={i}>
                <div className="flex flex-col w-max">
                  <div
                    className={`grid place-items-center h-[25px] w-[25px] rounded-[50%] text-[12px] ${
                      state.pagination === i
                        ? "border-[2px] text-[#049561]"
                        : step.complete
                        ? "bg-[#049561] text-white"
                        : "border-[1px] text-[#049561]"
                    } border-[#049561]`}
                  >
                    {state.pagination === i || step.complete === false
                      ? i + 1
                      : "✔"}
                  </div>
                  {i === state.stepForm.length - 1 ? null : (
                    <div className="h-[15px] w-[1px] bg-[#049561] mx-auto"></div>
                  )}
                </div>
                <h2 className="font-bold text-[18px] text-[#4B4B4B]">
                  {step.title}
                </h2>
              </div>
            ))}
          </div>
          {components[state.pagination]}
        </section>
      </main>
    </Dashboard>
  );
};

export default MakeOffers;

const PropertyDetails = ({ dispatch }) => {
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", pagination: 1, complete: true });
  };

  return (
    <div className="border-[1px] border-[#62909F] p-6 flex-1 max-w-[600px]">
      <div>
        <h1 className="font-bold text-[20px] text-[#4B4B4B] mb-3">
          Property details
        </h1>
        <p className="text-[#B1B1B4] text-[15px]">
          Kindly select the property that you want to send an offer for.
        </p>
        <div className="mt-10 flex gap-x-5 h-[300px]">
          <div className="bg-[#19191A] h-[6px] w-[6px] mt-2"></div>
          <div>
            <h2>Choose from existing property data</h2>
            <div className="border-[#62909F] border-[1px] mt-3 py-1 px-2 flex justify-between gap-x-5">
              <p className="text-[#B1B1B4]">Select property name</p>
              <Image
                src="/assets/icons/dropdown-icon.svg"
                alt="dropdown-icon"
                width={11}
                height={7}
              />
            </div>
          </div>
        </div>
        <div className="flex pt-5">
          <div className="ml-auto flex gap-x-2">
            <button
              className="bg-[#386A8B] text-[15px] w-[160px] text-white rounded-[4px] px-6 py-2"
              onClick={incrementHandler}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ClientDetails = ({ dispatch, decrementHandler }) => {
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", pagination: 2, complete: true });
  };

  return (
    <div className="border-[1px] border-[#62909F] p-6 flex-1 max-w-[600px]">
      <div>
        <h1 className="font-bold text-[20px] text-[#4B4B4B] mb-3">
          Client details
        </h1>
        <p className="text-[#B1B1B4] text-[15px]">
          Kindly select the prospect that you want to send an offer to.
        </p>
        <div className="mt-10 flex gap-x-5 h-[300px]">
          <div className="bg-[#19191A] h-[6px] w-[6px] mt-2"></div>
          <div>
            <h2>Choose from existing prospect data</h2>
            <div className="border-[#62909F] border-[1px] mt-3 py-1 px-2 flex justify-between gap-x-5">
              <p className="text-[#B1B1B4]">Select property name type</p>
              <Image
                src="/assets/icons/dropdown-icon.svg"
                alt="dropdown-icon"
                width={11}
                height={7}
              />
            </div>
          </div>
        </div>
        <div className="flex pt-5">
          <div className="ml-auto flex gap-x-2">
            <button
              className="border-[#386A8B] text-[15px] w-[160px] border-[1px] text-[#386A8B] rounded-[4px] px-6 py-2"
              onClick={decrementHandler}
            >
              Back
            </button>
            <button
              className="bg-[#386A8B] text-[15px] w-[160px] text-white rounded-[4px] px-6 py-2"
              onClick={incrementHandler}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Amount = ({ dispatch, decrementHandler }) => {
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", pagination: 3, complete: true });
  };

  return (
    <div className="border-[1px] border-[#62909F] p-6 flex-1 max-w-[600px]">
      <div>
        <h1 className="font-bold text-[20px] text-[#4B4B4B] mb-3">Amount</h1>
        <p className="text-[#B1B1B4] text-[15px]">
          Kindly enter the property purchase/rental amount that you want to send
          an offer for.
        </p>
        <div className="mt-10 flex gap-x-5 h-[300px]">
          <div className="bg-[#19191A] h-[6px] w-[6px] mt-2"></div>
          <div>
            <h2>Enter amount</h2>
            <div className="border-[#62909F] border-[1px] mt-3 py-1 px-2 flex justify-between gap-x-5">
              <p className="text-[#B1B1B4]">Select property name type</p>
              <Image
                src="/assets/icons/dropdown-icon.svg"
                alt="dropdown-icon"
                width={11}
                height={7}
              />
            </div>
          </div>
        </div>
        <div className="flex pt-5">
          <div className="ml-auto flex gap-x-2">
            <button
              className="border-[#386A8B] text-[15px] w-[160px] border-[1px] text-[#386A8B] rounded-[4px] px-6 py-2"
              onClick={decrementHandler}
            >
              Back
            </button>
            <button
              className="bg-[#386A8B] text-[15px] w-[160px] text-white rounded-[4px] px-6 py-2"
              onClick={incrementHandler}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const DueDate = ({ dispatch, decrementHandler }) => {
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", pagination: 4, complete: true });
  };

  return (
    <div className="border-[1px] border-[#62909F] p-6 flex-1 max-w-[600px]">
      <div>
        <h1 className="font-bold text-[20px] text-[#4B4B4B] mb-3">DueDate</h1>
        <p className="text-[#B1B1B4] text-[15px]">
          Kindly enter the payment date for your offer.
        </p>
        <div className="mt-10 flex gap-x-5 h-[300px]">
          <div className="bg-[#19191A] h-[6px] w-[6px] mt-2"></div>
          <div>
            <h2>Enter due date</h2>
            <div className="border-[#62909F] border-[1px] mt-3 py-1 px-2 flex justify-between gap-x-5">
              <p className="text-[#B1B1B4]">Select property name type</p>
              <Image
                src="/assets/icons/dropdown-icon.svg"
                alt="dropdown-icon"
                width={11}
                height={7}
              />
            </div>
          </div>
        </div>
        <div className="flex pt-5">
          <div className="ml-auto flex gap-x-2">
            <button
              className="border-[#386A8B] text-[15px] w-[160px] border-[1px] text-[#386A8B] rounded-[4px] px-6 py-2"
              onClick={decrementHandler}
            >
              Back
            </button>
            <button
              className="bg-[#386A8B] text-[15px] w-[160px] text-white rounded-[4px] px-6 py-2"
              onClick={incrementHandler}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Summary = ({ decrementHandler }) => {
  return (
    <section className="flex gap-x-4 flex-1">
      <div className="border-[1px] border-[#62909F] p-6 flex-1">
        <div>
          <header>
            <h1 className="font-bold text-[20px] text-[#4B4B4B] mb-5">
              Offer Summary
            </h1>
            <div className="grid grid-cols-2 gap-x-4 gap-y-4">
              <p>Manager name:</p>
              <p>Issue date:</p>
              <p>Reference number:</p>
              <p>Due date:</p>
              <p>Issue date:</p>
            </div>
          </header>
          <ul className="pt-20 flex flex-col gap-y-8">
            <li className="relative pl-5">
              <div className="bg-[#19191A] h-[6px] w-[6px] top-2 absolute left-0"></div>
              <div>
                <h2 className="text-[#19191A] font-bold mb-3">
                  Property details
                </h2>
                <div className="grid grid-cols-2">
                  <p>Name</p>
                  <p>Ikorodu property</p>
                </div>
                <div className="grid grid-cols-2">
                  <p>Property type</p>
                  <p>Warehouse</p>
                </div>
              </div>
            </li>
            <li className="relative pl-5">
              <div className="bg-[#19191A] h-[6px] w-[6px] top-2 absolute left-0"></div>
              <div>
                <h2 className="text-[#19191A] font-bold mb-3">Client name</h2>
                <p>Ajibola Quadri</p>
              </div>
            </li>
            <li className="relative pl-5">
              <div className="bg-[#19191A] h-[6px] w-[6px] top-2 absolute left-0"></div>
              <div>
                <h2 className="text-[#19191A] font-bold mb-3">Amount</h2>
                <div className="grid grid-cols-2">
                  <p>Price</p>
                  <p className="font-bold text-[#19191A]">&#x20A6;350,000.00</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        <button className="bg-[#386A8B] text-[15px] items-center flex w-[170px] text-white rounded-[4px] pl-6 py-2 pr-8">
          <Image
            src="/assets/icons/send-icon.svg"
            alt="send-icon"
            width={15}
            height={15}
          />
          <span className="flex-1 text-center">Send</span>
        </button>
        <button className="border-[#386A8B] border-[1px] text-[15px] gap-x-4 items-center flex w-[170px] rounded-[4px] pl-6 py-2 pr-8">
          <Image
            src="/assets/icons/download-icon.svg"
            alt="download-icon"
            width={15}
            height={15}
          />
          <span className="flex-1 text-center">Download</span>
        </button>
        <button className="border-[#386A8B] border-[1px] text-[15px] gap-x-4 items-center flex w-[170px] rounded-[4px] pl-6 pr-8 py-2 text-center">
          <Image
            src="/assets/icons/star-icon.svg"
            alt="star-icon"
            width={15}
            height={15}
          />
          <span className="flex-1 text-center">Bookmark</span>
        </button>
        <button
          className="border-[#386A8B] border-[1px] text-[15px] items-center flex w-[170px] rounded-[4px] pl-6 py-2 pr-8"
          onClick={decrementHandler}
        >
          <Image
            src="/assets/icons/back-icon.svg"
            alt="back-icon"
            width={15}
            height={15}
          />
          <span className="flex-1 text-center">Back</span>
        </button>
      </div>
    </section>
  );
};
