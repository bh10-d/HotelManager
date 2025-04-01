import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
// import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
// import InputField from '../InputField'; 
import fielddata from '../../../Data/fielddata.json';
import { InputFieldType } from '../../../types/Type';
import InputField from '../InputField';
import { roomItem } from '../../../types/Type';

interface ModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function Modal({ visible, onClose, room }: ModalProps  & { room: roomItem }) {
  const [listField, setListField] = useState<InputFieldType[]>(fielddata)
  
  return (
    <Dialog open={visible} onClose={onClose} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative block transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            {/* sm:my-8 sm:w-full sm:max-w-lg */}

            {/* <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                  <ExclamationTriangleIcon aria-hidden="true" className="size-6 text-red-600" />
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                    Deactivate account
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Are you sure you want to deactivate your account? All of your data will be permanently removed.
                      This action cannot be undone.
                    </p>
                  </div>
                </div>
              </div>
            </div> */}

            <div className='p-5'>
              <h1 className='bg-blue-100 text-blue-700 font-bold p-1'>Thông tin lưu trú</h1>
              <div className='w-[50%] flex flex-wrap gap-2'>
                {
                  listField[0].luutru.map((field) => {
                    return (
                      <>
                        <InputField field={field} roomItem={room}/>
                      </>
                    )
                  })
                }
              </div>
              <h1 className='bg-blue-100 text-blue-700 font-bold p-1 mt-4'>Thông tin khách</h1>
              <div className='w-[50%] flex flex-wrap gap-2'>
                {
                  listField[0].thongtin.map((field) => {
                    return (
                      <>
                        <InputField field={field} roomItem={room}/>
                      </>
                    )
                  })
                }
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-500 sm:ml-3 sm:w-auto"
                disabled
              >
                Nhận phòng
              </button>
              <button
                type="button"
                data-autofocus
                onClick={onClose}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Đóng
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}