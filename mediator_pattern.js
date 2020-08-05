class ChatRoom {
	constructor() {
		
	}
	
	showMessage(user, message) {
		console.log(Date() + ' [' + user.getName() + '] : ' + message);
	}
}

class User {
	constructor(name) {
		this.name = name;
	}
	
	getName() {
		return this.name;
	}
	
	setName(name) {
		this.name = name;
	}
	
	sendMessage(message) {
		new ChatRoom().showMessage(this, message);
	}
}

const robert = new User('Robert');
const john = new User('John');

robert.sendMessage('Hi! John!');
john.sendMessage('Hello! Robert!');