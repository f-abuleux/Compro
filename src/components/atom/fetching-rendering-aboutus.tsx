'use client'

import { useEffect, useState } from "react";


export default function FetchingServerAboutus() {
      const [data, setData] = useState<any[]>([]);

      const fetchData = async () => {
            const resp = await fetch('https://randomuser.me/api/?results=1');

            if (resp.ok) {
                  const data = await resp.json();
                  setData(data.results);
            }
      }

      useEffect(() => {
            fetchData();
      }, [])

      return (
            <div className=" font-[NeueMontrealMed] text-[20px] font-medium" >
                  {
                        data.map((item: any, index: any) => (
                              <div key={index} className="grid-cols-2 p-5" >
                                    <img src={item.picture.large}
                                          width={200}
                                          height={50}
                                          alt='pp'
                                          className="rounded-[10px]" />
                                    <div className="">
                                          <p className="" >{item.name.first} {item.name.last}</p>
                                    </div>
                              </div>
                        ))}
            </div>
      )
}