require("dotenv/config");
const { GraphQLClient } = require("graphql-request");

(async () => {
  const token = process.env.GITHUB_GRAPHQL_API;

  if (token) {
    const endPoint = "https://api.github.com/graphql";
    const graphQLClient = new GraphQLClient(endPoint, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    const QUERY = `
  query { 
    viewer { 
      login
    }
  }`;

    const data = await graphQLClient.request(QUERY);
    console.log(data);
  } else {
    console.log("Get Your Github token");
  }
})();
