import { useState } from 'react';
import Head from 'next/head';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axios from '@/lib/axios';
import Layout from '@/components/Layout';
import artistImgPlaceholder from '@/img/logo.png';
import Section from '@/components/Section';
import Rooms from '@/components/city/Rooms';
import Subcities from '@/components/city/Subcities';

function City({ city, subCities, rooms }: { city: any, subCities: any, rooms: any }) {
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
    //             "url": (sdArtist.image && sdArtist.image !== '' && sdArtist.image !== null ? sdArtist.image : artistImgPlaceholder.src)
    //         },
    //         "image": {
    //             "@type": "ImageObject",
    //             "url": (sdArtist.image && sdArtist.image !== '' && sdArtist.image !== null ? sdArtist.image : artistImgPlaceholder.src)
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
                <link rel="canonical" href={city ? process.env.NEXT_PUBLIC_APP_URL + city.uri : ''} />
                <title>{city && `${city.name} | Airbnb`}</title>
                <meta name="description" content={city ? 'This page displays all data you need to buy ' + city.name + ' NFTs. Analyse, explore and research the best music NFTs' : ''} />

                <meta property="og:type" content="profile" />
                <meta property="og:title" content={city.name} />
                <meta property="og:description" content={city ? 'This page displays all data you need to buy ' + city.name + ' NFTs. Analyse, explore and research the best music NFTs' : ''} />
                <meta property="og:image" content={(city?.image !== '' && city?.image !== null ? city.image : artistImgPlaceholder.src)} />
                <meta property="og:url" content={process.env.NEXT_PUBLIC_APP_URL + '/artist/' + city.url} />

                {/* <link rel="preload" as="image" href={artist?.image !== '' && artist?.image !== null ? artist.image : artistImgPlaceholder.src} /> */}

                {/* <script key={'artistJSON-' + city.id} type='application/ld+json' dangerouslySetInnerHTML={{ __html: structuredDataArtist(city) }} /> */}
            </Head>

            <Layout page="city">
                <Section>
                    <h1>{city.name}</h1>
                    <h2>{city.description || 'Future city description with many and long words'}</h2>
                </Section>

                <Section>
                    {subCities.length > 0 &&
                        <Subcities subCities={subCities} />
                    }

                    {rooms?.data?.length > 0 &&
                        <Rooms rooms={rooms} />
                    }
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
    let city = null;
    let subCities = null;
    let rooms = null;

    await axios
        .get('/api/v1/cities/' + context.params.city_url)
        .then((response) => {
            city = response.data.city;
            subCities = response.data.sub_cities;
            rooms = response.data.rooms;
            // console.log(response.data);
        })
        .catch((error) => {
            // console.error(error);
        });

    if (city === null) {
        return {
            notFound: true
        };
    }

    return {
        props: {
            city,
            subCities,
            rooms,
        },
    }
}

export default City;
