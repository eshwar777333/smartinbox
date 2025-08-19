import { type WaitlistSignup, type InsertWaitlistSignup, type AppStats, waitlistSignups, appStats } from "@shared/schema";
import { db } from "./db";
import { eq, count, desc } from "drizzle-orm";

export interface IStorage {
  getWaitlistSignup(email: string): Promise<WaitlistSignup | undefined>;
  createWaitlistSignup(signup: InsertWaitlistSignup): Promise<WaitlistSignup>;
  getSignupCount(): Promise<number>;
  incrementSignupCount(): Promise<number>;
  getAllSignups(): Promise<WaitlistSignup[]>;
}

export class DatabaseStorage implements IStorage {
  async getWaitlistSignup(email: string): Promise<WaitlistSignup | undefined> {
    const [user] = await db.select().from(waitlistSignups).where(eq(waitlistSignups.email, email));
    return user || undefined;
  }

  async createWaitlistSignup(insertSignup: InsertWaitlistSignup): Promise<WaitlistSignup> {
    const [signup] = await db
      .insert(waitlistSignups)
      .values(insertSignup)
      .returning();
    return signup;
  }

  async getSignupCount(): Promise<number> {
    const [result] = await db.select({ count: count() }).from(waitlistSignups);
    return result.count;
  }

  async incrementSignupCount(): Promise<number> {
    // This method is not needed with database storage as count is calculated dynamically
    return this.getSignupCount();
  }

  async getAllSignups(): Promise<WaitlistSignup[]> {
    const signups = await db.select().from(waitlistSignups).orderBy(desc(waitlistSignups.createdAt));
    return signups;
  }
}

export const storage = new DatabaseStorage();
