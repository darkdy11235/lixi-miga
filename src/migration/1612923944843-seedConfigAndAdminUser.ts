import { query } from "express";
import {MigrationInterface, QueryRunner} from "typeorm";

export class seedConfigAndAdminUser1612923944843 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("insert into user(name, email, role, createdAt, password) " + 
                                "values ('Ho Van Vy', 'hovanvydut@gmail.com', 'ADMIN', now(), '$2b$10$Ej957EhTnZrKdQqs3e4speoxq2bOVphYCAuvpZLA72KM/R69xEEK2')");

        await queryRunner.query("insert into gift(value, max_quantity) values (20, 1), (10, 3), (5, 6), (2, 10), (0, 2147483647)");

        await queryRunner.query(`insert into config_app (my_key, my_value, data_type) values("WIN_RATE", "8.0", "float"), ("MAX_DRAW_EACH_PERSON", "10", "int")`);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
