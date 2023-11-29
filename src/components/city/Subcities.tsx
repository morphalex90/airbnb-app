import Link from "next/link";
import City from "../City";

function Subcities({ subCities }: { subCities: any }) {

    return (
        <>
            <h3>Towns:</h3>
            <div className="cities">
                {subCities.map((subCity: any) =>
                    <City key={subCity.id} city={subCity} />
                )}
            </div>
        </>
    );
}

export default Subcities;
