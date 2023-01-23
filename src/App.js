import { useLayoutEffect, useRef, useState } from 'react';
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/outline';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Table({
  title,
  subtitle,

  options,
  height,
}) {
  const data = [
    {
      id: '9942040897',
      refNo: 1,
      shiftNo: 1,
      docName: 'Heron, yellow-crowned night',
      staffName: 'Berny',
      startDate: '30/06/2022',
      endDate: '16/01/2023',
      status: 'SNB',
      itemNo: '5',
      possessionNo: 'K2022/4150705',
      managerName: 'Markos',
      plannerName: 'Boyce',
      shiftManagerName: 'Foss',
      verifiedAt: '20/10/2022',
      authorisedAt: '19/04/2022',
    },
    {
      id: '9721499498',
      refNo: 2,
      shiftNo: 2,
      docName: 'Civet (unidentified)',
      staffName: 'Piper',
      startDate: '01/08/2022',
      endDate: '01/01/2023',
      status: 'ODA',
      itemNo: '00463',
      possessionNo: 'J2022/6221860',
      managerName: 'Mia',
      plannerName: 'Nico',
      shiftManagerName: 'Nanine',
      verifiedAt: '31/12/2022',
      authorisedAt: '31/05/2022',
    },
    {
      id: '4880127981',
      refNo: 3,
      shiftNo: 3,
      docName: 'Northern elephant seal',
      staffName: 'Riva',
      startDate: '22/01/2022',
      endDate: '06/01/2023',
      status: 'LYN',
      itemNo: '1250',
      possessionNo: 'Y2022/9785411',
      managerName: 'Wallie',
      plannerName: 'Anstice',
      shiftManagerName: 'Bettye',
      verifiedAt: '28/06/2022',
      authorisedAt: '19/02/2022',
    },
    {
      id: '9190814487',
      refNo: 4,
      shiftNo: 4,
      docName: 'Wood pigeon',
      staffName: 'Heidie',
      startDate: '30/06/2022',
      endDate: '02/01/2023',
      status: 'ZSA',
      itemNo: '66',
      possessionNo: 'B2022/3905119',
      managerName: 'Mannie',
      plannerName: 'Minerva',
      shiftManagerName: 'Gallard',
      verifiedAt: '15/05/2022',
      authorisedAt: '02/05/2022',
    },
    {
      id: '2087239053',
      refNo: 5,
      shiftNo: 5,
      docName: 'Creeper, black-tailed tree',
      staffName: 'Jo-ann',
      startDate: '15/03/2022',
      endDate: '06/01/2023',
      status: 'IRN',
      itemNo: '74700',
      possessionNo: 'D2022/3977112',
      managerName: 'Pierson',
      plannerName: 'Junette',
      shiftManagerName: 'Grady',
      verifiedAt: '08/06/2022',
      authorisedAt: '23/01/2022',
    },
    {
      id: '5814797665',
      refNo: 6,
      shiftNo: 6,
      docName: 'Oriental short-clawed otter',
      staffName: 'Herschel',
      startDate: '10/07/2022',
      endDate: '18/01/2023',
      status: 'VLK',
      itemNo: '637',
      possessionNo: 'C2022/2594051',
      managerName: 'Martainn',
      plannerName: 'Lynett',
      shiftManagerName: 'Rosemonde',
      verifiedAt: '07/02/2022',
      authorisedAt: '11/12/2022',
    },
    {
      id: '8199665823',
      refNo: 7,
      shiftNo: 7,
      docName: 'Quoll, spotted-tailed',
      staffName: 'Helaine',
      startDate: '26/07/2022',
      endDate: '03/01/2023',
      status: 'HUH',
      itemNo: '30',
      possessionNo: 'V2022/2909674',
      managerName: 'Caesar',
      plannerName: 'Dmitri',
      shiftManagerName: 'Suzi',
      verifiedAt: '30/12/2022',
      authorisedAt: '15/02/2022',
    },
    {
      id: '5030874526',
      refNo: 8,
      shiftNo: 8,
      docName: 'Squirrel, indian giant',
      staffName: 'Far',
      startDate: '22/03/2022',
      endDate: '21/01/2023',
      status: 'TJV',
      itemNo: '0',
      possessionNo: 'F2022/5508753',
      managerName: 'Hardy',
      plannerName: 'Ezequiel',
      shiftManagerName: 'Morley',
      verifiedAt: '03/04/2022',
      authorisedAt: '02/03/2022',
    },
    {
      id: '1022783718',
      refNo: 9,
      shiftNo: 9,
      docName: 'Elephant, asian',
      staffName: 'Stephen',
      startDate: '03/02/2022',
      endDate: '13/01/2023',
      status: 'AXU',
      itemNo: '3125',
      possessionNo: 'P2022/5089239',
      managerName: 'Erich',
      plannerName: 'Nathanial',
      shiftManagerName: 'Kelley',
      verifiedAt: '10/10/2022',
      authorisedAt: '14/07/2022',
    },
    {
      id: '2157314105',
      refNo: 10,
      shiftNo: 10,
      docName: 'Yellow baboon',
      staffName: 'Bethina',
      startDate: '24/08/2022',
      endDate: '10/01/2023',
      status: 'BZG',
      itemNo: '9',
      possessionNo: 'T2022/0139457',
      managerName: 'Morten',
      plannerName: 'Penni',
      shiftManagerName: 'Dorita',
      verifiedAt: '30/08/2022',
      authorisedAt: '29/05/2022',
    },
  ];
  const columns = [
    'Ref No.',
    'Shift No.',
    'Doc Name',
    'Staff Name',
    'Created At',
    'Start Date',
    'Status',
  ];

  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedData, setSelectedData] = useState([]);

  function toggleAll() {
    setSelectedData(checked || indeterminate ? [] : data);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  let keys;
  if (data.length >= 1) {
    keys = Object.keys(...data);
    keys = keys.filter(
      (key) => key !== 'id' && key !== 'type' && key !== 'img'
    );
  }

  return (
    <div className="h-[100vh]">
      <div className={`mt-5 flex flex-col`}>
        <div className="-my-2 -mx-4 overflow-x-visible sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="relative shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              {selectedData.length > 0 && (
                <div className="absolute top-0 left-12 flex h-12 items-center space-x-3 bg-gray-50 sm:left-16">
                  <button
                    type="button"
                    className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    Download all
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    Delete all
                  </button>
                </div>
              )}

              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="relative w-12 px-6 sm:w-16 sm:px-8"
                    >
                      <input
                        type="checkbox"
                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                        ref={checkbox}
                        checked={checked}
                        onChange={toggleAll}
                      />
                    </th>
                    {columns.map((column, i) => (
                      <th
                        scope="col"
                        key={i}
                        className={`py-3.5 px-2 ${i === 0 && 'border-l'} ${
                          column === 'Pack Name' ? 'text-left' : 'text-center'
                        } text-sm font-semibold text-gray-900 `}
                      >
                        {column}
                      </th>
                    ))}

                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="z-0 divide-y divide-gray-200 bg-white">
                  {data.map((data, index) => (
                    <>
                      <tr
                        key={data[keys[0]]}
                        className={
                          selectedData.includes(data) ? 'bg-gray-50' : undefined
                        }
                      >
                        <td
                          className={` ${
                            index % 2 === 0 ? undefined : 'bg-gray-50'
                          } relative w-12 px-6 sm:w-16 sm:px-8`}
                        >
                          {selectedData.includes(data) && (
                            <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                          )}
                          <input
                            type="checkbox"
                            className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                            value={data.id}
                            checked={selectedData.includes(data)}
                            onChange={(e) =>
                              setSelectedData(
                                e.target.checked
                                  ? [...selectedData, data]
                                  : selectedData.filter((p) => p !== data)
                              )
                            }
                          />
                        </td>
                        {keys.map((key, i) => (
                          <>
                            {i === 0 ? (
                              <td
                                key={i}
                                className={classNames(
                                  `whitespace-nowrap py-4 border-l text-sm font-medium ${
                                    index % 2 === 0 ? undefined : 'bg-gray-50'
                                  } ${
                                    typeof data[key] === 'number' &&
                                    'text-center'
                                  }`,
                                  selectedData.includes(data)
                                    ? 'text-indigo-600'
                                    : 'text-gray-900'
                                )}
                              >
                                {data[key]}
                              </td>
                            ) : (
                              <td
                                key={i}
                                className={classNames(
                                  `whitespace-nowrap  px-2 py-4 text-sm  ${
                                    index % 2 === 0 ? undefined : 'bg-gray-50'
                                  }  ${
                                    typeof data[key] === 'number' &&
                                    'text-center'
                                  } ${data[key].length < 20 && 'text-center'}`,
                                  selectedData.includes(data)
                                    ? 'text-indigo-600'
                                    : 'text-gray-900'
                                )}
                              >
                                {data[key]}
                              </td>
                            )}
                          </>
                        ))}

                        <td
                          className={` ${
                            index % 2 === 0 ? undefined : 'bg-gray-50'
                          } z-10 whitespace-nowrap text-right sm:px-9 text-sm font-medium w-[10%]`}
                        ></td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
