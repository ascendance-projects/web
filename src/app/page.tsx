import Cards from '~/features/homepage/components/Cards'
import FAQ from '~/features/homepage/components/FAQ'
import Hero from '~/features/homepage/components/Hero'
import Team from '~/features/homepage/components/Team'
import WeAreResponsible from '~/features/homepage/components/WeAreResponsible'
import Contact from '~/features/homepage/components/Contact'
import WeLovePartnerships from '~/features/homepage/components/WeLovePartnerships'

export default function Home () {
  return (
    <main className="">
      <Hero/>
      <Cards/>
      <Team/>
      <WeAreResponsible/>
      <FAQ/>
      <WeLovePartnerships/>
      <Contact/>
    </main>
  )
}
