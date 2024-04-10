-- Criando a tabela 'buildings'
CREATE TABLE IF NOT EXISTS buildings (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    tenant_id INTEGER,
    owner_id INTEGER,
    address TEXT
);
-- Criando a tabela 'persons'
CREATE TABLE IF NOT EXISTS persons (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    birthDate TEXT NOT NULL,
    cpf TEXT NOT NULL
);
-- Criando a tabela 'deals'
CREATE TABLE IF NOT EXISTS deals (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    person_id INTEGER,
    building_id INTEGER,
    FOREIGN KEY (person_id) REFERENCES persons(id),
    FOREIGN KEY (building_id) REFERENCES buildings(id)
);