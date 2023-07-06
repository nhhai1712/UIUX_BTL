// import React, { useState } from 'react';

// export default function FilterButton({ values, onSelect, title }) {
//   const [selectedValue, setSelectedValue] = useState(null);
//   const [showConfirmDialog, setShowConfirmDialog] = useState(false);

//   function handleFilterSelect(value) {
//     if (selectedValue === value) {
//       setSelectedValue(null);
//       onSelect(null); 
//     } else {
//       setSelectedValue(value);
//       setShowConfirmDialog(true);
//     }
//   }

//   function handleConfirm() {
//     setShowConfirmDialog(false);
//     onSelect(selectedValue);
//   }

//   function handleCancel() {
//     setShowConfirmDialog(false);
//   }

//   return (
//     <>
//       <button
//         className='px-4 py-2 bg-gray-200 rounded-md mr-2'
//         onClick={() => handleFilterSelect(null)}
//       >
//         {title}
//       </button>
//       {values.map((value) => (
//         <button
//           key={value}
//           className={`px-4 py-2 rounded-md mr-2 ${
//             selectedValue === value ? 'bg-blue-500 text-white' : 'bg-gray-200'
//           }`}
//           onClick={() => handleFilterSelect(value)}
//         >
//           {value}
//         </button>
//       ))}
//       {/* {showConfirmDialog && (
//         <div className='absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-50'>
//           <div className='bg-white p-8 rounded-md'>
//             <p>Bạn có chắc chắn muốn áp dụng bộ lọc này?</p>
//             <div className='flex justify-end mt-4'>
//               <button className='px-4 py-2 mr-2 bg-gray-200 rounded-md' onClick={handleCancel}>
//                 Hủy
//               </button>
//               <button className='px-4 py-2 bg-blue-500 text-white rounded-md' onClick={handleConfirm}>
//                 Đồng ý
//               </button>
//             </div>
//           </div>
//         </div>
//       )} */}
//     </>
//   );
// }
import { Popover } from '@headlessui/react';
import { FilterIcon } from '@heroicons/react/outline';
import classNames from 'classnames';
import { useState } from 'react';
function FilterButton(props) {
  function handlePriorityChange(event) {
    const selectedPriority = event.target.value;
    props.onChange({ selectedPriority, selectedStatus: props.selectedStatus });
  }

  function handleStatusChange(event) {
    const selectedStatus = event.target.value;
    props.onChange({ selectedPriority: props.selectedPriority, selectedStatus });
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
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
}
export default FilterButton;