
import express, { Request, Response } from 'express';
import User from '../models/users';
import jwt from 'jsonwebtoken';
import { check, validationResult } from "express-validator";

const router = express.Router();

router.post('/register', [
  check("firstName", "First Name is Required").isString(),
  check("lastName", "Last Name is reqired").isString(),
  check("email", " email is reqired ").isEmail(),
  check("password", "password is required and most be more than 8 characters").isLength({ min: 6, })
], async (req: Request, res: Response) => {
  try {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() })
    }

    let user = await User.findOne({
      email: req.body.email,
    });

    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    user = new User(req.body);
    await user.save();

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY as string, {
      expiresIn: '1d',
    });

    res.cookie('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 86400000,
    });

    return res.status(200).send({ message: "User Regitered Ok" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Something went wrong' });
  }
});

export default router;
