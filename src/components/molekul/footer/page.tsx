import Image from "next/image";

const FooterHomePage = () => {
        return (
                <div className="">
                        <div className="flex-col sm:flex-row sm:flex gap-[25px] lg:gap-[100px]  sm:gap-[50px] text-center font-[NeueMontreal] items-center  justify-center mt-[100px]  ">
                                <div className="flex justify-center">
                                        <Image src="/logo/formici.svg" alt=""
                                                width={150}
                                                height={100} 
                                                />
                                </div>
                                <div>CONTACT</div>
                                <div>EMAIL</div>
                                <div>TELEPHONE</div>
                                <div>DISCORD</div>
                        </div>
                        <p className="text-center font-[NeueMontreal] mt-[50px] sm:mb-[100px] p-10">DESIGNED BY FORKAA @ 2024 VOLUME2</p>
                </div>
        );
}

export default FooterHomePage;