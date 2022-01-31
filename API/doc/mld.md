PHARMACY ( id, name, email, password, phone_number, is_open, is_premium, address_name, address_number, city, country, zip_code, profile_picture )

BUSINESS_HOURS ( id, day_of_week, open_time, close_time, #pharmacy(id) )

USER (id, firstname, lastname, email, password, phone_number, address_name, address_number, city, country, zip_code, role)

ORDER (id, number, created_at, prescription, insurance, vital_card, comments, recovery_time, #status(id), #user(id), #pharmacy(id))

STATUS(id, label)