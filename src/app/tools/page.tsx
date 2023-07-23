import { data } from "@/data/tools"
import Link from "next/link"

export default function page() {

    return (
        <div>
            {
                data.map(tool => <Link href={`/tools/${tool.slug}`}>{tool.title}</Link>)
            }
        </div>
    )
}
