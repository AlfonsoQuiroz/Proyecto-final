import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    {
      title: 'Peliculas',
      href: '/movies',
      img: 'https://fondosmil.com/fondo/12750.jpg'
    },
    {
      title: 'Series',
      href: '/tv',
      img: 'https://fondosmil.com/fondo/27874.jpg'
    },

  ];

  return (
    <section className="py-8 h-full m-auto md:">
      <div className="container h-full m-auto ">
        <h2 className="text-center font-bold text-xl mt-10 md:mt-10 md:font-extrabold md:text-6xl hover:text-sky-500 transition ">
          Categorías
        </h2>
        <div className="grid md:grid-cols-[repeat(auto-fit,_minmax(256px,_1fr))] place-items-center place-content-center gap-6  mt-5 mb-5 md:mt-20 md:mb-20">
          {categories.map((element, index) => {
            const { title, href, img } = element;
            return (
              <Link
                key={index}
                to={href}
                className="rounded-2xl overflow-hidden w-full"
              >
                <div className="card">
                  <img
                    src={img}
                    alt="Herrero"
                    width={256}
                    height={256}
                    className="w-full h-64 object-cover img--border"
                  />
                  <div className="bg-sky-900 p-4">
                    <h3 className="text-2xl font-bold text-center">{title}</h3>
                  </div>

                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section >
  );
};

export default Categories;