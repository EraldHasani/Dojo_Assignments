const express = require("express");
const app = express();
const port = 8004;
const { faker } = require("@faker-js/faker");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => console.log(`Listening on port: ${port}`));







const createUser = () => {
    const newUser = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        id: faker.database.mongodbObjectId(),
    }
    return newUser;
}

const newFakeUSer = createUser();
console.log(newFakeUSer);



const createCompany = () => {
    const newCompany = {
        id: faker.database.mongodbObjectId(),
        name: faker.company.name(),
        address: {
            street: faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country(),

        }
        

    }
    return newCompany;

}
const newFakeCompany = createCompany();
console.log(newFakeCompany);


app.get('/api/users/new', (req, res) => {
    const newFakeUser = createUser();
    res.json(newFakeUser);
  });

  app.get('/api/companies/new', (req, res) => {
    const newFakeCompany = createCompany();
    res.json(newFakeCompany);
  });

  app.get('/api/user/companies/new', (req, res) => {
    const newFakeCompany = createCompany();
    const newFakeUSer= createUser();
    
    const data={
        user:newFakeUser,
        company:newFakeCompany,
    };
    res.json(data);
  });

