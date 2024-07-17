// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';

// const Fetching = () => {
//       const [data, setData] = useState<any[]>([]);

//       useEffect(() => {
//             const fetchData = async () => {
//                   try {
//                         const response = await fetch('https://randomuser.me/api/?results=10');
//                         const json = await response.json();
//                         setData(json.results)
//                   } catch (error) {
//                         console.error('Error fetching data:', error);
//                   }
//             }

//             fetchData();
//       }, [] );

//       return (
//             <div>
//                   <h1>Fetching Data</h1>
//                   <ul>
//                         {data.map((item, index) => (
//                               <div key={index}>
//                                     <Image src={item.picture.large}
//                                           width={200}
//                                           height={100}
//                                           alt='pp' />
//                                     <p>{item.name.first} {item.name.last}</p>
//                               </div>
//                         ))}
//                   </ul>
//             </div>
//       );

// };

// export default Fetching;