import ScrollContainer from "../../../components/ScrollContainer"
import { groq } from "next-sanity"
import { clientFetch } from "../../../../lib/sanity.client"

const page = async ({params}) => {

    const slug = params.slug
    const data = await clientFetch(groq`*[_type == "${slug}"]{...,categories->}`)

    console.log(data?.length)

  return (
    <div className="h-screen flex flex-col justify-center">
        <ScrollContainer data={data}/>
    </div>
  )
}

export default page