import { useRouter } from "next/navigation"




export const currentPage = () => {

    const router = useRouter()
    console.log(router.basePath)
    return router.basePath
}