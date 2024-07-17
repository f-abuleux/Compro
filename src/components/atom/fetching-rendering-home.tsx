'use client';

import { useEffect, useState } from "react";

export default function FetchingServerHome() {
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
            <div className="justify-center flex font-[NeueMontrealMed] text-[40px] font-medium" >
                  {
                        data.map((item: any, index : any ) => (
                              <div key={index} className="flex flex-col sm:flex-row p-5 items-center justify-center" >
                                    <img src={item.picture.large}
                                          width={200}
                                          height={100}
                                          alt='pp'
                                          className="rounded-[50px]" />
                                    <div className="grid items-center">
                                          <p className=" px-5  pt-10 text-center" >{item.name.first} {item.name.last}</p>
                                          <p className="text-[20px] px-5 pb-10 text-center sm:text-left">Founder of Formici</p>
                                    </div>
                              </div>
                        ))}
            </div>
      )
}