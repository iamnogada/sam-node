-- CreateTable
CREATE TABLE `departments` (
    `dept_no` CHAR(4) NOT NULL,
    `dept_name` VARCHAR(40) NOT NULL,

    UNIQUE INDEX `departments.dept_name_unique`(`dept_name`),
    PRIMARY KEY (`dept_no`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dept_emp` (
    `emp_no` INTEGER NOT NULL,
    `dept_no` CHAR(4) NOT NULL,
    `from_date` DATE NOT NULL,
    `to_date` DATE NOT NULL,

    INDEX `dept_no`(`dept_no`),
    PRIMARY KEY (`emp_no`, `dept_no`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dept_manager` (
    `emp_no` INTEGER NOT NULL,
    `dept_no` CHAR(4) NOT NULL,
    `from_date` DATE NOT NULL,
    `to_date` DATE NOT NULL,

    INDEX `dept_no`(`dept_no`),
    PRIMARY KEY (`emp_no`, `dept_no`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `employees` (
    `emp_no` INTEGER NOT NULL,
    `birth_date` DATE NOT NULL,
    `first_name` VARCHAR(14) NOT NULL,
    `last_name` VARCHAR(16) NOT NULL,
    `gender` ENUM('M', 'F') NOT NULL,
    `hire_date` DATE NOT NULL,

    PRIMARY KEY (`emp_no`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `salaries` (
    `emp_no` INTEGER NOT NULL,
    `salary` INTEGER NOT NULL,
    `from_date` DATE NOT NULL,
    `to_date` DATE NOT NULL,

    PRIMARY KEY (`emp_no`, `from_date`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `titles` (
    `emp_no` INTEGER NOT NULL,
    `title` VARCHAR(50) NOT NULL,
    `from_date` DATE NOT NULL,
    `to_date` DATE,

    PRIMARY KEY (`emp_no`, `title`, `from_date`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `dept_emp` ADD FOREIGN KEY (`dept_no`) REFERENCES `departments`(`dept_no`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `dept_emp` ADD FOREIGN KEY (`emp_no`) REFERENCES `employees`(`emp_no`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `dept_manager` ADD FOREIGN KEY (`dept_no`) REFERENCES `departments`(`dept_no`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `dept_manager` ADD FOREIGN KEY (`emp_no`) REFERENCES `employees`(`emp_no`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `salaries` ADD FOREIGN KEY (`emp_no`) REFERENCES `employees`(`emp_no`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `titles` ADD FOREIGN KEY (`emp_no`) REFERENCES `employees`(`emp_no`) ON DELETE CASCADE ON UPDATE CASCADE;
