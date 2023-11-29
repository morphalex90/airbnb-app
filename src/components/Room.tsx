import Image from "next/image";
import placeholder from '@/img/room.png';
import Link from "next/link";

function Room({ room }: { room: any }) {
    return (
        <div className="rooms__single">
            <Link href={room.uri}>
                <Image src={placeholder} alt={room.name} />
                <span className="rooms__single__name">{room.name}</span>
                <span className="rooms__single__city">{room.city?.name}</span>
            </Link>
        </div>
    );
}

export default Room;
