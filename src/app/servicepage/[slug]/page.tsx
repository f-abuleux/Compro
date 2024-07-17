import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const FetchingServerHome = React.lazy(() => import('@/components/atom/fetching-rendering-home'));

export async function generateStaticParams() {
      const response = await fetch('https://cdn.contentful.com/spaces/cbvu2jwtumbq/environments/master/entries?access_token=SuzRdqXHbxJuPajgxaJu0FL3V0OJLWCy84fsU1KErbM', {
            method: "GET",
            cache: "force-cache"
      },);
      if (!response.ok) {
            // This will activate the closest `error.js` Error Boundary
            throw new Error('Failed to fetch data')
      }
      const jsonData = await response.json();

      return jsonData.items.map((post: any) => ({
            slug: post?.fields?.slug
      }))
}

export default async function DetailService({ params }: any) {
      console.log(params);

      const response2 = await fetch(`https://cdn.contentful.com/spaces/cbvu2jwtumbq/environments/master/entries?access_token=SuzRdqXHbxJuPajgxaJu0FL3V0OJLWCy84fsU1KErbM&content_type=blogCompro&include=10&fields.slug=${params.slug}`, {
            method: "GET",
            cache: "force-cache"
      },);
      const jsonData2 = await response2.json();


      // const post = jsonData2.items.find((post: any) => post.fields.slug == materi.params.slug)

      return (
            <div className="m-5 text-wrap items-center justify-start gap-5 font-[NeueMontreal] grid grid-row">
                  <div>
                        <FetchingServerHome />
                  </div>
                  <div className="mx-[50px] lg:mx-[300px] xl:mx-[450px] md:mx-[150px]">
                        <h1 className="text-[28px]">{jsonData2?.items[0]?.fields?.title}</h1>
                        <h1 className="text-[10px] text-gray-400">{jsonData2?.items[0]?.fields?.date}</h1>
                        <h1 className="text-[16px] text-justify " >{documentToReactComponents(jsonData2?.items[0]?.fields?.description)}</h1>
                        {/* <h1>{documentToReactComponents(jsonData2.items[0].fields.media)}</h1> */}
                        <div className="text-wrap">
                              {/* {documentToReactComponents(jsonData2.items[0].fields.description)} */}
                        </div>
                  </div>
            </div>
      );
}
