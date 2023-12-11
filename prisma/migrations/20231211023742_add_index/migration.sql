-- DropIndex
DROP INDEX "products_serial_number_idx";

-- CreateIndex
CREATE INDEX "inspections_productId_idx" ON "inspections"("productId");
