import SimpleCard from "../components/SimpleCard";
import DetailCard from "../components/DetailCard";

const Home = () => {
  const categoryInfo = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw4thxPHv2bqcrDA83i-l7dgLlM5LFKCmXFg&usqp=CAU",
      category: "Cuerdas",
      products: 2,
    },
    {
      img: "https://media.sweetwater.com/api/i/b-original__w-300__h-300__bg-ffffff__q-85__ha-418ece9b8e2a26be__hmac-adc746d76c09733314b029aab232cb0765d93a82/images/items/350/KontS3-88.jpg",
      category: "Teclados",
      products: 2,
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Platin_Drums_PTCL2016_AF.jpg/220px-Platin_Drums_PTCL2016_AF.jpg",
      category: "Baterías",
      products: 2,
    },
    {
      img: "https://images.squarespace-cdn.com/content/v1/53cebe13e4b0e8c9c90dd5b7/1502992486739-XGLTP8OTIPY152J7RE8M/trumpet.png?format=1000w",
      category: "Viento",
      products: 2,
    },
  ];

  const recommendedInfo = [
    {
      img: "https://www.miche.com.co/cdn/shop/files/LE522018_Ludwig_Evolution_Mint_Fab_Awithoutcymbals_HighRes_9903_1024x1024_cf067639-017f-47b2-9f54-28836b31a747_1024x682.jpg?v=1688063015",
      name: "Instrumento 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque sint itaque aliquid at sed non? Aperiam magni repudiandae recusandae consequatur quasi eligendi maxime minima, odit aliquid omnis, nulla, beatae esse?"
    },
    {
      img: "https://usa.yamaha.com/files/02_FG9-R_4f2c43714dd416cf58934ba204689a0f.jpg?impolicy=resize&imwid=396&imhei=396",
      name: "Instrumento 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque sint itaque aliquid at sed non? Aperiam magni repudiandae recusandae consequatur quasi eligendi maxime minima, odit aliquid omnis, nulla, beatae esse?"
    },
  ];

  return (
    <main className="flex flex-col items-center bg-red-300 mt-3 rounded-mdtransition duration-200 ">
      <div className="flex flex-col bg-primary w-full py-5 justify-center items-center">
        <h2 className="font-bold mb-3">Busca en nuestro catálogo</h2>
        <div>
          <input className="mx-2 rounded-md p-2 w-60" placeholder="Ingresa un instrumento" type="text" />
          <button className="hover:bg-green-300 hover:scale-105 cursor-pointer bg-darkBlue text-[white] py-2 px-4 rounded-md">
            Buscar
          </button>
        </div>
      </div>

      <div className="py-4">
        <h2 className="font-bold mb-3 text-secondary">Categorías</h2>
        <div className="grid gap-2 grid-cols-4">
          {categoryInfo.map((item, index) => (
            <SimpleCard
              key={index}
              img={item.img}
              title={item.category}
              subtitle={item.products}
            />
          ))}
        </div>
      </div>

      <div className="py-4">
        <h2 className="font-bold mb-3 text-secondary">Recomendaciones de producto</h2>
        <div className="grid gap-3 grid-cols-2">
          {recommendedInfo.map((item, index) => (
            <DetailCard
              key={index}
              img={item.img}
              title={item.name}
              subtitle={item.description}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
