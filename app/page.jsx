// import StyleGuide from '@/components/StyleGuide';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import Reservation from '@/components/Reservation';
import About from '@/components/About';
import Map from '@/components/Map';
import Footer from '@/components/Footer';

async function fetchData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/data`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Home() {
  const data = await fetchData();

  return (
    <main className='w-full max-w-[1440px] bg-white mx-auto overflow-hidden'>
      <Header />
      <Hero />
      <Menu />
      <Reservation />
      <About text_about = {data.aboutText} />
      <Map />
      <Footer />
      {/* <StyleGuide /> */}
      {/* <div className='h-[4000px]'></div> */}
    </main>
  );
}

// export async function getStaticProps() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/data`);
//   const data = await res.json();

//   return {
//     props: {
//       aboutText: data.about || '',
//       menus: data.menus || [],
//     },
//     revalidate: 60, // rebuild page setiap 60s
//   };
// }