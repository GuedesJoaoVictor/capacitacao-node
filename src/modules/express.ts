import e from "express";
import UserModel from "../models/User.Modal";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const app = e();
app.use(e.json());
const PORT = 8080;

app.get("/home", (req, res) => {
  res.contentType("text/html");
  res.status(200).send("<h1>Hello World!</h1>");
});

app.get("/users", (req, res) => {
  try {
    const users = UserModel.find();
    res.json(users);
  } catch (error) {
    res.json({ error: error });
  }
});

app.post("/user", async (req, res) => {
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
    res.json({ error: error });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
