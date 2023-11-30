import React, { useState } from 'react'
import Link from 'next/link'
import axios from '@/lib/axios'
import Section from '@/components/Section'
import Layout from '@/components/Layout'

export default function Register() {
  const [form, setForm] = useState({ first_name: '', last_name: '', username: '', email: '', password: '', password_confirmation: '' });

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios
      .post('/api/v1/auth/register', form)
      .then((response) => {
        if (response.status === 201) { // correct credentials
          window.location.href = '/login';
        }
        // setIsLoading(false);
        // console.log(response.data);
      })
      .catch((error) => {
        alert(error);
        // setIsLoading(false);
      });
  }

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prevalue => ({ ...prevalue, [e.target.name]: e.target.value }))
  };

  return (
    <Layout page="login">
      <Section>
        <form className="form" onSubmit={handleRegister}>
          <div className="form__field">
            <label htmlFor="email">Email *</label>
            <input type="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
          </div>

          <div className="form__field">
            <label htmlFor="password">Password *</label>
            <input type="password" name="password" placeholder="••••••••" value={form.password} onChange={handleChange} required />
          </div>

          <div className="form__field">
            <label htmlFor="password_confirmation">Password confirmation *</label>
            <input type="password" name="password_confirmation" placeholder="••••••••" value={form.password_confirmation} onChange={handleChange} required />
          </div>

          <div className="form__field">
            <label htmlFor="first_name">First name</label>
            <input type="text" name="first_name" placeholder="John" value={form.first_name} onChange={handleChange} />
          </div>

          <div className="form__field">
            <label htmlFor="last_name">Last name</label>
            <input type="text" name="last_name" placeholder="Doe" value={form.last_name} onChange={handleChange} />
          </div>

          <div className="form__field">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="johndoe" value={form.username} onChange={handleChange} />
          </div>

          <button type="submit">Register</button>
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
