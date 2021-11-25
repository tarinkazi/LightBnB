INSERT INTO users (
    name, email, password) 
    VALUES (
    'Dolly Sanders', 'tristanj@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
    INSERT INTO users (
    name, email, password) 
    VALUES (
    'java Harrison', 'allisonjaon@mail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
    INSERT INTO users (
    name, email, password) 
    VALUES (
    'Lzx Jefferson', 'asherpoe@gmx.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
    INSERT INTO users (
    name, email, password) 
    VALUES (
    'Daleia Coleman', 'michaelasgray@mail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
    INSERT INTO users (
    name, email, password) 
    VALUES (
    'Alejasndro Osbosdrne', 'ariaatkinsdson@outlook.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');

    INSERT INTO properties (
    title, description, owner_id, cover_photo_url, thumbnail_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, active, province, city, country, street, post_code) 
    VALUES (
    'Present television', 'Description', 5, 'https://images.pexels.com/photos/533416/pexels-photo-533416.jpeg', 'https://images.pexels.com/photos/533416/pexels-photo-533416.jpeg?auto=compress&cs=tinysrgb&h=350', 53062, 4, 5, 6, true, 'British Columbia', 'Vancouver', 'Canada', '1605 Jueta Glen', '32104');
    INSERT INTO properties (
    title, description, owner_id, cover_photo_url, thumbnail_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, active, province, city, country, street, post_code) 
    VALUES (
    'Order sign', 'Description', 8, 'https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg', 'https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&h=350', 79552, 9, 3, 8, true, 'Newfoundland And Labrador', 'St. Johns', 'Canada', '174 Hutva Circle', '90388');
    

    INSERT INTO reservations (
    id, guest_id, property_id, start_date, end_date) 
    VALUES (
    1013401, 390, 823, '2020-09-18', '2020-09-27');
    INSERT INTO reservations (
    id, guest_id, property_id, start_date, end_date) 
    VALUES (
    1013402, 776, 701, '2017-01-09', '2017-02-01');

    INSERT INTO property_reviews (
    guest_id, property_id, reservation_id, rating, message) 
    VALUES (
    703, 779, 1019148, 4, 'Wococ fadcakila gaco noh ijuzevi cuzed kejajiz ize kal jenuhi geujgo lame osiozices vovub lusmod le.');
    INSERT INTO property_reviews (
    guest_id, property_id, reservation_id, rating, message) 
    VALUES (
    657, 64, 1012774, 4, 'Tonguj helfigvum aldobif ufiosroc gaiku latomto ewidegihu pilgalu ci so kafluf uwu vege towehsi nil du ru.');