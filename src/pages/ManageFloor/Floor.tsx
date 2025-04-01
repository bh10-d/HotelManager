import data from '../../Data/fakedata.json';
import { Room } from '../../types/Type';
import { useState } from 'react';
import ButtonFloor from "./ButtonFloor";
import RoomItem from "./RoomItem";
import SekeletonRoom from "../../Sekeleton/SekeletonRoom";

const Floor = () => {

    const [listRoom, setListRoom] = useState<Room[]>(data)


    const groupByFloor = (rooms: Room[]): Record<number, Room[]> => {
        return rooms.reduce((acc, room) => {
          const { floor } = room;
          if (!acc[floor]) {
            acc[floor] = [];
          }
          acc[floor].push(room);
          return acc;
        }, {} as Record<number, Room[]>);
      };

    const groupedRooms = groupByFloor(listRoom);
    // console.log(groupedRooms);

    return (
        <>
            {
                Object.entries(groupedRooms).map(([floor, rooms]) => (
                        <ButtonFloor key={floor} floor={Number(floor)}>
                            <div className="flex flex-wrap flex-row items-stretch gap-4">
                                {
                                    rooms.map((room) => {
                                        return <RoomItem key={floor+room.id} roomItem={room} />
                                    })
                                    
                                }
                                {/* <SekeletonRoom/> */}
                            </div>
                        </ButtonFloor>
                ))
            }
        </>
    )
}

export default Floor;