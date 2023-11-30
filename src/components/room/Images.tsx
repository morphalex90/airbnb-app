import Link from 'next/link';
import Image from 'next/image';
import Section from '@/components/Section';
import marker from '@/img/marker.svg';
import placeholder from '@/img/room.png';

function Images({ room }: { room: any }) {

    const addToLiked = (room_id: number) => {
        alert('Work in progress');
    }

    return (
        <>
            <div className="room__images">
                <div><Image src={placeholder} alt="Main picture" /></div>
                <div><Image src={placeholder} alt="Main picture" /></div>
            </div>

            <Section style={{ marginTop: '-100px', height: 100, position: 'relative' }}>
                <div className="d-flex">
                    <div>
                        <h1>{room.name}</h1>
                        <div><Image src={marker} alt="Location" width={30} /> Location: <Link href={room.city.uri}>{room.city.name}</Link></div>
                    </div>
                    <div>
                        <ul className="share-buttons">
                            <li><button type="button" onClick={() => addToLiked(room.id)}>&hearts;</button></li>
                            <li><Link href={'https://www.facebook.com/sharer/sharer.php?href=' + encodeURIComponent(process.env.NEXT_PUBLIC_APP_URL + room.uri)} target="_blank">Facebook</Link></li>
                            <li><Link href={'https://twitter.com/share?url=' + encodeURIComponent(process.env.NEXT_PUBLIC_APP_URL + room.uri)} target="_blank">Twitter</Link></li>
                            <li><Link href={'https://www.linkedin.com/shareArticle?url=' + encodeURIComponent(process.env.NEXT_PUBLIC_APP_URL + room.uri)} target="_blank">LinkedIn</Link></li>
                            <li><Link href={'https://pinterest.com/pin/create/button/?url=' + encodeURIComponent(process.env.NEXT_PUBLIC_APP_URL + room.uri)} target="_blank">Pinterest</Link></li>
                            <li><Link href={'https://reddit.com/submit?url=' + encodeURIComponent(process.env.NEXT_PUBLIC_APP_URL + room.uri)} target="_blank">Reddit</Link></li>
                            <li><Link href={'https://api.whatsapp.com/send?text=' + encodeURIComponent(process.env.NEXT_PUBLIC_APP_URL + room.uri)} target="_blank">WhatsApp</Link></li>
                            <li><Link href={'mailto:?Subject=' + room.name + '&body=' + encodeURIComponent(process.env.NEXT_PUBLIC_APP_URL + room.uri)}>Mail</Link></li>
                        </ul>
                    </div>
                </div>
            </Section>
        </>
    );
}

export default Images;
