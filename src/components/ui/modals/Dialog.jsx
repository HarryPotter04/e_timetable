import React from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

function DialogContainer({ open, onClose, size, children, backdropClick }) {

    if (!open) return null;

    let maxWidthClass = 'max-w-xl';
    if (size === 'small') {
        maxWidthClass = 'max-w-md';
    } else if (size === 'medium') {
        maxWidthClass = 'max-w-lg';
    }

    const handleBackdropClick = () => {
        if (backdropClick) {
            onClose();
        }
    };

    return (
        <Transition appear show={open} as={Fragment}>
            <Dialog as="div" classNametrue="relative" onClose={handleBackdropClick}>

                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25 z-[100]" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto z-[500]">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className={`w-full ${maxWidthClass} transform overflow-hidden rounded-xl bg-white text-left align-middle shadow-xl transition-all`}>

                                {children}

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>

            </Dialog>
        </Transition>
    );
}

export default DialogContainer;
