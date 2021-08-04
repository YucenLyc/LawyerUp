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
(1, 1, 'rental dispute with my landlord over having a pet cat', '2020-12-01', 'My name is Egg Eggerson, I got into an argument with my landlord recently over my cat Smooj. When I signed the rental contract, the contract did not address anything about tenant owning pets, so I assumed it is okay for me to have a cat. I have been living in this apartment for over a year now, and recently my landlord found out from the neighbours that I have a cat. She said I could either move out this month or get rid of Smooj. Of course getting rid of Smooj is not an option for me, so I want to know if she is allowed to make me move out under this circumstance.Please contact me, if you are experience in handling rental dispute!! Much thanks!!'),
(2, 3, 'Business tax', '2021-01-12', 'My company is being charged for evading payment of over 2 million in taxes. I was not aware of the financial situation of my company, even though I am the sole owner. My best friend Joey handles the financial side of the business, but he recently disappeared. I am looking for a lawyer who can keep me out of jail before I find Joey. Please email me if you are interested in my case, I am not a fan of phone calls. Thanks.'),
(3, 6, 'Police abuse', '2021-04-22', 'I was attacked by a policeman who stopped me on the street last Friday night. She showed me her badge quicky, but I did not get a good look. She then told me give my protein bar to her. She asked me if I have any more protein bars with me. I lied and said no. She did not believe me. I was body searched by her and she took away my 3 other protein bars. She drove away in a police car, I memorized the license. I would like to get compensated for this assult and for my lost. If you are experience in personal injury/assult or police brutality cases,s call me. I amusually on my phone 25/8. Cheers.'),
(3, 6, 'need help with bankruptcy paperwork', '2021-04-22', 'I am filing for bankrupty, my partner took my pet turtle, my money and left me with nothing. I need someone to help me file for bankruptcy and do not worry, I can pay. Text, only, thanks.');

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