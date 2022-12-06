/*
  Warnings:

  - Added the required column `price` to the `Kitchen` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Kitchen" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "foodName" TEXT NOT NULL,
    "foodPicture" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "qty" INTEGER NOT NULL,
    "order" TEXT NOT NULL
);
INSERT INTO "new_Kitchen" ("foodName", "foodPicture", "id", "order", "qty") SELECT "foodName", "foodPicture", "id", "order", "qty" FROM "Kitchen";
DROP TABLE "Kitchen";
ALTER TABLE "new_Kitchen" RENAME TO "Kitchen";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
