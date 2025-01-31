import fs from "fs";
import path from "path";

// Criar uma pasta
// fs.mkdir(path.join(__dirname, "test"), {}, (err) => {
//   if (err) throw err;
//   console.log("Pasta criada com sucesso!");
// });

// Criar um arquivo
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "Hello World!",
  (err) => {
    if (err) throw err;

    console.log("Arquivo criado com sucesso!");

    // Adicionar conteúdo ao arquivo
    fs.appendFile(
      path.join(__dirname, "/test", "hello.txt"),
      " Hello Node!",
      (err) => {
        if (err) throw err;
        console.log("Arquivo escrito com sucesso!");

        // Ler um arquivo
        fs.readFile(
          path.join(__dirname, "/test", "hello.txt"),
          "utf8",
          (err, data) => {
            if (err) throw err;
            console.log(data);
          }
        );
      }
    );
  }
);
