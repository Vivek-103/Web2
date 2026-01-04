import Link from "next/link"

export default function Home(){
  return (
  <div className="text-lg w-screen h-screen flex items-center justify-center">
    To do application
    <div>
    <br></br>
    <button><br></br>
    <Link href="/signin"> Signin</Link><br></br>
    <Link href="/signup"> Signup</Link><br></br>
    </button>
    </div>
    
  </div>
  )
}