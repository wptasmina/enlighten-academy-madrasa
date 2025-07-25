import { Badge } from "lucide-react";

const notices = [
  {
    title: "New Academic Year 2024-25 Admission Open",
    date: "January 15, 2024",
    type: "Admission",
  },
  {
    title: "Annual Examination Results Published",
    date: "January 10, 2024",
    type: "Results",
  },
  {
    title: "Eid ul-Fitr Holiday Dates Announced",
    date: "January 5, 2024",
    type: "Holiday",
  },
];

function RecentNotice() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Recent Notices
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          {notices.map((notice, index) => (
            <div key={index} className="mb-4 hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {notice.title}
                    </h3>
                    <p className="text-gray-600">{notice.date}</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <Badge
                      fontVariant={
                        notice.type === "Admission"
                          ? "default"
                          : notice.type === "Results"
                          ? "secondary"
                          : "outline"
                      }
                    >
                      {notice.type}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecentNotice;
