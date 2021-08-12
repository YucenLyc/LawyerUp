INSERT INTO users (name, email, password)
VALUES
('Egg Eggerson', 'friedEgg99@hotmail.com', 'password'),
('Micheal Schmidt', 'wilkinson.timmothy@hotmail.com', 'password'),
('Anderson Stokes', 'reichel_albina@stamm.info', 'password'),
('Harvey Specter', 'harvey@gmail.com', 'password'),
('Brian Jones', 'percy_ratke@cornelius.biz', 'password'),
('Ham Hammerson', 'hamandegg@yahoo.com', 'password'),
('Darien Luettgen', 'issac_collins@pink.io', 'password'),
('Irwin King', 'kody_pfannerstill@john.us', 'password'),
('Mike Ross', 'mike@ross.com', 'password'),
('Giovanny Bradtke', 'leatha.lindgren@hotmail.com', 'password'),
('Baylee Lueilwitz', 'ortiz.turner@hotmail.com', 'password'),
('Lloyd Boehm', 'ebba.deckow@yahoo.com', 'password'),
('Louis Litt', 'pinkie.rogahn@yahoo.com', 'password'),
('Lenny Muller', 'howe_jevon@harber.com', 'password'),
('Brandon Rowlandson', 'brandon.onaroll@pierre.us', 'password'),
('Casey Wood', 'casey.woodpecker@hotmail.com', 'password'),
('Holly Nitzsche', 'lindsey.barrows@marcellus.info', 'password'),
('Fannie Hammes', 'alden.mayer@becker.tv', 'password'),
('Jerrold Lindgren', 'jabari.stoltenberg@witting.biz', 'password'),
('Dylan Pagac', 'jacobi_marie@witting.net', 'password'),
('Col Fays', 'colfff@witting.net', 'password'),
('Lynne Decco', 'lddy@witting.net', 'password'),
('Mal Aju', 'mala@witting.net', 'password'),
('Fran Trik', 'frant@witting.net', 'password'),
('Polly Pip', 'pp@witting.net', 'password'),
('Norma Ding', 'dingdong@witting.net', 'password'),
('Stan Mars', 'stars@witting.net', 'password'),
('Sly Gibbson', 'hipsterrus@witting.net', 'password'),
('Ben Doven', 'ddovee@witting.net', 'password'),
('Mark Ash', 'actually@witting.net', 'password'),
('Anna Townsom', 'redhead@witting.net', 'password'),
('Saul Ma', 'bettercallsaul@witting.net', 'password'),
('Reeve Wah', 'reevewah@witting.net', 'password'),
('Ming Feng', 'mingfengthelegend@witting.net', 'password'),
('Adel Adele', 'howtosaymyname@knockknock.com', 'password'),
('Elise Carter', 'rosalinda_mclaughlin@hotmail.com', 'password');

INSERT INTO clients (user_id) VALUES (1), (2), (5), (7), (8), (10), (11), (14), (15), (17), (18), (36);

INSERT INTO lawyers (user_id, profile, rate, years_of_experience, image) 
VALUES 
(3, 'I am specialized in family law related legal issues', 150, 8, null),
(4, 'I am a former corporate attorney, one of the name partners at Specter Litt Wheeler Williams, the managing partner of Specter Litt, and a former Assistant District Attorney for the New York County District Attorney Office.', 250, 15, 'https://pbs.twimg.com/profile_images/1298645851011653632/wwG2XGDD_400x400.jpg'), 
(6, 'I have been practicing law for over 10+ years. I have a decent amount of experience in various fields of law. After graduating law school, I spent 5 years conducting legal research and defending clients in medical malpractice and premises liability trails. I entered the field of business law afterwards, and had been helping start-up companies with their legal contracts. I am also experienced in criminal defense. I have successfully helped several high profile clients to regain freedom after been charged with serious crimes. I do not have a personal life. My work is my life. If you trust me with your case, I will work night and day to get it done. I am resourceful after being in this field for more than a decade, and I offer a competitive price when it comes to consultation. Contact me through in app messaging or email, and I shall get back to you within 24 hours. Looking forward to hear from you. ', 200, 12, 'https://m.media-amazon.com/images/M/MV5BMTU5ODc0NjY2NF5BMl5BanBnXkFtZTgwNTUyNDUyMjE@._V1_UY100_CR16,0,100,100_AL_.jpg'), 
(9, 'I am a former lawyer and junior partner at Specter Litt, a former legal consultant/supervisor at the Eastside Legal Clinic, with whom he had a legal partnership with, and a former investment banker at Sidwell Investment Group.', 175, 10, 'https://pbs.twimg.com/profile_images/378800000115937647/71de097a6a0a20f64c0652ec79773cde_400x400.jpeg'),
(12, 'I am specialized in family law related legal issues', 150, 8, null),
(13, 'I am a corporate attorney and the managing and name partner of Litt Wheeler Williams Bennett.', 250, 15, 'https://pbs.twimg.com/profile_images/2560335192/70czyhccooh8esiqaqfi.png'), 
(16, 'I am specialized in civil rights law related legal issues', 200, 12, 'https://ca.slack-edge.com/T2G8TE2E5-U021YU0TB0E-40f579be4077-512'), 
(19, 'I am specialized in environmental law related legal issues', 175, 10, null),
(20, 'I am specialized in environmental law related legal issues', 175, 10, null),
(21, 'I am specialized in labor law related legal issues', 125, 3, null),
(30, 'I am specialized in immigration law related legal issues', 175, 7, null),
(28, 'I am specialized in banruptcy law related legal issues', 280, 17, null),
(29, 'I am specialized in immigration law related legal issues', 200, 6, null),
(34, 'I am specialized in criminal law related legal issues', 100, 5, 'https://ca.slack-edge.com/T2G8TE2E5-U0225NE0ER0-5901a945ff11-512'),
(32, 'I am specialized in criminal law related legal issues', 130, 7, null),
(25, 'I am specialized in immigration law related legal issues', 175, 8, null),
(33, 'I am specialized in business law related legal issues', 300, 17, null),
(22, 'I am specialized in civil right law related legal issues', 120, 12, null),
(27, 'I am specialized in immigration law related legal issues', 175, 7, null),
(26, 'I am specialized in criminal law related legal issues', 175, 7, null),
(24, 'I am specialized in bankruptcy law related legal issues', 175, 7, null),
(23, 'I am specialized in labor law related legal issues', 175, 7, null),
(31, 'I am specialized in family law related legal issues', 175, 7, null),
(35, 'I am specialized in civil rights law related legal issues', 175, 7, null);



INSERT INTO specialities (name, definition)
VALUES
('Business Law', 'Corporate law involves the formation, dissolution, and all other legal aspects of the administration of corporations. Typical duties of corporate lawyers include mergers, acquisitions, internal reorganization, or disputes between corporations and individuals concerning liability, patents, and compliance with state and federal law, as well as international accords. A legal professional whose sole client is a corporation is generally known as in-house counsel.'),
('Bankruptcy Law', 'Bankruptcy law applies to the insolvency problems of individuals as well as organizations. This type of law issues directly from the Constitution and is in the domain of Federal law, though State laws have an important effect on bankruptcy procedure.'),
('Civil Rights Law', 'Civil rights law aims to balance competing interests between institutions of government on the one hand and individuals or groups of individuals on the other. Lawyers in such practice may work on cases involving discrimination and unfair practices that infringe on rights and liberties such as expression, employment, housing, education, or other entitlements.'),
('Criminal Law', 'Criminal law focuses on behaviors that are sanctioned under criminal code and defined as illegal. Prosecutors and District Attorneys sanction illegal behavior, while criminal defense lawyers represent clients accused of criminal activity. Both prosecution and defense professionals deal with issues of individual liberty, basic rights, and responsibilities. In some Common Law countries other than the U.S., and in most Civil Law countries, the roles of a prosecutor (or procurator) and defense lawyer (or advocate) are separated more clearly into different professional specialties.'),
('Environmental Law', 'Environmental law concerns a multitude of statutes, treaties, regulations, and conventions based in state, federal, or transnational law. Legal professionals practicing in this field may represent government agencies, advocacy organizations, or individuals. Environmental lawyers often focus on cases involving natural resource management, the curbing of pollution, or disputes about land and littoral use. Public health components are increasingly common in the practice of environmental law.'),
('Family Law', 'Family law focuses on legal relations between individuals in the context of the family. Lawyers in this field typically work in smaller firms and specialize in a variety of areas ranging from child welfare, through adoption, to divorce. Child abuse, legitimacy, civil unions, domestic partnerships, and marriages are among the main aspects of family lawyers practice.'),
('Immigration Law', 'Immigration lawyers work with individual clients at all stages of the naturalization process. Other aspects of the profession relate to refugee and asylum seekers, as well as to individuals in the country without legal permission. This field of law varies significantly from country to country. Much of its practice depends on international treaties, bilateral accords, and political conjecture.'),
('Labor Law', 'Labor law is concerned with the relations between workers and their employers on matters ranging from wages and compensation, through harassment, to discrimination based on gender, disability, or age. Labor law often involves collective bargaining and unions. Attorneys in this field may represent individual clients, a union, a government regulatory agency, or an employer.');

INSERT INTO lawyer_speciality (lawyer_id, speciality_id)
VALUES
(1, 1),
(1, 4),
(1, 6),
(2, 1),
(2, 2),
(2, 7),
(2, 8),
(3, 1),
(3, 4),
(3, 6),
(4, 1),
(4, 5),
(5, 2),
(5, 8),
(6, 4),
(6, 1),
(6, 4),
(6, 2),
(6, 6),
(7, 1),
(7, 2),
(8, 3),
(8, 5),
(8, 7),
(9, 1),
(9, 2),
(9, 5),
(9, 8),
(10, 3),
(11, 4),
(12, 6),
(13, 1),
(14, 2),
(15, 7),
(16, 8),
(17, 3),
(18, 4),
(19, 7),
(20, 1),
(21, 5),
(22, 2),
(23, 8),
(24, 4),
(19, 1),
(18, 2),
(17, 3),
(16, 5),
(15, 7),
(14, 1),
(13, 2),
(12, 5),
(15, 8);



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
(10, 'Client'),
(11, 'Client'),
(12, 'Lawyer'),
(13, 'Lawyer'),
(14, 'Client'),
(15, 'Client'),
(16, 'Lawyer'),
(17, 'Client'),
(18, 'Client'),
(19, 'Lawyer'),
(20, 'Lawyer'),
(21, 'Lawyer'),
(22, 'Lawyer'),
(23, 'Lawyer'),
(24, 'Lawyer'),
(25, 'Lawyer'),
(26, 'Lawyer'),
(27, 'Lawyer'),
(28, 'Lawyer'),
(29, 'Lawyer'),
(30, 'Lawyer'),
(31, 'Lawyer'),
(32, 'Lawyer'),
(33, 'Lawyer'),
(34, 'Lawyer'),
(35, 'Lawyer'),
(36, 'Client');


INSERT INTO cases (lawyer_id, client_id, name, date, description)
VALUES
(1, 6, 'Rental dispute with my landlord over having a pet cat', '2020-12-01', 'My name is Fay Fanning, I got into an argument with my landlord recently over my cat Smooj. When I signed the rental contract, the contract did not address anything about tenant owning pets, so I assumed it is okay for me to have a cat. I have been living in this apartment for over a year now, and recently my landlord found out from the neighbours that I have a cat. She said I could either move out this month or get rid of Smooj. Of course getting rid of Smooj is not an option for me, so I want to know if she is allowed to make me move out under this circumstance.Please contact me, if you are experience in handling rental dispute!! Much thanks!!'),
(2, 5, 'Business tax', '2021-01-12', 'My company is being charged for evading payment of over 2 million in taxes. I was not aware of the financial situation of my company, even though I am the sole owner. My best friend Joey handles the financial side of the business, but he recently disappeared. I am looking for a lawyer who can keep me out of jail before I find Joey. Please email me if you are interested in my case, I am not a fan of phone calls. Thanks.'),
(3, 3, 'Police abuse', '2021-04-22', 'I was attacked by a policeman who stopped me on the street last Friday night. She showed me her badge quicky, but I did not get a good look. She then told me give my protein bar to her. She asked me if I have any more protein bars with me. I lied and said no. She did not believe me. I was body searched by her and she took away my 3 other protein bars. She drove away in a police car, I memorized the license. I would like to get compensated for this assult and for my lost. If you are experience in personal injury/assult or police brutality cases,s call me. I amusually on my phone 25/8. Cheers.'),
(5, 4, 'Need help with bankruptcy paperwork', '2021-04-22', 'I am filing for bankrupty, my partner took my pet turtle, my money and left me with nothing. I need someone to help me file for bankruptcy and do not worry, I can pay. Text, only, thanks.'),
(3, 9, 'Looking for a kickass divorce lawyer', '2017-03-16', 'My partner and I are spliting up and I do not want to split our shared property evenly with the guy. I also do not want to share custody of his 25 cats. I need help quick, call me night or day, I do not care. I will pay handsomely if you can get the job done. Man, I cannot live with 12.5 cats.'),
(3, 2, 'Starting my own company, need help with investor contracts', '2019-02-06', 'I recently started my own soap company, and I was approached by investors. I do not much when it comes to legal paperworks and I would like to have a professional to look over the contracts the investor company sent to me to sign. Lawyers with corporate law experience would be preferrable. I might not reply right away, please be patient :)'),
(3, 7, 'I want to patent my iron man suit', '2019-02-06', 'I recently build my own iron man suit, it is super cool and better than the ones in the movies. But my friends mentioned to me that I probably should patent it. I also want to start a business selling these awesome suits, so if you are familiar with business law, that would be great. If not, please check out my instagram account: @MrCreator45903. Like and subscribe! Peace!'),
(3, 7, 'I want to sue my previous employer', '2020-09-18', 'I would like to look into suing my previous employer. I worked for him for more than a year and he has a bad temper. I was facing verbal abuse almost every week since my sixth month there. He asked me questions like: Are you really that dumb? I have recording of him saying those kind of things to me. I would like to get some legal advice on pressing charges against him. Please contact me.'),
(8, 5, 'looking for a civil right lawyer', '2020-06-28', 'I found out I was paid less than my colleague who has the same job postition, need some professional advice as to how to handle this injustice!!'),
(2, 8, 'Need helping bailing out my son', '2021-03-18', 'My son was been charged of theft, and this is his third offence. The judge has set the bail amount so high, I will not be able to pay. Need help quick! My son will not survive long in a holding cell.'),
(2, 5, 'Paperwork for my will', '2020-09-08', 'Rich and old, drafting my will, help needed to make it legitimate. My secretary will be in contact with you first if you are interested for the job.'),
(6, 3, 'want a consultation on my immigration status', '2020-10-11', 'Having some toruble getting my PR, would like some help with the paperwork. Thx'),


(null, 11, 'Need help getting restraining order against my ex partner', '2020-02-11', 'My ex partner wants to have control over everyone and is completely uncooperative, often engaging in conflict and saying inappropriate things to me and my family in front of the children and our baby turtle. We went to trail and the Honourable Judge determined that baby turtle should reside with the father and that the mother should have supervised access to her. The judge completely took away all guardianship and decision making rights from my ex partner. Now my ex partner is threatening to break into my new place and kidnap my baby tutle. Knowing her for 15 years, I believe she is truly capable of doing just that. She also lawyered up and is taking me to court for another around of custody fight. I need professional help getting this crazy out of our lives. Please contact me on this app, thanks.'),
(null, 9, 'Immigration lawyer wanted', '2020-10-11', 'I want to sue the Canadian government for delaying my PR.'),
(null, 8, 'Looking for a lawyer who specialize in business law', '2020-03-11', 'Me and 6 of my close friends started our own delivery company two years ago. Because we have a close personal relationship with each other, we did not have a founder agreement for our company. Now two of the founding friends want to leave the company and sell their share. However there are several terms we are finding trouble in reaching to an agreement. The absence of a founder agreement is making it harder to settle. If you are experienced with this type of business legal situation please contact me!'),
(null, 7, 'Lawn dispute with my neighbour', '2020-02-15', 'My neighbour damaged my lawn because he was scared by my Halloween decoration on my lawn. I would like to know how to file a charge and '),
(null, 6, 'privacy issue with my website, clients are taking me to court', '2020-05-13', 'A website I built myself recently for people who like quirky toys, but some clients have been complaining of a leak of private information after signing up for my website. I need professional help to get me out of this mess'),
(null, 5, 'My daughter stole my dog', '2020-11-10', 'My adult daughter took our family dog with her when she moved out of my house. I would like to look into disowning my daughter and getting my dog back'),
(null, 4, 'Getting married, need help with prenup', '2018-09-08', 'I plan to get married next year and we would like a lawyer to help us with prenup'),
(null, 3, 'Selling my company having stock share dispute with my business partner', '2020-08-12', 'I had my own business for the past 20 years with my business partner. Now I want to sell my share of the business and retire. But we are arguing over how much share I have. I believ I own 50% but my partner said it is less than that. I would like to talk with a profession and understand my options better.'),
(null, 2, 'Want a consultation on my immigration status', '2020-10-11', 'Having some toruble getting my PR, would like some help with the paperwork. Thx'),
(null, 1, 'Looking for labor law lawyer', '2020-07-10', 'I was descriminated at work due to my sexual orientation. I would like to talk to a lawyer more about it.'),
(null, 5, 'Looking for a civil right lawyer', '2020-01-11', 'My community is struggling to get recognized and treated equally at work. I would like to talk to a professional about what steps are available for us'),
(null, 2, 'Want a consultation about my case', '2020-02-11', 'I have a case that I rather not go into detail on a public page, but if you are an expert in criminal law. Contact me.'),
(null, 7, 'Professional help needed for paperwork', '2020-04-24', 'I am looking for legal help on some confidential paperwork related to business law. Please contact if you are a business law expert.'),

(null, 10, 'Want a consultation on my will', '2020-09-11', 'I am deep in debt and I want to consultate with a lawyer about my will to see figure out what I could leave behind for my fam. Do not worry I still have enough to pay for consultation fees.'),
(null, 3, 'Labor law lawyer needed', '2021-01-11', 'Had a serious dispute with my previous boss and I believe I am entitled to some compensation. Please contact through messages.'),
(null, 10, 'Consultation with a criminal lawyer', '2018-02-11', 'I was in trouble with the authority a while ago and I have heard from reliabel sources recently that they might be charging me soon. I would like to talk in detail in private.'),
(null, 8, 'Legal dispute between family members', '2020-10-11', 'legal dispute between family members and some of them want to take it to court. I am so down to go down that path now that I have two restraining order on my back. I am not the crazy party I promise.'),
(null, 1, 'Prenup related legal issue', '2019-02-02', 'Fairly private issue I would rather not display it on a public page. However I do need some legal help related to marriage law and family law. Please contact if you are an export. Thank you.'),
(null, 2, 'Question about an assult that happened 20 years ago', '2019-01-03', 'During my therapy sessions I started to recall some memory related to an old crime that happened 20 years ago. I would like to know more about the legal procedure if I were to take action on these new information I have gained recently. You must have 10+ years of experience in criminal law. Please do not contact me if you are not a seasoned lawyer in criminal law. Thank you.'),
(null, 4, 'Dispute with my book publisher over the advertisement of my book', '2017-12-11', 'I think my publisher is doing false advertisement of my book. However I might have signed an unfair contract waving my right to have my say in this. Please contact if you believe you could help me out.'),
(null, 4, 'Bankruptcy lawyer needed', '2019-11-11', 'would like to have a consultation with a business law lawyer about closing my business and some finanical burdens.'),
(null, 7, 'In search of a civil rights lawyer', '2020-03-03', 'Having some toruble related to civil rights (I think?). contact me if you are interested and you do not have be a civil rights lawyer to handle the case (I think?). Cheers.'),
(null, 3, 'Want a consultation on my immigration status', '2019-04-11', 'Having some toruble getting my PR, would like some help with the paperwork. Thx'),

(null, 3, 'Filing for bankruptcy', '2019-04-11', 'Closing down our family business and need some help filing for bankruptcy'),
(null, 2, 'Professional help needed navigating through bankruptch', '2017-05-11', 'looking for a bankruptcy and insolvenc laweyr to represent me during this difficult time.'),
(null, 6, 'Commercial proposal and restructuring', '2021-02-11', 'In serious financial blackhole and need help quick.'),
(null, 9, 'Priority dispute', '2019-04-11', 'I am concerned about the priority of debts I owed in my ongoing bankruptcy. Need assistant!!'),
(null, 8, 'Discharge applications', '2020-03-11', 'I know a good discharge application would allow a debt to be completely discharged. My application was opposed by the holder of the debt and I am looking for someone to represent me on this to get it passed. Please contact through messaging.'),

(null, 11, 'Civil rights lawyer', '2019-04-11', 'not sure if mine is a civil rights issue to be honest, but the situtaion is that I am being descriminated at work because of my eye color?'),
(null, 10, 'I would like to sue the RCMP for discrimination', '2020-04-11', 'I was assulted last weekend and I went to RCMP to file a report. I was treated like a sub-human there by the authority figures. I could provide more details with evidence if you contact me in private. Thanks!'),

(null, 10, 'The new company that just moved into our neighbourhood is polluting our city lake', '2020-05-11', 'looking for a super experienced environmental lawyer. The case invovles highly profiled individuals.'),
(null, 9, 'Want to push city council on environmental bills', '2020-06-13', 'could use some professional opinion and guidance on this.'),
(null, 8, 'How to build my own environmental organization and what are some legal things I need to look out for', '2020-10-11', 'like the title mentioned. If you are an environmental lawyer, please give me a shout.'),

(null, 3, 'Need help moving to China', '2020-09-11', 'I filed legal documents to go work in China as a foreginer. My plan is to work there for a few years and settle down and get the Chinese citizenship. But I was told by friends that is really hard to do. I would like to consult an export on that.'),
(null, 3, 'Immigration Status Unknown', '2020-02-11', 'My work visa will expire pretty soon. I have filed to get my PR months ago and have not yet heard back. I think I want some consultation. I would like to know the chance of me being forced to leave the country, and how to prevent that.'),
(null, 3, 'Please contact if you are an immigration lawyer', '2020-07-11', 'legal work, paper work, all that fun stuff. I pay well.'),

(null, 3, 'Labor law related dispute at work', '2020-04-11', 'I was injured at work and yet did not get compensation for it. Need a professional to look into this for me.'),
(null, 3, 'Mistreatement at work', '2020-09-23', 'unfair treatment at work for many years. Would like to go down the legal path on this and get back what should be mine.'),
(null, 3, 'Looking for labor law expert', '2020-12-03', 'please contact me and I will tell you more in details in private.');




INSERT INTO case_speciality (case_id, speciality_id)
VALUES
(1, 3),
(2, 1),
(3, 3),
(4, 2),
(5, 6),
(6, 1),
(7, 3),
(8, 8),
(9, 3),
(10, 4),
(11, 6),
(12, 6),
(13, 7),
(14, 1),
(15, 5),
(16, 1),
(17, 6),
(18, 6),
(19, 1),
(20, 7),
(21, 1),
(22, 3),
(23, 4),
(24, 1),
(25, 1),
(26, 6),
(27, 8),
(28, 4),
(29, 6),
(30, 4),
(31, 4),
(32, 1),
(33, 2),
(34, 3),
(35, 7),

(36, 2),
(37, 2),
(38, 2),
(39, 2),
(40, 2),

(41, 3),
(42, 3),

(43, 5),
(44, 5),
(45, 5),

(46, 7),
(47, 7),
(48, 7),

(49, 8),
(50, 8),
(51, 8);









INSERT INTO reviews (lawyer_id, client_id, date, content)
VALUES
(1, 1, '2021-01-04', 'Anderson is very helpful and compassionate in helping us dealing with our family issues'),
(2, 4, '2021-03-24', 'very professional and knowledgable'),
(3, 3, '2021-01-22', 'Ham is very experienced and resourceful. He is also super quick in terms of replying. He spent a long time trying to get me understand the legal details and that really helped. I would recommend him to other clients'),
(3, 2, '2021-01-22', 'Ham got me out of jail, need I say more?'),
(3, 1, '2021-06-13', 'Ham has a much more reasonable consultation price compare to all the other lawyers I have dealt with. He is super experienced in business law as well. If you have a tight budget and you want to get the right help, go with Ham!'),
(3, 5, '2017-07-07', 'I successfully sued my previous workplace and received my rightful compensation because of Ham.');

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
(10, 'Toronto'),
(11, 'Vancouver'),
(12, 'Saskatoon'),
(13, 'Edmonton'),
(14, 'Calgary'),
(15, 'Calgary'),
(16, 'Saskatoon'),
(17, 'Edmonton'),
(18, 'Victoria'),
(19, 'Vancouver'),
(20, 'Toronto'),
(21, 'Vancouver'),
(22, 'Victoria'),
(23, 'Edmonton'),
(24, 'Calgary'),
(25, 'Victoria'),
(26, 'Vancouver'),
(27, 'Toronto'),
(28, 'Vancouver'),
(29, 'Edmonton'),
(30, 'Calgary'),
(31, 'Edmonton'),
(32, 'Vancouver'),
(33, 'Victoria'),
(34, 'Vancouver'),
(35, 'Toronto'),
(36, 'Vancouver');