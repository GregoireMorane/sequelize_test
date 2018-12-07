const models = require("./models");
const users = models.users;
const companies = models.companies;

users.bulkCreate([
	{ firstname : "Elé", lastname : "Dupoix", age : 27, email : "ele@oui.com", password : "nonon", companyId : 9 },
	{ firstname : "Greg", lastname : "Morane", age : 24, email : "greg@oui.com", password : "nein", companyId : 10 },
	{ firstname : "Super", lastname : "Mega", age : 30, email : "super@mega.com", password : "superMega", companyId : 10 }
])
.then((newusers) => {
	console.log(newusers)
})
.catch((err) => {
	console.log("Error while user creation : ", err)
})