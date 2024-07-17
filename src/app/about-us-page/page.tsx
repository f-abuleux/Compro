
import dynamic from 'next/dynamic';

const FetchingServerAboutus = dynamic(() => import('@/components/atom/fetching-rendering-aboutus'));

export const metadata = {
      title: "About Us - Formici",
      description: "About Formici - History, Culture, and Excellence",

}

const AboutUsPage = () => {
      return (
            <div className="">
                  <p className="text-[48px] text-left lg:m-10 lg:pl-20 sm:m-5 sm:pl-10 m-2 pl-5 font-[NeueMontreal]">ABOUT US.</p>
                  <div className="p-5 grid lg:grid-cols-2 lg:gap-28 lg:px-60 sm:px-28">
                        <div className=" ">
                              <p className="text-left text-[28px] font-[NeueMontreal]">HISTORY.</p>
                              <p className="text-justify font-[NeueMontreal]">Formici didirikan pada tahun 2023 oleh empat orang yang memiliki keahlian di berbagai bidang digital, yaitu Graphic Design, Multimedia, Advertising, dan Developer. Berdiri atas pemikiran dan keresahan melihat banyak UMKM dan perusahaan yang kesulitan untuk menjangkau pelanggan di era digital, Formici hadir untuk membantu mereka memperkenalkan usaha mereka ke dunia digital yang luas. Formici memiliki tim ahli yang berpengalaman di bidangnya masing-masing. Tim kami berkomitmen untuk memberikan layanan terbaik kepada klien, dengan memahami kebutuhan dan menciptakan solusi yang tepat untuk setiap project. Formici tidak hanya membantu Anda mendigitalisasi usaha Anda, tetapi juga memperhatikan estetika dan kebutuhan dari setiap klien. Kami ingin memastikan bahwa usaha Anda tampil menarik dan mudah diingat di dunia digital.
                              </p>
                        </div>
                        <div className="grid sm:grid-cols-2 items-center font-[NeueMontreal]">
                              <div>
                                    <FetchingServerAboutus />
                                    <div className="px-5">Graphic Design</div>
                              </div>
                              <div>
                                    <FetchingServerAboutus />
                                    <div className="px-5">Advertising</div>
                              </div>
                              <div>
                                    <FetchingServerAboutus />
                                    <div className="px-5">Multimedia</div>
                              </div>
                              <div>
                                    <FetchingServerAboutus />
                                    <div className="px-5">Developer</div>
                              </div>
                        </div>
                  </div>
                  <div>
                        <div className="">
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
            </div>
      )
}

export default AboutUsPage;