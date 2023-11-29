// import Link from 'next/link'
import Link from 'next/link';
import Image from 'next/image';
import Section from '@/components/Section'
import Layout from '@/components/Layout'
// import hero from '@/img/hero.png'

// export const dynamic = 'force-dynamic'

export default function Index() {

  const pets = [
    'Cat',
    'Dog',
    'Fish',
    'Rabbit',
  ];

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
          {pets.map((pet, id) =>
            <div key={id} className="text-center" style={{ backgroundColor: 'lightgrey', borderRadius: 10, padding: 30 }}>{pet}</div>
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
