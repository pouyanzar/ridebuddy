import React, {useState} from 'react';
import './Chats.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChatEngine, getOrCreateChat } from 'react-chat-engine'

const DirectChatPage = (props) => {
	const [username, setUsername] = useState(props.messageTo)
	
	console.log('userName', username);

	function createDirectChat(creds) {
		getOrCreateChat(
			creds,
			{ is_direct_chat: true, usernames: [username] },
			() => setUsername('')
		)
	}

	function renderChatForm(creds) {
		console.log(creds,'creds');
		createDirectChat(creds)
	}

	// function renderChatForm(creds) {
	// 	return (
	// 		<div>
	// 			<input 
	// 				placeholder='Username' 
	// 				value={username} 
	// 				onChange={(e) => setUsername(e.target.value)} 
	// 			/>
	// 			<button onClick={() => createDirectChat(creds)}>
	// 				Create
	// 			</button>
	// 		</div>
	// 	)
	// }

	return (
		<div className="chat">
			<ChatEngine
				height='90vh'
				projectID='ffeaa6c1-7930-43c5-b22c-e1450be2b51d'
				userName='Saif Ali'
				userSecret='ridebuddy'
				renderNewChatForm={(creds) => renderChatForm(creds)}
			/>		
		</div>
			
	)
}

export default DirectChatPage;