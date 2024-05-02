import Card from '../Components/Card'

export default function Login() {

  const root = document.getElementById("root"); 
  root.setAttribute("class", "h-dvh flex bg-slate-50 dark:bg-slate-900");

  return (
    <main className="flex-1 flex justify-center">
      <Card className="w-60 self-center py-4">
        <form className="flex flex-col items-center justify-between gap-4">
          <div className="flex flex-col items-center">
            <img src="/app-icon.svg" className="size-20" />
            <p className='text-xl'>Log in to VBStat</p>
          </div>
          <p className='w-full p-2 text-center bg-red-600 text-white rounded'>Error Message</p>
          <div className="w-full flex flex-col justify-between items-stretch gap-2">
            <input type="text" className="p-2 bg-inherit border border-slate-400 dark:border-slate-500 focus:border-blue-800 dark:focus:border-blue-800 rounded focus:outline focus:outline-blue-800 dark:focus:outline-blue-800 focus:ring-0" placeholder="Username"/>
            <input type="password" className="p-2 bg-inherit border border-slate-400 dark:border-slate-500 focus:border-blue-800 dark:focus:border-blue-800 rounded focus:outline focus:outline-blue-800 dark:focus:outline-blue-800 focus:ring-0" placeholder="Password"/>
          </div>
          <button className="w-full p-2 text-white bg-blue-800 rounded hover:bg-blue-900">Sign in</button>
          <div className="w-full flex flex-col justify-between items-center gap-2">
            <a href="" className='text-xs hover:underline hover:decoration-dashed'>Forgot password?</a>
            <p href="" className='text-xs'>Contact admin for a new account</p>
          </div>
        </form>
      </Card>
    </main>
  )
}