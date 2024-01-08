import { useReducer } from 'react';

const transReducer = (state, action) => {
  if (
    action.value === 1 ||
    action.value === 2 ||
    action.value === 3 ||
    action.value === 4 ||
    action.value === 5
  ) {
    return (state = action.value);
  }

  return { value: 1 };
};

const Dashboard = ({ setSelect }) => {
  const [transferState, dispatchTransfer] = useReducer(transReducer, {
    value: 1,
  });

  const onClickHandler = event => {
    if (event.target.tagName === 'LI') {
      const value = event.target.value;
      dispatchTransfer({ value });
      setSelect(value);
    }
  };

  return (
    <nav className=' px-3 py-2 bg-slate-800 border-sky-500 rounded-lg ml-6 mr-6'>
      <ul
        className='flex justify-between  text-white px-8'
        onClick={onClickHandler}
      >
        <li
          value='1'
          className={`cursor-pointer px-6 py-2 rounded-md min-w-52 text-center font-semibold ${
            transferState !== 2 &&
            transferState !== 3 &&
            transferState !== 4 &&
            transferState !== 5
              ? 'bg-sky-500'
              : ''
          }`}
        >
          Machine wise lost time
        </li>
        <li
          value='2'
          className={`cursor-pointer px-6 py-2 rounded-md min-w-52 text-center font-semibold ${
            transferState === 2 ? 'bg-sky-500' : ''
          }`}
        >
          Machine more broken
        </li>
        <li
          value='3'
          className={`cursor-pointer px-6 py-2 rounded-md min-w-52 text-center font-semibold ${
            transferState === 3 ? 'bg-sky-500' : ''
          }`}
        >
          Kind of issue
        </li>
        <li
          value='4'
          className={`cursor-pointer px-6 py-2 rounded-md min-w-52 text-center font-semibold ${
            transferState === 4 ? 'bg-sky-500' : ''
          }`}
        >
          Kind of issue (Weekly/Month)
        </li>
        <li
          value='5'
          className={`cursor-pointer px-6 py-2 rounded-md min-w-52 text-center font-semibold ${
            transferState === 5 ? 'bg-sky-500' : ''
          }`}
        >
          Summary
        </li>
      </ul>
    </nav>
  );
};

export default Dashboard;
