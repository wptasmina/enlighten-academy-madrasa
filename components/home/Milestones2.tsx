const data = [
  {
    count: "492+",
    label: "Students",
    icon: "🎓",
    backgroundImage:
      "https://cdn.pixabay.com/photo/2020/11/10/21/00/boy-5731001_640.jpg",
  },
  {
    count: "50+",
    label: "Teachers",
    icon: "👨‍🏫",
    backgroundImage:
      "https://cdn.pixabay.com/photo/2024/09/05/16/49/ai-generated-9025459_640.jpg",
  },
  {
    count: "2+",
    label: "Batches",
    icon: "📦",
    backgroundImage:
      "https://cdn.pixabay.com/photo/2020/01/30/17/49/book-4806076_640.jpg",
  },
  {
    count: "95%",
    label: "Success",
    icon: "🏆",
    backgroundImage:
      "https://cdn.pixabay.com/photo/2019/09/29/22/06/light-bulb-4514505_640.jpg",
  },
];

function Milestones2() {
  return (
    <div className=" py-6 md:pb-8 lg:pb-16 px-6 md:px-8 lg:px-16  md:-mt-[69px] lg:-mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 text-center">
        {data?.map((item, index) => (
          <div
            key={index}
            className="bg-white relative shadow-2xl h-40 overflow-hidden rounded"
          >
            {/* Actual content */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center space-y-1">
              <h6 className="text-4xl">{item.icon}</h6>
              <p className="text-3xl font-bold">{item.count}</p>
              <p className="text-lg">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Milestones2;
