import Link from "next/link";

function City({ city }: { city: any }) {
    return (
        <div className="cities__single">
            <Link href={city.uri} title={city.rooms + ' Airbnb in ' + city.name}>{city.name} ({city.rooms})</Link>
        </div>
    );
}

export default City;
