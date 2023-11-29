import Link from "next/link";

function Rooms({ rooms }: { rooms: any }) {

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
            <h3>Rooms</h3>
            <ul>
                {rooms.data.map((room: any) =>
                    <li key={room.id}><Link href={room.uri}>{room.name}</Link></li>
                )}
            </ul>

            <div className="pagination">
                <ul className="pagination__list">
                    {rooms.links.map((page: any) =>
                        <li key={page.label}>
                            <button className={page.active === true ? 'is-active' : ''} type="button" disabled={rooms.current_page === page.label} onClick={() => paginate(page.url)}>{page.label}</button>
                        </li>
                    )}
                </ul>
            </div>
        </>
    );
}

export default Rooms;
