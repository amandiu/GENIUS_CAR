/* eslint-disable react/jsx-no-undef */
// import { FaArrowRightLong } from "react-icons/fa6";
import { IoBagHandleOutline } from "react-icons/io5";
// import { RiCalendarScheduleFill } from "react-icons/ri";
import Calendar from "../../assets/schedule.png";
import instagram from "../../assets/instagram.png";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import phone from "../../assets/phone.png";
import teitter from "../../assets/twitter.png";
import location from "../../assets/placeholder.png";
import linkedin from "../../assets/linkedin.png";
import team1 from "../../assets/Team/a21464b852f0428fa73ef175786dc9e7.jpeg";
import team2 from "../../assets/Team/two-girls-mechanics-fixing-automobile_7502-4402.jpg";
import team3 from "../../assets/Team/GettyImages-522272311-5949bdc15f9b58d58a035319.jpg";
import team4 from "../../assets/Team/attractive-girl-short-shorts-top-260nw-1028862829.jpg";
import Card from "../Card/Card";
import Carousel from "react-multi-carousel";
import facebook from "../../assets/facebook.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-multi-carousel/lib/styles.css";
import { BiCarousel } from "react-icons/bi";

const Services = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      {/* Service Section */}
      <section>
        <div className="container mx-auto">
          <div className="py-16">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <div>
                <p className="text-[#FF3811] font-bold text-xl">Service</p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                Our Service Area
              </h2>
              <p className=" mt-4  text-lg text-[#878787]">
                The Majority Have Suffered Alteration In Some Form, By Injected
                Humour, Or Randomised Words Which Don't Look Even Slightly
                Believable.
              </p>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
            </div>
            <div className="text-center">
              <a
                href="/"
                className="bg-white mt-12 mb-3 font-semibold text-lg text-[#FF3811] border px-4 py-2 border-[#FF3811]"
              >
                More Products
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Status Section */}
      <section>
        <div className=" container mt-10 rounded  mx-auto bg-[#151515]">
          <div className=" items-center py-14 justify-around  flex  lg:grid-cols-3">
            <div className="flex items-center">
              <div>
                <h6 className="mr-2 text-4xl font-bold md:text-5xl text-deep-purple-accent-400">
                  <img
                    className=" ml-5 h-11 w-11"
                    src={Calendar}
                    alt="Genius Car"
                  />
                </h6>
              </div>
              <div>
                <p className="text-white font-medium text-base">
                  We are open monday-friday
                </p>
                <p className="text-white font-bold text-xl">
                  7:00 am - 9:00 pm
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div>
                <h6 className="mr-2 text-4xl font-bold md:text-5xl text-deep-purple-accent-400">
                  <img
                    className=" ml-5 h-11 w-11"
                    src={phone}
                    alt="Genius Car"
                  />
                </h6>
              </div>
              <div>
                <p className="text-white font-medium text-base">
                  Have a question?
                </p>
                <p className="text-white font-bold text-xl">+2546 251 2658</p>
              </div>
            </div>
            <div className="flex items-center">
              <div>
                <h6 className="mr-2 text-4xl font-bold md:text-5xl text-deep-purple-accent-400">
                  <img
                    className=" ml-5 h-11 w-11"
                    src={location}
                    alt="Genius Car"
                  />
                </h6>
              </div>
              <div>
                <p className="text-white font-medium text-base">
                  Need a repair? our address
                </p>
                <p className="text-white font-bold text-xl">
                  Liza Street, New York
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Popular Products Section */}
      <section>
        <div className="container mx-auto">
          <div className="py-16">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <div>
                <p className="text-[#FF3811] font-bold text-xl">
                  Popular Products
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                Browse Our Products
              </h2>
              <p className=" mt-4  text-lg text-[#878787]">
                The Majority Have Suffered Alteration In Some Form, By Injected
                Humour, Or Randomised Words Which Don't Look Even Slightly
                Believable.
              </p>
            </div>
            <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">
              <a
                href="/"
                aria-label="View Item"
                className="inline-block overflow-hidden duration-300 transform bg-white shadow-sm hover:-translate-y-2"
              >
                <div className="flex flex-col p-2 border rounded-md">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8XZh14gz4F7eittEcjP50aR7ioAjcalWYsChwnEtDmKR1zfZPQLzpQPSvhqY9SYBPvm0&usqp=CAU"
                    className="object-cover border rounded-lg w-full h-48"
                    alt=""
                  />
                  <div className="card-body mt-[-20px] flex items-center ">
                    {/* Rating Section */}
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-[#FF3811]"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-[#FF3811]"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-[#FF3811]"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-[#FF3811]"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-[#FF3811]"
                      />
                    </div>
                    <p className="text-xl  font-bold text-[#444444]">
                      Engine Diagnostics
                    </p>

                    <div className="mb-[-30px]">
                      <p className=" text-[#FF3811] text-lg font-semibold">
                        Price: $20:00
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="/"
                aria-label="View Item"
                className="inline-block overflow-hidden duration-300 transform bg-white shadow-sm hover:-translate-y-2"
              >
                <div className="flex flex-col p-2 border rounded-md">
                  <img
                    src="https://images.autods.com/OfficialSite/New/20231009123226/20-Best-Selling-Auto-Parts-To-Start-Dropshipping-Today.png"
                    className="object-cover border rounded-lg w-full h-48"
                    alt=""
                  />
                  <div className="card-body mt-[-20px] flex items-center ">
                    {/* Rating Section */}
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-[#FF3811]"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-[#FF3811]"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-[#FF3811]"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-[#FF3811]"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-[#FF3811]"
                      />
                    </div>
                    <p className="text-xl  font-bold text-[#444444]">
                      Engine Diagnostics
                    </p>

                    <div className="mb-[-30px]">
                      <p className=" text-[#FF3811] text-lg font-semibold">
                        Price: $20:00
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="/"
                aria-label="View Item"
                className="inline-block overflow-hidden duration-300 transform bg-white shadow-sm hover:-translate-y-2"
              >
                <div className="flex flex-col p-2 border rounded-md">
                  <img
                    src="https://liftkit.imgix.net/blog/az1001/images/featured-image-10620.png"
                    className="object-cover border rounded-lg w-full h-48"
                    alt=""
                  />
                  <div className="h-8 w-8 right-5 top-5  justify-center items-center flex absolute bg-white border rounded">
                    <a href="#">
                      {" "}
                      <IoBagHandleOutline className=" text-2xl text-[#FF3811]" />
                    </a>
                  </div>
                  <div className="card-body mt-[-20px] flex items-center ">
                    {/* Rating Section */}
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-[#FF3811]"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-[#FF3811]"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-[#FF3811]"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-[#FF3811]"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-[#FF3811]"
                      />
                    </div>
                    <p className="text-xl  font-bold text-[#444444]">
                      Engine Diagnostics
                    </p>

                    <div className="mb-[-30px]">
                      <p className=" text-[#FF3811] text-lg font-semibold">
                        Price: $20:00
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="/"
                aria-label="View Item"
                className="inline-block overflow-hidden duration-300 transform bg-white shadow-sm hover:-translate-y-2"
              >
                <div className="flex flex-col p-2 border rounded-md">
                  <img
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTEBIWFRUWFRYVFRUXFRgVFxUYFxcXGRcXFRUYHiggGBolHRUXITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGy4mICUwLy8tLS43Ny8tMi0wKy0tLy0rNy81Ly81MS8uLTcvKy0tLS0tLS0rLS4tLS0tLSsrLf/AABEIAI4BYwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAQIDBAYABwj/xABJEAACAQIEAwUFBAcFBQgDAAABAhEAAwQSITEFQVEGEyJhgTJxkaGxFEJS0SMzYnKCwfAHU5Ki8RUWg7LCJDRDY3PS4eJElKP/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAQQCAwUG/8QAKBEBAQACAQMBBwUAAAAAAAAAAAECEQMEEkFRBSExM2FxsRMygcHw/9oADAMBAAIRAxEAPwDzsCnAUgpwoOililFLQcBTgKQVIooEC04CnAUsUDYpwFLFOAoEApQKWKUCg4ClApRSgUHRSxXRS0CRTgK4CngUCAUsU8CligYBSxTopYoEAropwFcBQJFdFOiligZFdFPiuigbFdFOiligZFLFOAoC3aP9IUFvQTLFunURp8aA5FZftSP0yf8Apn/movf4yqLmKkj9nWs1xjiiX7isgYQmXxRvM8iaB3D/APw5/a/6q1PCR+gtf+mh9SorJ8PJ8B9//VWm4Tj7XdWl71MwtoCMwBkKJEUBCKn4F2bv3rLX7eQpneJaCdekfWoxVzsv2lu2cL3K2QyyTmOYHU+WlAMtpAAPIQfeNDTopbRkA9dfjTooI4pCKkikigjIpsVKRTSKCOK6nV1AFAp1cBTgKBIpYpQKWKDgKkUUiipFFB0UoFOApYoEilArhTooEilililAoOilApYpYoEilinRXRQIBUiimgVIBQcBSxTorooEiuinV1AkUsUsUoFA2KWKdFdFA2K6KfFJFAgFLFLFLFAyKDcR7Oo5LWyUeZmTGu4jlRyKSKDD4vhl2xBd2ykxKrmHr4tKhsoG3xFoT+ND88tto+Nanjdi+w/QuQIgoqrLSdZYkaRyFZlLjWiEuIls7lnw63WjrFyQR7qBzWSmvfWHUckdZ9FKhj6A1FgMH3kqAmZvZaRA6ct/KiVzizBf0WIskKNlsrZY+5e6APuDVc4S1m8ys13NcENkgJqPSWj3nagK4DDd1aVCZIGp896ocKY92up260ZuDQ+4/SgXCz4BQF8KPAvuFSRSYUeBf3R9KkigYRTYqSKQigjIppqRhTCKBkV1OiuoAgFOArhThQcBSxSgUsUHCpBTQKeKBRS11LQdThXCnAUHAUoFdFOFBwFKBSilFBwFLFKKUUCAU4UOfiyi41vKZBUDXQ5svw9qiYFAoroqjf4vbR8gVrhG4QGPiAa1PZWzgsfNpXuYfEgaLchkfpKwrLP9TtQBQKWKtcRwFyxca1dWGU68wehB5g1WigQClilpQKBAKWKWligbFdFOirWH4ZeuDNbs3HHVUZh8QKCnFdFGeG9msTeuC33b25BOa4jqogTqctaTgvYOe8GLDDKQEKOIbVpOoJjRdwN6MblqyerBV1b7h/Yq073hcW9bVHi22ZT3iy4zap0Cn+KsVj7At3blsGQlx0BO8KxGvnpROOUym4A8cx160JtqhXmWkmfcIA9TWbbHriHU3bYZsuWe+W1b3J1kEjf8VarifFlsRmR2kT4QIHvJOlZviGIsYl8xfuzlChQjXHmSdgAJ1HPlRJ96wqKGGDtBebi619ZjnctXcq+49aJ8L4UjFLoKACGC25IBjQMxJ26eW9AFwOFVoN2856dyiEabfrSflRrg3CmW4ty3mRDDEtll1I0EL1nmBQH7/st+6fpWf4b7Ao9jnAttP4W+hrPcNPgptOrrbVYDCE201+6vLyHWKI4TgbXDC3bYb8LZlJ93h1rNYHieJPhtFYWAZRMojqSpJNafh2NDwl0KrnZlkIzdCCZQ9CDHuqnnnzatjq4cPSZaxtsqtxHgt+xrcTT8Q8S/EbetDyK9E4XjCwNu5qR15jnI6j8jWb7S8FFo95bEIdx+EnmPLl8OumjpuvuXL+jyzWXi+Kr9T0V4t2M6wpsVIRTYrpqJkV1OrqAGBThTRTqBwpRSCnCgUU4UgpaBwpQKQU4UCinCkFOFAtKKSloHClFIKWgWaWabXGgy2KvgYm4SsnNpqRqsRt+6K09u4xtMRq3dFjHKQJI6b1k8YYxFwanxE8huJ/n8q2HCcQcOQbih7ZXJc5EqVj2uRgTQCOzOJVJcozm34yEIVpKgq5J0y5ifhHSl4jx5rmJW8sLcttb1TTxFgG15+0p961Z7SdiXSLuHBvWGE27iRIU/ddZERtodusSa/ZrgD3LiBgttQZJcgDwgwXIkBRr1+goNr2j4wMUbbn21DIzRv4pA9PF8aCPdVd2A95ApyoVGUkNEiRsxJJJ16k/Sp/7O+CWcbiMUMRbNxbZUqP0xALM4P6oiNEHtdNNjQVftVv8AGvxFJ9st/jX4ivSv9wcANsIT/DiPobgoDx/shhbb2QmFKh7qI36LFgEMYIzi9l57bnlQZP7ba/vF+NL9utf3i/GvScP2EwX3sHaA/fxBPqD+ZoT2p7IcPtW8ww6q2yaYnKxPIlbqgaTv02NBj7OIRzCMGPQa/StX2QvC0X7zw58kc5jN023rzvG8fWzNrCKuh8TnUT5dfearYbtVikaWZWHNSoA+K0HuScbw4utaa4yOoB1DAEHYg8xynqDRFcRbmBf1iYnl1rzXg2Os40KSe7upGS5u1onaeT2idwduUEVoeGYq9fJwdxe6uW2h1VdHmYa04iZAJ1ggbxGgaLEY4KDF6f4q8341i2u3nYsWGYhZMwAdh0FHu06pY8JcHKwzCWbUEbsqwpHQmsW43IZpzAe0SDJHKY1BHLnQRcRbDj/vBtids0AmOnPnWW4pw9WfNhBCZQQ2fIoaTMM5A2itNxPhCX/aLAzuI6RzBj0rGcc4euGu5VbN4Q3iG8kiDG+1BZbBYlhlv4hI5BsQt73QELFflRPs9cvrcCZ+8T73iLBBBggkSOWnyoJF+6JXDcvaS04G3QeH5UT7NXzZZka2Qbk+KCDKgmCp2G9KmTd1Bvil2VuEbBW+hoVw1vBRXHW4w7n/AMtz/lP50H4d7H9dK08N3urfWSY3HCeI1GHthVAAgR/rUhpE2Hupa3KbUcKxJe2tzd7bBX6tocjeolT8a0OJtrcQg6gj4gj8qxXZ69Dun40PxXxD6Gtbgr3gGnUfA6fKK877X4uzXJj8cbLP993f6bO8vDLfjPcwGMsG27Ifukieo5H1EGoDRjtKkXQw+8uvvUkfQLQg13uHk/U48c/WOJy4dmdx9DYrqWkrY1gQp4popaBwpwqJrgG/9fCmG6W0XTQkkxoBzOsAecjcaigslgN6ePcfhVG3aMzndvIRbT1JEn/CffS/ZJ1ypPmWb5jLQXVYdaeKFXkdfuMR+xdLR/w7gIp+Fx5PVx+7kuCN5TZo/ZOnSgKClFRWbqsJUgjqKlFA6aUVFcvKvtMB7yB9aacbbAJNxYGp8QMfCgsiloU3Fif1VpmH4mIQek703/al4b2Af3XUn4UBiuPnVDBcYtXDl1R/wuIPp1qxxQxZufuN9DQZXjXhvu3JtVPI+EbGtdwXGBsE5ZVB+0gBiCxH6LMQCTMeImNtB0rGYxgAnvjX3Vp+AsfsDZQCftZPwsL+dBds8VZAyreKq3tBSQG/eAaDVMKgM55J15n6sajxbsbbygAysCf4eWlQcHJGYIAdFJzR57UFu9iABo3y/wDtWm/sZEnFNAJJt6lbZ/vPx3FI9J25VlMZcaNkHwrU/wBjF4BcQSwBLJoXtLOh2DoxPoRQbrE8VwsOTcw7ZAc4CYZ2EaEZe+kmdIA30ry/tN2vstcmxh7AyGVudxaRxHUqNfdMe+slicUSXbYszMfUkmOm9VrJMgKJc7c8vuB5+fKgON2rx51W9cA5ZRlHppV/iPaDENgla/cLXHLKhKIjKp0M5VE+zuZPioFxbgbW1tvcupcNxWYqjFmthSBFyQImdInY9Kl7SeG3hrY2W0D/ACP0oK3Z3gtzG3u5tsLaKM126ZhFkCIG7EkAKNSTRXtD2fw2DyqTdOaYuKVbUR7SnQ+1sOm/Ou7OTbwLOsg3HYsR5QqD0lz76scJwbY27btXBoSoYgkkwAoYjlAiSPM0AzhOKbC4hZMroZHssjR4hPIiDHIj31uO1XH71oC9aYhu4FvOD4lIY+Ie9cpnnloL/aXwK5hTYa46Pm71VZNPArAopWBlyq8DeaTHr3liwx3yCf8ACs/zoLXZrtSrr3d7Uba1fx/Csn6Sz4re5Ufd8x6cqzGM7H3UwiYzDEuvi7219+3lMZ0/Ep5jceY2n7K9qykK5laANx+/ddisRpmlWJGWYE+GQJ3BjU0ITH37QAW6yr+wxQ/FYn1r0/jnZ+1i0NzDmHg7c55HqPLyrzjHE2GyX8OjMNCzm7rrP3HX4EUEd7iRuCS15mH47neDbUyQCI3jX30f4RxCyylETLcywSfFnjeGOvKYoM3FVI8FvDLygWAzf5wZ9DRngyWXXOpU3FBlQAoSQdlgfHbpWOf7a2cPzMfvB7jVqMPd8rb/AEb+v60zPDz4Pj9K1HanEqmHIO90FF95k6+k/wBRWeweDhAc6bHSddhyrV0/7VjrvnVpAa6aZbcMARsaWt6mv8GaL6e8/wDK1aW1dAUS0an7padF6Vl+E/rAegJ+Ufzo46ZgN9J2/wBD0rk+09WavpPy7ns+WdPlfr/UUe0Tg92QZ1fWCPwcjQSiHF29hegY7RuY2/hodV3o5rgxn0czrPnZfx+I6urq6rKsBiudoE04LUeI0j3z/L+dAxdN/ab5A/6f1FS2k5nmZ/In+XT4zFcTKuZtyQT5D+hT7Nk3Xy6hRvG/QAeZ5UEwurtImpShG4I9+lFeHXktObQBByggIcgY8w1weN405gamNAJInYfrEzSdHZ1iSJa3dJDiQdJG29RMpWefHlhJb598ZoVBicIr67NprG8bZhz+o5EUU4hhwrbAHfw+ywOzIDt0K8uXQVG0BMTAJgbn3VLAIV2V2WSrxJjXMPxDqwH+IAzqAS1Ll+JN5dxOqzHuNB7ly53mcyHnOPZXUbGDEDSiWIthoZFEMAf1Nu5E8pdgRGo9KCnxl89/NbI1gDUGIAknpzopYw0LnYSwGZVMADTQkHTMfPaap4CwC8HYbjKi+Z0QnkCPWjK+fPegALxK4bygnKCwDahtDvtR4wRptTMJgbNol1trm5FiTkPVRO9TXrbCCQYPURQUcdh0cQ3oZgj3Hl9Kbh8e3d3bN0yRaco341ynfzFFAohSwCZjC3FtqWlRuCRv50I49hQhnOHykEsBEhgA4iT+KDryNAIx1oZJAGkfOK03AnAwADSZxDHTf9Uo350AvWS6lbfjaQIEzvruPKtNwiwyILH2i3aGbMA8ySygMGZQQo0G/WaCC8bZRtH9lusbHzqvwQKA0gn2fZ067x6UX45gsThrbG9ohBAcQyNy0ddDvtM0C4ViCgIRyJA1jQx/rQXsdlj2G9Sa139i1xhZxGUsBnWYa+uy8+6UgnXmQaxGMxbFdXmj39nfEBYwGKvFQcrmJkAnu10Dd4ozdBlJ/kGFd8wzfiJPxJoz2XwZdncbjKo8p3P0oFljTXTTUQeo0ox2bxy27hVwsMNM2waGWffDGDyMHlQe7WMCuHwzraVlAttmPdYlSxCGWb9IBJ91eHcfE2cLcOxtgH0AJ+tbu9x9kstauWELMhVWCWlOqxLShk6zIIrOnhDvgxaZGRh4rYb2jz9ZkjofTQDn9mGAOMwd3BwpNm6SwmGKXMpBB6ZrbD186r/aPsGMNsC2bilkYqTlEkwCTzC5QfMGsZwTjeIwd1b2HfJeQZDPs3E/A49B8BzoxxHtwbzG6cKq323uFgRPuABb1NA7t9x+7iWsreCqyKxKrrlNzLoWnxHwb9Iq5iPDbtJzVAD7wAPrNZzguEbEX8z6653J59B6xEdB5VpjYa9eCJqWYKPzPluaDWYLErh+HpcuEgamB1LGIHXSvNeJcKS6Ddw7AXJJNsgjON5B2DTOnuqz2k4obmJe2rt3Vk9yiycsWvBmyzEsQTPnVnC4y1AByT+0pU+hH50A3s72kuWGAJOmhBrbYzB4fiVrSA8fOsZxLhguyyCH8tZ8qHcK4tcw7iZEUD+NcETCMBcs3Wjdu9RVJ93dnT1ohwThirluyAIOivnBkfebbQcvyraYHiGHx9vu7wGaIBrMYrs5cwVxoYi2/PddevnUWbTLq7iTCZcVeyXlNyyltSgDMqllVVzBkI11POtPguE4Ib4bTYRcYR6mawrYAWyRZPeQPCw0kyNo12mvQOz3DBctLcPfB9iqXgBpprbZTy8qSSTUTnnc8rlVp+G4TLCWri6CP0kgaxsFE/GhXFMDbRcyFpzRBiNj+VG8Xw0g/wD5Ikcmt6f/AMazeJQC6ouXLptyc7Hx5emygD1qbdIk2l4UNz/X9flV1roiTHyqxhsNYeUtuwICzpyJA6DqP8VSX+CM4C2rgJ6EEc45A8xXD6q3k5JNa970PFcMOCY43evizWJeW92n9es1DRe/2dvrM5CegcT84oTcQgwwII0g6V2sZJJI8/nlcsrlfJJrqbNLWTEKOMtD74+v0qC/jLRZfGMonNo3lAGlCjg7nhhT4hIkR8+XrU1zhF9ULFFKgjVLlu5E6Ce7Yx61r762dkEcTjLLoRnGvUMPjpTuFYxEWGuJPM5t4ECZjlPxoA1lxuh+BqB1YAkq0SBMU76dkbyw9p3RsyEqwIkyvuaDqp5+VFsRj2IXKwVkhcyZesyCu++/pyryNmqezjriapcYa9Z+RrKUsutbel8eui4wdQRJU6zPjtqz7/tTQ3GMqLLTrpoJO1Zqx2nubXpfTeRyEARGmnT4VZ4jxH7UgW0wW5Pst4SRBBA3B9w+VTthpUxGDt3LiibgzSqgaxr4VgydzzNMwWHW4otOLpKlgAmjTqTmBB0EGoLt+4gKSy65SCIJ89tKrtiniAWB65uXw99SgU4XbCMFBOoMSQTzG4A/GKIi+JA558p92WdPUgehrNYfGXA6HxOQRAGpI2IAHkfjFHMZgM8XLbwrQwMaEjT0M6EdaCdL2adNVbbrG3ype7tjMbaspds75mkTroum3iPXelW2B7zvTLq9dulA41U4mP0RHXQepAq1ctBWgHSJPSfL6VRxUm6k6IHQHpJI0+FBYs3bmYW1JJjVpGniICKT5g8wBEmqVtwzITat3A8RmuMGBJ0zEMCP4Rrymi/GLKFbj2ULJauKbigwVFxSUJ5nRn2nn0NZ7FcKvpiIClTIdH+6FjMDmGkAfSg3nZ7tKLIRSO9wl1jauW38ZsskZhJEMAGDKYEglYEGQ/b/AAP2bEDuXmxcUtb8TObZGj24JIgNtI2qlaxCM+ZVAFzEd5A0Xw5szKCTCkvEeRo7jMHb4g7W8zJDtc0AZjLEQoMCfHMEgedBiV4gdjDeZQDl1BquMYyrlUlVkSANz5kmr/FeG3LNx7apcdV0VwGCspEq0a5ZUgxOlUreBuOVEBST4czan3A6x6UFb7SSZZi2kGatINN/XlV+x2dXXvLuw+6v8z+Vc/DbS+y1w+Xh/mKCfhPF8YCLdnFd2vLM4ge7fWi4w+JVxffEm6wkZSAFYHfQGNevkOlZ2yuG3zuD+0oI/wAtaHChlt94pOSYFwSFkCYzRE+VBJxTh9rEHODkuH2vM+fU+Y+tUMN2aYt4rgA8pJ+YFaAccMAG+oI/FZw175uoNEMFxxAPHdstz/7lhF19GE0Gdbitm1GHwozuTBIIIk6atsW+QrZ9l7CYUF77A3mGkMDkB5KOZ8/Ss3xTiWdvCbRGaCRgsMOmh3ze40uJ4iWzgsYC6AKlsD3JbEUGHvJdS4ZKmWMFtM2u8VYTHMPbt6dQZFTLhDfd4XMdDmLeyuszOkGR/hq3gsKLBDFl09ljlu2w37asCseZGm8HkE/AEvXm/wCyhmIidso6A5tPSi3HOzxNstjMO9gj/wAdALtknrcCEta95Ee6qmFv4mzK2ibQMkhFVAc+pIygQD5ctNqqcc4njjbIbFX8sRl765lI5jLMEelADt37mGuRmUxqGRgysOqsK9E7P9preITur8EHTWvJO95ESJ9x9DV20btrxZWCzuRt0npQbntV2WuWx3uFaV3jcfPasvh8feXQrt5EVquy/bAwLd3xLtrRfiHArVwi9azZZl1TLng75M2k9J+VBhE41eB009W/Oj3Z7GXMQzC47BQNwSTuOvr/AFpXsvZDslwrulu4e2t6d3ugO4YbhlYRbbqABVzjnAOGx+lsWp5RbXMPcRtWOUtmpdMsLJlLlNx55gcRYt/q1Ck85JJ15sZ0G8zE+6jmGxw7sld2OWeYUbjyJn5xypuM4Fgt1DD+Jh/1f1FVLIsL4AWiZ9qTy8vKqvD0+WOfdldrnP1OGXH24TTPYztzh7d7uiCQDBcbDzjmP6jrc48oYBljXQnqNx/Oox2Q4TMslwnzvPR3/sWQW+7JVQAPG0iBA1Bq4pRi8ldWv+z4H+7b/G3/ALqWiHkb9pAyx3UN+9pHwq5g+0trvC9ywYIgopGXltsRsDWa/wBm3Buh03iD9KaVisZJ4ZW3y3FjtLgm/W4Yr5q38tPrVm2mEvH9DfAn7rCYPnJA+dYO1iyFZQqGfvlZYCIhW5A/HSojhmYjLoI3gxv5A1Oojdeh3+zSx4jbb0X6BjVDEdibhQsE8IOgUENtuQTqPTnWR+yXxsx9GYfWK0fAO1mIshbV7x2xosusrJneeutR2xPdQbFcAuJMEQN50I+ND8RaZT4hHQ7g+4161axeFvxN1CY2fRh/Es/Wq2O4BZuyFKlY37y2BPSHYGmqnujG4Bhibfd3G/SICVdtzqAoB+9vqN492lY9n8R/dn6fWKt3eHDDYh1DZ1UE5htKrJE9RVS1xezI8FwdRnnlFTGOSM9msSQITXnrtz+NGeG4DEYfwra7y2fatO0SfxI33H89jzBqvaxCXhls5xcJAkk6aE6wf2amHBMX/eH/ABH86lApe4cCuZCy/wDl3F8Y8gySrDzke4VXXAOeR0J1iRoYPiGmhHyqsOEYwTF0zy8bVGnC8cPvDcn9aeZk/d86BmJfKxQTnmCWBAB8gdT8Kjt4K5kYd5bliTmKZiCY2JOmw2Fa7DcJUIjDK1zKpcgAuGAGaQwltZ1E1R4rgFueJcUwY+KD3eQHaMoAPLr50FzhWBR7LNZdFxITJetXGy2sXZA0UPp3dxeTaeyJnWQOH4pdwpdrdu8GY92bdxrbiV6+HxDWZKwau8N7PXXlu/kjZrYUgDWZJH9RSXOy1+SUxIH/AAlB+INBTwuExLDvu6tGIJB/R6eKIMhQJJ6T51fw3B8c/jTC3bahc2eSyhV8TQzMsaLyJ30q/wAB4LiLJZjeLZiucsGk5SSB7Uxr8qJ3LLvmtu4QMGBK5gfECCQZOsMTqNYg70EXZ/AW7pBxFx1IOXKyhyVW2MraNsIAjbTeqXGex2FW3cu2+JW2KrmQd2UZSWET4zpJ3A0qle7IKrHLib5A0DBgs+Y0mKqY7hGKVGQ3rt220SrNmMAhhBbbUDbeKCthEugw1zD3R1z5W+YFFreCVt1A/dKtrQHCYOxMXEYnmrsUPodql4vgsKiM9q9dsuoB7pgLgaTAysCCBPM5tqBw7L924ZGUgahblkuraEeIDTn8RTblggFbjYECZ1woUjyBVAY99D8BcvMQtp7rE8kBcgaCYEaSRrPOjuLwXErIBcvB2JhvjBMetACx2AS62Y4vDKQAItoUAA8lFRJwdRtjrf8An/KiR4jiDowRv3kU/UUlsXH1+z2G/wCHbFAUwj4RbdtDdUlR4iGPjMkk6jTekxj4Rpi8FnzB+tBsRYMS2EtAdRA/5WoTiO75WwvuuN/MmgO2bS9wEkjvrlwEjeEBCifQn/Wm27tp2bxEBVCQSApzHwt5mRRHgVr7Rg27pQ17Dsb2URL22EMQeZV5noGHWqb9yXkWcodQ76syrk11zElTqdPSgrYfjRS2Edj4JQAnkCY/rzoNxHiL3jCgxXMAfEY1LH4nT5CmNiI50CYPAagvt0rYdn8fFwoUV0uW2turgMrCA2ojqggzIOorI28SSYFaTgmHvKO9tpm0hR4WBOzGCwHlQDeNcFfDsblkE2t43NvyPVfP49SU7N9pWtkAnSitviWMHtYJGHuAn0DEVn+I8KdnL28Jcsg6lB4lB55IJIHl/pQbK320XD3O8w7FHbRl+7cH7a+uh3+lVu0fbzE6m1hnI53HByj3KvLzJ9KxXD37pszpqTuV8ajxCUzbHX1iK1vDO0FuCudUYgANlVgYmMouCGB2KMVO2ojUM3/vPjsSfC4HuUQPWi/CcTi7bzdCXVO4z6jzWRE0Q44oKm7h5tvlGZVGVbjAeIhA7RPITuYoEvGMWN7TH32P/pTSdtdd4jb3CGemg+c1Fb4ndiFT4a/yNZf/AG3jCYW0w91gD5lBVi9hOIPrcdgD5sf8qgihLqND/tG/0HypKzX+wbn96/8A+uT88w+ldRCtYx16NcnkdRFQYiy9wgvcteU6x8aJYHEO3tBaNWMOCJIFE7ZSzhXX2Xw/wFWhavwCHw8yREesgz51pPs1udUB9BS2sNZB8VlW8tp+VEAeGtY0gFe5YbDlPuJbWpu+xKgF7Kx1DGP50burbJH6JAo2TXL15eetLirneCGVIAAELGwgbH570Aq/eZP11mPUGfQgHYioBcsmTbYWnPPICp/eUiD79D50S4nhnvsWa4ZM/dG5Mkx11ob/ALvnnd/y/wDzQU+H425iMR3d0qQhKwvs7EEgjeaN3ezllxrbBH7zfnTeHcES2xcEluvpG1GFTQa9T8//AIoB/DOztqy+ZLRk6DxsZnpJMGjDIg9lM3U5jE9AeY8/9S2wsZj0Ux/F4f8AqpLcA+dA0uPwL8/zp1u4PwL8D+dc0FjGgJ091SNZXWJ0MH50DAwJ1gem3TbWnXySeTeYmT0md/fTctcNKC0t0tb7thlRdWKrvOwYjnO06aVSOGtnZY9Z+NXn8WgmM0xO+mmv8PzqAs0zMz1218qBLNobFZ6an4VH/sq1JZrfU8/X6VbR8kxyaDoPPafdV0Ykd3LIDmzAGWDbbmDB3HKgA3uG2G+7HuMVYwnBrJssGJlSzAd4Qx02mZI02ohh8KH5ADbnP1pl3DplMA8t/fQZzFdmMO/4jP7bfnQfH9k0Hs5jAgSxMe6TW5wWDLsAI9f9KvcV4aUUEkSY2/Og8t4Vg7mHvBwzbZSCuUx90ggkEgx0rYJxzFWkPdsYJBylC4OhkeEQoOmpHI9aufY1fRgKmw/Dba5iC6nlBkTy32oMGOJKwAOY3MwBDM6Tm00KkD0gV6Jh+0YygLw6yVCgBxLyBoCY225xQLF6AllDRO+v8qBcU7VN3kLh7ZIAGYsRPmVQAE++g0vE+GpiGa9cw9vMxAK92QQABGhoa/ArQ2w9of8ADX8qOYNnvWlukhAQoKrJ1Pwmr1nhoJidfhQYa/g8RbdbuFy23TYoMh105COvxoVxzGY+6Cr2YB9ru7dtc5G2buxPn/KvTrEW0JCqWYkKWEhQN4B0k9aqXlncCeoEfIUHjI4RiWP6p/UEVas9lcSfuR7zXqvdV3d0HneB7JXVYMwB8jBHwIrecPLBBCgACIAGkVZ7ui/Zq3aN0i8pK5ZEdZHmNNTQDVxpG4B9Kv2lLiTbaP3Zr0rCW7SqMiAegFTHI3tID7wDQfNHb/Asl/vACUZQAfwsJlT06+prJZor6c7Y8Esm2zNbQoRBUrPyrxTifYy27TZbu/KSw+B2+NBW7E4AXLmZvYTX+L7o/n6VvlwSnaf69aG9meBm1byArpuRmlj1MnyrV4LCjUHppQBjw4ef+H8qibARsQfWPrFaNruQTAqjfxxb7q/CT8aAR9lfz+JrqtmloP/Z"
                    className="object-cover border rounded-lg w-full h-48"
                    alt=""
                  />
                  <div className="card-body mt-[-20px] flex items-center ">
                    {/* Rating Section */}
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-[#FF3811]"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-[#FF3811]"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-[#FF3811]"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-[#FF3811]"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-[#FF3811]"
                      />
                    </div>
                    <p className="text-xl  font-bold text-[#444444]">
                      Engine Diagnostics
                    </p>

                    <div className="mb-[-30px]">
                      <p className=" text-[#FF3811] text-lg font-semibold">
                        Price: $20:00
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="/"
                aria-label="View Item"
                className="inline-block overflow-hidden duration-300 transform bg-white shadow-sm hover:-translate-y-2"
              >
                <div className="flex flex-col p-2 border rounded-md">
                  <img
                    src="https://1offperformance.com/wp-content/uploads/2023/03/OEM-parts.png"
                    className="object-cover border rounded-lg w-full h-48"
                    alt=""
                  />
                  <div className="card-body mt-[-20px] flex items-center ">
                    {/* Rating Section */}
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-[#FF3811]"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-[#FF3811]"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-[#FF3811]"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-[#FF3811]"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-[#FF3811]"
                      />
                    </div>
                    <p className="text-xl  font-bold text-[#444444]">
                      Engine Diagnostics
                    </p>

                    <div className="mb-[-30px]">
                      <p className=" text-[#FF3811] text-lg font-semibold">
                        Price: $20:00
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="/"
                aria-label="View Item"
                className="inline-block overflow-hidden duration-300 transform bg-white shadow-sm hover:-translate-y-2"
              >
                <div className="flex flex-col p-2 border rounded-md">
                  <img
                    src="https://st2.depositphotos.com/3896013/6360/i/450/depositphotos_63609065-stock-illustration-new-spare-parts.jpg"
                    className="object-cover border rounded-lg w-full h-48"
                    alt=""
                  />
                  <div className="card-body mt-[-20px] flex items-center ">
                    {/* Rating Section */}
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-[#FF3811]"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-[#FF3811]"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-[#FF3811]"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-[#FF3811]"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-[#FF3811]"
                      />
                    </div>
                    <p className="text-xl  font-bold text-[#444444]">
                      Engine Diagnostics
                    </p>

                    <div className="mb-[-30px]">
                      <p className=" text-[#FF3811] text-lg font-semibold">
                        Price: $20:00
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="/"
                aria-label="View Item"
                className="inline-block overflow-hidden duration-300 transform bg-white shadow-sm hover:-translate-y-2"
              >
                <div className="flex flex-col p-2 border rounded-md">
                  <img
                    src="https://www.shutterstock.com/image-photo/auto-mechanic-installing-two-piston-600nw-2354509909.jpg"
                    className="object-cover border rounded-lg w-full h-48"
                    alt=""
                  />
                  <div className="card-body mt-[-20px] flex items-center ">
                    {/* Rating Section */}
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-[#FF3811]"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-[#FF3811]"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-[#FF3811]"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-[#FF3811]"
                      />

                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-[#FF3811]"
                      />
                    </div>
                    <p className="text-xl  font-bold text-[#444444]">
                      Engine Diagnostics
                    </p>

                    <div className="mb-[-30px]">
                      <p className=" text-[#FF3811] text-lg font-semibold">
                        Price: $20:00
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="/"
                aria-label="View Item"
                className="inline-block overflow-hidden duration-300 transform bg-white shadow-sm hover:-translate-y-2"
              >
                <div className="flex flex-col p-2 border rounded-md">
                  <img
                    src="https://media.istockphoto.com/id/1034249292/photo/set-of-car-parts-isolated-on-white-background-3d.jpg?s=612x612&w=0&k=20&c=BwXl3LzQau4v40nl9INYToE0mC1SYDA4gBkylspbYis="
                    className="object-cover border rounded-lg w-full h-48"
                    alt=""
                  />
                  <div className="card-body mt-[-20px] flex items-center ">
                    {/* Rating Section */}
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-[#FF3811]"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-[#FF3811]"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-[#FF3811]"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-[#FF3811]"
                      />

                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-[#FF3811]"
                      />
                    </div>
                    <p className="text-xl  font-bold text-[#444444]">
                      Engine Diagnostics
                    </p>

                    <div className="mb-[-30px]">
                      <p className=" text-[#FF3811] text-lg font-semibold">
                        Price: $20:00
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="text-center">
              <a
                href="/"
                className="bg-white mt-12 mb-3 font-semibold text-lg text-[#FF3811] border px-4 py-2 border-[#FF3811]"
              >
                More Products
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Our Team Section Start*/};{/* Our team section end */}
      <section>
        <div className="py-16 container mx-auto">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="text-[#FF3811] font-bold text-xl">Team</p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              Meet Our Team
            </h2>
            <p className=" mt-4  text-lg text-[#878787]">
              The Majority Have Suffered Alteration In Some Form, By Injected
              Humour, Or Randomised Words Which Don't Look Even Slightly
              Believable.
            </p>
          </div>
          <div className="slider-container py-1 px-8 rounded bg-black">
            <Slider {...settings}>
              <div className="bg-red-400 ">
              <div className=" bg-white flex-col w-[230px]  border rounded-md py-2 flex  items-center ">
                <img
                  className="rounded h-[200px]"
                  src={team1}
                  alt="Pizza"
                />
                <div className="flex flex-col items-center">
                  <h1 className="text-[#444444] mt-1 text-2xl font-bold">
                    Car Engine Plug
                  </h1>
                  <p className="text-[#444444] mt-1 text-xl font-semibold">
                    Engine Expert
                  </p>
                  <div className="flex gap-4  text-xl mt-3">
                    <img src={facebook} alt="" className="h-8 w-8" />
                    <img src={teitter} alt="" className="h-8 w-8" />
                    <img src={linkedin} alt="" className="h-8 w-8" />
                    <img src={instagram} alt="" className="h-8 w-8" />
                  </div>
                </div>
              </div>
              </div>
              <div className="bg-red-400 ">
              <div className=" bg-white flex-col w-[230px]  border rounded-md py-2 flex  items-center ">
                <img
                  className="rounded h-[200px]"
                  src={team1}
                  alt="Pizza"
                />
                <div className="flex flex-col items-center">
                  <h1 className="text-[#444444] mt-1 text-2xl font-bold">
                    Car Engine Plug
                  </h1>
                  <p className="text-[#444444] mt-1 text-xl font-semibold">
                    Engine Expert
                  </p>
                  <div className="flex gap-4  text-xl mt-3">
                    <img src={facebook} alt="" className="h-8 w-8" />
                    <img src={teitter} alt="" className="h-8 w-8" />
                    <img src={linkedin} alt="" className="h-8 w-8" />
                    <img src={instagram} alt="" className="h-8 w-8" />
                  </div>
                </div>
              </div>
              </div>
              <div className="bg-red-400 ">
              <div className=" bg-white flex-col w-[230px]  border rounded-md py-2 flex  items-center ">
                <img
                  className="rounded h-[200px]"
                  src={team1}
                  alt="Pizza"
                />
                <div className="flex flex-col items-center">
                  <h1 className="text-[#444444] mt-1 text-2xl font-bold">
                    Car Engine Plug
                  </h1>
                  <p className="text-[#444444] mt-1 text-xl font-semibold">
                    Engine Expert
                  </p>
                  <div className="flex gap-4  text-xl mt-3">
                    <img src={facebook} alt="" className="h-8 w-8" />
                    <img src={teitter} alt="" className="h-8 w-8" />
                    <img src={linkedin} alt="" className="h-8 w-8" />
                    <img src={instagram} alt="" className="h-8 w-8" />
                  </div>
                </div>
              </div>
              </div>
              <div className="bg-red-400 ">
              <div className=" bg-white flex-col w-[230px]  border rounded-md py-2 flex  items-center ">
                <img
                  className="rounded h-[200px]"
                  src={team1}
                  alt="Pizza"
                />
                <div className="flex flex-col items-center">
                  <h1 className="text-[#444444] mt-1 text-2xl font-bold">
                    Car Engine Plug
                  </h1>
                  <p className="text-[#444444] mt-1 text-xl font-semibold">
                    Engine Expert
                  </p>
                  <div className="flex gap-4  text-xl mt-3">
                    <img src={facebook} alt="" className="h-8 w-8" />
                    <img src={teitter} alt="" className="h-8 w-8" />
                    <img src={linkedin} alt="" className="h-8 w-8" />
                    <img src={instagram} alt="" className="h-8 w-8" />
                  </div>
                </div>
              </div>
              </div>
              <div className="bg-red-400 ">
              <div className=" bg-white flex-col w-[230px]  border rounded-md py-2 flex  items-center ">
                <img
                  className="rounded h-[200px]"
                  src={team1}
                  alt="Pizza"
                />
                <div className="flex flex-col items-center">
                  <h1 className="text-[#444444] mt-1 text-2xl font-bold">
                    Car Engine Plug
                  </h1>
                  <p className="text-[#444444] mt-1 text-xl font-semibold">
                    Engine Expert
                  </p>
                  <div className="flex gap-4  text-xl mt-3">
                    <img src={facebook} alt="" className="h-8 w-8" />
                    <img src={teitter} alt="" className="h-8 w-8" />
                    <img src={linkedin} alt="" className="h-8 w-8" />
                    <img src={instagram} alt="" className="h-8 w-8" />
                  </div>
                </div>
              </div>
              </div>
              <div className="bg-red-400 ">
              <div className=" bg-white flex-col w-[230px]  border rounded-md py-2 flex  items-center ">
                <img
                  className="rounded h-[200px]"
                  src={team1}
                  alt="Pizza"
                />
                <div className="flex flex-col items-center">
                  <h1 className="text-[#444444] mt-1 text-2xl font-bold">
                    Car Engine Plug
                  </h1>
                  <p className="text-[#444444] mt-1 text-xl font-semibold">
                    Engine Expert
                  </p>
                  <div className="flex gap-4  text-xl mt-3">
                    <img src={facebook} alt="" className="h-8 w-8" />
                    <img src={teitter} alt="" className="h-8 w-8" />
                    <img src={linkedin} alt="" className="h-8 w-8" />
                    <img src={instagram} alt="" className="h-8 w-8" />
                  </div>
                </div>
              </div>
              </div>
              <div className="bg-red-400 ">
              <div className=" bg-white flex-col w-[230px]  border rounded-md py-2 flex  items-center ">
                <img
                  className="rounded h-[200px]"
                  src={team1}
                  alt="Pizza"
                />
                <div className="flex flex-col items-center">
                  <h1 className="text-[#444444] mt-1 text-2xl font-bold">
                    Car Engine Plug
                  </h1>
                  <p className="text-[#444444] mt-1 text-xl font-semibold">
                    Engine Expert
                  </p>
                  <div className="flex gap-4  text-xl mt-3">
                    <img src={facebook} alt="" className="h-8 w-8" />
                    <img src={teitter} alt="" className="h-8 w-8" />
                    <img src={linkedin} alt="" className="h-8 w-8" />
                    <img src={instagram} alt="" className="h-8 w-8" />
                  </div>
                </div>
              </div>
              </div>
              <div className="bg-red-400 ">
              <div className=" bg-white flex-col w-[230px]  border rounded-md py-2 flex  items-center ">
                <img
                  className="rounded h-[200px]"
                  src={team1}
                  alt="Pizza"
                />
                <div className="flex flex-col items-center">
                  <h1 className="text-[#444444] mt-1 text-2xl font-bold">
                    Car Engine Plug
                  </h1>
                  <p className="text-[#444444] mt-1 text-xl font-semibold">
                    Engine Expert
                  </p>
                  <div className="flex gap-4  text-xl mt-3">
                    <img src={facebook} alt="" className="h-8 w-8" />
                    <img src={teitter} alt="" className="h-8 w-8" />
                    <img src={linkedin} alt="" className="h-8 w-8" />
                    <img src={instagram} alt="" className="h-8 w-8" />
                  </div>
                </div>
              </div>
              </div>
              <div className="bg-red-400 ">
              <div className=" bg-white flex-col w-[230px]  border rounded-md py-2 flex  items-center ">
                <img
                  className="rounded h-[200px]"
                  src={team1}
                  alt="Pizza"
                />
                <div className="flex flex-col items-center">
                  <h1 className="text-[#444444] mt-1 text-2xl font-bold">
                    Car Engine Plug
                  </h1>
                  <p className="text-[#444444] mt-1 text-xl font-semibold">
                    Engine Expert
                  </p>
                  <div className="flex gap-4  text-xl mt-3">
                    <img src={facebook} alt="" className="h-8 w-8" />
                    <img src={teitter} alt="" className="h-8 w-8" />
                    <img src={linkedin} alt="" className="h-8 w-8" />
                    <img src={instagram} alt="" className="h-8 w-8" />
                  </div>
                </div>
              </div>
              </div>
              
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
