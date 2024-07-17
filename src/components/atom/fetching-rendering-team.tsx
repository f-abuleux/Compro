'use client';

import { useEffect, useState } from "react";


export default function FetchingServerTeam() {
      const [data, setData] = useState<any[]>([]);

      const fetchData = async () => {
            const resp = await fetch('https://randomuser.me/api/?results=10');

            if (resp.ok) {
                  const data = await resp.json();
                  setData(data.results);
            }
      }

      useEffect(() => {
            fetchData();
      }, [])

      return (
            <div className="grid place-content-center sm:grid-cols-2 sm:p-5 lg:px-36 lg:py-10 font-[NeueMontrealMed] font-medium  gap-5" >
                  {
                        data.map((item: any, index: any) => (
                              <div key={index} className="flex flex-col sm:flex-row w-[275px] sm:w-[350px] lg:w-[600px] sm:place-content-center sm:justify-center sm:items-center items-center " >
                                    <img src={item.picture.large}
                                          width={"100px"}
                                          height={"100px"}
                                          alt='pp' 
                                          className="rounded-[10px]" />
                                    <div className="grid items-center">
                                          <p className=" px-5  text-center sm:text-left  text-[20px] w-[250px] " >{item.name.first} {item.name.last}</p>
                                          <p className="font-[NeueMontreal px-5 text-[16px] w-[250px] text-center sm:text-left"
                                          >{item.location.state}, {item.location.country}. {item.location.postcode}. {item.nat}</p>
                                          <p className="font-[NeueMontreal] px-5 text-[16px] w-[250px]">{item.email}</p>
                                          <p className="font-[NeueMontreal] px-5 text-[16px]">{item.phone}</p>

                                    </div>
                              </div>
                        ))}
            </div>
      )
}