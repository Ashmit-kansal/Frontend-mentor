import illustration from './assets/images/illustration-sign-up-mobile.svg';
import illustrationDesktop from './assets/images/illustration-sign-up-desktop.svg';
import iconList from './assets/images/icon-list.svg';


function App() {

  return (
    <>
      <main className='bg-blue-700 h-screen md:flex items-center justify-center'>
        <div className='bg-white md:max-w-2xl lg:max-w-4xl h-screen md:h-auto md:rounded-4xl lg:flex lg:flex-row-reverse items-center'>
        <div>
          <img className='w-full md:p-6 md:mt-4 rounded-t-[40px] lg:hidden' src={illustration} alt="illustration" />
          <img className='hidden lg:block h-full p-8' src={illustrationDesktop} alt='illustration' />
        </div>
        <div className='p-6 text-blue-800'>
          <h1 className='text-preset1-mobile'>Stay updated!</h1>
          <p className='text-preset2-regular my-5'>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul>
            <li className='flex items-start gap-4 mb-2 text-preset2-regular'><img src={iconList} alt='list-icon' />Product discovery and building what matters</li>
            <li className='flex items-start gap-4 mb-2 text-preset2-regular'><img src={iconList} alt='list-icon' />Measuring to ensure updates are a success</li>
            <li className='flex items-start gap-4 mb-2 text-preset2-regular'><img src={iconList} alt='list-icon' />And much more!</li>
          </ul>
          <form className='mt-8'>
            <label htmlFor="email" className='text-preset3'>Email address</label>
            <input className='block w-full p-3 border border-grey rounded-lg my-2' type="email" placeholder="Enter your email address" required />
            <button className='text-preset2-bold text-white bg-blue-800 w-full p-4 rounded-lg my-4' type="submit">Subscribe to monthly newsletter</button>
          </form>
        </div>
        </div>
      </main>
    </>
  )
}

export default App
