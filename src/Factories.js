const uuidv4 = require('uuid/v4')

const createUser = ({name = "", socketId = null } = {})=>(
	{
		id:uuidv4(),
		name,
		socketId
		
	}
)

const createMessage = ({message = "", sender = ""} = { })=>(
		{
			id:uuidv4(),
			// time:getTime(new Date(Date.now())), //СЛОМАЛОСЬ
			message,
			sender	
		}

	)

const createChat = ({messages = [], name = "Community", users = []} = {})=>(
	{
		id:uuidv4(),
		name,
		messages,
		users,
		typingUsers:[]
	}
)

module.exports = {
	createMessage,
	createChat,
	createUser
}

