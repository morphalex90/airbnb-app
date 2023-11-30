import Head from 'next/head';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import clientAxiosInstance from '@/lib/axios';
import Section from '@/components/Section'
import Layout from '@/components/Layout'
import hero from '@/img/hero.png'
import Room from '@/components/Room';
import Rooms from '@/components/city/Rooms';

export default function Index() {
	const [cities, setCities] = useState([]);
	const [rooms, setRooms] = useState([]);

	useEffect(() => {
		getCities();
		getRooms();
	}, []);

	const getCities = async () => {
		// setIsLoading(true);
		await clientAxiosInstance
			.get('/api/v1/cities')
			.then((response) => {
				setCities(response.data.cities.data);
				// setIsLoading(false);
				// console.log(response.data.page);
			})
			.catch((error) => {
				// if (error.response && error.response.data && error.response.data.message) {
				// 	setMessage({ text: error.response.data.message, status: 'error' });
				// } else {
				// 	setMessage({ text: 'Page not correctly loaded', status: 'error' });
				// }
				// setIsLoading(false);
			});
	}

	const getRooms = async () => {
		// setIsLoading(true);
		await clientAxiosInstance
			.get('/api/v1/rooms')
			.then((response) => {
				setRooms(response.data.rooms);
				// setIsLoading(false);
				// console.log(response.data.page);
			})
			.catch((error) => {
				// if (error.response && error.response.data && error.response.data.message) {
				// 	setMessage({ text: error.response.data.message, status: 'error' });
				// } else {
				// 	setMessage({ text: 'Page not correctly loaded', status: 'error' });
				// }
				// setIsLoading(false);
			});
	}

	return (
		<>
			<Head>
				<link rel="canonical" href={process.env.NEXT_PUBLIC_APP_URL} />
				<title>Airbnb homepage</title>
				<meta name="description" content="Homepage description" />

				<meta property="og:type" content="profile" />
				<meta property="og:title" content="Airbnb homepage" />
				<meta property="og:description" content="Homepage description" />
				<meta property="og:image" content="" />
				<meta property="og:url" content={process.env.NEXT_PUBLIC_APP_URL} />

				{/* <link rel="preload" as="image" href={artist?.image !== '' && artist?.image !== null ? artist.image : placeholder.src} /> */}

				{/* <script key={'artistJSON-' + room.id} type='application/ld+json' dangerouslySetInnerHTML={{ __html: structuredDataArtist(room) }} /> */}
			</Head>

			<Layout page="home">
				<Section style={{ marginBottom: 30, backgroundImage: 'url(' + hero.src + ')', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', aspectRatio: '21/9' }}>
					<div className="d-flex" style={{ height: '100%' }}>
						<div></div>

						<div className="vertical-align">
							<div style={{ backgroundColor: 'rgba(255,255,255,0.4)', padding: 20, borderRadius: 5 }}>
								<h1>We are ready to help you say goodbye to your beloved pets</h1>
								<h2>Feel free to add any details possible</h2>
								<p>We understand how it can be sad to not have them around anymore, we are here to support you</p>
								<br />
								<div><Link href="/login" className="button">Join us now!</Link></div>
							</div>
						</div>
					</div>
				</Section>

				<Section style={{ marginBottom: 30 }}>
					<h3 className="text-center">Our biggest cities</h3>
					<div className="d-flex">
						{cities.map((city: any) =>
							<div key={city.id} className="text-center" style={{ backgroundColor: 'lightgrey', borderRadius: 10, padding: 30 }}><Link href={city.uri}>{city.name}</Link></div>
						)}
					</div>
				</Section>

				<Section>
					<h3 className="text-center">Latest added rooms</h3>
					<Rooms rooms={rooms} pagination={false} />
				</Section>
			</Layout>
		</>
	)
}
