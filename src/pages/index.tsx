import { useEffect, useState } from 'react';
import Link from 'next/link';
import Section from '@/components/Section'
import Layout from '@/components/Layout'
import clientAxiosInstance from '@/lib/axios';
// import hero from '@/img/hero.png'

export default function Index() {
	const [cities, setCities] = useState([]);

	useEffect(() => {
		getCities();
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

	return (
		<Layout page="home">
			{/* <Section>
        {user ? (
        <div>
          Hey, {user.email}!
        </div>
      ) : (
        <Link href="/login" className="button">Login</Link>
      )}
      </Section> */}
			<Section style={{ marginBottom: 30, backgroundColor: 'lightgrey' }}>
				<div className="d-flex">
					{/* <Image src={hero} alt="Hero" priority /> */}

					<div className="vertical-align">
						<h1>We are ready to help you say goodbye to your beloved pets</h1>
						<h2>Feel free to add any details possible</h2>
						<p>We understand how it can be sad to not have them around anymore, we are here to support you</p>
						<div><Link href="/login" className="button">Join us now!</Link></div>
					</div>
				</div>
			</Section>

			<Section style={{ marginBottom: 30 }}>
				<div className="d-flex">
					{cities.map((city: any) =>
						<div key={city.id} className="text-center" style={{ backgroundColor: 'lightgrey', borderRadius: 10, padding: 30 }}><Link href={city.uri}>{city.name}</Link></div>
					)}
				</div>
			</Section>

			<Section>
				<h2 className="text-center">Latest uploaded images</h2>

				<div className="d-flex">
					{/* {pets.map((pet, id) =>
            <div key={id} style={{ borderRadius: 15, overflow: 'hidden' }}><Image src={hero} alt={pet} /></div>
          )} */}
				</div>
			</Section>
		</Layout>
	)
}
