const data = [
  {
    count: "492+",
    label: "Total Students",
    icon: "🎓",
    backgroundImage:
      "https://cdn.pixabay.com/photo/2020/11/10/21/00/boy-5731001_640.jpg",
  },
  {
    count: "50+",
    label: "Total Teachers",
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
    label: "Success Rate",
    icon: "🏆",
    backgroundImage:
      "https://cdn.pixabay.com/photo/2016/03/05/08/27/success-1237378_640.jpg",
  },
];

function Milestones() {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center">
        {data?.map((item, index) => (
          <div
            key={index}
            className="relative shadow-md text-white h-80 overflow-hidden"
            style={{
              backgroundImage: `url(${item.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 z-0"></div>

            {/* Actual content */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center space-y-1">
              <div className="text-4xl">{item.icon}</div>
              <div className="text-3xl font-bold">{item.count}</div>
              <div className="text-lg">{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Milestones;
