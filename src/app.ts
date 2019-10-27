import Restify, { Request, Response, Next } from "restify";

function respond(req: Request, res: Response, next: Next) {
  res.send("hello " + req.params.name);
  next();
}

const server = Restify.createServer();
server.get("/hello/:name", respond);
server.head("/hello/:name", respond);

server.listen(8080, () => {
  console.log("%s listening at %s", server.name, server.url);
});
