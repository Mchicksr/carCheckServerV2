import express from 'express';
import {OAuth2Client} from 'google-auth-library';
import jwt from 'jsonwebtoken'
import UserMessage from '../models/user.js';
const router = express.Router()

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID

const client = new OAuth2Client(GOOGLE_CLIENT_ID)
// let DB = [];
let DB = UserMessage;
export async function verifyGoogleToken(token){
    try {
        const ticket = await client.verifyIdToken({
            idToken:token,
            audience:GOOGLE_CLIENT_ID,
        });
        return {payload: ticket.getPayload()}
    } catch (error) {
        return {error : "Invalid user detected. Please try again"}
    }
}
router.post("/signup", async (req, res) => {
    try {
      // console.log({ verified: verifyGoogleToken(req.body.credential) });
      if (req.body.credential) {
        const verificationResponse = await verifyGoogleToken(req.body.credential);
  
        if (verificationResponse.error) {
            console.log('verify complete')
          return res.status(400).json({
            message: verificationResponse.error,
          });
        }
  
        const profile = verificationResponse?.payload;
        console.log('profile',profile)
        // DB.push(profile);
        // const newDb  = new UserMessage({...profile})
        // await UserMessage.insertOne(profile);
        await UserMessage.create(profile);
        // console.log('NewDb',newDb)
       
  
        res.status(201).json({
          message: "Signup was successful",
          user: {
            firstName: profile?.given_name,
            lastName: profile?.family_name,
            picture: profile?.picture,
            email: profile?.email,
            token: jwt.sign({ email: profile?.email }, "myScret", {
              expiresIn: "1d",
            }),
          },
        });
      }
    } catch (error) {
        console.log('error',error)
      res.status(500).json({
        message: "An error occurred. Registration failed.",
      });
    }
  });

router.post("/login", async (req, res) => {
    try {
        // console.log('login attampt success')
      if (req.body.credential) {
        const verificationResponse = await verifyGoogleToken(req.body.credential);

        if (verificationResponse.error) {
            
          return res.status(400).json({
            message: verificationResponse.error,
          });
        }
  
        const profile = verificationResponse?.payload;
        // console.log('existDb',DB)
        // const existsInDB = DB.find((person) => person?.email === profile?.email);
        // const existsInDB = UserMessage.find((person) => person?.email === profile?.email);
        const existsInDB = await UserMessage.exists({email:profile?.email});
        // const existsInDB = 'hello'
        console.log('existsing broclea',existsInDB)
        if (!existsInDB) {
            console.log('fail3')
          return res.status(400).json({
            message: "You are not registered. Please sign up",
          });
        }
  
        res.status(201).json({
          message: "Login was successful",
          user: {
            firstName: profile?.given_name,
            lastName: profile?.family_name,
            picture: profile?.picture,
            email: profile?.email,
            token: jwt.sign({ email: profile?.email }, process.env.JWT_SECRET, {
              expiresIn: "1d",
            }),
          },
        });
      }
    } catch (error) {
        console.log('fail',error)
      res.status(500).json({
        message: error?.message || error,
      });
    }
  });

  export default router