# Payment App Assignment

## Please follow the below steps to run the project

1.  Run command "npm install" on your terminal.
2.  Run command "npm run dev" on your terminal to start the app.

### Swagger API Docs

1.  Run command "npm install" on your terminal.
2.  Run command "npm run dev" on your terminal to start the app.
3.  Goto 'localhost:1337/api-docs' to view the swagger docs

### Testing

1.  Run command "npm install" on your terminal if not already done in previous steps.
2.  Run command "npm run test" to run testing.
3.  Test results will be logged on your console.

### eslint

1. Run command "npm install" on your terminal if not already done in previous steps.
2. Run command "npm run lint"

## Next ToDo steps

1. Make the app PCI compliant, use worldpay or stripe etc to generate token for card information.
2. Add more tests and make test coverage 100% for all files and also add stub where required, now just done for couple of them just as a sample to show.
3. Configure webpack or esbuild to build the app.
4. Add middlewares for authentication.
5. Add load tests using Artillery.
6. Improve eslint and tsconfig rules.
7. Document everything.

## Thought process on using crypto lib

I choose to use crypto because its native to node js instead of using bycrypt or any other 3rd party.
