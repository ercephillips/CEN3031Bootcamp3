//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb+srv://erce:yeahlemon5@mycluster-e9j8n.mongodb.net/test?retryWrites=true&w=majority'//place the URI of your mongo database here.
  }, 
  openCage: {
    key: 'bd52390c97de4f249d54f7a7858bc60c' //place your openCage public key here - Sign-up for a free key https://opencagedata.com/
  },
  port: 8080
};