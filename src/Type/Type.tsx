export type Room = {
    id: number,
    floor: number,
    nameRoom: string,
    typeRoom: string,
    quantity: number,
    status: boolean,
    nameGuest: string,
}

export type InputFieldType = {
    luutru:
        {
            fieldname: string,
            fieldtype: string,
            choose: boolean
        }[]
    ,
    thongtin: 
        {
            fieldname: string,
            fieldtype: string,
            choose: boolean
        }[]
    
}

export type Title = {
    TitleCode: string,
    Title: string,
    HotelID: string
}