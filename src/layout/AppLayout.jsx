import { Link, Outlet } from "react-router-dom";

function AppLayout() {
   return (
      <div className="bg-lightGray pb-10 min-h-screen">
         <div className="py-5 text-center border-b-[3px] border-[rgba(217, 217, 217, 1)] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2)]">
            <Link
               to="/"
               className="text-4xl font-bold cursor-pointer inline-block"
            >
               Modern Walk
            </Link>
         </div>

         <main className="max-w-6xl 2xl:max-w-screen-2xl mx-auto px-4">
            <Outlet />
         </main>
      </div>
   );
}

export default AppLayout;
