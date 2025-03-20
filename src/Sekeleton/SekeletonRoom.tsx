import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

const SekeletonRoom = () => {

    return (
        <>
            <div className="w-[300px] h-[100px] relative">
                <div className="w-[300px] h-[100px] border-gray-200 border border-dashed rounded-md block bg-white absolute">
                    <div className="pt-1 pl-4">
                        <h2 className="font-bold">Guest Name</h2>
                        <h2 className="text-xs">Room Type</h2>
                    </div>
                    <div className="flex w-full h-[50%] justify-items-center justify-center items-center border-t border-gray-300 border-dashed pt-1">
                        <div className="w-[50%] pl-1">
                                <div className="w-[80%] flex rounded-full border bg-red-100 text-red-500 font-light justify-center items-center ml-3">
                                    <div className="w-[5px] h-[5px] rounded bg-red-500"></div>
                                    <p className="pl-1">Not Ready</p>
                                </div>
                        </div>
                        <div className="w-[50%] h-[90%] justify-items-center pt-2 border-l border-gray-300 border-dashed">
                            <div className="flex justify-center">
                                <InformationCircleIcon className="h-6 w-6 text-gray-500" />
                                <button className="cursor-pointer">Detail</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[300px] h-[100px] overlay absolute bg-gray-300/75 flex items-center justify-center">
                    <button className="cursor-pointer"><PlusCircleIcon className="h-10 w-10 text-gray-500" /></button>
                </div>
            </div>
        </>
    )
}

export default SekeletonRoom;