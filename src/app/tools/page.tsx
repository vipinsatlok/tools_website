import { data } from "@/data/tools"
import Link from "next/link"

export default function page() {

    return (
        <div>
            {
                data.map(tool => <Link key={tool.slug} href={`/tools/${tool.slug}`}>{tool.title}</Link>)
            }
        </div>
    )
}
