DROP TABLE IF EXISTS tasks;
CREATE TABLE tasks (
    id            INT NOT NULL AUTO_INCREMENT,
    title         VARCHAR(100) NOT NULL,
    description   TEXT,
    isDone        BOOLEAN NOT NULL DEFAULT FALSE,
    deadline      DATETIME,
    folder        VARCHAR(50),
    PRIMARY KEY   (id)
);
-- TODO folder into own table and foreign keys 


-- test values

--INSERT INTO tasks (title, description, deadline, folder)
--VALUES	("TestTitle4", "Test Description",  now(), "Default"),
 --("TestTitle3", "Test Description2",  now(), "Programmor");
		

