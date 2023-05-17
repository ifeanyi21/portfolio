import OutlinedCard from "@/components/Home/Services";
import Services from "@/utils/Services";
import Image from "next/image";

const skills = [
  {
    id: 0,
    src: "/Images/html.png",
    name: "HTML",
  },
  {
    id: 1,
    src: "/Images/css.png",
    name: "CSS",
  },
  {
    id: 2,
    src: "/Images/javascript.png",
    name: "JavaScript",
  },
  {
    id: 3,
    src: "/Images/bootstrap.png",
    name: "Bootstrap",
  },
  {
    id: 4,
    src: "/Images/tailwind.png",
    name: "Tailwind",
  },
  {
    id: 5,
    src: "/Images/react.png",
    name: "React",
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8 lg:min-h-screen">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[89.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Hi, <span className="text-indigo-600">I'm Ifeanyichukwu Eze</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              A Front-end Developer
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/about"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[92.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
      <div className="mb-6">
        <h1 className="text-4xl font-bold tracking-tight text-indigo-600 sm:text-4xl text-center mb-10">
          Services
        </h1>
        <div className="container">
          <div className="row">
            {Services.map((service) => {
              return (
                <div className="col-lg-4 mb-7" key={service.id}>
                  <OutlinedCard
                    header={service.header}
                    content={service.content}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div className="container">
          <h1 className="text-4xl font-bold tracking-tight text-indigo-600 sm:text-4xl text-center mb-10">
            Skills and Technologies
          </h1>
          <p className="text-muted mb-10">
            As a frontend web developer, I possess a wide range of skills and
            expertise in various technologies to create exceptional user
            experiences. Here are some of the key skills and technologies I
            bring to the table:
          </p>
          <div className="row">
            {skills.map((skill) => {
              return (
                <div className="col-md-2 text-center" key={skill.id}>
                  <Image
                    src={skill.src}
                    width={100}
                    height={100}
                    alt={skill.name}
                    className="mx-auto mb-1 min-h-[100px] object-contain"
                  />
                  <p className="text-xl text-indigo-600 font-bold">
                    {skill.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
