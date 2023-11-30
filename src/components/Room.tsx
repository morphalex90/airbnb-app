import Image from "next/image";
import placeholder from '@/img/room.png';
import Link from "next/link";

function Room({ room }: { room: any }) {
    return (
        <div className="rooms__single">
            <Link href={room.uri}>
                <Image src={(room.image ? room.image.url : placeholder)} alt={room.name} fill={true} unoptimized />
                <span className="rooms__single__text">
                    <span className="rooms__single__city">{room.city?.name}</span>
                    <span className="rooms__single__name">{room.name}</span>
                </span>
            </Link>
        </div>
    );
}

export default Room;
