export type Room = {
    id: number,
    floor: number,
    nameRoom: string,
    typeRoom: string,
    quantity: number,
    status: boolean,
    nameGuest: string,
}

export type roomItem = {
    typeRoom: string,
    nameGuest: string,
    status: boolean
}

export type InputFieldType = {
    luutru:
        {
            fieldname: string,
            fieldtype: string,
            tag: string,
            choose: boolean,
            money: boolean,
            placeholder: string,
            require: boolean
        }[]
    ,
    thongtin: 
        {
            fieldname: string,
            fieldtype: string,
            tag: string,
            choose: boolean,
            money: boolean,
            placeholder: string,
            require: boolean
        }[]
    
}

export type Title = {
    TitleCode: string,
    Title: string,
    HotelID: string
}