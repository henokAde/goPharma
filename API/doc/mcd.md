PHARMACY: name, email, password, phone_number, is_open, is_premium, address_name, address_number, city, country, zip_code, profile_picture
has, 01 BUSINESS_HOURS, 0N PHARMACY
:
BUSINESS_HOURS: day_of_week, open_time, close_time

receive, 11 ORDER, 0N PHARMACY

USER: firstname, lastname, email, password, phone_number, address_name, address_number, city, country, zip_code, role
make, 11 ORDER, 0N USER
:
ORDER : number, date, prescription, insurance, vital_card, comments, recovery_time
is, 0N STATUS, 11 ORDER
STATUS: label