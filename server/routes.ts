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

  // Admin endpoint to view all signups (for testing purposes)
  app.get("/api/admin/signups", async (req, res) => {
    try {
      const signups = await storage.getAllSignups();
      res.json({ signups, count: signups.length });
    } catch (error) {
      console.error("Error getting signups:", error);
      res.status(500).json({ message: "Failed to get signups" });
    }
  });

  // Export signups to CSV format (for Excel)
  app.get("/api/admin/export-csv", async (req, res) => {
    try {
      const signups = await storage.getAllSignups();
      
      // Create CSV content
      const csvHeaders = "Email,Signup Date,ID";
      const csvRows = signups.map(signup => 
        `"${signup.email}","${signup.createdAt?.toISOString() || ''}","${signup.id}"`
      );
      const csvContent = [csvHeaders, ...csvRows].join('\n');
      
      // Set headers for CSV download
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', `attachment; filename="smart-inbox-waitlist-${new Date().toISOString().split('T')[0]}.csv"`);
      
      res.send(csvContent);
    } catch (error) {
      console.error("Error exporting CSV:", error);
      res.status(500).json({ message: "Failed to export CSV" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
