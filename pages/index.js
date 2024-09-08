import HeadObject from '../components/head'
import Nav from '../components/nav';

export default function Home() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if(storedTheme) {
      document.documentElement.classList.add(storedTheme);
      setTheme(storedTheme);
    } else {
      const defaultTheme = 'light';
      document.documentElement.classList.add(defaultTheme);
      setTheme(defaultTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark'? 'light' : 'dark';
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  }
  
  return (
    <div className="dark:text-white dark:bg-black">
      <HeadObject>
        {/* You can put extra tags in here, or leave it blank */}
      </HeadObject>
      <Nav />
      <div class="flex flex-row p-12 text-light-text font-bold text-7xl">
        <div class="flex-1 flex flex-col ml-5 mr-55">
          <h1 className="flex-1">Hi! I'm Andrea.</h1> <br></br>
          <div class="font-normal text-white text-xl">
            <h2>I'm a 16 year old hacker from California. I like computers and cells. </h2>
            <br></br>
            <h2>Acessible education is really important to me. I also strongly believe in pursuing math and making as an art. </h2>
            <h2>I'm currently building related projects and research! Check out the other tabs to see what I've been up to. </h2> 
            <br></br>
            <h3>Outside of that, I'm an ardent lover of Studio Ghibli, Stardew Valley, Nintendo, and boba. I find any and all things fascinating, and I'm always happy to share a good conversation with someone. </h3>
          </div>
          <div class="font-semibold text-light-light text-3xl mt-12">
            <h1>see you around!</h1>
          </div>
        </div>
        <div className="flex flex-row flex-1 ml-20 h-[500px]">
          <img class="h-full rounded-lg" src="/kodaka.jpg" alt="Kodaka" />
          <img class="h-full rounded-lg" src="/zeldaish.png" alt="Zeldaish" />
        </div>
      </div>
    </div>
  )
}
