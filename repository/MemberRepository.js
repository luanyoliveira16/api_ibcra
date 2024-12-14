import BaseRepository from "./BaseRepository.js";

class MemberRepository extends BaseRepository {
    async getAll() {
        try {
            const results = await super.getAll('membros', ['id', 'nome', 'data_nascimento', 'telefone', 'endereco', 'data_entrada', 'funcao', 'email', 'data_cadastro', 'foto']);
            return results;
        } catch (error) {
            throw error;
        }
    }

    async getMember(id) {
        try {
            const result = await super.getMember('membros', id);
            return result;
        } catch (error) {
            throw error;
        }
    }

    async insertMember(valuesArray) {
        try {
            await super.insertMember('membros', ['nome', 'data_nascimento', 'telefone', 'endereco', 'data_entrada', 'funcao', 'email', 'data_cadastro', 'foto'], valuesArray);
        } catch (error) {
            throw error;
        }
    }

    async updateMember(id, data) {
        try {
            const result = await super.updateMember('membros', id, data);
            return result;
        } catch (error) {
            throw error;
        }
    }

    async deleteMember(id) {
        try {
            await super.deleteMember('membros', id);
        } catch (error) {
            throw error;
        }
    }
}

export default MemberRepository;
