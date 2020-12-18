
-- Database creation scripts, Database creation can be re-copypasted to overwrite database so be careful

-- function to fake DROP FOREIGN KEY IF EXISTS becasue its not supported in this mysql version
DROP PROCEDURE IF EXISTS PROC_DROP_FOREIGN_KEY;
    DELIMITER $$
    CREATE PROCEDURE PROC_DROP_FOREIGN_KEY(IN tableName VARCHAR(64), IN constraintName VARCHAR(64))
    BEGIN
        IF EXISTS(
            SELECT * FROM information_schema.table_constraints
            WHERE 
                table_schema    = DATABASE()     AND
                table_name      = tableName      AND
                constraint_name = constraintName AND
                constraint_type = 'FOREIGN KEY')
        THEN
            SET @query = CONCAT('ALTER TABLE ', tableName, ' DROP FOREIGN KEY ', constraintName, ';');
            PREPARE stmt FROM @query; 
            EXECUTE stmt; 
            DEALLOCATE PREPARE stmt; 
        END IF; 
    END$$
    DELIMITER ;


DROP TABLE IF EXISTS tasks;
CREATE TABLE tasks (
    id            INT NOT NULL AUTO_INCREMENT,
    title         VARCHAR(100) NOT NULL,
    description   TEXT,
    isDone        BOOLEAN NOT NULL DEFAULT FALSE,
    timeCreated   DATETIME DEFAULT now(),
    deadline      DATE,
    folder_id     INT,
    PRIMARY KEY   (id)
);


DROP TABLE IF EXISTS folders;
CREATE TABLE folders (
    id            INT NOT NULL AUTO_INCREMENT,
    name          VARCHAR(100) NOT NULL UNIQUE,
    PRIMARY KEY   (id)
);

-- add foreign keys after creating tables, avoiding possible when tables are not created yet
CALL PROC_DROP_FOREIGN_KEY('tasks', 'FK_folder_id');
ALTER TABLE tasks 
ADD CONSTRAINT FK_folder_id FOREIGN KEY (folder_id) REFERENCES folders(id)  
        ON UPDATE CASCADE
        ON DELETE SET NULL;



/* search stuff from title, deadline, description */
DELIMITER $$
DROP PROCEDURE IF EXISTS `searchStuff`$$

CREATE PROCEDURE searchStuff(IN str VARCHAR(20))
BEGIN
	SELECT *
	FROM tasks
	WHERE title LIKE CONCAT('%',str, '%');
    SELECT *
	FROM tasks
	WHERE deadline LIKE CONCAT('%',str, '%');
    SELECT *
	FROM tasks
	WHERE description LIKE CONCAT('%',str, '%');
END$$
DELIMITER ;
