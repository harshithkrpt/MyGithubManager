import { GraphQLClient } from "graphql-request";
import { Router, Response, Request } from "express";

const router: Router = Router();

router.get("/getrepository/:username", async (req: Request, res: Response) => {
  const token = process.env.GITHUB_GRAPHQL_API;
  const { username } = req.params;

  if (!username) {
    return res.status(400).send({ ok: false, path: "username" });
  }

  if (!token) {
    return res.status(400).send({ ok: false });
  }

  const endPoint: string = "https://api.github.com/graphql";
  const graphQLClient = new GraphQLClient(endPoint, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  const QUERY = `
  query($login:String!) { 
    user(login:$login){
      name
      avatarUrl
      repositories(first:100){
        nodes {
          id
          name
          isFork
          forkCount
          }
      }
    }
  }
  `;

  try {
    const data = await graphQLClient.request(QUERY, { login: username });
    return res.send(data);
  } catch (e) {
    console.log(e);
    return res.status(400);
  }
});

export default router;
