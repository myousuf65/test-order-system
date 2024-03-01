CREATE TABLE CUSTOMER_SPECIMEN(
  last_name varchar(255),
  first_name varchar(255),
  customer_id INTEGER UNIQUE,
  Chinese_name varchar(255),
  id_number varchar(255) UNIQUE,
  passport_number varchar(255) UNIQUE,
  sex enum('M', 'F'),
  date_of_birth INTEGER,
  email varchar(255),
  phone varchar(255),
  ethnicity varchar(255),
  height FLOAT,
  weight FLOAT,
  city varchar(255),
  country varchar(255),
  postal_address varchar(255),
  postal_code INTEGER,
  order_id INTEGER,
  lab_id INTEGER,
  reception_date varchar(255),
  collection_time INTEGER,
  collection_date DATE,
  specimen_type varchar(255),
  specimen_origin varchar(255),
  is_specimen_rejected BOOLEAN,
  previous_id INTEGER,
  panel_code varchar(255),
  panel_name varchar(255),
  is_tailormade BOOLEAN,
  test_performed_by varchar(255),
  clinic_name varchar(255),
  doctor_name varchar(255),
  concerned_issues varchar(255),
  S_quality varchar(255),
  emotion_problem varchar(255),
  project_code varchar(255),
  project_name varchar(255),
  clinic_trial_code varchar(255),
  clinic_trial_time_point varchar(255),
  is_free_sample BOOLEAN,
  extraction_date INTEGER,
  test_date varchar(255),
  report_ready_date varchar(255),
  remarks varchar(255)
);