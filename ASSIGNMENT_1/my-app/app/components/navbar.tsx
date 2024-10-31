import Link from "next/link";

const Navbar= ()=>{
   return (
    <nav>
        <ul>
            <li><Link href={"http://localhost:3000/pages/about"}>about</Link></li>
            <li><Link href={"http://localhost:3000/pages/contact_us"}>Contact_us</Link></li>
            <li><Link href={"http://localhost:3000/pages/services"}>services</Link></li>
        </ul>
        
    </nav>
   )
   
}

export default Navbar;