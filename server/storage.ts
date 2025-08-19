import { type WaitlistSignup, type InsertWaitlistSignup, type AppStats } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getWaitlistSignup(email: string): Promise<WaitlistSignup | undefined>;
  createWaitlistSignup(signup: InsertWaitlistSignup): Promise<WaitlistSignup>;
  getSignupCount(): Promise<number>;
  incrementSignupCount(): Promise<number>;
}

export class MemStorage implements IStorage {
  private waitlistSignups: Map<string, WaitlistSignup>;
  private signupCount: number;

  constructor() {
    this.waitlistSignups = new Map();
    this.signupCount = 2847; // Starting with the count from the design
  }

  async getWaitlistSignup(email: string): Promise<WaitlistSignup | undefined> {
    return Array.from(this.waitlistSignups.values()).find(
      (signup) => signup.email === email,
    );
  }

  async createWaitlistSignup(insertSignup: InsertWaitlistSignup): Promise<WaitlistSignup> {
    const id = randomUUID();
    const signup: WaitlistSignup = {
      ...insertSignup,
      id,
      createdAt: new Date(),
    };
    this.waitlistSignups.set(id, signup);
    this.signupCount++;
    return signup;
  }

  async getSignupCount(): Promise<number> {
    return this.signupCount;
  }

  async incrementSignupCount(): Promise<number> {
    this.signupCount++;
    return this.signupCount;
  }
}

export const storage = new MemStorage();
