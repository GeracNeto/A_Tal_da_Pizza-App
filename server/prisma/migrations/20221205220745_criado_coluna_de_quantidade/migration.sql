-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Menu" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "foodName" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "foodPicture" TEXT NOT NULL,
    "qty" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_Menu" ("foodName", "foodPicture", "id", "price") SELECT "foodName", "foodPicture", "id", "price" FROM "Menu";
DROP TABLE "Menu";
ALTER TABLE "new_Menu" RENAME TO "Menu";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
