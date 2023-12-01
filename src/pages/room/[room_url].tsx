import { useState } from 'react';
import Head from 'next/head';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axios from '@/lib/axios';
import Layout from '@/components/Layout';
import placeholder from '@/img/room.png';
import Section from '@/components/Section';

import dynamic from "next/dynamic"
import Images from '@/components/room/Images';
import Amenities from '@/components/room/Amenities';
import Similar from '@/components/room/Similar';
import Image from 'next/image';
const Map = dynamic(() => import('@/components/room/Map'), { ssr: false })


function Room({ room }: { room: any }) {
    // const [isLoading, setIsLoading] = useState(false);

    const ucfirst = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

    // const structuredDataArtist = (sdArtist: any) => {
    //     const data = {
    //         "@context": "http://schema.org",
    //         "@type": "MusicGroup",
    //         "@id": (process.env.NEXT_PUBLIC_APP_URL + '/artist/' + sdArtist.url),
    //         "name": sdArtist.name,
    //         "description": "This page displays all data you need to buy " + sdArtist.name + " NFTs. Analyse, explore and research the best music NFTs",
    //         "logo": {
    //             "@type": "ImageObject",
    //             "url": (sdArtist.image && sdArtist.image !== '' && sdArtist.image !== null ? sdArtist.image : placeholder.src)
    //         },
    //         "image": {
    //             "@type": "ImageObject",
    //             "url": (sdArtist.image && sdArtist.image !== '' && sdArtist.image !== null ? sdArtist.image : placeholder.src)
    //         },
    //         "url": (process.env.NEXT_PUBLIC_APP_URL + '/artist/' + sdArtist.url),
    //         "genre": sdArtist.react_genres?.map((genre: any) => ucfirst(genre.name)),
    //         // "sameAs": sdArtist.socials.map((social: any) => social.url)
    //     };
    //     return JSON.stringify(data);
    // };

    return (
        <>
            <Head>
                <link rel="canonical" href={room ? process.env.NEXT_PUBLIC_APP_URL + room.uri : ''} />
                <title>{room && `${room.name} | Airbnb`}</title>
                <meta name="description" content={room ? 'This page displays all data you need to buy ' + room.name + ' NFTs. Analyse, explore and research the best music NFTs' : ''} />

                <meta property="og:type" content="profile" />
                <meta property="og:title" content={room.name} />
                <meta property="og:description" content={room ? 'This page displays all data you need to buy ' + room.name + ' NFTs. Analyse, explore and research the best music NFTs' : ''} />
                <meta property="og:image" content={(room?.image !== '' && room?.image !== null ? room.image : placeholder.src)} />
                <meta property="og:url" content={process.env.NEXT_PUBLIC_APP_URL + room.uri} />

                {/* <link rel="preload" as="image" href={artist?.image !== '' && artist?.image !== null ? artist.image : placeholder.src} /> */}

                {/* <script key={'artistJSON-' + room.id} type='application/ld+json' dangerouslySetInnerHTML={{ __html: structuredDataArtist(room) }} /> */}
            </Head>

            <Layout page="room">
                {/* <Section> */}
                <Images room={room} />
                {/* </Section> */}

                <Section>
                    <div className="d-flex">
                        <div>
                            <div>Rated 4.68 out of 5 stars. 4.68 49 reviews</div>
                            <div>Guests: {room.guests}</div>
                            <div>Bedrooms: {room.bedrooms}</div>
                            <div>Beds: {room.beds}</div>
                            <div>Bathrooms: {room.bathrooms}</div>
                            <br />
                            <div>Are you the owner? Take ownership here! [create page to link to]</div>
                            <br />
                            <div>
                                <div>Host:</div>
                                {room.hosts.map((host: any) =>
                                    <>
                                        <div key={host.id}>{host.airbnb_host_name}</div>
                                        <div><Image src={host.image ? host.image.url : placeholder} alt={host.airbnb_host_name} height={400} width={400} unoptimized /></div>
                                    </>
                                )}
                            </div>

                            <br />
                            <div dangerouslySetInnerHTML={{ __html: (room.description || '') }}></div>
                        </div>
                        <div>
                            Book with us! [add datepicker and stuff]
                        </div>

                    </div>

                </Section>

                <Section>
                    <div className="d-flex">
                        <div>
                            <Amenities amenities={room.amenities} />
                        </div>
                        <div>
                            [ads]
                        </div>
                    </div>
                </Section>

                <Section>
                    <Map lat={room.latitude} long={room.longitude} />
                </Section>

                <Section>
                    <Similar similar={room.similar} />
                </Section>
            </Layout>
        </>
    );
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking',
    }
}

export async function getStaticProps(context: any) {
    let room = null;

    await axios
        .get('/api/v1/rooms/' + context.params.room_url)
        .then((response) => {
            room = response.data.room;
            // console.log(response.data);
        })
        .catch((error) => {
            console.error(error.response.data);
        });

    if (room === null) {
        return {
            notFound: true
        };
    }

    return {
        props: {
            room,
        },
    }
}

export default Room;
