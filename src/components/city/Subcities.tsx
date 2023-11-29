import Link from "next/link";

function Subcities({ subCities }: { subCities: any }) {

    const paginate = (next: any) => {
        let nextPage = null;

        if (next == null) {
            nextPage = 1;
        } else {
            nextPage = next.substr(next.lastIndexOf("=") + 1);
        }
        console.log(nextPage);
    }

    return (
        <>
            <h3>Towns:</h3>
            <ul>
                {subCities.data.map((subCity: any) =>
                    <li key={subCity.id}><Link href={subCity.uri}>{subCity.name}</Link></li>
                )}
            </ul>

            <div className="pagination">
                <ul className="pagination__list">
                    {subCities.links.map((page: any) =>
                        <li key={page.label}>
                            <button className={page.active === true ? 'is-active' : ''} type="button" disabled={subCities.current_page === page.label} onClick={() => paginate(page.url)}>{page.label}</button>
                        </li>
                    )}
                </ul>
            </div>
        </>
    );
}

export default Subcities;
