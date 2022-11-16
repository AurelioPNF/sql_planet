SET @tables = NULL;
SELECT GROUP_CONCAT('`', table_schema, '`.`', table_name,'`') INTO @tables FROM information_schema.tables 
  WHERE table_schema = 'ilhasql' AND table_name LIKE BINARY '%_6e86k52cs4sds3jt2ji2ofdsv6';

SET @tables = CONCAT('DROP TABLE ', @tables);
PREPARE stmt1 FROM @tables;
EXECUTE stmt1;
DEALLOCATE PREPARE stmt1;