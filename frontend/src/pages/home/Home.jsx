import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";



const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-[#f8f7f8] bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 '>
     
    <Sidebar />
    <MessageContainer />
    </div>
  )
}

export default Home;

// import MessageContainer from "../../components/messages/MessageContainer";
// import Sidebar from "../../components/sidebar/Sidebar";

// const Home = () => {
//   return (
//     <div className='flex flex-col sm:flex-row sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-[#f8f7f8] bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      
//       {/* Sidebar */}
//       <div className="hidden sm:block w-full sm:w-1/3 md:w-1/4">
//         <Sidebar />
//       </div>

//       {/* Message Container */}
//       <div className="w-full sm:w-2/3 md:w-3/4">
//         <MessageContainer />
//       </div>

//     </div>
//   )
// }

// export default Home;
