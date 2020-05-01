import "dotenv/config";
import { GraphQLClient } from "graphql-request";

(async () => {
  const token = process.env.GITHUB_GRAPHQL_API;

  if (token) {
    const endPoint: string = "https://api.github.com/graphql";
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
