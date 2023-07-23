import Link from 'next/link'

export default function Nav() {

    return (
        <nav className='flex gap-5'>
            <Link href={"/tools"}>Tools</Link>
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Contact</Link>
            <Link href={"/"}>Privacy Policy</Link>
        </nav>
    )
}
