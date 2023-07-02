CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

create table if not exists marcas (
	"id" uuid primary key DEFAULT uuid_generate_v4 (),
    "nome" varchar(100) not null,
	"nacionalidade" varchar(20) not null,
	"criado" timestamp not null default current_timestamp,
    "atualizado" timestamp not null default current_timestamp
);

create table if not exists veiculos (
	"id" uuid primary key DEFAULT uuid_generate_v4 (),
    "veiculo" varchar(20) not null,
	"marca_id" uuid not null,
	"ano" varchar(4) not null,
	"cor" varchar(20) not null,
	"descricao" text,
    "vendido" boolean default false,
	"criado" timestamp not null default current_timestamp,
    "atualizado" timestamp not null default current_timestamp,

	constraint fk_marca foreign key (marca_id) 
	references marcas(id)
);

SELECT pg_sleep(5);

insert into marcas (nome, nacionalidade) 
values
('ALFA ROMEO','Italy'),
('Aston Martin Lagonda Ltd','UK'),
('Audi','Germany'),
('BMW','Germany'),
('Chevrolet','USA'),
('Dodge','USA'),
('Ferrari','Italy'),
('Honda','Japan'),
('Jaguar','UK'),
('Lamborghini','Italy'),
('MAZDA','Japan'),
('McLaren','UK'),
('Mercedes-Benz','Germany'),
('NISSAN','Japan'),
('Pagani Automobili S.p.A.','Italy'),
('Porsche','Germany'),
('FIAT','Italy'),
('Mini','Germany'),
('SCION','USA'),
('Subaru','Japan'),
('Bentley','UK'),
('Buick','USA'),
('Ford','USA'),
('HYUNDAI MOTOR COMPANY', 'South Korea'),
('LEXUS','Japan'),
('MASERATI','Italy'),
('Roush','USA'),
('Volkswagen','Germany'),
('Acura','Japan'),
('Cadillac','USA'),
('INFINITI','Hong Kong'), 
('KIA MOTORS CORPORATION', 'South Korea'),
('Mitsubishi Motors Corporation', 'Japan'),
('Rolls-Royce Motor Cars Limited', 'UK'), 
('TOYOTA','Japan'),
('Volvo','Sweden'),
('Chrysler','USA'),
('Lincoln','USA'),
('GMC','USA'),
('RAM','USA'),
('CHEVROLET','USA'),
('Jeep','USA'),
('Land Rover','UK')

-- insert into veiculos(veiculo, marca, ano, cor, descricao, criado, atualizado)
-- values ('A3','Audi','2019','PRETO','Amaçado no parachoque','2022-05-20 15:00:10-09','2022-05-20 15:00:10-09');

-- insert into veiculos(veiculo, marca, ano, cor, descricao, criado, atualizado)
-- values ('A4','Audi','2016','BRANCO','Amaçado no parachoque','2022-06-20 15:00:10-09','2022-06-20 15:00:10-09');