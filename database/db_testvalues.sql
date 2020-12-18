/*
 some test values to database (not needed)
 database must be done before copypasting these :)
*/
INSERT INTO folders (name)
 VALUES	("testfolder1"),
        ("testfolder2");

        
 INSERT INTO tasks (title, description, deadline, folder_id)
 VALUES	("Jack Bauer", "Absolute giga chad",  now(),1),
       ("Jussi", "...",  now(), 2),
       ("Oh right this is todo-app", "Try to do this task asap",  now(), 1);




-- Test queries if you wish to check your data went properly to database
SELECT * FROM tasks;
SELECT * FROM folders;
