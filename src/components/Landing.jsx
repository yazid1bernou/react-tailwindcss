

function Landing() {
    return (
        <section className="bg-[#1C2230]">

            <div className="container ">
                <div className=" element-center flex-col  pt-[200px] ">
                    <div className="w-[700px] max-w-full">
                        <img src="/src/assets/images/illustration-intro.png"
                            alt="Landing page"
                            className="w-full h-fit"
                        />
                    </div>
                    <div className="text-white text-center">
                        <h1 className="text-[30px] md:text-[40px] font-semibold mb-[15px]"> All your files in one secure location ,
                            <br />
                            accessible anywhere
                        </h1>
                        <p className="font-normal text-lg px-[15px] md:w-[600px] max-w-full mb-[30px] ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias asperiores ratione sit iusto et nostrum, nobis cumque, vitae perferendis maiores
                            voluptate autem deleniti assumenda .
                        </p>

                    </div>
                    <a className="btn w-[280px] h-[60px] rounded-[30px] element-center text-white font-medium" href="/"> Get Started </a>
                </div>

            </div>
        </section>


    )
}
export default Landing;