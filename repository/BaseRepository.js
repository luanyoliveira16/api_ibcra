import pool from './db.js'

class BaseRepository {
    async getAll(table, columnsArray) {
        try {
            const results = (await pool.query(`SELECT ${columnsArray.join()} FROM ${table}`))[0];
            return results;
        } catch (error) {
            throw error;
        }
    }

    async getMember(table, id) {
        try {
            const queryText = `SELECT * FROM ${table} WHERE id = ?`;
            const result = (await pool.query(queryText, [id]))[0];
            return result;
        } catch (error) {
            throw error;
        }
    }

    async insertMember(table, columns, valuesArray) {
    try {
        // Verificar se todos os valores necessários estão preenchidos
        for (let i = 0; i < columns.length; i++) {
            if (valuesArray[i] === null || valuesArray[i] === undefined) {
                throw new Error(`Column '${columns[i]}' cannot be null or undefined.`);
            }
        }

        // Realizar a inserção no banco de dados
        await super.insertMember(table, columns, valuesArray);
    } catch (error) {
        throw error;
    }
}


    // async insertMember(table, columnsArray, valuesArray) {
    //     let client;

    //     try {
    //         client = await pool.getConnection();

    //         // Criação de placeholders (?)
    //         const placeholders = Array.from({ length: columnsArray.length }, (_, i) => '?').join(', ');

    //         // Monta a string da query
    //         const queryText = `INSERT INTO ${table} (${columnsArray.join(', ')}) VALUES (${placeholders})`;

    //         // Inicia a transação
    //         await client.beginTransaction();

    //         // Executa a query de inserção
    //         await client.query(queryText, valuesArray);

    //         // Confirma a transação
    //         await client.commit();

    //     } catch (error) {
    //         if (client) {
    //             // Reverte a transação em caso de erro
    //             await client.rollback();
    //         }
    //         throw error;

    //     } finally {
    //         if (client) {
    //             // Libera a conexão de volta ao pool
    //             client.release();
    //         }
    //     }
    // }

    async deleteMember(table, id) {
        let client;

        try {
            client = await pool.getConnection();

            // Monta a string da query
            const queryText = `DELETE FROM ${table} WHERE id = ?`;

            // Inicia a transação
            await client.beginTransaction();

            // Executa a query de deleção
            await client.query(queryText, [id]);

            // Confirma a transação
            await client.commit();

        } catch (error) {
            if (client) {
                // Reverte a transação em caso de erro
                await client.rollback();
            }
            throw error;

        } finally {
            if (client) {
                // Libera a conexão de volta ao pool
                client.release();
            }
        }
    }

    async updateMember(table, id, data) {
        let client;

        try {
            client = await pool.getConnection();

            // Construção da string de SET para os campos a serem atualizados
            const fields = Object.keys(data).map((field) => `${field} = ?`).join(', ');
            const queryText = `UPDATE ${table} SET ${fields} WHERE id = ?`;

            // Preparação dos valores para a query
            const values = [...Object.values(data), id];

            // Inicia a transação
            await client.beginTransaction();

            // Executa a query de atualização
            const result = await client.query(queryText, values);

            // Confirma a transação
            await client.commit();

            return result;

        } catch (error) {
            if (client) {
                // Reverte a transação em caso de erro
                await client.rollback();
            }
            throw error;

        } finally {
            if (client) {
                // Libera a conexão de volta ao pool
                client.release();
            }
        }
    }
}

export default BaseRepository;
