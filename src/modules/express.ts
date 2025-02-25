import e, { NextFunction, Request, Response } from "express";
import UserModel from "../models/User.Modal";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const PORT = 8080;
const app = e();
app.use(e.json());
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`Request Type: ${req.method}`);
  console.log(`Content Type: ${req.headers["content-type"]}`);
  console.log(`Date: ${new Date()}`);

  next();
});
app.set("view engine", "ejs");
app.set("views", "src/views");

app.get("/home", (req, res) => {
  res.contentType("text/html");
  res.status(200).send("<h1>Hello World!</h1>");
});

app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (error) {
    res.json({ error: (error as Error).message });
  }
});

app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findById(id);
    res.json(user);
  } catch (error) {
    res.json({ message: (error as Error).message });
  }
});

app.patch("/users/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { email }: User = req.body;
    const user = await UserModel.findByIdAndUpdate(
      id,
      {
        email: email,
      },
      { new: true }
    );

    res.json(user);
  } catch (error) {
    res.json({ message: (error as Error).message });
  }
});

app.delete("/users/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndDelete(id);

    res.json(user);
  } catch (error) {
    res.json({ message: (error as Error).message });
  }
});

app.post("/users", async (req, res) => {
  try {
    const { firstName, lastName, email, password }: User = req.body;
    const user = await UserModel.create({
      firstName,
      lastName,
      email,
      password,
    });

    res.json(user);
  } catch (error) {
    res.json({ message: (error as Error).message });
  }
});

app.get("/views/users", async (req: Request, res: Response) => {
  const users: User[] = await UserModel.find();
  res.render("index", { users });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
