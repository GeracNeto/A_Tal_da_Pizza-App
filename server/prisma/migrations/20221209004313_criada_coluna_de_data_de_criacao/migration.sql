-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Kitchen" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "foodName" TEXT NOT NULL,
    "foodPicture" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "qty" INTEGER NOT NULL,
    "order" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Kitchen" ("foodName", "foodPicture", "id", "order", "price", "qty") SELECT "foodName", "foodPicture", "id", "order", "price", "qty" FROM "Kitchen";
DROP TABLE "Kitchen";
ALTER TABLE "new_Kitchen" RENAME TO "Kitchen";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
