import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import Link from 'next/link'
import axios from '@/lib/axios'
import Section from '@/components/Section'
import Layout from '@/components/Layout'

export default function Logout() {
  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);

  useEffect(() => {
    handleLogout();
  }, []);

  const handleLogout = async () => {

    axios
      .get('/api/v1/auth/logout')
      .then((response) => {
        if (response.status === 200) { // correct credentials
          removeCookie('access_token');
          window.location.href = '/login';
        }
        // setIsLoading(false);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        // setIsLoading(false);
      });
  }

  return (
    <Layout page="logout">
      <Section>
        <div>Logout....</div>
      </Section>
    </Layout>
  )
}

export const getServerSideProps = async (ctx: any) => {
  const accessToken = ctx.req.cookies.access_token;

  if (accessToken === undefined)
    return {
      redirect: {
        destination: '/account',
        permanent: false,
      },
    }

  return {
    props: {
      // initialSession: session,
      // user: session.user,
    },
  }
}
