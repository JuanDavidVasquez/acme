CREATE DATABASE IF NOT EXISTS acme;
USE acme;


CREATE TABLE propietarios(
    id                  int(255) auto_increment not null,
    numero_cedula       VARCHAR(250)    NOT NULL,
    primer_nombre       VARCHAR(50)     NOT NULL,
    segundo_nombre      VARCHAR(50),
    apellidos           VARCHAR(100)    NOT NULL,
    direccion           VARCHAR(200)    NOT NULL,
    telefono            VARCHAR(20)     NOT NULL,
    ciudad              VARCHAR(50)     NOT NULL,
    created_at          datetime DEFAULT NULL,
    update_at           datetime DEFAULT NULL,
    CONSTRAINT pk_users PRIMARY KEY(id)
)ENGINE=InnoDb;

CREATE TABLE conductors(
    id                  int(255) auto_increment not null,
    numero_cedula       VARCHAR(250)    NOT NULL,
    primer_nombre       VARCHAR(50)     NOT NULL,
    segundo_nombre      VARCHAR(50),
    apellidos           VARCHAR(100)    NOT NULL,
    direccion           VARCHAR(200)    NOT NULL,
    telefono            VARCHAR(20)     NOT NULL,
    ciudad              VARCHAR(50)     NOT NULL,
    created_at          datetime DEFAULT NULL,
    update_at           datetime DEFAULT NULL,
    CONSTRAINT pk_users PRIMARY KEY(id)
)ENGINE=InnoDb;

CREATE TABLE vehiculos(
    id                      int(255) auto_increment not null,
    propietario_id          int(255) NOT NULL,
    conductor_id            int(255) NOT NULL,
    placa                   varchar(255) NOT NULL,
    color                   varchar(255) NOT NULL,
    marca                   varchar(255) NOT NULL,
    tipo_vehiculo           varchar(255),
    created_at          datetime DEFAULT NULL,
    update_at           datetime DEFAULT NULL,
    CONSTRAINT pk_posts PRIMARY KEY(id),
    CONSTRAINT fk_post_propietario FOREIGN KEY(propietario_id) REFERENCES propietarios(id),
    CONSTRAINT fk_conductor FOREIGN KEY(conductor_id) REFERENCES conductors(id)
)ENGINE=InnoDb;
