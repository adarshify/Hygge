
 import MessageInput from "./MessageInput";
 import Messages from "./Messages";
 import { TiMessage } from "react-icons/ti";
 const MessageContainer = () => {
  const noChatSelected = true
 	return (
 		<div className='md:min-w-[450px] flex flex-col'>
 		{noChatSelected ? ( <NoChatSelected />) : (	<>
 				{/* Header */}
 				<div className='bg-white px-4 py-2 mb-2 rounded-lg'>
 					<span className='label-text text-black'>To:</span> <span className='text-black font-bold'>Trash Bin</span>
 				</div>

 				<Messages />
 				<MessageInput />
 			</>)}
 		</div>
 	);
 };
 export default MessageContainer;

 const NoChatSelected = () => {
	// const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-black font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 Trash Bin❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessage className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};