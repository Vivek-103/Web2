# PostgreSQL Interview Questions for Full Stack Developers (With Solutions)

This document contains the most commonly asked PostgreSQL interview questions with clear explanations and SQL solutions. Suitable for Full Stack, Backend, and Software Engineer roles.

---

## 1. PostgreSQL Basics

### 1. What is PostgreSQL?

PostgreSQL is an open-source, object-relational database system (ORDBMS) known for reliability, extensibility, performance, and full ACID compliance.

### 2. Difference between PostgreSQL and MySQL

| Feature         | PostgreSQL                    | MySQL         |
| --------------- | ----------------------------- | ------------- |
| ACID Compliance | Fully compliant               | Partial       |
| JSON Support    | Advanced (JSONB)              | Basic         |
| Index Types     | B-tree, Hash, GIN, GiST, BRIN | Mostly B-tree |
| Extensibility   | High                          | Limited       |

### 3. What is a Schema?

A schema is a logical namespace that contains tables, views, functions, and indexes.

---

## 2. Data Types

### 4. Common PostgreSQL Data Types

* INTEGER, BIGINT
* VARCHAR, TEXT
* BOOLEAN
* DATE, TIMESTAMP
* UUID
* JSON, JSONB
* ARRAY

### 5. Difference between JSON and JSONB

| JSON                 | JSONB            |
| -------------------- | ---------------- |
| Stored as text       | Stored in binary |
| Slower queries       | Faster queries   |
| Preserves formatting | Formatting lost  |

---

## 3. CRUD Operations (With SQL)

### 6. Create Table

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(150) UNIQUE,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 7. Insert Data

```sql
INSERT INTO users (name, email)
VALUES ('Vivek', 'vivek@gmail.com');
```

### 8. Read Data

```sql
SELECT * FROM users WHERE id = 1;
```

### 9. Update Data

```sql
UPDATE users SET name = 'Amit' WHERE id = 1;
```

### 10. Delete Data

```sql
DELETE FROM users WHERE id = 1;
```

---

## 4. Constraints & Keys

### 11. Types of Constraints

* PRIMARY KEY
* FOREIGN KEY
* UNIQUE
* NOT NULL
* CHECK
* DEFAULT

### 12. What is a Foreign Key?

A foreign key maintains referential integrity between two tables.

```sql
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id)
);
```

---

## 5. Indexing & Performance

### 13. What is an Index?

An index improves query performance by allowing faster data access.

### 14. Types of Indexes

* B-Tree (default)
* Hash
* GIN
* GiST
* BRIN

### 15. Create an Index

```sql
CREATE INDEX idx_users_email ON users(email);
```

### 16. What is Query Optimization?

Improving performance using indexes, optimized joins, filtering, and `EXPLAIN ANALYZE`.

```sql
EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'test@gmail.com';
```

---

## 6. Joins & Relationships

### 17. Types of Joins

* INNER JOIN
* LEFT JOIN
* RIGHT JOIN
* FULL JOIN
* CROSS JOIN

### 18. Example Join Query

```sql
SELECT u.name, o.total
FROM users u
JOIN orders o ON u.id = o.user_id;
```

---

## 7. Transactions & ACID

### 19. What is a Transaction?

A transaction groups multiple operations into a single logical unit.

### 20. ACID Properties

* Atomicity
* Consistency
* Isolation
* Durability

### 21. Transaction Example

```sql
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;
```

---

## 8. Views & Functions

### 22. What is a View?

A virtual table created from a query.

```sql
CREATE VIEW active_users AS
SELECT * FROM users WHERE status = 'active';
```

### 23. What is a Function?

Reusable stored logic.

```sql
CREATE FUNCTION get_user_count()
RETURNS INTEGER AS $$
BEGIN
  RETURN (SELECT COUNT(*) FROM users);
END;
$$ LANGUAGE plpgsql;
```

---

## 9. Backend Integration (Node.js)

### 24. PostgreSQL with Node.js

```js
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "testdb",
  password: "1234",
  port: 5432,
});

const result = await pool.query("SELECT * FROM users");
console.log(result.rows);
```

---

## 10. Security

### 25. What is SQL Injection?

A security vulnerability that allows attackers to run malicious SQL.

### 26. Prevention Using Parameterized Queries

```js
pool.query("SELECT * FROM users WHERE email = $1", [email]);
```

---

## 11. Migrations & Versioning

### 27. What is a Migration?

Version-controlled schema changes used for safe DB updates.

Common Tools:

* Prisma
* Sequelize
* TypeORM
* Flyway
* Liquibase

---

## 12. Advanced PostgreSQL

### 28. What is Vacuum?

Removes dead rows and improves performance.

### 29. What is WAL?

Write Ahead Logging ensures crash recovery and durability.

### 30. What is Partitioning?

Splits large tables into smaller logical parts for performance.

---

## 13. PostgreSQL in Production

### 31. Backup Methods

* pg_dump
* pg_basebackup
* Cron-based automated backups

### 32. Handling High Traffic

* Connection pooling
* Indexing
* Redis caching
* Read replicas

---

## 14. Common Coding Interview Queries (With Solutions)

### 33. Find Duplicate Emails

```sql
SELECT email, COUNT(*)
FROM users
GROUP BY email
HAVING COUNT(*) > 1;
```

### 34. Second Highest Salary

```sql
SELECT MAX(salary)
FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);
```

---

## 15. PostgreSQL vs NoSQL

### 35. When to Use PostgreSQL?

* Banking & finance
* E-commerce
* Enterprise software
* Systems needing strong consistency

### 36. When to Use NoSQL?

* Real-time chat apps
* Event logging
* Highly distributed systems

---

## 16. Common Interview Traps (With Answers)

* DELETE vs TRUNCATE vs DROP

  * DELETE: row-wise, rollback possible
  * TRUNCATE: fast, no rollback
  * DROP: removes table

* WHERE vs HAVING

  * WHERE filters rows
  * HAVING filters groups

* UNION vs UNION ALL

  * UNION removes duplicates
  * UNION ALL keeps duplicates

* COUNT(*) vs COUNT(column)

  * COUNT(*) counts all rows
  * COUNT(column) ignores NULL

* EXISTS vs IN

  * EXISTS faster for large datasets

---

## 17. PostgreSQL with ORMs

Popular ORMs:

* Prisma
* Sequelize
* TypeORM
* Hibernate

---

## 18. Scenario-Based Interview Questions (With Hints)

1. Design scalable auth system → Use indexed user table, JWT, OAuth
2. Optimize slow queries → EXPLAIN ANALYZE, indexes
3. Pagination → LIMIT + OFFSET
4. Data consistency in microservices → Two-phase commit, Saga pattern

---

## 19. Must-Know PostgreSQL Commands

```sql
\l       -- list databases
\c db    -- connect database
\dt      -- list tables
\d tbl   -- describe table
```

---

## 20. Final Interview Preparation Tips

* Master joins and indexes
* Practice writing complex queries
* Understand transactions and locks
* Know how PostgreSQL works with backend frameworks
* Be confident with real production issues

---

✅ Prepared for: Full Stack Developer / Backend Engineer
✅ Covers: Beginner to Advanced PostgreSQL Concepts
✅ Includes: SQL solutions and coding interview queries

---

If needed, this file can be extended with:

* PostgreSQL MCQs
* Company-specific questions
* System design with PostgreSQL
* Performance tuning guide
