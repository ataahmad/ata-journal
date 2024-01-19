CREATE TABLE personal_entries (
    entry_id TIMESTAMP DEFAULT CURRENT_TIMESTAMP PRIMARY KEY,
    content TEXT
);


-- Allows for default connection method from mysql npm package
ALTER USER 'root' IDENTIFIED WITH 'mysql_native_password' BY 'rootpassword';
FLUSH PRIVILEGES;
