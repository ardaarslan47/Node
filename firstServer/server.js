import http from "http";
import colors from "colors";
import figlet from "figlet";
import { franc , francAll } from "franc";
import langs from "langs";

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("content-Type", "text/plain");
  res.end("Hello Word\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at https://${hostname}:${port}/`);
});

figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data.green);
});

const input = process.argv[2];
const langCode = franc(input, {minLength: 5});

if (langCode === "und") {
    console.log(colors.red("SORRY, COULDN'T FIGURE IT OUT! TRY WITH MORE SAMPLE TEXT!"));
} else {
    const language = langs.where('3', langCode)
    if (language) {
        console.log(colors.green(`Our best guess is: ${language.name}`));
    } else {
        console.log(colors.red("Couldn't find a language"));
    }
}