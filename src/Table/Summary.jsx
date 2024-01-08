const Summary = () => {
  return (
    <div className='flex flex-col'>
      <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
          <div className='overflow-hidden'>
            <table className='min-w-full border text-center text-sm font-light dark:border-neutral-500'>
              <thead className='border-b font-medium dark:border-neutral-500'>
                <tr>
                  <th
                    scope='col'
                    className='border-r px-6 py-4 dark:border-neutral-500 bg-slate-300'
                  >
                    No
                  </th>
                  <th
                    scope='col'
                    className='border-r px-6 py-4 dark:border-neutral-500 bg-slate-300'
                  >
                    Date
                  </th>
                  <th
                    scope='col'
                    className='border-r px-6 py-4 dark:border-neutral-500 bg-slate-300'
                  >
                    Serial number
                  </th>
                  <th
                    scope='col'
                    className='border-r px-6 py-4 dark:border-neutral-500 bg-slate-300'
                  >
                    MC type
                  </th>
                  <th
                    scope='col'
                    className='border-r px-6 py-4 dark:border-neutral-500 bg-slate-300'
                  >
                    Current Location
                  </th>
                  <th
                    scope='col'
                    className='border-r px-6 py-4 dark:border-neutral-500 bg-slate-300'
                  >
                    Issue
                  </th>
                  <th
                    scope='col'
                    className='border-r px-6 py-4 dark:border-neutral-500 bg-[yellow] pseudo'
                  >
                    Not yet
                  </th>
                  <th
                    scope='col'
                    className='border-r px-6 py-4 dark:border-neutral-500 bg-slate-300'
                  >
                    Ongoing
                  </th>
                  <th
                    scope='col'
                    className='border-r px-6 py-4 dark:border-neutral-500 bg-[#11c6fdfd]'
                  >
                    Fixed
                  </th>
                  <th
                    scope='col'
                    className='border-r px-6 py-4 dark:border-neutral-500 bg-slate-300'
                  >
                    Maintenance fix
                  </th>
                  <th scope='col' className='px-6 py-4 bg-slate-300'>
                    Total lost time
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b dark:border-neutral-500'>
                  <td className='whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500'>
                    {}
                  </td>
                  <td className='whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500'>
                    {}
                  </td>
                  <td className='whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500'>
                    {}
                  </td>
                  <td className='whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500'>
                    {}
                  </td>
                  <td className='whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500'>
                    {}
                  </td>
                  <td className='whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500'>
                    {}
                  </td>
                  <td className='whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500'>
                    {}
                  </td>
                  <td className='whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500'>
                    {}
                  </td>
                  <td className='whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500'>
                    {}
                  </td>
                  <td className='whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500'>
                    {}
                  </td>
                  <td className='whitespace-nowrap px-6 py-4'>{}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;