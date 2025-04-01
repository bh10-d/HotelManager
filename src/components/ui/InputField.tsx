import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { roomItem } from '../../types/Type'

interface fieldInput {
    fieldname: string,
    fieldtype: string,
    tag: string,
    choose: boolean,
    money: boolean,
    placeholder: string,
    require: boolean
}

export default function InputField({ field, roomItem }: { field: fieldInput } & {roomItem:roomItem}) {
    return (
        <div>
            <label htmlFor={field.fieldname} className="block text-sm/6 font-medium text-gray-900">
                {field.fieldname}
            </label>
            <div className="mt-2">
                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                    {/* <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">$</div> */}
                    {
                        (field.tag == "input") ?
                            <input
                                id={field.fieldname}
                                name={field.fieldname}
                                type={field.fieldtype}
                                placeholder={field.placeholder}
                                required={field.require}
                                className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                value={roomItem.typeRoom}
                            /> :
                            <textarea style={{ width: "200px", height: "36px" }} />
                    }

                    {
                        (field.choose) ?
                            <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                                <select
                                    id="currency"
                                    name="currency"
                                    aria-label="Currency"
                                    className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-7 pl-3 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                >
                                    <option value="" selected disabled>-- Chọn --</option>
                                    <option>USD</option>
                                    <option>VNĐ</option>
                                </select>
                                <ChevronDownIcon
                                    aria-hidden="true"
                                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                />
                            </div>
                            :
                            <div></div>
                    }

                </div>
            </div>
        </div>
    )
}