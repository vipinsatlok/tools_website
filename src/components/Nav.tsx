import Link from 'next/link'

export default function Nav() {

    return (
        <nav className='gap-5 hidden md:flex'>
            <Link href={"/tools"}>Tools</Link>
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Contact</Link>
            <Link href={"/"}>Privacy Policy</Link>
        </nav>
    )
}
