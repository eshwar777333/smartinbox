import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSignupSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get signup count
  app.get("/api/signup-count", async (req, res) => {
    try {
      const count = await storage.getSignupCount();
      res.json({ count });
    } catch (error) {
      console.error("Error getting signup count:", error);
      res.status(500).json({ message: "Failed to get signup count" });
    }
  });

  // Join waitlist
  app.post("/api/waitlist", async (req, res) => {
    try {
      const result = insertWaitlistSignupSchema.safeParse(req.body);
      
      if (!result.success) {
        const validationError = fromZodError(result.error);
        return res.status(400).json({ 
          message: validationError.message 
        });
      }

      const { email } = result.data;
      
      // Check if email already exists
      const existingSignup = await storage.getWaitlistSignup(email);
      if (existingSignup) {
        return res.status(400).json({ 
          message: "This email is already registered for the waitlist" 
        });
      }

      // Create new signup
      const signup = await storage.createWaitlistSignup({ email });
      const newCount = await storage.getSignupCount();
      
      res.status(201).json({ 
        message: "Successfully joined the waitlist!",
        count: newCount,
        signup: { id: signup.id, email: signup.email }
      });
    } catch (error) {
      console.error("Error joining waitlist:", error);
      res.status(500).json({ message: "Failed to join waitlist" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
