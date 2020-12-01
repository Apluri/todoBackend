/*
test values
INSERT INTO folders (name)
 VALUES	("tokafoldur");
        
 INSERT INTO tasks (title, description, deadline, folder_id)
 VALUES	("TestTitle4", "Test Description",  now(),2),
       ("Tää kusee:D", "Test Description2",  now(), 1);
*/

		
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
    deadline      DATE,
    folder_id     INT,
    PRIMARY KEY   (id)
);


DROP TABLE IF EXISTS folders;
CREATE TABLE folders (
    id            INT NOT NULL AUTO_INCREMENT,
    name          VARCHAR(100) NOT NULL,
    PRIMARY KEY   (id)
);

-- add foreign keys after creating tables, avoiding possible when tables are not created yet
CALL PROC_DROP_FOREIGN_KEY('tasks', 'FK_folder_id');
ALTER TABLE tasks 
ADD CONSTRAINT FK_folder_id FOREIGN KEY (folder_id) REFERENCES folders(id)  
        ON UPDATE CASCADE
        ON DELETE SET NULL;


/*
Test queries

SELECT tasks.id, tasks.title, tasks.description, tasks.deadline, tasks.folder_id, folders.name FROM tasks
INNER JOIN folders
ON tasks.folder_id = folders.id;
*/


