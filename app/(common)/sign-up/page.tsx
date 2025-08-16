import SignUp from "@/components/form/SignUpForm";

function page() {
  return (
    <div className="flex items-center justify-center bg-gray-100 p-6 md:p-8 lg:p-16">
      <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">
          Sign Up
        </h2>
        <SignUp />
      </div>
    </div>
  );
}

export default page;
