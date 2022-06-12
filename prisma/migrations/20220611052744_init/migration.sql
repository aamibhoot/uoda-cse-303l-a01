/*
  Warnings:

  - Added the required column `uname` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "uname" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "isVerified" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_User" ("email", "id", "isAdmin", "isVerified", "password") SELECT "email", "id", "isAdmin", "isVerified", "password" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_uname_key" ON "User"("uname");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
