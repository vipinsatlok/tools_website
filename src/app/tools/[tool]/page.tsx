import { data } from "@/data/tools"
import { ToolMetaData } from "@/types/tools"
import { notFound } from "next/navigation"

interface Props {
    params: {
        tool: string
    }
}


export default function Tool({ params }: Props) {

    const toolSlug = params?.tool
    const toolData = data.find((tool) => tool.slug === toolSlug) as ToolMetaData

    if (!toolData?.slug) return notFound()

    return (
        toolData.slug && <toolData.component />
    )
}
