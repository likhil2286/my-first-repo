import { Injectable } from '@nestjs/common';
import { db } from '../db/connect';
import { student } from '../db/schema';
import { eq } from 'drizzle-orm';

@Injectable()
export class StudentService {
  async create(data: { name: string; age: number; email: string }) {
    return db.insert(student).values(data).returning();
  }

  async findAll() {
    return db.select().from(student);
  }

  async findOne(id: number) {
    return db.select().from(student).where(eq(student.id, id));
  }

  async update(id: number, data: Partial<{ name: string; age: number; email: string }>) {
    return db.update(student).set(data).where(eq(student.id, id)).returning();
  }

  async remove(id: number) {
    return db.delete(student).where(eq(student.id, id)).returning();
  }
}
