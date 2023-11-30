function Amenities({ amenities }: { amenities: any }) {

    return (
        <>
            <h3>Amenities</h3>
            <ul>
                {amenities?.map((amenity: any) =>
                    <li key={amenity.id}>{amenity.name}</li>
                )}
            </ul>
        </>
    );
}

export default Amenities;
