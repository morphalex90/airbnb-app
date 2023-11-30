import React, { useState } from 'react'
import Link from 'next/link'
import axios from '@/lib/axios'
import Section from '@/components/Section'
import Layout from '@/components/Layout'
import { useCookies } from 'react-cookie';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios
      .post('/api/v1/auth/login', form)
      .then((response) => {
        if (response.status === 200) { // correct credentials
          setCookie('access_token', response.data.access_token, { expires: new Date(response.data.expires_at) });
          window.location.href = '/account';
        }
        // setIsLoading(false);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        // setIsLoading(false);
      });
  }

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prevalue => ({ ...prevalue, [e.target.name]: e.target.value }))
  };

  return (
    <Layout page="login">
      <Section>
        <form className="form" onSubmit={handleLogin}>
          <div className="form__field">
            <label htmlFor="email">Email *</label>
            <input type="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
          </div>

          <div className="form__field">
            <label htmlFor="password">Password *</label>
            <input type="password" name="password" placeholder="••••••••" value={form.password} onChange={handleChange} required />
          </div>

          <button type="submit">Login</button>
        </form>
      </Section>
    </Layout>
  )
}

export const getServerSideProps = async (ctx: any) => {
  const accessToken = ctx.req.cookies.access_token;

  if (accessToken !== undefined)
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
