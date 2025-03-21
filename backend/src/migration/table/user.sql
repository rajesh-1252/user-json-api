DROP TABLE IF EXISTS user_crypto;
DROP TABLE IF EXISTS user_company;
DROP TABLE IF EXISTS user_bank;
DROP TABLE IF EXISTS user_address;
DROP TABLE IF EXISTS user_hair;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    maiden_name VARCHAR(50),
    age INT,
    gender ENUM('male', 'female', 'other'),
    email VARCHAR(100),
    phone VARCHAR(20),
    username VARCHAR(50) UNIQUE,
    password VARCHAR(255),
    birth_date DATE,
    image VARCHAR(255),
    blood_group VARCHAR(5),
    height FLOAT,
    weight FLOAT,
    eye_color VARCHAR(20),
    ip VARCHAR(45),
    mac_address VARCHAR(50),
    university VARCHAR(100),
    ein VARCHAR(20),
    ssn VARCHAR(20),
    user_agent TEXT,
    role ENUM('admin', 'user', 'moderator')
);

CREATE TABLE user_hair (
    user_id INT PRIMARY KEY,
    color VARCHAR(20),
    type VARCHAR(20),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE user_address (
    user_id INT PRIMARY KEY,
    address VARCHAR(255),
    city VARCHAR(100),
    state VARCHAR(100),
    state_code VARCHAR(10),
    postal_code VARCHAR(20),
    latitude FLOAT,
    longitude FLOAT,
    country VARCHAR(100),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE user_bank (
    user_id INT PRIMARY KEY,
    card_expire VARCHAR(10),
    card_number VARCHAR(20),
    card_type VARCHAR(20),
    currency VARCHAR(10),
    iban VARCHAR(34),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE user_company (
    user_id INT PRIMARY KEY,
    department VARCHAR(100),
    company_name VARCHAR(255),
    title VARCHAR(100),
    address VARCHAR(255),
    city VARCHAR(100),
    state VARCHAR(100),
    state_code VARCHAR(10),
    postal_code VARCHAR(20),
    latitude FLOAT,
    longitude FLOAT,
    country VARCHAR(100),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE user_crypto (
    user_id INT PRIMARY KEY,
    coin VARCHAR(50),
    wallet VARCHAR(100),
    network VARCHAR(50),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

INSERT INTO users (first_name, last_name, maiden_name, age, gender, email, phone, username, password, birth_date, image, blood_group, height, weight, eye_color, ip, mac_address, university, ein, ssn, user_agent, role) VALUES
('John', 'Doe', 'Smith', 30, 'male', 'john.doe@example.com', '+1 234-567-8901', 'johndoe', 'hashed_password', '1994-05-21', 'john.jpg', 'O+', 180, 75, 'Blue', '192.168.1.1', '00:1B:44:11:3A:B7', 'Harvard', '12-3456789', '123-45-6789', 'Mozilla/5.0', 'admin'),
('Jane', 'Smith', 'Johnson', 28, 'female', 'jane.smith@example.com', '+1 555-123-4567', 'janesmith', 'hashed_password', '1996-02-10', 'jane.jpg', 'A-', 165, 55, 'Green', '192.168.1.2', '00:1A:22:33:44:55', 'MIT', '98-7654321', '987-65-4321', 'Mozilla/5.0', 'user'),
('Alice', 'Brown', 'Williams', 26, 'female', 'alice.brown@example.com', '+1 888-222-3333', 'alicebrown', 'hashed_password', '1998-09-15', 'alice.jpg', 'B+', 170, 60, 'Brown', '192.168.1.3', '00:1C:66:77:88:99', 'Stanford', '67-8901234', '678-90-1234', 'Mozilla/5.0', 'user'),
('Bob', 'Wilson', 'Miller', 32, 'male', 'bob.wilson@example.com', '+1 777-999-0000', 'bobwilson', 'hashed_password', '1992-07-30', 'bob.jpg', 'AB-', 175, 80, 'Hazel', '192.168.1.4', '00:1D:AA:BB:CC:DD', 'Oxford', '45-6789012', '456-78-9012', 'Mozilla/5.0', 'moderator'),
('Charlie', 'Evans', 'Davis', 29, 'male', 'charlie.evans@example.com', '+1 666-555-4444', 'charlieevans', 'hashed_password', '1995-03-22', 'charlie.jpg', 'O-', 178, 72, 'Blue', '192.168.1.5', '00:1E:11:22:33:44', 'Cambridge', '34-5678901', '345-67-8901', 'Mozilla/5.0', 'user');

INSERT INTO user_hair (user_id, color, type) VALUES
(1, 'Black', 'Straight'),
(2, 'Blonde', 'Curly'),
(3, 'Brown', 'Wavy'),
(4, 'Red', 'Straight'),
(5, 'Black', 'Curly');

INSERT INTO user_address (user_id, address, city, state, state_code, postal_code, latitude, longitude, country) VALUES
(1, '123 Main St', 'New York', 'NY', 'NY', '10001', 40.7128, -74.0060, 'USA'),
(2, '456 Elm St', 'Los Angeles', 'CA', 'CA', '90001', 34.0522, -118.2437, 'USA'),
(3, '789 Oak St', 'Chicago', 'IL', 'IL', '60601', 41.8781, -87.6298, 'USA'),
(4, '101 Maple Ave', 'Houston', 'TX', 'TX', '77001', 29.7604, -95.3698, 'USA'),
(5, '202 Birch St', 'Phoenix', 'AZ', 'AZ', '85001', 33.4484, -112.0740, 'USA');

INSERT INTO user_bank (user_id, card_expire, card_number, card_type, currency, iban) VALUES
(1, '12/26', '1234567890123456', 'Visa', 'USD', 'US12345678901234567890'),
(2, '08/25', '9876543210987654', 'MasterCard', 'USD', 'US98765432109876543210'),
(3, '08/25', '9876543210987654', 'MasterCard', 'USD', 'US98765432109876543210'),
(4, '08/25', '9876543210987654', 'MasterCard', 'USD', 'US98765432109876543210'),
(5, '08/25', '9876543210987654', 'MasterCard', 'USD', 'US98765432109876543210');

INSERT INTO user_company (user_id, department, company_name, title, address, city, state, state_code, postal_code, latitude, longitude, country) VALUES
(1, 'Engineering', 'Tech Corp', 'Software Engineer', '123 Silicon Valley', 'San Francisco', 'CA', 'CA', '94016', 37.7749, -122.4194, 'USA'),
(2, 'Marketing', 'Brand Inc', 'Marketing Manager', '456 Madison Ave', 'New York', 'NY', 'NY', '10022', 40.7580, -73.9855, 'USA'),
(3, 'Marketing', 'Brand Inc', 'Marketing Manager', '456 Madison Ave', 'New York', 'NY', 'NY', '10022', 40.7580, -73.9855, 'USA'),
(4, 'Marketing', 'Brand Inc', 'Marketing Manager', '456 Madison Ave', 'New York', 'NY', 'NY', '10022', 40.7580, -73.9855, 'USA'),
(5, 'Marketing', 'Brand Inc', 'Marketing Manager', '456 Madison Ave', 'New York', 'NY', 'NY', '10022', 40.7580, -73.9855, 'USA');

INSERT INTO user_crypto (user_id, coin, wallet, network) VALUES
(1, 'Bitcoin', '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', 'Bitcoin'),
(2, 'Ethereum', '0x32Be343B94f860124dC4fEe278FDCBD38C102D88', 'Ethereum'),
(3, 'Ethereum', '0x32Be343B94f860124dC4fEe278FDCBD38C102D88', 'Ethereum'),
(4, 'Ethereum', '0x32Be343B94f860124dC4fEe278FDCBD38C102D88', 'Ethereum'),
(5, 'Ethereum', '0x32Be343B94f860124dC4fEe278FDCBD38C102D88', 'Ethereum');
