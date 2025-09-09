import cluster from "cluster"
import os from "os"
import http from "http"

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;
  console.log(`Number of CPUs: ${numCPUs}`);
  console.log(`Master ${process.pid} running`);

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  // Workers can share the same TCP connection
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end(`Hello from worker ${process.pid}\n`);
  }).listen(3000);

  console.log(`Worker ${process.pid} started`);
}
