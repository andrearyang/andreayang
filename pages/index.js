import HeadObject from '../components/head'
import Nav from '../components/nav';

export default function Home() {
  return (
    <div className="dark:text-white dark:bg-black">
      <HeadObject>
        {/* You can put extra tags in here, or leave it blank */}
      </HeadObject>
      <Nav />
      <div class="p-8 text-light-text font-bold text-7xl">
        <h1>Hi! I'm Andrea.</h1>
        <div class="font-normal text-white text-xl">
          <br></br>
          <h2>I'm a 16 year old hacker from California. I like computers and cells. </h2>
          <br></br>
          <h2>Acessible education is really important to me. I also strongly believe in pursuing math and making as an art. </h2>
          <h2>I'm currently building related projects and research. Contact me at andrea [at] angelhacks [dot] org. </h2> 
        </div>
        <div class="font-semibold text-light-light text-3xl">
          <br></br>
          <h1>see you around :)</h1>
        </div>
      </div>
    </div>
  )
}
