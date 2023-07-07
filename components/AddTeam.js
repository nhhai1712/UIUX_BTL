import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { PlusIcon } from "@heroicons/react/outline";

export default function AddTeamPopup() {
    
    const [isOpen, setIsOpen] = useState(false);
    const [nameTeam, setNameTeam] = useState("");
    const [workLocation, setWorkLocation] = useState("");
    const [privacy, setPrivacy] = useState("public");
    const [nameMember, setNameMember] = useState("");
    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTeam = {
            nameTeam,
            workLocation,
            privacy,
            nameMember,
        };
        console.log(newTeam);
        fetch('/api/addTeam', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newTeam),
        })
          .then((response) => {
            if (response.ok) {
              // Reset the form fields if the write operation was successful
              resetForm();
            } else {
              throw new Error('Failed to add team');
            }
          })
          .catch((error) => {
            console.error(error);
            alert('Failed to add team');
          });
        resetForm();
      }
      const resetForm = () => {
        // Reset the form fields
        setNameTeam("");
        setWorkLocation("");
        setPrivacy("");
        setNameMember("");
      };

    return (
        // <form onSubmit={handleSubmit}>
        <div className="mr-2">
            <button
                onClick={openModal}
                className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
                <PlusIcon className="-ml-1 h-1 w-5" aria-hidden="true" />
                Add Team
            </button>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Add Team
                                </Dialog.Title>
                                <div className="mt-2">
                                    <form>
                                        <label
                                            htmlFor="nameTeam"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Team Name
                                        </label>
                                        <input
                                            type="text"
                                            name="nameTeam"
                                            id="nameTeam"
                                            value={nameTeam}
                                            onChange={(e) => setNameTeam(e.target.value)} 
                                            className="mt-1 mb-4 block w-full h-10 border-gray-300 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            required
                                        />

                                        <label
                                            htmlFor="workLocation"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Work Location
                                        </label>
                                        <input
                                            type="text"
                                            name="workLocation"
                                            id="workLocation"
                                            value={workLocation}
                                            onChange={(e) => setWorkLocation(e.target.value)} 
                                            className="mt-1 mb-4 block w-full h-10 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            required
                                        />

                                        <label
                                            htmlFor="privacy"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Privacy
                                        </label>
                                        <select
                                            id="privacy"
                                            name="privacy"
                                            value={privacy}
                                            onChange={(e) => setPrivacy(e.target.value)} 
                                            className="mt-1 mb-4 block w-full h-10 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        >
                                            <option value="public">Public</option>
                                            <option value="private">Private</option>
                                        </select>

                                        <label
                                            htmlFor="nameMember"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Member Name
                                        </label>
                                        <input
                                            type="text"
                                            name="nameMember"
                                            id="nameMember"
                                            value={nameMember}
                                            onChange={(e) => setNameMember(e.target.value)} 
                                            className="mt-1 mb-4 block w-full h-10 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            required
                                        />
                                    </form>
                                </div>
                                <div className="mt-4 flex justify-end">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
                                        // onClick={closeModal}
                                        onClick={(e) => (handleSubmit(e))}
                                    >
                                        Add
                                    </button>
                                    <button
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 ml-4 text-sm font-medium text-gray-700 bg-gray-200 border border-transparent rounded-md hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
                                        onClick={closeModal}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </div>
    // </form>
    );
}