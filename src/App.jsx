import MainLayouts from "./layouts/MainLayouts";
import Arrow from "./components/Arrow";

function App() {
  let data = [
    { id: "america1", city: "Cancun", photo: "/img/america/cancun.jpg" },
    { id: "america2", city: "New York", photo: "/img/america/newyork.jpg" },
    {
      id: "america3",
      city: "Rio de Janeiro",
      photo: "/img/america/rioDeJaneiro.jpg",
    },
    { id: "america4", city: "Ushuaia", photo: "/img/america/ushuaia.jpg" },
    { id: "asia1", city: "Bangkok", photo: "/img/asia/bangkok.jpg" },
    { id: "asia2", city: "Pekin", photo: "/img/asia/pekin.jpg" },
    { id: "asia3", city: "Singapur", photo: "/img/asia/singapur.jpg" },
    { id: "asia4", city: "Tokyo", photo: "/img/asia/tokio.jpg" },
    { id: "europe1", city: "Ibiza", photo: "/img/europe/ibiza.jpg" },
    { id: "europe2", city: "London", photo: "/img/europe/london.jpg" },
    { id: "europe3", city: "Paris", photo: "/img/europe/paris.jpg" },
    { id: "europe4", city: "Roma", photo: "/img/europe/roma.jpg" },
    { id: "oceania1", city: "Majuro", photo: "/img/oceania/majuro.jpg" },
    { id: "oceania2", city: "Sidney", photo: "/img/oceania/sidney.jpg" },
    { id: "oceania3", city: "Suva", photo: "/img/oceania/suva.jpg" },
    {
      id: "oceania4",
      city: "Wellington",
      photo: "/img/oceania/wellington.jpg",
    },
  ];

  return (
    <MainLayouts>
      <main className="flex justify-center items-center mx-[219px]">
        <div className="w-[1291px] h-[304px] flex justify-between p-4 mt-[318px] mb-[399px]">
          <div className="flex flex-col w-[742px] h-[304px]">
            <h1 className="text-[48px] font-semibold h-[64px] font-[700] leading-[63.84px]">
              Find the perfect destination
            </h1>
            <p className="font-segoe-ui font-semibold w-[628px] h-[96px] text-[24px] text-[#1C1C1C99] leading-[31.92px] mt-10">
              Our app will help you find the perfect path for your next trip.
              With an easy-to-use interface and a host of itinerary options,
              planning your next trip has never been easier.
            </p>
            <button className=" justify-items-center space-x-2 w-[346px] h-[64px] px-4 bg-[#4F46E5] hover:bg-[#473fde] text-white text-lg font-semibold rounded-md mt-10">
              <span className="text-[24px]">View More</span>
            </button>
          </div>
          <div className="flex justify-center items-center">

          <div className="flex-none"><Arrow direction= "M15.75 19.5L8.25 12l7.5-7.5"/></div>
          <div className="flex flex-wrap h-[304px]">
          <div className="w-2/5 flex flex-col items-center p-2 bg-slate-300 m-2">
            <img src={data[0].photo} alt={data[0].id} />
            <p className="text-base">{data[0].city}</p>
          </div>
          
          <div className="w-2/5 flex flex-col items-center p-2 bg-slate-300 m-2">
            <img src={data[1].photo} alt={data[1].id} />
            <p className="text-base">{data[1].city}</p>
          </div>

          <div className="w-2/5 flex flex-col items-center p-2 bg-slate-300 m-2">
            <img src={data[2].photo} alt={data[2].id} />
            <p className="text-base">{data[2].city}</p>
          </div>

          <div className="w-2/5 flex flex-col items-center p-2 bg-slate-300 m-2">
            <img src={data[3].photo} alt={data[3].id} />
            <p className="text-base">{data[3].city}</p>
          </div>
          </div>
          <div className="flex-none"><Arrow direction="M8.25 4.5l7.5 7.5-7.5 7.5" /></div>
        </div>
        
          </div>
      </main>
    </MainLayouts>
  );
}

export default App;
