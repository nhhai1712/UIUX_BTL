// import { Popover } from '@headlessui/react';
// import { FilterIcon } from '@heroicons/react/outline';
// import classNames from 'classnames';
// import { useState } from 'react';
// function FilterButton(props) {
//     const [selectedNameTeam, setSelectedNameTeam] = useState('');

//     function handlePriorityChange(event) {
//         const selectedPriority = event.target.value;
//         props.onChange({ selectedPriority, selectedStatus: props.selectedStatus, selectedNameTeam: props.selectedNameTeam });
//       }
    
//       function handleStatusChange(event) {
//         const selectedStatus = event.target.value;
//         props.onChange({ selectedPriority: props.selectedPriority, selectedStatus, selectedNameTeam:  props.selectedNameTeam});
//       }
    
//       function handleNameTeamChange(event) {
//         const selectedNameTeam = event.target.value;
//         setSelectedNameTeam(selectedNameTeam);
//         props.onChange({ selectedPriority: props.selectedPriority, selectedStatus: props.selectedStatus, selectedNameTeam });
//       }
//   return (
//     <Popover className="relative mr-2">
//       {({ open }) => (
//         <>
//           <Popover.Button
//             className={classNames(
//               'inline-flex justify-center items-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
//               open ? 'bg-gray-100' : ''
//             )}
//           >
//             <FilterIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//             <span className="sr-only">Filter tasks</span>
//           </Popover.Button>

//           <Popover.Panel
//             className="absolute z-10 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none"
//           >
//             <div className="px-4 py-3">
//               <h3 className="text-lg font-medium leading-6 text-gray-900">Filter tasks</h3>
//             </div>
//             <div className="py-2 m-2">
//               <label htmlFor="priority" className="block text-sm font-medium text-gray-700">
//                 Priority
//               </label>
//               <select
//                 id="priority"
//                 name="priority"
//                 onChange={handlePriorityChange} 
//                 value={props.selectedPriority}
//                 className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               >
//                 <option value="">All</option>
//                 <option value="high">High</option>
//                 <option value="medium">Medium</option>
//                 <option value="low">Low</option>
//               </select>
//             </div>
//             <div className="py-2 m-2">
//               <label htmlFor="status" className="block text-sm font-medium text-gray-700">
//                 Status
//               </label>
//               <select
//                 id="status"
//                 name="status"
//                 onChange={handleStatusChange} 
//                 value={props.selectedStatus}
//                 className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               >
//                 <option value="">All</option>
//                 <option value="not-started">Not Started</option>
//                 <option value="in-progress">In Progress</option>
//                 <option value="completed">Completed</option>
//               </select>
//             </div>
//             <div className="py-2 m-2">
//               <label htmlFor="status" className="block text-sm font-medium text-gray-700">
//                 Team Name
//               </label>
//               <select
//                 id="nameTeam"
//                 name="nameTeam"
//                 onChange={handleNameTeamChange} 
//                 value={props.selectedNameTeam}
//                 className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               >
//                 <option value="">All</option>
//                 <option value="BTL1">BTL1</option>
//                 <option value="BTL2">BTL2</option>
//                 <option value="BTL3">BTL3</option>
//               </select>
//             </div>
//           </Popover.Panel>
//         </>
//       )}
//     </Popover>
//   );
// }
// export default FilterButton;

import { Popover } from '@headlessui/react';
import { FilterIcon } from '@heroicons/react/outline';
import classNames from 'classnames';
import { useState } from 'react';
function FilterButton(props) {
    const [selectedNameTeam, setSelectedNameTeam] = useState('');
  
    function handlePriorityChange(event) {
      const selectedPriority = event.target.value;
      props.onChange({ selectedPriority, selectedStatus: props.selectedStatus, selectedNameTeam });
    }
  
    function handleStatusChange(event) {
      const selectedStatus = event.target.value;
      props.onChange({ selectedPriority: props.selectedPriority, selectedStatus, selectedNameTeam });
    }
  
    function handleNameTeamChange(event) {
      const selectedNameTeam = event.target.value;
      setSelectedNameTeam(selectedNameTeam);
      props.onChange({ selectedPriority: props.selectedPriority, selectedStatus: props.selectedStatus, selectedNameTeam });
    }
  
    return (
      <Popover className="relative mr-2">
        {({ open }) => (
          <>
            <Popover.Button
              className={classNames(
                'inline-flex justify-center items-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
                open ? 'bg-gray-100' : ''
              )}
            >
              <FilterIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              <span className="sr-only">Filter tasks</span>
            </Popover.Button>
  
            <Popover.Panel
              className="absolute z-10 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none"
            >
              <div className="px-4 py-3">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Filter tasks</h3>
              </div>
              <div className="py-2 m-2">
                <label htmlFor="priority" className="block text-sm font-medium text-gray-700">
                  Priority
                </label>
                <select
                  id="priority"
                  name="priority"
                  onChange={handlePriorityChange}
                  value={props.selectedPriority}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">All</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
              <div className="py-2 m-2">
                <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  onChange={handleStatusChange}
                  value={props.selectedStatus}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">All</option>
                  <option value="not-started">Not Started</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
              <div className="py-2 m-2">
                <label htmlFor="nameTeam" className="block text-sm font-medium text-gray-700">
                  Team Name
                </label>
                <select
                  id="nameTeam"
                  name="nameTeam"
                  onChange={handleNameTeamChange}
                  value={selectedNameTeam}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">All</option>
                  <option value="BTL1">BTL1</option>
                  <option value="BTL2">BTL2</option>
                  <option value="BTL3">BTL3</option>
                </select>
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
    );
  }
  export default FilterButton;