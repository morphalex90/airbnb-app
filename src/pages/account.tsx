import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Section from '@/components/Section'
import Layout from '@/components/Layout'
import axios from '@/lib/axios'

export default function Account({ user }: { user: any }) {
  const [pet, setPet] = useState({ name: '', });
  const [rooms, setRooms] = useState(user.rooms);

  // const handlePetSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   axios
  //     .post('/api/v1/pets', pet)
  //     .then((response) => {
  //       setPets([...pets, response.data.pet]);
  //       // setIsLoading(false);
  //       // console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       // setIsLoading(false);
  //     });
  // }

  // const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setPet(prevalue => ({ ...prevalue, [e.target.name]: e.target.value }))
  // };

  return (
    <Layout page="account">
      <Head>
        <title>Account</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Section>
        <div>Welcome back {user.email}</div>

        <br />
        {/* <form onSubmit={handlePetSubmit}>
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" value={pet.name} onChange={handleChange} required />
          </div>

          <button type="submit" className="button">Create new pet</button>
        </form> */}


        <ul className="">
          {rooms?.map((tmpPet: any) => (
            <li key={tmpPet.id}><Link href={tmpPet.uri}>{tmpPet.name}</Link></li>
          ))}
        </ul>
      </Section>
    </Layout>
  )
}

export const getServerSideProps = async (ctx: any) => {
  const accessToken = ctx.req.cookies.access_token;
  let user = null;

  if (accessToken === undefined) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  await axios
    .get(process.env.NEXT_PUBLIC_API_URL + '/api/v1/auth/user', {
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        Authorization: 'Bearer ' + ctx.req.cookies.access_token,
      }
    })
    .then((response) => {
      user = response.data.user;
      // console.log(response.data);
    })
    .catch((error) => {
      console.error(error.response.data);
    });


  return {
    props: {
      user,
    },
  }
}