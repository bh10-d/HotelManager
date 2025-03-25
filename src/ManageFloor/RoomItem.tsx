// import { Room } from "./Type/Type"
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import Modal from "../Modal/Modal";
import { useState } from "react";

interface roomItem {
    typeRoom: string,
    nameGuest: string,
    status: boolean
}

const RoomItem = ({roomItem}:{roomItem:roomItem}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    // const toggleModal = () => setIsModalOpen(!isModalOpen);
    // console.log(isModalOpen);
    const handleModalClose = () => {
        setIsModalOpen(false);
      };
    
    return (
        <>
            <div className="w-[300px] h-[100px] border-gray-200 border border-dashed rounded-md block relative bg-white">
                <div className="pt-1 pl-4">
                    <h2 className="font-bold">{roomItem.nameGuest}</h2>
                    <h2 className="text-xs">{roomItem.typeRoom}</h2>
                </div>
                <div className="flex w-full h-[50%] justify-items-center justify-center items-center border-t border-gray-300 border-dashed pt-1">
                    <div className="w-[50%] pl-1">
                        {
                            (roomItem.status)?
                            <div className="w-[80%] flex rounded-full border bg-green-100 text-green-500 font-light justify-center items-center ml-3">
                                <div className="w-[5px] h-[5px] rounded bg-green-500"></div>
                                <p className="pl-1">Ready</p>
                            </div>
                            :
                            <div className="w-[80%] flex rounded-full border bg-red-100 text-red-500 font-light justify-center items-center ml-3">
                                <div className="w-[5px] h-[5px] rounded bg-red-500"></div>
                                <p className="pl-1">Not Ready</p>
                            </div>
                        }
                    </div>
                    <div className="w-[50%] h-[90%] justify-items-center pt-2 border-l border-gray-300 border-dashed">
                        <button
                            className="w-full h-full cursor-pointer flex justify-center"
                            onClick={()=>{setIsModalOpen(true)}}
                        >
                                <InformationCircleIcon className="h-6 w-6 text-gray-500"/>
                                <p>Detail</p>
                        </button>
                        <Modal visible={isModalOpen} onClose={handleModalClose}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RoomItem;