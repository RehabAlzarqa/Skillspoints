-- CreateTable
CREATE TABLE `utilisateur` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `motDePasse` VARCHAR(191) NULL,
    `totalDesPoints` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `utilisateur_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `microCours` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titre` VARCHAR(191) NOT NULL,
    `niveau` VARCHAR(191) NULL,
    `duree` INTEGER NOT NULL,
    `description` VARCHAR(191) NULL,
    `creatorId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `utilisateurMicrocours` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `utilisateurId` INTEGER NOT NULL,
    `microcoursId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `points` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `valeur_points` INTEGER NOT NULL,
    `date_acquisition` DATETIME(3) NOT NULL,
    `type_action` VARCHAR(191) NULL,
    `utilisateurId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Recompense` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NULL,
    `type` VARCHAR(191) NULL,
    `points_requis` INTEGER NULL,
    `etat_disponible` BOOLEAN NULL DEFAULT true,
    `utilisateurId` INTEGER NULL,
    `levelId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `utilisateurRecompense` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `utilisateurId` INTEGER NOT NULL,
    `recompenseId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `niveau` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NULL,
    `min_points` INTEGER NULL,
    `max_points` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_UserLevels` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_UserLevels_AB_unique`(`A`, `B`),
    INDEX `_UserLevels_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `microCours` ADD CONSTRAINT `microCours_creatorId_fkey` FOREIGN KEY (`creatorId`) REFERENCES `utilisateur`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `utilisateurMicrocours` ADD CONSTRAINT `utilisateurMicrocours_utilisateurId_fkey` FOREIGN KEY (`utilisateurId`) REFERENCES `utilisateur`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `utilisateurMicrocours` ADD CONSTRAINT `utilisateurMicrocours_microcoursId_fkey` FOREIGN KEY (`microcoursId`) REFERENCES `microCours`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `points` ADD CONSTRAINT `points_utilisateurId_fkey` FOREIGN KEY (`utilisateurId`) REFERENCES `utilisateur`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Recompense` ADD CONSTRAINT `Recompense_utilisateurId_fkey` FOREIGN KEY (`utilisateurId`) REFERENCES `utilisateur`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Recompense` ADD CONSTRAINT `Recompense_levelId_fkey` FOREIGN KEY (`levelId`) REFERENCES `Niveau`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `utilisateurRecompense` ADD CONSTRAINT `utilisateurRecompense_utilisateurId_fkey` FOREIGN KEY (`utilisateurId`) REFERENCES `utilisateur`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `utilisateurRecompense` ADD CONSTRAINT `utilisateurRecompense_recompenseId_fkey` FOREIGN KEY (`recompenseId`) REFERENCES `Recompense`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_UserLevels` ADD CONSTRAINT `_UserLevels_A_fkey` FOREIGN KEY (`A`) REFERENCES `Niveau`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_UserLevels` ADD CONSTRAINT `_UserLevels_B_fkey` FOREIGN KEY (`B`) REFERENCES `utilisateur`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
