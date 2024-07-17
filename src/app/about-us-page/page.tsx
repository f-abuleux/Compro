
import FetchingServerAboutus from "@/components/atom/fetching-rendering-aboutus";
import { motion } from "framer-motion";

export const metadata = {
      title: "About Us - Formici",
      description: "About Formici - History, Culture, and Excellence",

}

const AboutUsPage = () => {
      return (
            <div className="">
                  <h1 className="text-[48px] text-left lg:m-10 lg:pl-20 sm:m-5 sm:pl-10 m-2 pl-5 font-[NeueMontreal]">ABOUT US.</h1>
                  <div className="p-5 grid lg:grid-cols-2 lg:gap-28 lg:px-60 sm:px-28"
                  >
                        <div className=" ">
                              <p className="text-left text-[28px] font-[NeueMontreal]">HISTORY.</p>
                              <p className="text-justify font-[NeueMontreal]"
                              >Formici didirikan pada tahun 2023 oleh empat orang yang memiliki keahlian di berbagai bidang digital, yaitu Graphic Design, Multimedia, Advertising, dan Developer. Berdiri atas pemikiran dan keresahan melihat banyak UMKM dan perusahaan yang kesulitan untuk menjangkau pelanggan di era digital, Formici hadir untuk membantu mereka memperkenalkan usaha mereka ke dunia digital yang luas. Formici memiliki tim ahli yang berpengalaman di bidangnya masing-masing. Tim kami berkomitmen untuk memberikan layanan terbaik kepada klien, dengan memahami kebutuhan dan menciptakan solusi yang tepat untuk setiap project. Formici tidak hanya membantu Anda mendigitalisasi usaha Anda, tetapi juga memperhatikan estetika dan kebutuhan dari setiap klien. Kami ingin memastikan bahwa usaha Anda tampil menarik dan mudah diingat di dunia digital.
                              </p>
                        </div>
                        <div className="grid sm:grid-cols-2 items-center font-[NeueMontreal]">
                              <div>
                                    <FetchingServerAboutus />
                                    <div className="px-5">Graphic Design</div>
                                    <div className="px-5 text-[12px]">as Graphic Designer for 4 year</div>
                              </div>
                              <div>
                                    <FetchingServerAboutus />
                                    <div className="px-5">Advertising</div>
                                    <div className="px-5 text-[12px]">as Advertising/Marketing for 7 year</div>
                              </div>
                              <div>
                                    <FetchingServerAboutus />
                                    <div className="px-5">Multimedia</div>
                                    <div className="px-5 text-[12px]">as Multimedia/Visual Digital for 3 year</div>
                              </div>
                              <div>
                                    <FetchingServerAboutus />
                                    <div className="px-5">Developer</div>
                                    <div className="px-5 text-[12px]">as Developer for 10 year as known as (Lord)</div>
                              </div>
                        </div>
                  </div>
                  <div>
                        <div className=""

                        >
                              <p className="text-left text-[28px] p-10 font-[NeueMontreal] lg:mx-52 sm:m-5">BUDAYA.</p>
                              <div className="p-5 gap-x-10 gap-y-5 lg:gap-x-18 flex flex-col flex-wrap sm:flex-row sm:mx-8 lg:px-28 justify-center items-center">
                                    <div className="border-[1px] w-[300px] sm:w-[250px] md:w-[300px] sm:h-2/4  p-5 rounded-[25px] border-slate-900 ">
                                          <p className=" text-justify font-[NeueMontreal]">Selalu berusaha memberikan yang terbaik dalam setiap project dan layanan yang diberikan kepada klien.Berani untuk berinovasi dan mencari solusi baru untuk meningkatkan kualitas layanan.Terus belajar dan berkembang untuk mengikuti perkembangan teknologi dan tren terbaru di dunia digital.</p>
                                          <p className="text-[18px] text-right font-[NeueMontreal] pt-5">KEUNGGULAN</p>
                                    </div>
                                    <div className="border-[1px] w-[300px] sm:w-[250px] md:w-[300px]  sm:h-2/4  p-5 rounded-[25px] border-slate-900">
                                          <p className="text-justify font-[NeueMontreal]">Terus berusaha untuk meningkatkan performa dan mencapai target yang telah ditetapkan. Memiliki rasa tanggung jawab yang tinggi terhadap pekerjaan dan hasil yang dicapai. Saling mendukung dan membantu sesama tim untuk mencapai kesuksesan bersama.</p>
                                          <p className="text-[18px] text-right font-[NeueMontreal] pt-12">KOMPETITIF</p>
                                    </div>
                                    <div className="border-[1px] w-[300px] sm:w-[250px] md:w-[300px] sm:h-2/4 p-5 rounded-[25px] border-slate-900">
                                          <p className=" text-justify font-[NeueMontreal]">Memastikan bahwa setiap project dan layanan yang diberikan kepada klien memenuhi standar kualitas yang tinggi. Selalu memperhatikan detail dan memastikan bahwa tidak ada kesalahan yang terjadi. Terbuka terhadap kritik dan saran untuk terus meningkatkan kualitas layanan.</p>
                                          <p className="text-[18px] text-right font-[NeueMontreal] pt-12">KUALITAS</p>
                                    </div>

                              </div>
                        </div>
                  </div>
                  <div>
                        <h2 className="text-left text-[28px] p-10 font-[NeueMontreal] lg:mx-52 sm:m-5">JOURNEY</h2>
                        <div className="px-10">
                              <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                                    <li>
                                          <div className="timeline-middle">
                                                <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 20 20"
                                                      fill="currentColor"
                                                      className="h-5 w-5">
                                                      <path
                                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                            clipRule="evenodd" />
                                                </svg>
                                          </div>
                                          <div className="timeline-start md:text-end p-2 lg:pl-48 font-[NeueMontreal]">
                                                <time className="font-[NeueMontreal]">2023</time>
                                                <div className="font-[NeueMontreal] font-bold ">FORMICI 2023</div>
                                                Fase Concepting dimana Formici dikonsep sedemikian rupa oleh 4 orang yang memiliki keahlian di bidang digital. Formici berdiri atas pemikiran dan keresahan melihat banyak UMKM dan perusahaan yang
                                          </div>
                                          <hr />
                                    </li>
                                    <li>
                                          <hr />
                                          <div className="timeline-middle">
                                                <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 20 20"
                                                      fill="currentColor"
                                                      className="h-5 w-5">
                                                      <path
                                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                            clipRule="evenodd" />
                                                </svg>
                                          </div>
                                          <div className="timeline-end p-2 lg:pr-48 font-[NeueMontreal]">
                                                <time className="font-[NeueMontreal]">2023 MARCH</time>
                                                <div className="font-[NeueMontreal] font-bold ">FORMICI ALIVE</div>
                                                Formici resmi berdiri dan mulai menerima project pertama dari klien. Formici berkomitmen untuk memberikan layanan terbaik kepada klien, dengan memahami kebutuhan dan menciptakan solusi yang tepat untuk setiap project.
                                          </div>
                                          <hr />
                                    </li>
                                    <li>
                                          <div className="timeline-middle">
                                                <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 20 20"
                                                      fill="currentColor"
                                                      className="h-5 w-5">
                                                      <path
                                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                            clipRule="evenodd" />
                                                </svg>
                                          </div>
                                          <div className="timeline-start md:text-end p-2 lg:pl-48 font-[NeueMontreal]">
                                                <time className="font-[NeueMontreal]">2024 (NOW)</time>
                                                <div className="font-[NeueMontreal] font-bold">FORMICI NOW</div>
                                                Formici terus berkembang dan semakin dikenal di dunia digital. Formici tidak hanya membantu Anda mendigitalisasi usaha Anda, tetapi juga memperhatikan estetika dan kebutuhan dari setiap klien. Kami ingin memastikan bahwa
                                          </div>
                                    </li>
                              </ul>
                        </div>
                  </div>
            </div>
      )
}

export default AboutUsPage;