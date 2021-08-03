INSERT INTO users (name, email, password)
VALUES
('Elise Carter', 'rosalinda_mclaughlin@hotmail.com', 'password'),
('Micheal Schmidt', 'wilkinson.timmothy@hotmail.com', 'password'),
('Anderson Stokes', 'reichel_albina@stamm.info', 'password'),
('Eunice Morar', 'danielle.aufderhar@kilback.net', 'password'),
('Brian Jones', 'percy_ratke@cornelius.biz', 'password'),
('Herminia Smitham', 'sawayn.sarina@yahoo.com', 'password'),
('Darien Luettgen', 'issac_collins@pink.io', 'password'),
('Irwin King', 'kody_pfannerstill@john.us', 'password'),
('Stan Miller', 'mcdermott.maxie@schoen.com', 'password'),
('Bernice Reichel', 'maximilian.powlowski@rod.name', 'password');


INSERT INTO clients (user_id) VALUES (1), (2), (5), (7), (8), (10);

INSERT INTO lawyers (user_id, profile, rate, years_of_experience) 
VALUES 
(3, 'I am specialized dedicated in serving family related legal issues', 150, 8),
(4, 'I am specialized dedicated in serving business related legal issues', 250, 15), 
(6, 'I am specialized dedicated in serving civil rights related legal issues', 200, 12), 
(9, 'I am specialized dedicated in serving environmental related legal issues', 175, 10);

INSERT INTO specialities (lawyer_id, name)
VALUES
(1, 'Family Law'),
(1, 'Business Law'),
(1, 'Criminal Law'),
(2, 'Corporate Law'),
(2, 'Bankruptcy Law'),
(2, 'Labor Law'),
(2, 'Tax Law'),
(3, 'Civil Rights Law'),
(3, 'Military Law'),
(3, 'Immigration Law'),
(4, 'Environmental Law'),
(4, 'Business Law');

INSERT INTO user_types (user_id, name)
VALUES
(1, 'Client'),
(2, 'Client'),
(3, 'Lawyer'),
(4, 'Lawyer'),
(5, 'Client'),
(6, 'Lawyer'),
(7, 'Client'),
(8, 'Client'),
(9, 'Lawyer'),
(10, 'Client');

INSERT INTO cases (lawyer_id, client_id, name, date, description)
VALUES
(1, 1, 'Theft in the family', '2020-12-01', 'My sister in law is stealing from me'),
(2, 3, 'Business tax', '2021-01-12', 'I would like to inquire about handling my company taxes'),
(3, 6, 'Police abuse', '2021-04-22', 'A policeman kneeled on my neck and I died');

INSERT INTO reviews (lawyer_id, client_id, date, content)
VALUES
(1, 1, '2021-01-04', 'Anderson is very helpful and compassionate in helping us dealing with our family issues'),
(2, 4, '2021-03-24', 'very professional and knowledgable');

INSERT INTO messages (sender_id, receiver_id, time, message)
VALUES
(1, 3, '2021-01-04 10:23:54', 'Hi Anderson'),
(3, 1, '2021-03-24 10:24:04', 'Hi there, how can I help you?'),
(1, 3, '2021-01-04 10:24:08', 'My name is Elise and I am wondering if you could help me with my case.'),
(3, 1, '2021-03-24 10:24:15', 'Sure, I can try to take a look into your case.');

INSERT INTO locations (user_id, city)
VALUES
(1, 'Vancouver'),
(2, 'Vancouver'),
(3, 'Calgary'),
(4, 'Toronto'),
(5, 'Toronto'),
(6, 'Edmonton'),
(7, 'Edmonton'),
(8, 'Calgary'),
(9, 'Vancouver'),
(10, 'Toronto');